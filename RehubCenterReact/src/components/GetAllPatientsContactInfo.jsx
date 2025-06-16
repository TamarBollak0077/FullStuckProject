import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../api';


const GetAllPatientsContactInfo = () => {
    const dispatch = useDispatch();
    const contactInfo = useSelector(state => state.contactInfo || []); // הגדרת ברירת מחדל

    useEffect(() => {
        fetchData('http://localhost:5253/api/patient/contactInfo')
            .then(data => {
                dispatch({ type: 'SET_CONTACT_INFO', payload: data }); // שקול להמיר לפעולה
            })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
            });
    }, [dispatch]);

    return (
        <div className="contact-info">
            {contactInfo.map((info, index) => (
                <div key={index}>{info}</div>
            ))}
        </div>
    );
};

export default GetAllPatientsContactInfo;
