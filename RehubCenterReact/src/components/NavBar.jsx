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

const NavBar = () => (
  <AppBar position="static" color="primary">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        מרכז שיקום
      </Typography>
      <Box>
        {navItems.map((item) => (
          <Button
            key={item.key || item.path}
            color="inherit"
            component={Link}
            to={item.path}
            sx={{ ml: 2 }}
          >
            {item.label}
          </Button>
        ))}
      </Box>
    </Toolbar>
  </AppBar>
);

export default NavBar;
