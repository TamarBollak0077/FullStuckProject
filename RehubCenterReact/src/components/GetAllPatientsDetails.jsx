import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removePatient, setPatients, updatePatient } from '../redux/patientsSlice';


const GetAllPatientsDetails = () => {
    const dispatch = useDispatch();
    const patients = useSelector(state => state.patients || []); // הגדרת ברירת מחדל

    const handleRemovePatient = (patientId) => {
        dispatch(removePatient({ id: patientId }));
    };

    const handleUpdatePatient = (patient) => {
        dispatch(updatePatient(patient));
    };

    React.useEffect(() => {
        const fetchPatients = async () => {
            try {
                const response = await fetch('http://localhost:5253/api/patient');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                dispatch(setPatients(data));
            } catch (error) {
                console.error('There was a problem with your fetch operation:', error);
            }
        };

        fetchPatients();
    }, [dispatch]);

    return (
        <div className="patients-details">
            {patients.map((patient) => (
                <div key={patient.patientId} className="patient-card">
                    <span>{patient.firstName} {patient.lastName}, {patient.contactInfo}</span>
                    <button onClick={() => handleRemovePatient(patient.patientId)}>Remove</button>
                    <button onClick={() => handleUpdatePatient({ ...patient, firstName: 'Updated Name' })}>Update</button>
                </div>
            ))}
        </div>
    );
};

export default GetAllPatientsDetails;
