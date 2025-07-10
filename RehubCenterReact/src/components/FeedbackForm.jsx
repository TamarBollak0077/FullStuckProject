import { useState } from 'react';

export default function FeedbackForm({ sessionId, initialFeedback }) {
  const [feedback, setFeedback] = useState(initialFeedback || '');
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    setSaved(false);
    await fetch(`http://localhost:5253/api/patientsessions/${sessionId}/feedback`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(feedback),
    });
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div style={{ marginTop: 8 }}>
      <textarea
        rows={2}
        style={{ width: '100%', borderRadius: 4, border: '1px solid #ccc', padding: 4 }}
        placeholder="Write feedback for the patient..."
        value={feedback}
        onChange={e => setFeedback(e.target.value)}
        onBlur={handleSave}
        disabled={saving}
      />
      <button
        onClick={handleSave}
        disabled={saving}
        style={{
          marginTop: 4,
          background: '#1976d2',
          color: '#fff',
          border: 'none',
          borderRadius: 4,
          padding: '4px 12px',
          cursor: 'pointer'
        }}
      >
        {saving ? 'Saving...' : 'Save Feedback'}
      </button>
      {saved && <span style={{ color: 'green', marginLeft: 8 }}>Saved!</span>}
    </div>
  );
}