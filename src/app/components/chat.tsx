'use client';

import { useChat } from 'ai/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div id="aiChat">
      <h1 className="title">Next.js AI Chat - OpenAI</h1>
      <div className="ai-chat-body flex flex-col w-full max-w-3xl p-4 mx-auto stretch">
        {messages.map(m => (
          <div key={m.id} className={`whitespace-pre-wrap ${m.role === 'user' ? 'user' : 'ai'}`}>
            {m.role === 'user' ? 'User: ' : 'AI: '}
            {m.content}
          </div>
        ))}

        <form onSubmit={handleSubmit}>
          <input
            className="ai-chat-input fixed bottom-0 w-full max-w-3xl p-2 mb-8 border border-gray-300 rounded shadow-xl"
            value={input}
            placeholder="Benvenuto! Come posso aiutarti?"
            onChange={handleInputChange}
          />
        </form>
      </div>
    </div>
  );
}