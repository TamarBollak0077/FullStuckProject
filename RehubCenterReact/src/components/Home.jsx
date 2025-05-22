import React from 'react';
import { Box, Typography } from '@mui/material';

const Home = () => {
  return (
    <div>
      {/* Header image area */}
      <Box
        className="home-bg"
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            color: '#fff',
            fontWeight: 700,
            textShadow: '2px 2px 8px #153A6F',
            mt: 4,
            textAlign: 'right',
          }}
        >
          Addiction Rehabilitation Center
          <br />
        </Typography>
        <Typography variant="h5" sx={{ color: '#e0e0e0', textShadow: '1px 1px 6px #153A6F', textAlign: 'right', direction: 'rtl' }}>
          {/* Here you can manage therapists, patients, and treatment processes easily and conveniently. */}
        </Typography>
      </Box>

      {/* Scrollable text area */}
      <Box
        sx={{
          maxWidth: 700,
          mx: 'auto',
          my: 6,
          p: 4,
          borderRadius: 3,
          boxShadow: 3,
          direction: 'ltr',
          textAlign: 'left',
          background: 'none',
        }}
      >
        <Typography variant="h4" sx={{ color: '#153A6F', fontWeight: 600, mb: 2 }}>
          What is addiction?
        </Typography>
        <Typography variant="body1" sx={{ color: '#333', mb: 2, lineHeight: 2 }}>
          Addiction is a loss of control. The compulsive desire to repeat a certain action, even if it goes against the person's own will. It is the moment when a person decides to escape from their problems instead of facing them, and then cannot get out of it. Addiction is a disease that requires professional help and addiction treatment to fight it. You can't do it alone.
          <br /><br />
          It doesn't really matter what the addiction is, whether it's drug addiction, gambling addiction, or any other addiction.
        </Typography>
        <Typography variant="h5" sx={{ color: '#223a5e', fontWeight: 500, mb: 1 }}>
          How do you recover from addiction?
        </Typography>
        <Typography variant="body1" sx={{ color: '#333', mb: 2, lineHeight: 2 }}>
          It's hard to admit that I'm addicted, that I've lost control over my impulses. It's difficult and painful, but recognizing the situation is the first step towards the process of addiction recovery—a delicate and complex process that must be done calmly and in the most professional way, tailored personally to the addict, their personality, and their situation.
        </Typography>
        <Typography variant="h5" sx={{ color: '#223a5e', fontWeight: 500, mb: 1 }}>
          How is the actual rehabilitation done?
        </Typography>
        <Typography variant="body1" sx={{ color: '#333', mb: 2, lineHeight: 2 }}>
          The word "rehabilitation" sounds very scary, but in practice, it is a process of gathering. You simply gather the pieces and start a rebuilding process. Sometimes inpatient rehabilitation is needed for a period, and sometimes outpatient rehabilitation is enough. The 'Retorno' center is located in Givat Shemesh in the Jerusalem hills, and treatment is provided by senior professionals, some of whom are even graduates of the center.
        </Typography>
        <Typography variant="h5" sx={{ color: '#223a5e', fontWeight: 500, mb: 1 }}>
          Why specifically 'Retorno'?
        </Typography>
        <Typography variant="body1" sx={{ color: '#333', lineHeight: 2 }}>
          The 'Retorno' rehabilitation model is based on one principle: no one is lost. In treatment, we analyze the motives for addiction, provide the addict with a safe base along with hope and meaning, and help them rebuild their life and form positive and supportive relationships with their environment.
        </Typography>
      </Box>
    </div>
  );
};

export default Home;
