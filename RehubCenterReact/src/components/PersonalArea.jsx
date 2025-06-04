import React, { useEffect, useState } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import Skeleton from '@mui/material/Skeleton';
import jsPDF from "jspdf";
import ContactTherapist from './ContactTherapist';

const PersonalArea = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [therapists, setTherapists] = useState({});
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

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
    <Box className="personal-area-container" sx={{ mt: 8 }}>
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
                <TableCell align="center">Actions</TableCell>
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
                      style={isPast ? { background: '#f3f3f3', color: '#aaa' } : {}}
                    >
                      <TableCell style={isPast ? { color: '#aaa' } : {}}>
                        {isPast ? (
                          <span style={{ color: '#aaa', fontWeight: 600 }}>Completed</span>
                        ) : (
                          <span style={{ color: 'orange' }}>Upcoming</span>
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
                                width: 48,
                                height: 48,
                                borderRadius: '50%',
                                objectFit: 'cover',
                                cursor: 'pointer',
                                opacity: isPast ? 0.5 : 1
                              }}
                              onError={e => { e.target.src = '/default-avatar.png'; }}
                            />
                          </Link>
                          <Link
                            to={`/therapists#therapist-${row.therapistId}`}
                            style={{
                              color: isPast ? '#aaa' : '#223a5e',
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
                          onClick={() => {
                            // כאן תוכל להוסיף לוגיקה לפתיחת דיאלוג/מודל לשינוי זמן
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

      <Box className="personal-area-extra" sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Useful for You
        </Typography>
        <ul>
          <li>
            <Button
              variant="text"
              color="primary"
              onClick={handleDownloadPdf}
              sx={{ textTransform: 'none', padding: 0, minWidth: 0 }}
            >
              Download your treatment summary as PDF
            </Button>
          </li>

          <li>
            <a
              href="https://honuhousehawaii.com/2023/08/31/10-effective-strategies-addiction-recovery/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#223a5e', textDecoration: 'underline', fontWeight: 500 }}
            >
              Read tips for maintaining progress at home
            </a>
          </li>

          <ContactTherapist user={user} therapistEmail="therapist@example.com" />

          <li>
            <a
              href="https://www.youtube.com/results?search_query=rehabilitation+exercises"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#223a5e', textDecoration: 'underline', fontWeight: 500 }}
            >
              Access recommended articles and videos
            </a>
          </li>
        </ul>
      </Box>
    </Box>
  );
};

export default PersonalArea;