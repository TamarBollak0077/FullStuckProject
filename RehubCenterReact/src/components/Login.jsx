import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/Login.css';

export default function Login() {
  const [formData, setFormData] = useState({
    patientId: '',
    firstName: '',
    lastName: '',
  });

  const navigate = useNavigate();

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

      if (response.status === 204) {
        alert('Login failed: No content returned');
        return;
      }

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || 'Login failed');
        return;
      }

      alert(`Welcome, ${data.firstName} ${data.lastName}`);
      localStorage.setItem('user', JSON.stringify(data));
      navigate('/personal-area');
    } catch (err) {
      alert('Network error');
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
        <div style={{ marginTop: '16px', textAlign: 'center' }}>
          <a href="/signup" className="signup-link">To Sign Up</a>
        </div>
      </form>
    </div>
  );
}
