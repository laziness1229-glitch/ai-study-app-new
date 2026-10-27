'use client';

import { useState } from 'react';

export default function Home() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setLoading(true);
    setAnswer('');

    try {
      // APIやAI処理をここに記述します
      setAnswer(`「${question}」についての解説です。（テスト表示）`);
    } catch (error) {
      setAnswer('エラーが発生しました。');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ padding: '24px', maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
        AI Study App
      </h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="学習したい内容や質問を入力してください..."
          rows={4}
          style={{ padding: '12px', fontSize: '16px', borderRadius: '8px', border: '1px solid #ccc' }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{ padding: '12px', backgroundColor: '#0070f3', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '16px', cursor: 'pointer' }}
        >
          {loading ? 'AIが考え中...' : '質問する'}
        </button>
      </form>

      {answer && (
        <div style={{ marginTop: '24px', padding: '16px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
          <strong>回答:</strong>
          <p style={{ marginTop: '8px', whiteSpace: 'pre-wrap' }}>{answer}</p>
        </div>
      )}
    </main>
  );
}
