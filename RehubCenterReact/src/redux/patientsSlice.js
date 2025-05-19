<<<<<<< HEAD
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for adding a new patient
export const addPatient = createAsyncThunk(
  'patients/addPatient',
  async (newPatient, thunkAPI) => {
    try {
const response = await fetch('http://localhost:5253/api/patient/signup', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(newPatient),
});


      if (!response.ok) {
        const error = await response.text();
        return thunkAPI.rejectWithValue(error);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Network error');
    }
  }
);

// Async thunk for fetching all patients
export const fetchPatients = createAsyncThunk(
  'patients/fetchPatients',
  async (_, thunkAPI) => {
    try {
      const response = await fetch('http://localhost:5000/api/patient');
      if (!response.ok) {
        const error = await response.text();
        return thunkAPI.rejectWithValue(error);
      }
      return await response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue('Network error');
    }
  }
);

const patientSlice = createSlice({
  name: 'patients',
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {
    // Optional: remove or update patients manually
    removePatient: (state, action) => {
      state.list = state.list.filter(patient => patient.patientId !== action.payload);
    },
    updatePatient: (state, action) => {
      const index = state.list.findIndex(p => p.patientId === action.payload.patientId);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // Add Patient
      .addCase(addPatient.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addPatient.fulfilled, (state, action) => {
        state.loading = false;
        state.list.push(action.payload);
      })
      .addCase(addPatient.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Fetch Patients
      .addCase(fetchPatients.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPatients.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchPatients.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { removePatient, updatePatient } = patientSlice.actions;
export default patientSlice.reducer;
=======
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


>>>>>>> cea7f262b2e29ac0a0fc93f618fc5467922301f4
