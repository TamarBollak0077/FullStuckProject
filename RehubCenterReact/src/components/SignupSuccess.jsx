import React from 'react';

const SignupSuccess = () => (
  <div
    style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(to right, #f5f7fa, #c3cfe2)',
    }}
  >
    <div>
      <h2 style={{ color: '#223a5e', marginBottom: 16 }}>Registration Successful!</h2>
      <p style={{ color: '#223a5e', fontSize: '1.2rem' }}>
        Please wait to be contacted.
      </p>
    </div>
  </div>
);

export default SignupSuccess;
