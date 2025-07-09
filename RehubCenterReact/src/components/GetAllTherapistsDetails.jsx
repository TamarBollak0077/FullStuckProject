import React from 'react';
import { useLocation } from 'react-router-dom';
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
import { Link } from 'react-router-dom';


const GetAllTherapistsDetails = () => {
    const dispatch = useDispatch();
    const therapists = useSelector(state => state.therapists || []);
    const location = useLocation();

    React.useEffect(() => {
        if (location.hash) {
            const el = document.getElementById(location.hash.replace('#', ''));
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    }, [location, therapists]);

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

            <h1 className="therapists-title">
                Meet Our Therapists
            </h1>
            <p className="therapists-subtitle">
                Here you can find information about each therapist, contact them, and visit their social profiles.
            </p>
            <Grid container spacing={3}>
                {therapists.map((therapist) => {
                    console.log("therapist:", therapist); // הוסף שורה זו
                    return (
                        <Grid xs={12} sm={6} md={4} key={therapist.therapistId} id={`therapist-${therapist.therapistId}`}>
                            <Card className="therapist-card">
                                <Grid container alignItems="center" justifyContent="flex-start" direction="row">
                                    <Grid item xs={5} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1 }}>
                                        <Link to={`/therapists#therapist-${therapist.therapistId}`}>
                                            <Avatar
                                                src={`http://localhost:5253/Images/therapists/${therapist.therapistId}.png`}
                                                alt="Profile"
                                                className="therapist-avatar"
                                                sx={{ width: 70, height: 70, cursor: 'pointer' }}
                                            />
                                        </Link>
                                        <div className="therapist-icons">
                                            <Tooltip title={therapist.instagram ? `Instagram: ${therapist.instagram.replace('https://instagram.com/', '')}` : "No Instagram"}>
                                                <span>
                                                    <IconButton
                                                        className="instagram"
                                                        component="a"
                                                        href={therapist.instagram ? therapist.instagram : undefined}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        sx={{
                                                            color: '#E1306C', // תמיד ורוד
                                                            cursor: 'pointer',
                                                            transition: 'color 0.2s',
                                                            '&:hover': {
                                                                color: '#ad1457'
                                                            }
                                                        }}
                                                    >
                                                        <InstagramIcon fontSize="large" />
                                                    </IconButton>
                                                </span>
                                            </Tooltip>
                                            <Tooltip title="Send Email">
                                                <IconButton
                                                    className="email"
                                                    component="a"
                                                    href={
                                                        therapist.contactInfo
                                                            ? `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(therapist.contactInfo)}&su=${encodeURIComponent('הי ' + therapist.firstName + ' ' + therapist.lastName)}`
                                                            : `https://mail.google.com/mail/?view=cm&fs=1&to=info@retorno.org.il&su=פנייה מהאתר ריטורנו`
                                                    }
                                                    target="_blank"
                                                    rel="noopener noreferrer"
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
                    );
                })}

            </Grid>
        </div>
    );
};

export default GetAllTherapistsDetails;