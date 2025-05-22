import { useState } from 'react';

export default function Login() {
  const [formData, setFormData] = useState({
    patientId: '',
    firstName: '',
    lastName: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5253/api/patient/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          patientId: formData.patientId,
          firstName: formData.firstName,
          lastName: formData.lastName
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        alert(error.message);
        return;
      }

      const data = await response.json();
      alert(`Welcome, ${data.firstName} ${data.lastName}`);
      // כאן אפשר לעשות redirect לעמוד אישי
    } catch (err) {
      alert('Network error');
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(to right, #f5f7fa, #c3cfe2)',
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: '#fff',
          padding: '32px 28px',
          borderRadius: '16px',
          boxShadow: '0 4px 24px rgba(34,58,94,0.12)',
          minWidth: 320,
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <h2 style={{ textAlign: 'center', color: '#223a5e', marginBottom: 12 }}>Login</h2>
        <input name="patientId" placeholder="ID" value={formData.patientId} onChange={handleChange} required />
        <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
        <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
        <button type="submit" style={{
          background: '#223a5e',
          color: '#fff',
          border: 'none',
          borderRadius: 8,
          padding: '10px 0',
          fontWeight: 600,
          fontSize: '1rem',
          cursor: 'pointer'
        }}>
          Login
        </button>
      </form>
    </div>
  );
}
