import React, { useEffect, useState } from 'react';
import {
  Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Grid, Card, CardActionArea, Divider
} from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import Skeleton from '@mui/material/Skeleton';
import jsPDF from "jspdf";
import ContactTherapist from './ContactTherapist';
import DownloadIcon from '@mui/icons-material/Download';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import EditNoteIcon from '@mui/icons-material/EditNote';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import Tooltip from '@mui/material/Tooltip';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';


const PersonalArea = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [therapists, setTherapists] = useState({});
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openComments, setOpenComments] = useState(false);


  const fetchTherapist = async (therapistId) => {
    if (!therapistId || therapists[therapistId]) return;
    try {
      const res = await fetch(`http://localhost:5253/api/Therapist/details/${therapistId}`);
      if (!res.ok) throw new Error();
      const data = await res.json();
      setTherapists(prev => ({ ...prev, [therapistId]: data }));
    } catch {
      setTherapists(prev => ({ ...prev, [therapistId]: { fullName: 'Unknown', imageUrl: '' } }));
    }
  };

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      navigate('/login');
    } else {
      setUser(JSON.parse(userData));
    }
  }, [navigate]);

  useEffect(() => {
    if (user && user.patientId) {
      setLoading(true);
      fetch(`http://localhost:5253/api/PatientSessions/byPatient/${user.patientId}`)
        .then(res => {
          if (!res.ok) throw new Error('Failed to fetch appointments');
          return res.json();
        })
        .then(data => {
          setAppointments(data);
        })
        .catch(() => setAppointments([]))
        .finally(() => setLoading(false));
    }
  }, [user]);

  useEffect(() => {
    const ids = [...new Set(appointments.map(a => a.therapistId))];
    ids.forEach(id => fetchTherapist(id));
    // eslint-disable-next-line
  }, [appointments]);

  const handleDownloadPdf = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text(`Treatment Summary for ${user.firstName} ${user.lastName}`, 10, 20);
    doc.setFontSize(12);
    doc.text(`Appointments: ${appointments.length}`, 10, 35);
    doc.text('-------------------------------', 10, 45);

    appointments.forEach((appt, idx) => {
      doc.text(
        `${idx + 1}. ${appt.sessionDate} ${appt.hour} - ${appt.therapistId || ''} (${appt.sessionType || ''})`,
        10,
        55 + idx * 10
      );
    });

    doc.text('Thank you for being with us!', 10, 65 + appointments.length * 10);

    doc.save('treatment-summary.pdf');
  };

  if (!user) return null;

  return (

    <Box
      className="personal-area-container"
      sx={{
        mt: 8,
        maxWidth: 900,
        mx: 'auto',
        background: 'linear-gradient(135deg, #f8fafc 60%, #e3f0fa 100%)',
        borderRadius: 4,
        boxShadow: '0 4px 24px rgba(34,58,94,0.10)',
        p: { xs: 2, md: 4 },
        fontFamily: "'Segoe UI', 'Arial', sans-serif",
        animation: 'fadeIn 1s'
      }}
    >
      <Typography
        variant="h4"
        className="personal-area-title"
        gutterBottom
        sx={{
          fontWeight: 700,
          color: '#223a5e',
          letterSpacing: 1,
          mb: 1,
          display: 'flex',
          alignItems: 'center',
          gap: 1
        }}
      >
        👋 Welcome, {user.firstName}!
      </Typography>
      <Typography
        variant="body1"
        className="personal-area-info"
        gutterBottom
        sx={{
          color: '#4a5a6a',
          fontSize: '1.15rem',
          mb: 3
        }}
      >
        Here you can view your upcoming appointments, update your details, and get useful tips for your recovery journey.
      </Typography>

      <Box className="personal-area-table-box" sx={{ mb: 4 }}>
        <Typography
          variant="h6"
          className="personal-area-table-title"
          sx={{
            color: '#1976d2',
            fontWeight: 600,
            mb: 1
          }}
        >
          Your Appointments
        </Typography>
        <TableContainer
          component={Paper}
          className="personal-area-table-container"
          sx={{
            borderRadius: 3,
            boxShadow: '0 2px 12px rgba(25, 118, 210, 0.08)'
          }}
        >
          <Table>
            <TableHead>
              <TableRow sx={{ background: '#e3f0fa' }}>
                <TableCell sx={{ fontWeight: 700 }}>Status</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Date</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Time</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Therapist</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Session Type</TableCell>
                <TableCell align="center" sx={{ fontWeight: 700 }}>Actions</TableCell>

    {/* <Box className="personal-area-container" sx={{ mt: 8 }}>
      <Typography variant="h4" className="personal-area-title" gutterBottom>
        Welcome, {user.firstName}!
      </Typography>
      <Typography variant="body1" className="personal-area-info" gutterBottom>
        Here you can view your upcoming appointments, update your details, and get useful tips for your recovery journey.
      </Typography>

      <Box className="personal-area-table-box">
        <Typography variant="h6" className="personal-area-table-title">
          Your Appointments
        </Typography>
        <TableContainer component={Paper} className="personal-area-table-container">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Scheduled</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Time</TableCell>
                <TableCell>Therapist</TableCell>
                <TableCell>Session Type</TableCell>
                <TableCell align="center">Actions</TableCell> */}

              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={6} align="center">
                    <Skeleton variant="rectangular" width={210} height={60} />
                  </TableCell>
                </TableRow>
              ) : appointments.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} align="center">
                    No appointments found.
                  </TableCell>
                </TableRow>
              ) : (
                appointments.map((row, idx) => {
                  const d = new Date(row.sessionDate);
                  const day = String(d.getDate()).padStart(2, '0');
                  const month = String(d.getMonth() + 1).padStart(2, '0');
                  const year = d.getFullYear();
                  const isPast = row.sessionDate && d < new Date(new Date().setHours(0, 0, 0, 0));
                  return (
                    <TableRow
                      key={idx}
                      sx={{
                        background: isPast ? '#f3f3f3' : 'inherit',
                        color: isPast ? '#aaa' : 'inherit',
                        transition: 'background 0.2s',
                        '&:hover': {
                          background: isPast ? '#e0e0e0' : '#e3f0fa'
                        }
                      }}
                    >
                      <TableCell style={isPast ? { color: '#aaa' } : {}}>
                        {isPast ? (
                          <span style={{ color: '#aaa', fontWeight: 600 }}>Completed</span>
                        ) : (

                          <span style={{ color: '#1976d2', fontWeight: 600 }}>Upcoming</span>

                        )}
                      </TableCell>
                      <TableCell style={isPast ? { color: '#aaa' } : {}}>
                        {row.sessionDate ? `${day}/${month}/${year}` : ''}
                      </TableCell>
                      <TableCell style={isPast ? { color: '#aaa' } : {}}>
                        {row.hour ? row.hour.substring(0, 5) : ''}
                      </TableCell>
                      <TableCell style={isPast ? { color: '#aaa' } : {}}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Link to={`/therapists#therapist-${row.therapistId}`}>
                            <img
                              src={`http://localhost:5253/Images/therapists/${row.therapistId}.png`}
                              alt={therapists[row.therapistId]?.fullName || 'Therapist'}
                              style={{

                                width: 44,
                                height: 44,
                                borderRadius: '50%',
                                objectFit: 'cover',
                                cursor: 'pointer',
                                opacity: isPast ? 0.5 : 1,
                                border: '2px solid #e3f0fa',
                                transition: 'transform 0.2s',
                              }}
                              onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.08)')}
                              onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}

                              onError={e => { e.target.src = '/default-avatar.png'; }}
                            />
                          </Link>
                          <Link
                            to={`/therapists#therapist-${row.therapistId}`}
                            style={{
                              color: isPast ? '#aaa' : '#1976d2',

                              textDecoration: 'underline',
                              fontWeight: 500,
                              cursor: 'pointer'
                            }}
                          >
                            {therapists[row.therapistId]?.fullName || 'Loading...'}
                          </Link>
                        </Box>
                      </TableCell>
                      <TableCell style={isPast ? { color: '#aaa' } : {}}>
                        {row.sessionType}
                      </TableCell>
                      <TableCell align="center">
                        <Button
                          size="small"
                          color="primary"
                          variant="outlined"
                          disabled={isPast}
                          sx={{
                            borderRadius: 2,
                            fontWeight: 600,
                            textTransform: 'none',
                            transition: 'background 0.2s, color 0.2s',
                            '&:hover': {
                              background: '#1976d2',
                              color: '#fff'
                            }
                          }}
                          onClick={() => {
                            alert('Change time functionality coming soon!');
                          }}
                        >
                          Change Time
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Divider sx={{
        mb: 4,
        mt: 2,
        borderColor: 'linear-gradient(90deg, #1976d2 0%, #25d366 100%)',
        height: 3,
        borderRadius: 2,
        background: 'linear-gradient(90deg, #1976d2 0%, #25d366 100%)'
      }} />

      {/* סרגל אופציות מעוצב עם bounce icons */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {/* עדכון פרטים */}
        <Grid item xs={6} md={2}>
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: '0 2px 12px rgba(25, 118, 210, 0.08)',
              transition: 'box-shadow 0.2s, transform 0.2s',
              '&:hover': {
                boxShadow: '0 6px 24px rgba(25, 118, 210, 0.18)',
                transform: 'translateY(-4px) scale(1.03)'
              }
            }}
          >
            <Tooltip title="Update your personal details">
              <CardActionArea
                onClick={() => navigate('/update-details')}
                sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              >
                <EditNoteIcon
                  sx={{
                    fontSize: 38,
                    color: '#1976d2',
                    mb: 1,
                    transition: 'transform 0.3s',
                    '&:hover': { animation: 'bounce 0.7s' }
                  }}
                />
                <Typography sx={{ fontWeight: 600, color: '#223a5e', fontSize: '1.05rem' }}>
                  Update Details
                </Typography>
              </CardActionArea>
            </Tooltip>
          </Card>
        </Grid>

        {/* הורדת סיכום */}
        <Grid item xs={6} md={2}>
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: '0 2px 12px rgba(25, 118, 210, 0.08)',
              transition: 'box-shadow 0.2s, transform 0.2s',
              '&:hover': {
                boxShadow: '0 6px 24px rgba(25, 118, 210, 0.18)',
                transform: 'translateY(-4px) scale(1.03)'
              }
            }}
          >
            <CardActionArea
              onClick={handleDownloadPdf}
              sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <DownloadIcon
                sx={{
                  fontSize: 38,
                  color: '#1976d2',
                  mb: 1,
                  transition: 'transform 0.3s',
                  '&:hover': { animation: 'bounce 0.7s' }
                }}
              />
              <Typography sx={{ fontWeight: 600, color: '#223a5e', fontSize: '1.05rem' }}>
                Download Summary
              </Typography>
            </CardActionArea>
          </Card>
        </Grid>

        {/* טיפים */}
        <Grid item xs={6} md={2}>
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: '0 2px 12px rgba(25, 118, 210, 0.08)',
              transition: 'box-shadow 0.2s, transform 0.2s',
              '&:hover': {
                boxShadow: '0 6px 24px rgba(25, 118, 210, 0.18)',
                transform: 'translateY(-4px) scale(1.03)'
              }
            }}
          >
            <CardActionArea
              component="a"
              href="https://honuhousehawaii.com/2023/08/31/10-effective-strategies-addiction-recovery/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <TipsAndUpdatesIcon
                sx={{
                  fontSize: 38,
                  color: '#1976d2',
                  mb: 1,
                  transition: 'transform 0.3s',
                  '&:hover': { animation: 'bounce 0.7s' }
                }}
              />
              <Typography sx={{ fontWeight: 600, color: '#223a5e', fontSize: '1.05rem' }}>
                Recovery Tips
              </Typography>
            </CardActionArea>
          </Card>
        </Grid>

        {/* סרטונים */}
        <Grid item xs={6} md={2}>
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: '0 2px 12px rgba(25, 118, 210, 0.08)',
              transition: 'box-shadow 0.2s, transform 0.2s',
              '&:hover': {
                boxShadow: '0 6px 24px rgba(25, 118, 210, 0.18)',
                transform: 'translateY(-4px) scale(1.03)'
              }
            }}
          >
            <CardActionArea
              component="a"
              href="https://www.youtube.com/results?search_query=rehabilitation+exercises"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <VideoLibraryIcon
                sx={{
                  fontSize: 38,
                  color: '#1976d2',
                  mb: 1,
                  transition: 'transform 0.3s',
                  '&:hover': { animation: 'bounce 0.7s' }
                }}
              />
              <Typography sx={{ fontWeight: 600, color: '#223a5e', fontSize: '1.05rem' }}>
                Videos
              </Typography>
            </CardActionArea>
          </Card>
        </Grid>

        {/* יצירת קשר עם מטפל */}
        <Grid item xs={6} md={2}>
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: '0 2px 12px rgba(25, 118, 210, 0.08)',
              transition: 'box-shadow 0.2s, transform 0.2s',
              '&:hover': {
                boxShadow: '0 6px 24px rgba(25, 118, 210, 0.18)',
                transform: 'translateY(-4px) scale(1.03)'
              }
            }}
          >
            <CardActionArea
              onClick={() => alert('כאן תוכל ליצור קשר עם המטפל')}
              sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <SupportAgentIcon
                sx={{
                  fontSize: 38,
                  color: '#ff9800',
                  mb: 1,
                  transition: 'transform 0.3s',
                  '&:hover': { animation: 'bounce 0.7s' }
                }}
              />
              <Typography sx={{ fontWeight: 600, color: '#223a5e', fontSize: '1.05rem' }}>
                Contact Therapist
              </Typography>
            </CardActionArea>
          </Card>
        </Grid>

        {/* תגובות מטפל */}
        <Grid item xs={6} md={2}>
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: '0 2px 12px rgba(25, 118, 210, 0.08)',
              transition: 'box-shadow 0.2s, transform 0.2s',
              '&:hover': {
                boxShadow: '0 6px 24px rgba(25, 118, 210, 0.18)',
                transform: 'translateY(-4px) scale(1.03)'
              }
            }}
          >
            <CardActionArea
              onClick={() => setOpenComments(true)}
              sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <ChatBubbleOutlineIcon
                sx={{
                  fontSize: 38,
                  color: '#25d366',
                  mb: 1,
                  transition: 'transform 0.3s',
                  '&:hover': { animation: 'bounce 0.7s' }
                }}
              />
              <Typography sx={{ fontWeight: 600, color: '#223a5e', fontSize: '1.05rem' }}>
                Therapist Comments
              </Typography>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>

      {/* Dialog for Therapist Comments */}
      <Dialog open={openComments} onClose={() => setOpenComments(false)}>
        <DialogTitle>Therapist Comments</DialogTitle>
        <DialogContent>
          {/* כאן תוכל להציג הודעות */}
          <Typography>Here you will see therapist comments and progress updates.</Typography>
        </DialogContent>
      </Dialog>

      {/* אנימציית bounce לאייקונים */}
      <style>
        {`
        @keyframes bounce {
          0% { transform: scale(1);}
          30% { transform: scale(1.25);}
          50% { transform: scale(0.95);}
          70% { transform: scale(1.15);}
          100% { transform: scale(1);}
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px);}
          to { opacity: 1; transform: translateY(0);}
        }
        `}
      </style>

    </Box>
  );
};

export default PersonalArea;