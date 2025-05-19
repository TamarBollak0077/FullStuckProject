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
        body: JSON.stringify({ patientId: formData.patientId }), // שולח רק ת"ז
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
    <form onSubmit={handleSubmit} className="p-4 space-y-2">
      <h2>Login</h2>
      <input name="patientId" placeholder="ID" value={formData.patientId} onChange={handleChange} required />
      <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
      <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
      <button type="submit">Login</button>
    </form>
  );
}
