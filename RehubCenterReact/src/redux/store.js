import { configureStore } from "@reduxjs/toolkit";
import patientsSlice from "./patientsSlice";

const store = configureStore({
    reducer: {
        patients: patientsSlice
    }
});

export default store;
