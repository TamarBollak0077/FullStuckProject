import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import '../CSS/Login.css';

export default function Login() {
  const [formData, setFormData] = useState({
    patientId: '',
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
      const response = await fetch('http://localhost:5253/api/patient/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          patientId: formData.patientId,
          firstName: formData.firstName,
          lastName: formData.lastName
        }),
      });

      if (response.status === 204) {
        setError('המשתמש לא קיים במערכת. ניתן להירשם בלחיצה על "To Sign Up".');
        return;
      }

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'פרטי ההתחברות אינם נכונים.');
        return;
      }

      localStorage.setItem('user', JSON.stringify(data));
      navigate('/personal-area');
    } catch (err) {
      setError('שגיאת רשת. נסה שוב מאוחר יותר.');
    }
  };

  return (
    <div className="login-bg">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Login</h2>
        <input name="patientId" placeholder="ID" value={formData.patientId} onChange={handleChange} required />
        <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
        <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
        <button type="submit" className="login-btn">
          Login
        </button>
        <div className="signup-row">
          <a href="/signup" className="signup-link-flat">
            To Sign Up
          </a>
          {error && (
            <span className="arrow-blink-icon">
              <ArrowBackIosNewIcon fontSize="medium" />
            </span>
          )}
        </div>
        {error && (
          <div className="login-error-area">
            <div className="login-error">{error}</div>
          </div>
        )}
      </form>
    </div>
  );
}
