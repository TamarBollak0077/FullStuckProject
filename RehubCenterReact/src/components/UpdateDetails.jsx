import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';

const UpdateDetails = () => {
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '' });
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const parsed = JSON.parse(userData);
      setUser(parsed);
      setForm({
        firstName: parsed.firstName || '',
        lastName: parsed.lastName || '',
        email: parsed.email || ''
      });
    }
  }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const payload = {
      PatientId: user.patientId,
      FirstName: form.firstName,
      LastName: form.lastName,
      DateOfBirth: user.dateOfBirth, // אם זה השדה המתאים אצלך
      ContactInfo: form.email // כאן התיקון!
    };
    const res = await fetch(`http://localhost:5253/api/Patient/update-personal-details/${user.patientId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (res.ok) {
      setSuccess(true);
      localStorage.setItem('user', JSON.stringify({ ...user, ...form }));
    }
  };

  if (!user) return null;

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 6 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" mb={2}>Update Your Details</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="First Name"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
            type="email"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Update
          </Button>
        </form>
        {success && <Typography color="success.main" mt={2}>Details updated successfully!</Typography>}
      </Paper>
    </Box>
  );
};

export default UpdateDetails;