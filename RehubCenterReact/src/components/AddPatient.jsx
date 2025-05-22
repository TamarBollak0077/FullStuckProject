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
        <h2 style={{ textAlign: 'center', color: '#223a5e', marginBottom: 12 }}>Sign Up</h2>
        <input name="patientId" type="number" placeholder="ID" value={formData.patientId} onChange={handleChange} required />
        <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
        <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
        <input name="dateOfBirth" type="date" value={formData.dateOfBirth} onChange={handleChange} required />
        <input name="contactInfo" placeholder="Contact Information" value={formData.contactInfo} onChange={handleChange} required />
        <button type="submit" disabled={loading} style={{
          background: '#223a5e',
          color: '#fff',
          border: 'none',
          borderRadius: 8,
          padding: '10px 0',
          fontWeight: 600,
          fontSize: '1rem',
          cursor: 'pointer'
        }}>
          {loading ? 'Submitting...' : 'Sign Up'}
        </button>
        {error && <p className="text-red-600" style={{ margin: 0 }}>Error: {error}</p>}
        {success && <p className="text-green-600" style={{ margin: 0 }}>✓ Patient added successfully!</p>}
      </form>
    </div>
  );
}
