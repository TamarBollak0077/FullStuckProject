import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTherapists } from '../redux/therapistsSlice';
import {
    Card,
    Avatar,
    Typography,
    Grid,
} from "@mui/material";

const vibrantGreen = '#43D673';     // ירוק חי
const darkGray = '#23272A';         // אפור כהה
const white = '#FFFFFF';
const mediumGray = '#ECECEC';       // רקע מעט כהה יותר

const GetAllTherapistsDetails = () => {
    const dispatch = useDispatch();
    const therapists = useSelector(state => state.therapists || []);

    React.useEffect(() => {
        const fetchTherapists = async () => {
            try {
                const response = await fetch('http://localhost:5253/api/therapist');
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                dispatch(setTherapists(data));
            } catch (error) {
                console.error('בעיה בשליפת הנתונים:', error);
            }
        };
        fetchTherapists();
    }, [dispatch]);

    return (
        <div
            style={{
                minHeight: "100vh",
                backgroundColor: mediumGray,
                paddingTop: "100px",
                paddingBottom: "40px",
            }}
        >
            <Typography
                variant="h4"
                align="center"
                sx={{
                    color: vibrantGreen,
                    fontWeight: 'bold',
                    mb: 6,
                    letterSpacing: 1,
                }}
            >
                המטפלים שלנו
            </Typography>

            <Grid
                container
                spacing={4}
                justifyContent="center"
                sx={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: "0 16px",
                }}
            >
                {therapists.map((therapist) => (
                    <Grid item xs={12} sm={6} md={4} key={therapist.therapistId}>
                        <Card
                            sx={{
                                p: 3,
                                boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                                borderRadius: "20px",
                                background: white,
                                transition: "transform 0.2s, box-shadow 0.2s",
                                '&:hover': {
                                    transform: "translateY(-4px)",
                                    boxShadow: "0 6px 20px rgba(67,214,115,0.2)",
                                },
                            }}
                        >
                            <Grid container alignItems="center" spacing={2}>
                                {/* תמונה */}
                                <Grid item xs={4}>
                                    <Avatar
                                        src={`http://localhost:5253/Images/therapists/${therapist.therapistId}.png`}
                                        alt="תמונה"
                                        sx={{
                                            width: 110,
                                            height: 110,
                                            border: `2.5px solid ${vibrantGreen}`,
                                            backgroundColor: mediumGray,
                                        }}
                                    />
                                </Grid>

                                {/* פרטים */}
                                <Grid item xs={8}>
                                    <Typography variant="h6" sx={{ color: vibrantGreen, fontWeight: 'bold' }}>
                                        {therapist.title} {therapist.firstName} {therapist.lastName}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: darkGray, mt: 1 }}>
                                        {therapist.description}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default GetAllTherapistsDetails;
