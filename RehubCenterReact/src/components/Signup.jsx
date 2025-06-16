import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/Login.css';

export default function Signup() {
  const [formData, setFormData] = useState({
    patientId: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    contactInfo: '',
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
      const response = await fetch('http://localhost:5253/api/patient/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || 'Signup failed');
        return;
      }

      // מעבר לעמוד הצלחה במקום alert
      navigate('/signup-success');
    } catch (err) {
      alert('Network error');
    }
  };
  return (
    <div className="login-bg">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Sign Up</h2>
        <input
          name="patientId"
          placeholder="ID"
          value={formData.patientId}
          onChange={handleChange}
          required
          maxLength={9}
          pattern="\d{9}"
          title="ID must be exactly 9 digits"
          inputMode="numeric"
        />
        <input
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <input
          name="dateOfBirth"
          type="date"
          placeholder="Date of Birth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          required
        />
        <input
          name="contactInfo"
          placeholder="Contact Info (email or phone)"
          value={formData.contactInfo}
          onChange={handleChange}
          required
        />
        <button type="submit" className="login-btn">
          Sign Up
        </button>
        <a href="/login" className="signup-link">To Login</a>
      </form>
    </div>
  );
}