import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TherapistLogin() {
  const [formData, setFormData] = useState({
    therapistId: '',
    firstName: '',
    lastName: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5253/api/therapist/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        setError('פרטי ההתחברות אינם נכונים.');
        return;
      }

      const data = await response.json();
      localStorage.setItem('therapist', JSON.stringify(data));
      navigate(`/therapist-area/${formData.therapistId}`);
    } catch {
      setError('שגיאת רשת. נסה שוב מאוחר יותר.');
    }
  };

  return (
    <div className="login-bg">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Therapist Login</h2>
        <input name="therapistId" placeholder="Therapist ID" value={formData.therapistId} onChange={handleChange} required />
        <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
        <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
        <button type="submit" className="login-btn">Login</button>
        {error && <div className="login-error">{error}</div>}
      </form>
    </div>
  );
}