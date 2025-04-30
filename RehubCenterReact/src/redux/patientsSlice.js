import { createSlice } from '@reduxjs/toolkit';

const patientsSlice = createSlice({
    name: 'patients',
    initialState: [],
    reducers: {
        setPatients: (state, action) => {
            return action.payload; // עדכון רשימת המטופלים
        },
        removePatient: (state, action) => {
            return state.filter(patient => patient.patientId !== action.payload.id); // הסרת מטופל
        },
        updatePatient: (state, action) => {
            return state.map(patient => 
                patient.patientId === action.payload.patientId ? action.payload : patient // עדכון מטופל קיים
            );
        },
    },
});

export const { setPatients, removePatient, updatePatient } = patientsSlice.actions;
export default patientsSlice.reducer;


