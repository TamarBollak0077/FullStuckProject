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
        elevation={12}
        sx={{
          backgroundColor: '#455A64',
          padding: 1,
          borderRadius: 2,
          width: '100%',
          maxWidth: 260, // קטן משמעותית
          border: '1px solid #fff',
          boxShadow: '0 2px 8px 0 #0002',
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            color: softGreen,
            mb: 0.7,
            textAlign: 'center',
            fontWeight: 600,
            fontSize: '0.98rem',
            letterSpacing: 0.3,
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
            size="small"
            sx={{ ...miniFieldStyle }}
          />
          <TextField
            name="firstName"
            label="שם פרטי"
            value={formData.firstName}
            onChange={handleChange}
            required
            fullWidth
            size="small"
            sx={{ ...miniFieldStyle }}
          />
          <TextField
            name="lastName"
            label="שם משפחה"
            value={formData.lastName}
            onChange={handleChange}
            required
            fullWidth
            size="small"
            sx={{ ...miniFieldStyle }}
          />
          <TextField
            name="dateOfBirth"
            label="תאריך לידה"
            type="date"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
            fullWidth
            size="small"
            InputLabelProps={{ shrink: true }}
            sx={{ ...miniFieldStyle }}
          />
          <TextField
            name="contactInfo"
            label="פרטי קשר"
            value={formData.contactInfo}
            onChange={handleChange}
            required
            fullWidth
            size="small"
            sx={{ ...miniFieldStyle }}
          />

          <Button
            type="submit"
            fullWidth
            disabled={loading}
            sx={{
              mt: 0.7,
              backgroundColor: softTurquoise,
              color: offWhite,
              fontWeight: 600,
              borderRadius: 2,
              fontSize: '0.92rem',
              py: 0.7,
              minHeight: 0,
              '&:hover': {
                backgroundColor: softGreen,
              },
            }}
          >
            {loading ? <CircularProgress size={18} color="inherit" /> : 'הרשמה'}
          </Button>

          {error && <Alert severity="error" sx={{ mt: 0.7, fontSize: '0.9em', py: 0.3 }}>{error}</Alert>}
          {success && (
            <Alert severity="success" sx={{ mt: 0.7, fontSize: '0.9em', py: 0.3 }}>
              ✓ המטופל נוסף בהצלחה!
            </Alert>
          )}
        </form>
      </Paper>
    </Box>
  );
}

const miniFieldStyle = {
  mb: 0.5,
  '& .MuiInputBase-root': {
    backgroundColor: offWhite,
    borderRadius: 2,
    fontSize: '0.92rem',
    minHeight: 0,
    height: 28, // קטן יותר
  },
  '& .MuiInputBase-input': {
    fontSize: '0.88rem',
    padding: '4px 6px', // עוד פחות ריווח פנימי
    height: '16px',     // גובה שורה קטן יותר
    boxSizing: 'border-box',
  },
  '& .MuiInputLabel-root': {
    fontSize: '0.88rem',
  },
  // הכי חשוב: לבטל minHeight של ה-outline
  '& .MuiOutlinedInput-root': {
    minHeight: 0,
    height: 28,
    '& .MuiOutlinedInput-notchedOutline': {
      minHeight: 0,
      borderRadius: 2,
    },
  },
};
