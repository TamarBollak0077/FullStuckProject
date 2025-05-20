import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const navItems = [
  { label: 'בית', path: '/' },
  { label: 'אזור אישי', path: '/login', key: 'profile' },
  { label: 'אודות', path: '/about', key: 'about' },
  { label: 'מטפלים', path: '/therapists', key: 'therapists' },
  { label: 'התחברות', path: '/signup', key: 'login' },
];

const vibrantGreen = '#43D673';
const softTurquoise = '#4DB6AC';
const darkGray = '#23272A';
const white = '#FFFFFF';
const lightGray = '#F5F5F5';

const NavBar = () => (
  <AppBar
    position="fixed"
    elevation={4}
    sx={{
      background: `linear-gradient(90deg, ${darkGray} 70%, ${softTurquoise} 100%)`,
      borderBottom: `1px solid ${vibrantGreen}`,
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
      zIndex: 1201,
    }}
  >
    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography
        variant="h6"
        sx={{
          color: vibrantGreen,
          fontWeight: 'bold',
          letterSpacing: 1,
          textShadow: '0 1px 1px rgba(0,0,0,0.2)',
        }}
      >
        מרכז שיקום
      </Typography>
      <Box sx={{ display: 'flex', gap: 1 }}>
        {navItems.map((item) => (
          <Button
            key={item.key || item.path}
            component={Link}
            to={item.path}
            sx={{
              color: darkGray,
              backgroundColor: white,
              borderRadius: '24px',
              fontWeight: 'bold',
              px: 2.5,
              py: 1,
              fontSize: '0.9rem',
              textTransform: 'none',
              transition: '0.3s ease',
              '&:hover': {
                backgroundColor: vibrantGreen,
                color: white,
              },
            }}
          >
            {item.label}
          </Button>
        ))}
      </Box>
    </Toolbar>
  </AppBar>
);

export default NavBar;
