import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';

const softGreen = '#4CAF50';        // ירוק רך
const softTurquoise = '#4DB6AC';    // טורקיז רך
const warmDarkGray = '#37474F';     // אפור כהה חם
const offWhite = '#FAFAFA';         // לבן נקי

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Logging in with:', email, password);
    };

    return (
        <Box
            sx={{
                backgroundColor: warmDarkGray,
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                p: 2,
            }}
        >
            <Paper
                elevation={6}
                sx={{
                    backgroundColor: '#455A64',
                    padding: 4,
                    borderRadius: 4,
                    width: '100%',
                    maxWidth: 400,
                }}
            >
                <Typography
                    variant="h5"
                    sx={{ color: softGreen, mb: 3, textAlign: 'center', fontWeight: 'bold' }}
                >
                    התחברות
                </Typography>

                <TextField
                    label="אימייל"
                    variant="outlined"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{
                        mb: 2,
                        '& .MuiInputBase-root': {
                            borderRadius: 2,
                            backgroundColor: offWhite,
                        },
                    }}
                />

                <TextField
                    label="סיסמה"
                    type="password"
                    variant="outlined"
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    sx={{
                        mb: 3,
                        '& .MuiInputBase-root': {
                            borderRadius: 2,
                            backgroundColor: offWhite,
                        },
                    }}
                />

                <Button
                    variant="contained"
                    fullWidth
                    onClick={handleLogin}
                    sx={{
                        backgroundColor: softTurquoise,
                        color: offWhite,
                        fontWeight: 'bold',
                        borderRadius: 2,
                        '&:hover': {
                            backgroundColor: softGreen,
                        },
                    }}
                >
                    התחבר
                </Button>
            </Paper>
        </Box>
    );
};

export default Login;
