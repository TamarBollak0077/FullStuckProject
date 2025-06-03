import React from 'react';
import { Button } from '@mui/material';

const ContactTherapist = ({ user }) => {
  const therapistEmail = "therapist@example.com"; // כאן ניתן להחליף לכתובת דינמית

  const handleContactClick = () => {
    const subject = encodeURIComponent(`Contact from patient ${user.firstName} ${user.lastName}`);
    window.location.href = `mailto:${therapistEmail}?subject=${subject}`;
  };

  return (
    <li>
      <Button
        variant="text"
        color="primary"
        onClick={handleContactClick}
        sx={{ textTransform: 'none', padding: 0, minWidth: 0 }}
      >
        Contact your therapist directly
      </Button>
    </li>
  );
};

export default ContactTherapist;
