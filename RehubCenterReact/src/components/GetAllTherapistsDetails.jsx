import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTherapist, setTherapists, updateTherapist } from '../redux/therapistsSlice';
import {
    Card,
    CardContent,
    Avatar,
    Typography,
    Grid,
} from "@mui/material";


const GetAllTherapistsDetails = () => {
    const dispatch = useDispatch();
    const therapists = useSelector(state => state.therapists || []); // הגדרת ברירת מחדל

    const handleRemoveTherapist = (therapistId) => {
        dispatch(removeTherapist({ id: therapistId }));
    };

    const handleupdateTherapist = (therapist) => {
        dispatch(updateTherapist(therapist));
    };


    React.useEffect(() => {
        const fetchTherapists = async () => {
            try {
                const response = await fetch('http://localhost:5253/api/therapist');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                dispatch(setTherapists(data));
            } catch (error) {
                console.error('There was a problem with your fetch operation:', error);
            }
        };

        fetchTherapists();
    }, [dispatch]);

    return (

        <div className="therapists-details">
           <h1 style={{ textAlign: "left", color: "#223a5e", fontWeight: 700, fontSize: "2rem", marginBottom: 24 }}>
             {/* Our Therapists */}
           </h1>

            <Grid container spacing={3}>
                {therapists.map((therapist) => (
                    <Grid xs={12} sm={6} md={4} key={therapist.therapistId}>
                        <Card sx={{ textAlign: "center", p: 2, boxShadow: 3 }}>
                            <Grid container alignItems="center" justifyContent="flex-start" direction="row">
                                <Grid item xs={5} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                                    <Avatar
                                        src={`http://localhost:5253/Images/therapists/${therapist.therapistId}.png`}
                                        alt="Profile"
                                        sx={{
                                            width: 120,
                                            height: 120,
                                            mb: 2,
                                            mr: 2 // מרווח מימין
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={7}>
                                    <CardContent sx={{ textAlign: "left", p: 1 }}>
                                        <Typography variant="subtitle1" sx={{ fontSize: '1rem', fontWeight: 600 }}>
                                            {therapist.title} {therapist.firstName} {therapist.lastName}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.9rem', fontWeight: 400 }}>
                                            {therapist.description}
                                        </Typography>
                                    </CardContent>
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
