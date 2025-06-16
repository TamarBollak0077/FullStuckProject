import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
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
      {/* Hero section with background image and overlay */}
      <Box
        sx={{
          minHeight: { xs: '55vh', md: '65vh' },
          width: '100%',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: `url('https://images.pexels.com/photos/461416/pexels-photo-461416.jpeg?auto=compress&w=1200&h=800&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, #e0eafcbb 60%, #cfdef3cc 100%)',
            zIndex: 1,
          }}
        />
        {/* Content */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
            width: '100%',
            px: 2,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: '#223a5e',
              fontWeight: 700,
              mb: 1,
              textShadow: '0 2px 8px #fff8',
              textAlign: 'center',
              fontSize: { xs: '2rem', md: '2.8rem' }
            }}
          >
            Addiction Rehabilitation Center
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: '#4a5a6a',
              fontWeight: 400,
              mb: 2,
              textAlign: 'center',
              maxWidth: 600,
              mx: 'auto'
            }}
          >
            A safe place for new beginnings, support, and hope.<br />
            Together, we help you rediscover your strength and rebuild your life.
          </Typography>
        </Box>
      </Box>

      {/* Core values cards with images */}
      <Box sx={{ mb: 5, px: 2, mt: { xs: 2, md: -4 } }}>
        <Grid container spacing={3} justifyContent="center">
          {[{
            img: "https://images.pexels.com/photos/3184421/pexels-photo-3184421.jpeg?auto=compress&w=400&h=180&fit=crop",
            alt: "Personal Guidance",
            icon: <EmojiPeopleIcon sx={{ fontSize: 38, color: '#1976d2', mb: 1 }} />,
            title: "Personal Guidance",
            desc: "Every person is unique. We tailor the rehabilitation process to your personal needs, strengths, and goals.",
          }, {
            img: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&w=400&h=180&fit=crop",
            alt: "Support & Community",
            icon: <FavoriteIcon sx={{ fontSize: 38, color: '#e57373', mb: 1 }} />,
            title: "Support & Community",
            desc: "You are not alone. Our team and community will be with you every step, offering support and encouragement.",
          }, {
            img: "https://images.pexels.com/photos/698500/pexels-photo-698500.jpeg?auto=compress&w=400&h=180&fit=crop",
            alt: "Hope & Renewal",
            icon: <WbSunnyIcon sx={{ fontSize: 38, color: '#ffb300', mb: 1 }} />,
            title: "Hope & Renewal",
            desc: "Every day is a new opportunity. We believe in your ability to change, heal, and grow.",
          }].map((card, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Card
                sx={{
                  borderRadius: 4,
                  boxShadow: '0 4px 32px #1976d233',
                  textAlign: 'center',
                  py: 2,
                  px: 1,
                  minHeight: 260,
                  background: 'linear-gradient(120deg, #f8fafc 80%, #e3f0fa 100%)',
                  transition: 'transform 0.35s cubic-bezier(.4,2,.3,1), box-shadow 0.35s cubic-bezier(.4,2,.3,1)',
                  position: 'relative',
                  top: 0,
                  '&:hover': {
                    transform: 'translateY(-12px) scale(1.035)',
                    boxShadow: '0 12px 40px #1976d255, 0 2px 16px #1976d222',
                    zIndex: 2,
                  }
                }}
              >
                <img
                  src={card.img}
                  alt={card.alt}
                  style={{ width: '100%', height: 120, objectFit: 'cover', borderRadius: 12, marginBottom: 8, transition: 'filter 0.3s', filter: 'brightness(0.97)' }}
                />
                <CardContent>
                  {card.icon}
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    {card.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#4a5a6a' }}>
                    {card.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Main content with your text */}
      <Box className="home-content-box" sx={{ maxWidth: 900, mx: 'auto', mb: 6, px: 2 }}>
        {/* What is addiction? */}
        <Box sx={{ mb: 5, p: 3, background: '#f8fafc', borderRadius: 3, boxShadow: '0 2px 12px #1976d211' }}>
          <img
            src="https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&w=600&h=180&fit=crop"
            alt="What is addiction"
            style={{ width: '100%', maxHeight: 160, objectFit: 'cover', borderRadius: 10, marginBottom: 16 }}
          />
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <FavoriteIcon sx={{ color: '#1976d2', mr: 1 }} />
            <Typography variant="h4" sx={{ color: '#1976d2', fontWeight: 700 }}>
              What is addiction?
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ color: '#223a5e', mb: 1.5 }}>
            <b>Addiction is a loss of control.</b> The compulsive desire to repeat a certain action, even if it goes against the person's own will.<br />
            It is the moment when a person decides to escape from their problems instead of facing them, and then cannot get out of it.<br />
            <span style={{ color: '#e57373', fontWeight: 600 }}>Addiction is a disease that requires professional help and addiction treatment to fight it. You can't do it alone.</span>
          </Typography>
          <Typography variant="body2" sx={{ color: '#4a5a6a' }}>
            It doesn't really matter what the addiction is, whether it's drug addiction, gambling addiction, or any other addiction.
          </Typography>
        </Box>

        {/* How do you recover from addiction? */}
        <Box sx={{ mb: 5, p: 3, background: '#f8fafc', borderRadius: 3, boxShadow: '0 2px 12px #1976d211' }}>
          <img
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&w=600&h=180&fit=crop"
            alt="Recovery"
            style={{ width: '100%', maxHeight: 160, objectFit: 'cover', borderRadius: 10, marginBottom: 16 }}
          />
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <EmojiPeopleIcon sx={{ color: '#1976d2', mr: 1 }} />
            <Typography variant="h5" sx={{ color: '#223a5e', fontWeight: 600 }}>
              How do you recover from addiction?
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ color: '#223a5e' }}>
            It's hard to admit that I'm addicted, that I've lost control over my impulses. It's difficult and painful, but recognizing the situation is the first step towards the process of addiction recovery—a delicate and complex process that must be done calmly and in the most professional way, tailored personally to the addict, their personality, and their situation.
          </Typography>
        </Box>

        {/* How is the actual rehabilitation done? */}
        <Box sx={{ mb: 5, p: 3, background: '#f8fafc', borderRadius: 3, boxShadow: '0 2px 12px #1976d211' }}>
          <img
            src="https://images.pexels.com/photos/461049/pexels-photo-461049.jpeg?auto=compress&w=600&h=180&fit=crop"
            alt="Supportive hands"
            style={{ width: '100%', maxHeight: 160, objectFit: 'cover', borderRadius: 10, marginBottom: 16 }}
          />
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <WbSunnyIcon sx={{ color: '#ffb300', mr: 1 }} />
            <Typography variant="h5" sx={{ color: '#223a5e', fontWeight: 600 }}>
              How is the actual rehabilitation done?
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ color: '#223a5e' }}>
            The word "rehabilitation" sounds very scary, but in practice, it is a process of gathering. You simply gather the pieces and start a rebuilding process.<br />
            Sometimes inpatient rehabilitation is needed for a period, and sometimes outpatient rehabilitation is enough.<br />
            The 'Retorno' center is located in Givat Shemesh in the Jerusalem hills, and treatment is provided by senior professionals, some of whom are even graduates of the center.
          </Typography>
        </Box>

        {/* Why specifically 'Retorno'? */}
        <Box sx={{ p: 3, background: '#f8fafc', borderRadius: 3, boxShadow: '0 2px 12px #1976d211' }}>
          <img
            src="https://images.pexels.com/photos/3184395/pexels-photo-3184395.jpeg?auto=compress&w=600&h=180&fit=crop"
            alt="Retorno"
            style={{ width: '100%', maxHeight: 160, objectFit: 'cover', borderRadius: 10, marginBottom: 16 }}
          />
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <FavoriteIcon sx={{ color: '#e57373', mr: 1 }} />
            <Typography variant="h5" sx={{ color: '#223a5e', fontWeight: 600 }}>
              Why specifically 'Retorno'?
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ color: '#223a5e' }}>
            The 'Retorno' rehabilitation model is based on one principle: <b>no one is lost.</b> In treatment, we analyze the motives for addiction, provide the addict with a safe base along with hope and meaning, and help them rebuild their life and form positive and supportive relationships with their environment.
          </Typography>
        </Box>
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
      {/* Heartbeat animation */}
      <style>
        {`
        @keyframes heartbeat {
          0% { transform: scale(1);}
          20% { transform: scale(1.18);}
          40% { transform: scale(0.95);}
          60% { transform: scale(1.12);}
          80% { transform: scale(0.98);}
          100% { transform: scale(1);}
        }
        `}
      </style>
    </div>
  );
};

export default Home;
