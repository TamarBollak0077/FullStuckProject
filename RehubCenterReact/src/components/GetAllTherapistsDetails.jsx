import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTherapist, setTherapists, updateTherapist } from '../redux/therapistsSlice';
import {
    Card,
    CardContent,
    Avatar,
    Typography,
    Grid,
    IconButton,
    Tooltip
} from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import '../CSS/GetAllTherapistsDetails.css'; // ייבוא קובץ ה-CSS החדש


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
                        <Card className="therapist-card">
                            <Grid container alignItems="center" justifyContent="flex-start" direction="row">
    <Grid item xs={5} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1 }}>
        <Avatar
            src={`http://localhost:5253/Images/therapists/${therapist.therapistId}.png`}
            alt="Profile"
            className="therapist-avatar"
            sx={{ width: 70, height: 70 }}
        />
        <div className="therapist-icons">
            <Tooltip title="Instagram">
                <IconButton
                    className="instagram"
                    component="a"
                    href={therapist.instagram ? therapist.instagram : "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <InstagramIcon fontSize="large" />
                </IconButton>
            </Tooltip>
            <Tooltip title="Send Email">
                <IconButton
                    className="email"
                    component="a"
                    href={`mailto:${therapist.ContactInfo ? therapist.ContactInfo : ''}`}
                >
                    <EmailIcon fontSize="large" />
                </IconButton>
            </Tooltip>
        </div>
    </Grid>
    <Grid item xs={7}>
        <CardContent>
            <Typography className="therapist-name">
                {therapist.title} {therapist.firstName} {therapist.lastName}
            </Typography>
            <Typography className="therapist-desc">
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
