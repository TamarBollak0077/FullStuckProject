import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Alert,
} from '@mui/material';

const softGreen = '#4CAF50';        // ירוק רך
const softTurquoise = '#4DB6AC';    // טורקיז רך
const warmDarkGray = '#37474F';     // אפור כהה חם
const offWhite = '#FAFAFA';         // לבן נקי

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
    <Box
      sx={{
        backgroundColor: warmDarkGray,
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start', // במקום center
        pt: 10, // רווח פנימי מלמעלה
        mt: 8,  // רווח חיצוני מה־navbar
        p: 2,
      }}
    >

      <Paper
        elevation={6}
        sx={{
          backgroundColor: '#455A64',
          padding: 4,
          borderRadius: 4,
          width: '100%',
          maxWidth: 450,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: softGreen,
            mb: 3,
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          הרשמה
        </Typography>

        <form onSubmit={handleSubmit} noValidate>
          <TextField
            name="patientId"
            label="תעודת זהות"
            value={formData.patientId}
            onChange={handleChange}
            required
            fullWidth
            sx={fieldStyle}
          />
          <TextField
            name="firstName"
            label="שם פרטי"
            value={formData.firstName}
            onChange={handleChange}
            required
            fullWidth
            sx={fieldStyle}
          />
          <TextField
            name="lastName"
            label="שם משפחה"
            value={formData.lastName}
            onChange={handleChange}
            required
            fullWidth
            sx={fieldStyle}
          />
          <TextField
            name="dateOfBirth"
            label="תאריך לידה"
            type="date"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
            fullWidth
            InputLabelProps={{ shrink: true }}
            sx={fieldStyle}
          />
          <TextField
            name="contactInfo"
            label="פרטי קשר"
            value={formData.contactInfo}
            onChange={handleChange}
            required
            fullWidth
            sx={fieldStyle}
          />

          <Button
            type="submit"
            fullWidth
            disabled={loading}
            sx={{
              mt: 2,
              backgroundColor: softTurquoise,
              color: offWhite,
              fontWeight: 'bold',
              borderRadius: 2,
              '&:hover': {
                backgroundColor: softGreen,
              },
            }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'הרשמה'}
          </Button>

          {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
          {success && (
            <Alert severity="success" sx={{ mt: 2 }}>
              ✓ המטופל נוסף בהצלחה!
            </Alert>
          )}
        </form>
      </Paper>
    </Box>
  );
}

const fieldStyle = {
  mb: 2,
  '& .MuiInputBase-root': {
    backgroundColor: offWhite,
    borderRadius: 2,
  },
};
