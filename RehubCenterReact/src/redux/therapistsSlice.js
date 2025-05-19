import { createSlice } from '@reduxjs/toolkit';

const therapistsSlice = createSlice({
    name: 'therapists',
    initialState: [],
    reducers: {
        setTherapists: (state, action) => {
            return action.payload; // עדכון רשימת המטפלים
        },
        removeTherapist: (state, action) => {
            return state.filter(therapist => therapist.therapistId !== action.payload.id); // הסרת מטופל
        },
        updateTherapist: (state, action) => {
            return state.map(therapist => 
                therapist.therapistId === action.payload.therapistId ? action.payload : therapist // עדכון מטופל קיים
            );
        },
    },
});

export const { setTherapists, removeTherapist, updateTherapist } = therapistsSlice.actions;
export default therapistsSlice.reducer;


