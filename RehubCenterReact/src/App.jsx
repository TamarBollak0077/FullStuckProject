<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddPatient from './components/AddPatient';
import Login from './components/Login';
import './App.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AddPatient />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
=======
import { useState } from 'react';
import './App.css';
import GetAllPatientsDetails from './components/GetAllPatientsDetails';
import GetAllPatientsContactInfo from './components/GetAllPatientsContactInfo';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                <h1>Our Patients:</h1>
                <GetAllPatientsDetails />
                <GetAllPatientsContactInfo />
            </div>
        </>
    );
>>>>>>> cea7f262b2e29ac0a0fc93f618fc5467922301f4
}

export default App;
