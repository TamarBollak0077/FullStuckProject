import React from 'react';
import { Box, Typography } from '@mui/material';

const Home = () => {
  return (
    <Box sx={{ p: 4, textAlign: 'center' }}>
      <Typography variant="h3" gutterBottom>
        ברוכים הבאים למרכז השיקום
      </Typography>
      <Typography variant="h5" color="text.secondary">
        כאן תוכלו לנהל מטפלים, מטופלים, ותהליכי טיפול בקלות ובנוחות.
      </Typography>
    </Box>
  );
};

export default Home;
