import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddPatient() {
  const [formData, setFormData] = useState({
    patientId: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    contactInfo: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('http://localhost:5253/api/patient/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.status === 409) {
        navigate('/login');
        return;
      }

      if (!response.ok) {
        throw new Error('Failed to add patient');
      }

      setSuccess(true);
      setFormData({
        patientId: '',
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        contactInfo: '',
      });
      navigate('/signup-success');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-2">
      <h2>Sign Up</h2>
      <input name="patientId" placeholder="ID" value={formData.patientId} onChange={handleChange} required />
      <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
      <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
      <input name="dateOfBirth" type="date" value={formData.dateOfBirth} onChange={handleChange} required />
      <input name="contactInfo" placeholder="Contact Information" value={formData.contactInfo} onChange={handleChange} required />
      <button type="submit" disabled={loading}>
        {loading ? 'Submitting...' : 'Sign Up'}
      </button>
      {error && <p className="text-red-600">Error: {error}</p>}
      {success && <p className="text-green-600">✓ Patient added successfully!</p>}
    </form>
  );
}
