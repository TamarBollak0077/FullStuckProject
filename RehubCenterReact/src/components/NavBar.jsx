import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Menu, MenuItem } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Tooltip from '@mui/material/Tooltip';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Personal Area', path: '/login', key: 'profile', icon: <AccountCircleIcon /> },
  {
    label: 'About',
    path: '/About',
    key: 'about',
    subMenu: [
      { label: 'Our Method', anchor: 'method' },
      { label: 'Types of Addictions', anchor: 'addictions' },
      { label: 'Addiction Info', anchor: 'addiction-info' },
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
      setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // נותן זמן ל-Menu להסגר
    }
  };

  // גלילה אוטומטית לעוגן כאשר מגיעים ל-About עם hash
  useEffect(() => {
    if (location.pathname === '/About' && location.hash) {
      const anchor = location.hash.replace('#', '');
      const el = document.getElementById(anchor);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  // גלילה לראש הדף בלחיצה על HOME
  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: '#223a5e',
        color: '#fff',
        zIndex: 1300,
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
            ) : item.label === 'Home' || item.label === 'Our Therapists' ? (
              <Tooltip title="" key={item.key || item.path}>
                <Button
                  color="inherit"
                  component={Link}
                  to={item.path}
                  sx={{ ml: 2 }}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  {item.label}
                </Button>
              </Tooltip>
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