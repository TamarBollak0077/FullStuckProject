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
}

export default App;
