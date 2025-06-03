import React, { useEffect, useState } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Skeleton from '@mui/material/Skeleton';
import jsPDF from "jspdf";
import ContactTherapist from './ContactTherapist';

const mockAppointments = [
  { date: '2025-06-01', time: '09:00', therapist: 'Dr. Cohen', status: 'Scheduled' },
  { date: '2025-06-03', time: '11:00', therapist: 'Dr. Levi', status: 'Scheduled' },
  { date: '2025-06-05', time: '14:00', therapist: 'Dr. Bar', status: 'Scheduled' },
  { date: '2025-06-07', time: '10:00', therapist: 'Dr. Shalev', status: 'Scheduled' },
  { date: '2025-06-09', time: '13:00', therapist: 'Dr. Cohen', status: 'Scheduled' },
  { date: '2025-06-11', time: '09:30', therapist: 'Dr. Levi', status: 'Scheduled' },
  { date: '2025-06-13', time: '15:00', therapist: 'Dr. Bar', status: 'Scheduled' },
  { date: '2025-06-15', time: '12:00', therapist: 'Dr. Shalev', status: 'Scheduled' },
  { date: '2025-06-17', time: '16:00', therapist: 'Dr. Cohen', status: 'Scheduled' },
  { date: '2025-06-19', time: '10:30', therapist: 'Dr. Levi', status: 'Scheduled' },
  { date: '2025-06-21', time: '13:30', therapist: 'Dr. Bar', status: 'Scheduled' },
  { date: '2025-06-23', time: '11:00', therapist: 'Dr. Shalev', status: 'Scheduled' },
];

const PersonalArea = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // בדיקת התחברות (דוגמה: בדיקה אם יש user ב-localStorage)
  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      navigate('/login');
    } else {
      setUser(JSON.parse(userData));
    }
  }, [navigate]);

  const handleDownloadPdf = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text(`Treatment Summary for ${user.firstName} ${user.lastName}`, 10, 20);
    doc.setFontSize(12);
    doc.text(`Appointments: ${mockAppointments.length}`, 10, 35);
    doc.text('-------------------------------', 10, 45);

    mockAppointments.forEach((appt, idx) => {
      doc.text(
        `${idx + 1}. ${appt.date} ${appt.time} - ${appt.therapist} (${appt.status})`,
        10,
        55 + idx * 10
      );
    });

    doc.text('Thank you for being with us!', 10, 65 + mockAppointments.length * 10);

    doc.save('treatment-summary.pdf');
  };

  if (!user) return null;

  return (
    <Box className="personal-area-container">
      <Typography variant="h4" className="personal-area-title" gutterBottom>
        Welcome, {user.firstName}!
      </Typography>
      <Typography variant="body1" className="personal-area-info" gutterBottom>
        Here you can view your upcoming appointments, update your details, and get useful tips for your recovery journey.
      </Typography>

      <Box className="personal-area-table-box">
        <Typography variant="h6" className="personal-area-table-title">
          Your Next 12 Appointments
        </Typography>
        <TableContainer component={Paper} className="personal-area-table-container">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Time</TableCell>
                <TableCell>Therapist</TableCell>
                <TableCell>Status</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mockAppointments.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    <Skeleton variant="rectangular" width={210} height={60} />
                  </TableCell>
                </TableRow>
              ) : (
                mockAppointments.map((row, idx) => (
                  <TableRow key={idx}>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.time}</TableCell>
                    <TableCell>{row.therapist}</TableCell>
                    <TableCell>
                      <Chip
                        label={row.status}
                        color={row.status === 'Scheduled' ? 'primary' : 'success'}
                        variant="outlined"
                        size="small"
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Button size="small" color="primary" variant="outlined">Cancel</Button>
                    </TableCell>
                  </TableRow>
                ))
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

          {/* 3. יצירת קשר עם המטפל */}
          <li>
            <ContactTherapist user={user} therapistEmail="therapist@example.com" />
          </li>


          {/* 4. מאמרים וסרטונים */}
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