import React from 'react';
import { Box, Typography } from '@mui/material';
import '../CSS/Home.css';
import bg2 from '../Pictures/bg2.jpg';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Header image area */}
      <Box
        className="home-bg"
        style={{
          backgroundImage: `url(${bg2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className="home-title">
          Addiction Rehabilitation Center
        </div>
        <div className="home-subtitle">
          {/* Here you can manage therapists, patients, and treatment processes easily and conveniently. */}
        </div>
      </Box>

      {/* Scrollable text area */}
      <Box className="home-content-box">
        <Typography variant="h4" className="home-section-title">
          What is addiction?
        </Typography>
        <Typography variant="body1" className="home-section-text">
          Addiction is a loss of control. The compulsive desire to repeat a certain action, even if it goes against the person's own will. It is the moment when a person decides to escape from their problems instead of facing them, and then cannot get out of it. Addiction is a disease that requires professional help and addiction treatment to fight it. You can't do it alone.
          <br /><br />
          It doesn't really matter what the addiction is, whether it's drug addiction, gambling addiction, or any other addiction.
        </Typography>
        <Typography variant="h5" className="home-section-subtitle">
          How do you recover from addiction?
        </Typography>
        <Typography variant="body1" className="home-section-text">
          It's hard to admit that I'm addicted, that I've lost control over my impulses. It's difficult and painful, but recognizing the situation is the first step towards the process of addiction recovery—a delicate and complex process that must be done calmly and in the most professional way, tailored personally to the addict, their personality, and their situation.
        </Typography>
        <Typography variant="h5" className="home-section-subtitle">
          How is the actual rehabilitation done?
        </Typography>
        <Typography variant="body1" className="home-section-text">
          The word "rehabilitation" sounds very scary, but in practice, it is a process of gathering. You simply gather the pieces and start a rebuilding process. Sometimes inpatient rehabilitation is needed for a period, and sometimes outpatient rehabilitation is enough. The 'Retorno' center is located in Givat Shemesh in the Jerusalem hills, and treatment is provided by senior professionals, some of whom are even graduates of the center.
        </Typography>
        <Typography variant="h5" className="home-section-subtitle">
          Why specifically 'Retorno'?
        </Typography>
        <Typography variant="body1" className="home-section-text">
          The 'Retorno' rehabilitation model is based on one principle: no one is lost. In treatment, we analyze the motives for addiction, provide the addict with a safe base along with hope and meaning, and help them rebuild their life and form positive and supportive relationships with their environment.
        </Typography>
      </Box>

      {/* Speed Dial for navigation */}
      <SpeedDial
        ariaLabel="Quick actions"
        sx={{ position: 'fixed', bottom: 32, right: 32 }}
        icon={<MenuIcon />}
      >
        <SpeedDialAction
          icon={<HomeIcon />}
          tooltipTitle="Home"
          onClick={() => {
            window.scrollTo(0, 0);
            navigate('/');
          }}
        />
        <SpeedDialAction
          icon={<InfoIcon />}
          tooltipTitle="About"
          onClick={() => {
            window.scrollTo(0, 0);
            navigate('/About');
          }}
        />
      </SpeedDial>
    </div>
  );
};

export default Home;
