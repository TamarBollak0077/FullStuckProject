
import { configureStore } from '@reduxjs/toolkit';
import patientReducer from "./patientsSlice";
import therpistsReducer from "./therapistsSlice";

const store = configureStore({
  reducer: {
    therapists:therpistsReducer,
    patients: patientReducer,
  },

});

export default store;
