import { useState, useEffect } from 'react';
import { Send, MessageCircle, Reply } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { messages as initialMessages, type Message } from '@/data/messages';

const emojis = ['👍', '❤️', '😊', '🎉', '👏', '🔥', '💯', '🌟'];

export function Guestbook() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [nickname, setNickname] = useState('');
  const [content, setContent] = useState('');
  const [replyTo, setReplyTo] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nickname.trim() || !content.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      nickname: nickname.trim(),
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${nickname}`,
      content: content.trim(),
      date: new Date().toLocaleString('zh-CN', {
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    setMessages([newMessage, ...messages]);
    setNickname('');
    setContent('');
  };

  const handleReply = (messageId: string) => {
    if (!replyContent.trim()) return;

    setMessages((prev) =>
      prev.map((msg) => {
        if (msg.id === messageId) {
          return {
            ...msg,
            replies: [
              ...(msg.replies || []),
              {
                id: Date.now().toString(),
                nickname: '瀛同学',
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=chenmy',
                content: replyContent.trim(),
                date: new Date().toLocaleString('zh-CN', {
                  month: '2-digit',
                  day: '2-digit',
                  hour: '2-digit',
                  minute: '2-digit',
                }),
              },
            ],
          };
        }
        return msg;
      })
    );

    setReplyTo(null);
    setReplyContent('');
  };

  const addEmoji = (emoji: string) => {
    setContent((prev) => prev + emoji);
  };

  return (
    <div className="min-h-screen bg-[#f0efe9] pt-24 pb-16">
      <div className="max-w-[800px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-medium text-[#1a1a1a] mb-4">
            留言板
          </h1>
          <p className="text-[#6b6b6b]">欢迎留言交流，分享你的想法</p>
        </div>

        {/* Message Form */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <Input
                type="text"
                placeholder="你的昵称"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                className="h-11 rounded-lg border-[#e5e5e5] focus:border-[#1a1a1a]"
              />
            </div>
            <div className="mb-4">
              <Textarea
                placeholder="写下你的留言..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={4}
                className="rounded-lg border-[#e5e5e5] focus:border-[#1a1a1a] resize-none"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-1">
                {emojis.map((emoji) => (
                  <button
                    key={emoji}
                    type="button"
                    onClick={() => addEmoji(emoji)}
                    className="w-8 h-8 flex items-center justify-center hover:bg-[#f0f0f0] rounded-lg transition-colors"
                  >
                    {emoji}
                  </button>
                ))}
              </div>
              <Button
                type="submit"
                disabled={!nickname.trim() || !content.trim()}
                className="bg-[#1a1a1a] hover:bg-[#1a1a1a]/85 text-white px-6 rounded-lg"
              >
                <Send className="w-4 h-4 mr-2" />
                发送留言
              </Button>
            </div>
          </form>
        </div>

        {/* Messages List */}
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex gap-4">
                <img
                  src={message.avatar}
                  alt={message.nickname}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium text-[#1a1a1a]">
                      {message.nickname}
                    </span>
                    <span className="text-[#9ca3af] text-sm">{message.date}</span>
                  </div>
                  <p className="text-[#6b6b6b] mb-3">{message.content}</p>
                  <button
                    onClick={() =>
                      setReplyTo(replyTo === message.id ? null : message.id)
                    }
                    className="flex items-center gap-1 text-[#6b6b6b] text-sm hover:text-[#1a1a1a] transition-colors"
                  >
                    <Reply className="w-4 h-4" />
                    回复
                  </button>

                  {/* Reply Form */}
                  {replyTo === message.id && (
                    <div className="mt-4 p-4 bg-[#f0f0f0] rounded-xl">
                      <Textarea
                        placeholder="写下你的回复..."
                        value={replyContent}
                        onChange={(e) => setReplyContent(e.target.value)}
                        rows={3}
                        className="rounded-lg border-[#e5e5e5] focus:border-[#1a1a1a] resize-none mb-3"
                      />
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="outline"
                          onClick={() => setReplyTo(null)}
                          className="rounded-lg border-[#e5e5e5]"
                        >
                          取消
                        </Button>
                        <Button
                          onClick={() => handleReply(message.id)}
                          disabled={!replyContent.trim()}
                          className="bg-[#1a1a1a] hover:bg-[#1a1a1a]/85 text-white rounded-lg"
                        >
                          回复
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Replies */}
                  {message.replies && message.replies.length > 0 && (
                    <div className="mt-4 space-y-3">
                      {message.replies.map((reply) => (
                        <div
                          key={reply.id}
                          className="flex gap-3 p-4 bg-[#f0f0f0] rounded-xl"
                        >
                          <img
                            src={reply.avatar}
                            alt={reply.nickname}
                            className="w-8 h-8 rounded-full"
                          />
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-medium text-[#1a1a1a] text-sm">
                                {reply.nickname}
                              </span>
                              <span className="text-[#9ca3af] text-xs">
                                {reply.date}
                              </span>
                            </div>
                            <p className="text-[#6b6b6b] text-sm">
                              {reply.content}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {messages.length === 0 && (
          <div className="text-center py-16">
            <MessageCircle className="w-16 h-16 text-[#d1d1d1] mx-auto mb-4" />
            <p className="text-[#6b6b6b]">还没有留言，来发表第一条吧！</p>
          </div>
        )}
      </div>
    </div>
  );
}
