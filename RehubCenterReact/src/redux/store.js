import { configureStore } from '@reduxjs/toolkit';
import patientReducer from "./patientsSlice";

const store = configureStore({
  reducer: {
    patients: patientReducer,
  },
});

export default store;
