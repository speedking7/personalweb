/**
 * 飞书 API 代理服务器
 * 用于安全地代理飞书 API 请求，避免暴露 App Secret
 */

import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import NodeCache from 'node-cache';

// 飞书 API 配置
const FEISHU_APP_ID = process.env.FEISHU_APP_ID || '';
const FEISHU_APP_SECRET = process.env.FEISHU_APP_SECRET || '';

// 缓存配置（10分钟过期）
const cache = new NodeCache({ stdTTL: 600, checkperiod: 120 });

interface TenantAccessToken {
  tenant_access_token: string;
  expire: number;
}

/**
 * 获取 tenant_access_token
 */
async function getTenantAccessToken(): Promise<TenantAccessToken> {
  const cacheKey = 'tenant_access_token';
  const cached = cache.get<TenantAccessToken>(cacheKey);
  
  if (cached) {
    return cached;
  }
  
  const response = await fetch('https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      app_id: FEISHU_APP_ID,
      app_secret: FEISHU_APP_SECRET,
    }),
  });
  
  if (!response.ok) {
    throw new Error(`Failed to get tenant access token: ${response.statusText}`);
  }
  
  const data = await response.json();
  
  if (data.code !== 0) {
    throw new Error(`Feishu API error: ${data.msg}`);
  }
  
  const token: TenantAccessToken = {
    tenant_access_token: data.tenant_access_token,
    expire: data.expire,
  };
  
  cache.set(cacheKey, token, data.expire - 300); // 提前5分钟过期
  
  return token;
}

/**
 * 创建 Express 应用
 */
const app = express();
const PORT = process.env.PORT || 3001;

// 中间件
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  credentials: true,
}));
app.use(express.json());

/**
 * 认证接口 - 获取 tenant_access_token
 */
app.post('/api/feishu/auth', async (req, res) => {
  try {
    const token = await getTenantAccessToken();
    res.json(token);
  } catch (error) {
    console.error('Auth error:', error);
    res.status(500).json({ error: 'Failed to authenticate with Feishu' });
  }
});

/**
 * 代理飞书 Wiki API
 */
app.get('/api/feishu/wiki/:wikiToken/nodes', async (req, res) => {
  try {
    const { wikiToken } = req.params;
    const { parent_node_token } = req.query;
    const token = await getTenantAccessToken();
    
    let url = `https://open.feishu.cn/open-apis/wiki/v2/spaces/${wikiToken}/nodes`;
    if (parent_node_token) {
      url += `?parent_node_token=${parent_node_token}`;
    }
    
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${token.tenant_access_token}`,
      },
    });
    
    if (!response.ok) {
      throw new Error(`Feishu API error: ${response.statusText}`);
    }
    
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Wiki nodes error:', error);
    res.status(500).json({ error: 'Failed to fetch wiki nodes' });
  }
});

/**
 * 代理飞书 Docx API - 获取文档原始内容
 */
app.get('/api/feishu/docx/:docToken/raw', async (req, res) => {
  try {
    const { docToken } = req.params;
    const token = await getTenantAccessToken();
    
    const response = await fetch(
      `https://open.feishu.cn/open-apis/docx/v1/documents/${docToken}/raw_content`,
      {
        headers: {
          'Authorization': `Bearer ${token.tenant_access_token}`,
        },
      }
    );
    
    if (!response.ok) {
      throw new Error(`Feishu API error: ${response.statusText}`);
    }
    
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Docx raw error:', error);
    res.status(500).json({ error: 'Failed to fetch document content' });
  }
});

/**
 * 代理飞书 Docx API - 获取文档块
 */
app.get('/api/feishu/docx/:docToken/blocks', async (req, res) => {
  try {
    const { docToken } = req.params;
    const token = await getTenantAccessToken();
    
    const response = await fetch(
      `https://open.feishu.cn/open-apis/docx/v1/documents/${docToken}/blocks`,
      {
        headers: {
          'Authorization': `Bearer ${token.tenant_access_token}`,
        },
      }
    );
    
    if (!response.ok) {
      throw new Error(`Feishu API error: ${response.statusText}`);
    }
    
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Docx blocks error:', error);
    res.status(500).json({ error: 'Failed to fetch document blocks' });
  }
});

/**
 * 清除缓存
 */
app.post('/api/feishu/cache/clear', (req, res) => {
  cache.flushAll();
  res.json({ success: true });
});

/**
 * 健康检查
 */
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`Feishu proxy server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
});

export default app;