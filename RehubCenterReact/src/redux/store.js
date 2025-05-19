<<<<<<< HEAD
import { configureStore } from '@reduxjs/toolkit';
import patientReducer from "./patientsSlice";

const store = configureStore({
  reducer: {
    patients: patientReducer,
  },
=======
import { configureStore } from "@reduxjs/toolkit";
import patientsSlice from "./patientsSlice";

const store = configureStore({
    reducer: {
        patients: patientsSlice
    }
>>>>>>> cea7f262b2e29ac0a0fc93f618fc5467922301f4
});

export default store;
