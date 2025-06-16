import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const SignupSuccess = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)',
        fontFamily: "'Segoe UI', 'Arial', sans-serif",
        animation: 'fadeIn 1.2s'
      }}
    >
      <div
        style={{
          background: 'rgba(255,255,255,0.97)',
          borderRadius: 24,
          boxShadow: '0 8px 32px rgba(34,58,94,0.13)',
          padding: '48px 36px',
          textAlign: 'center',
          maxWidth: 420,
          animation: 'popIn 0.8s'
        }}
      >
        <CheckCircleIcon
          sx={{
            fontSize: 70,
            color: '#25d366',
            mb: 2,
            animation: 'bounce 1.2s'
          }}
        />
        <h2 style={{ color: '#223a5e', marginBottom: 12, fontWeight: 700, fontSize: '2rem' }}>
          Registration Successful!
        </h2>
        <p style={{ color: '#223a5e', fontSize: '1.18rem', marginBottom: 24, lineHeight: 1.7 }}>
          You have taken a brave step towards change.<br />
          Choosing to take care of yourself requires a lot of strength, and we are here to support you every step of the way.<br />
          We will contact you soon to continue the onboarding process.<br />
          <span style={{ color: '#25d366', fontWeight: 600 }}>You are not alone!</span>
        </p>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            borderRadius: 3,
            fontWeight: 600,
            px: 4,
            background: 'linear-gradient(90deg, #1976d2 0%, #25d366 100%)',
            boxShadow: '0 2px 8px #1976d233',
            transition: 'background 0.2s',
            '&:hover': {
              background: 'linear-gradient(90deg, #25d366 0%, #1976d2 100%)'
            }
          }}
          onClick={() => navigate('/')}
        >
          Back to Home
        </Button>
      </div>
      <style>
        {`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes popIn {
          0% { transform: scale(0.85); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes bounce {
          0% { transform: scale(1);}
          30% { transform: scale(1.25);}
          50% { transform: scale(0.95);}
          70% { transform: scale(1.15);}
          100% { transform: scale(1);}
        }
        `}
      </style>
    </div>
  );
};

export default SignupSuccess;
