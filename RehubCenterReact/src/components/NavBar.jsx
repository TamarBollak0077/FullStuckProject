import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Menu, MenuItem } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Tooltip from '@mui/material/Tooltip';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Personal Area', path: '/login', key: 'profile', icon: <AccountCircleIcon /> },
  { label: 'About', path: '/About', key: 'about', subMenu: [
      { label: 'Our Method', anchor: 'method' },
      { label: 'Types of Addictions', anchor: 'addictions' },
      { label: 'Addiction Info', anchor: 'addiction-info' }, // חדש!
      { label: 'Contact', anchor: 'contact' }
    ]
  },
  { label: 'Our Therapists', path: '/therapists', key: 'therapists' },
  { label: 'Connection', path: '/signup', key: 'login' },
];

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Scroll to anchor in About page
  const handleSubMenuClick = (anchor) => {
    handleMenuClose();
    if (location.pathname !== '/About') {
      navigate(`/About#${anchor}`);
    } else {
      const el = document.getElementById(anchor);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.hash = anchor;
      }
    }
  };

  return (
    <AppBar
      position="fixed" // במקום "static"
      sx={{
        backgroundColor: '#223a5e',
        color: '#fff',
        zIndex: 1300, // כדי שיהיה מעל כל התוכן
      }}
      elevation={2}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Retorno
        </Typography>
        <Box>
          {navItems.map((item) =>
            item.subMenu ? (
              <React.Fragment key={item.key || item.path}>
                <Button
                  color="inherit"
                  onClick={handleMenuOpen}
                  sx={{ ml: 2 }}
                  aria-controls="about-menu"
                  aria-haspopup="true"
                  component={Link}
                  to={item.path}
                >
                  {item.label}
                </Button>
                <Menu
                  id="about-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  MenuListProps={{ onMouseLeave: handleMenuClose }}
                >
                  {item.subMenu.map((sub) => (
                    <MenuItem
                      key={sub.anchor}
                      onClick={() => handleSubMenuClick(sub.anchor)}
                    >
                      {sub.label}
                    </MenuItem>
                  ))}
                </Menu>
              </React.Fragment>
            ) : (
              <Tooltip title={item.label === 'Personal Area' ? 'Go to your personal area' : ''} key={item.key || item.path}>
                <Button
                  color="inherit"
                  component={Link}
                  to={item.path}
                  sx={{ ml: 2 }}
                  startIcon={item.icon}
                  disableElevation
                  disableRipple={false}
                >
                  {item.label}
                </Button>
              </Tooltip>
            )
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
