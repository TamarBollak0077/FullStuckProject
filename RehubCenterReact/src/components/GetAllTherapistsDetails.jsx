import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTherapist, setTherapists, updateTherapist } from '../redux/therapistsSlice';
import {
    Card,
    CardContent,
    Avatar,
    Typography,
    Button,
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
            <h1>Our Therapists:</h1>

            <Grid container spacing={3}>
                {therapists.map((therapist) => (
                    <Grid item xs={12} sm={6} md={4} key={therapist.therapistId}>
                        <Card sx={{ textAlign: "center", p: 2, boxShadow: 3 }}>
                            <Avatar
                                src={`http://localhost:5253/Images/therapists/${therapist.therapistId}.png`}
                                alt="תמונה"
                                sx={{
                                    width: 180,
                                    height: 180,
                                    margin: "0 auto",
                                    mb: 2,
                                }}
                            />
                            <CardContent>
                                <Typography variant="h5">
                                    {therapist.firstName} {therapist.lastName}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {therapist.contactInfo}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default GetAllTherapistsDetails;
