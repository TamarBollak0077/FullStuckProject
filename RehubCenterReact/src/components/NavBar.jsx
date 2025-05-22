import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Personal Area', path: '/login', key: 'profile' },
  { label: 'About', path: '/About', key: 'about' }, // <-- אות קטנה
  { label: 'Our Therapists', path: '/therapists', key: 'therapists' },
  { label: 'Connection', path: '/signup', key: 'login' },
];

const NavBar = () => (
  <AppBar
    position="static"
    sx={{
      backgroundColor: '#223a5e', // כחול ג'ינס כהה
      color: '#fff',
    }}
    elevation={2}
  >
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
     Retorno
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
