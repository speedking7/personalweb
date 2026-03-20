#!/usr/bin/env node
/**
 * 飞书博客系统测试脚本
 */

const FEISHU_APP_ID = 'cli_a92d55a1c4f81cee';
const FEISHU_APP_SECRET = 'N9sUeDV0RXnXg0Li8M204fMt85UQ5WIF';
const WIKI_TOKEN = 'Z2lkwg5sSiMeUAkeFaVcr4L5nRc';
const BLOG_FOLDER_TOKEN = 'DIdZwBHFBiWix9khMfpclewDnBd';

console.log('=== 飞书博客系统测试 ===\n');

async function getTenantAccessToken() {
  console.log('1. 测试飞书 API 连接...');
  
  const response = await fetch('https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      app_id: FEISHU_APP_ID,
      app_secret: FEISHU_APP_SECRET,
    }),
  });
  
  const data = await response.json();
  
  if (data.code !== 0) {
    console.error('❌ 认证失败:', data.msg);
    return null;
  }
  
  console.log('✅ 认证成功，Token 获取成功\n');
  return data.tenant_access_token;
}

async function getWikiNodes(token) {
  console.log('2. 测试知识库节点获取...');
  
  const url = `https://open.feishu.cn/open-apis/wiki/v2/spaces/${WIKI_TOKEN}/nodes?parent_node_token=${BLOG_FOLDER_TOKEN}`;
  
  const response = await fetch(url, {
    headers: { 'Authorization': `Bearer ${token}` },
  });
  
  const data = await response.json();
  
  if (data.code !== 0) {
    console.error('❌ 获取知识库节点失败:', data.msg);
    return [];
  }
  
  const items = data.data?.items || [];
  console.log(`✅ 找到 ${items.length} 个节点\n`);
  
  return items;
}

async function getDocumentContent(token, docToken) {
  const url = `https://open.feishu.cn/open-apis/docx/v1/documents/${docToken}/raw_content`;
  
  const response = await fetch(url, {
    headers: { 'Authorization': `Bearer ${token}` },
  });
  
  const data = await response.json();
  
  if (data.code !== 0) {
    return null;
  }
  
  return data.data?.content || '';
}

async function main() {
  try {
    // 1. 获取 Token
    const token = await getTenantAccessToken();
    if (!token) {
      process.exit(1);
    }
    
    // 2. 获取知识库节点
    const nodes = await getWikiNodes(token);
    
    // 3. 显示博客文章列表
    console.log('3. 博客文章列表:');
    console.log('─'.repeat(60));
    
    for (const node of nodes) {
      if (node.obj_type !== 'docx') continue;
      
      console.log(`\n📄 ${node.title}`);
      console.log(`   类型: ${node.obj_type}`);
      console.log(`   Token: ${node.obj_token}`);
      
      // 获取文档内容（只显示前 100 个字符）
      const content = await getDocumentContent(token, node.obj_token);
      if (content) {
        const preview = content.substring(0, 100).replace(/\n/g, ' ');
        console.log(`   预览: ${preview}...`);
      }
    }
    
    console.log('\n' + '─'.repeat(60));
    console.log(`\n✅ 测试完成！共找到 ${nodes.filter(n => n.obj_type === 'docx').length} 篇博客文章`);
    
  } catch (error) {
    console.error('\n❌ 测试失败:', error.message);
    process.exit(1);
  }
}

main();