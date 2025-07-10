import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography, Box, IconButton, Tooltip, Avatar, Divider } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FeedbackForm from './FeedbackForm';

function getDaysInMonth(year, month) {
  const date = new Date(year, month, 1);
  const days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
}

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function TherapistArea() {
  const { therapistId } = useParams();
  const [calendar, setCalendar] = useState([]);
  const [patients, setPatients] = useState([]);
  const [error, setError] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);

  // Therapist info
  const therapist = JSON.parse(localStorage.getItem('therapist'));
  const therapistName = therapist
    ? `${therapist.firstName || ''} ${therapist.lastName || ''}`.trim()
    : '';

  // Month state
  const today = new Date();
  const [monthState, setMonthState] = useState([today.getFullYear(), today.getMonth()]);

  // Fetch therapist calendar
  useEffect(() => {
    fetch(`http://localhost:5253/api/therapist/${therapistId}/calendar`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch calendar');
        return res.json();
      })
      .then(data => setCalendar(Array.isArray(data) ? data : []))
      .catch(() => setCalendar([]));
  }, [therapistId]);

  // Fetch patients list
  useEffect(() => {
    fetch('http://localhost:5253/api/patient')
      .then(res => res.json())
      .then(data => setPatients(Array.isArray(data) ? data : []))
      .catch(() => setPatients([]));
  }, []);

  // Find patient name by patientId
  const getPatientName = (patientId) => {
    const patient = patients.find(p => p.patientId === patientId);
    return patient ? `${patient.firstName} ${patient.lastName}` : 'No Name';
  };

  // Dates with sessions
  const datesWithSessions = calendar.map(day => day.date);

  // Days in selected month
  const [year, month] = monthState;
  const daysInMonth = getDaysInMonth(year, month);

  // Month names in English
  const monthsEnglish = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Sessions for selected day
  const selectedDaySessions = calendar.find(day => day.date === selectedDate);

  // Padding for empty days at the start of the month
  const firstDayOfWeek = daysInMonth[0].getDay();
  const paddingDays = firstDayOfWeek;

  // Month navigation
  const handlePrevMonth = () => {
    setSelectedDate(null);
    setMonthState(([y, m]) => m === 0 ? [y - 1, 11] : [y, m - 1]);
  };
  const handleNextMonth = () => {
    setSelectedDate(null);
    setMonthState(([y, m]) => m === 11 ? [y + 1, 0] : [y, m + 1]);
  };

  return (
    <Box sx={{
      maxWidth: 600,
      margin: '0 auto',
      mt: 4,
      background: 'linear-gradient(135deg, #e3f2fd 0%, #fce4ec 100%)',
      borderRadius: 4,
      boxShadow: 3,
      p: 3
    }}>
      {/* Personal area header */}
      <Card sx={{
        mb: 3,
        background: 'linear-gradient(135deg, #1976d2 60%, #f06292 100%)',
        color: '#fff',
        borderRadius: 3,
        boxShadow: 2,
        p: 2,
        display: 'flex',
        alignItems: 'center',
        gap: 2
      }}>
        <Avatar sx={{ width: 64, height: 64, bgcolor: '#fff', color: '#1976d2', fontSize: 48 }}>
          <AccountCircleIcon fontSize="inherit" />
        </Avatar>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            Hello
            {therapist && therapist.title ? `, ${therapist.title} ${therapistName}` : therapistName && `, ${therapistName}`}
          </Typography>
          <Typography variant="subtitle1">
            Welcome to your personal area
          </Typography>
        </Box>
      </Card>

      <Divider sx={{ mb: 3 }} />

      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 700, color: '#1976d2', letterSpacing: 2 }}>
        Your Schedule
      </Typography>
      {error && <Typography color="error">{error}</Typography>}

      {/* Month navigation */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
        <Tooltip title="Previous month">
          <span>
            <IconButton onClick={handlePrevMonth} size="small" sx={{ color: '#1976d2' }}>
              <ArrowBackIosNewIcon />
            </IconButton>
          </span>
        </Tooltip>
        <Typography variant="h6" sx={{ mx: 2, fontWeight: 600 }}>
          {monthsEnglish[month]} {year}
        </Typography>
        <Tooltip title="Next month">
          <span>
            <IconButton onClick={handleNextMonth} size="small" sx={{ color: '#1976d2' }}>
              <ArrowForwardIosIcon />
            </IconButton>
          </span>
        </Tooltip>
      </Box>

      {/* Weekdays header */}
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', mb: 1 }}>
        {weekDays.map(day => (
          <Typography key={day} align="center" sx={{ fontWeight: 'bold', color: '#1976d2', fontSize: 18 }}>
            {day}
          </Typography>
        ))}
      </Box>

      {/* Calendar grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: 1,
          mb: 3,
          background: 'rgba(255,255,255,0.7)',
          borderRadius: 2,
          p: 2,
          minHeight: 270
        }}
      >
        {/* Padding for empty days at the start of the month */}
        {[...Array(paddingDays)].map((_, idx) => (
          <Box key={`pad-${idx}`} />
        ))}
        {daysInMonth.map(day => {
          const dateStr = day.toISOString().slice(0, 10);
          const hasSession = datesWithSessions.includes(dateStr);
          const isToday =
            dateStr === new Date().toISOString().slice(0, 10) &&
            month === today.getMonth() &&
            year === today.getFullYear();
          return (
            <button
              key={dateStr}
              style={{
                background: selectedDate === dateStr
                  ? 'linear-gradient(135deg, #1976d2 60%, #f06292 100%)'
                  : hasSession
                  ? 'linear-gradient(135deg, #90caf9 60%, #f8bbd0 100%)'
                  : '#fff',
                color: selectedDate === dateStr
                  ? '#fff'
                  : hasSession
                  ? '#1976d2'
                  : '#888',
                border: isToday ? '2px solid #43a047' : '1px solid #ccc',
                borderRadius: '50%',
                width: 40,
                height: 40,
                margin: '0 auto',
                fontWeight: isToday ? 'bold' : 'normal',
                cursor: hasSession ? 'pointer' : 'default',
                outline: 'none',
                boxShadow: selectedDate === dateStr ? '0 0 12px #1976d2' : 'none',
                transition: '0.2s',
                fontSize: 18,
                position: 'relative'
              }}
              disabled={!hasSession}
              onClick={() => setSelectedDate(dateStr)}
              title={hasSession ? 'Sessions scheduled' : ''}
            >
              {day.getDate()}
              {/* Small dot for days with sessions */}
              {hasSession && (
                <span style={{
                  position: 'absolute',
                  bottom: 6,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 8,
                  height: 8,
                  background: selectedDate === dateStr ? '#fff' : '#1976d2',
                  borderRadius: '50%',
                  display: 'block'
                }} />
              )}
            </button>
          );
        })}
      </Box>

      {/* Show sessions for selected day */}
      {selectedDate && selectedDaySessions && (
        <Card sx={{
          mt: 2,
          background: 'linear-gradient(135deg, #e3f2fd 60%, #fce4ec 100%)',
          borderRadius: 3,
          boxShadow: 2
        }}>
          <CardContent>
            <Typography variant="h6" gutterBottom sx={{ color: '#1976d2', fontWeight: 700 }}>
              Sessions for {selectedDate}:
            </Typography>
            <ul style={{ paddingRight: 0 }}>
              {selectedDaySessions.sessions.map(session => {
                const sessionDateTime = new Date(`${selectedDate}T${session.hour}`);
                const now = new Date();
                const isPast = sessionDateTime < now;

                return (
                  <li key={session.patientSessionId} style={{ marginBottom: 8, listStyle: 'none' }}>
                    <Typography>
                      <b>{session.hour}</b> - {session.sessionType}<br />
                      <span style={{ color: '#1976d2' }}>
                        Patient: {getPatientName(session.patientId)}
                      </span>
                    </Typography>
                    {/* הצג משוב רק אם התור עבר */}
                    {isPast && (
                      <FeedbackForm
                        sessionId={session.patientSessionId}
                        initialFeedback={session.feedback}
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </CardContent>
        </Card>
      )}
    </Box>
  );
}