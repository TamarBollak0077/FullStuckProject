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
           <h1></h1>

            <Grid container spacing={3}>
                {therapists.map((therapist) => (
                    <Grid xs={12} sm={6} md={4} key={therapist.therapistId}>
                        <Card sx={{ textAlign: "center", p: 2, boxShadow: 3 }}>
                            <Grid container alignItems="center" justifyContent="flex-end" direction="row-reverse">
                                <Grid xs={5} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <Avatar
                                        src={`http://localhost:5253/Images/therapists/${therapist.therapistId}.png`}
                                        alt="תמונה"
                                        sx={{
                                            width: 220,
                                            height: 220,
                                            mb: 2,
                                            mr: 2
                                        }}
                                    />
                                </Grid>
                                <Grid xs={7}>
                                    <CardContent sx={{ textAlign: "left" }}>
                                        <Typography variant="h5">
                                            {therapist.title} {therapist.firstName} {therapist.lastName}
                                        </Typography>
                                        <Typography variant="h6" color="text.secondary" sx={{ fontSize: '1.3rem', fontWeight: 500 }}>
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
