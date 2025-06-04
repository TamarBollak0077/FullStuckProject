import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import GetAllTherapistsDetails from './components/GetAllTherapistsDetails';
import GetAllPatientsContactInfo from './components/GetAllPatientsContactInfo';
import Login from './components/Login';
import Signup from './components/Signup';
import SignupSuccess from './components/SignupSuccess';
import About from './components/About';
import PersonalArea from './components/PersonalArea';
import './App.css';
import TherapistDetails from './components/GetAllTherapistsDetails'; // או השם של הקומפוננטה שמציגה מטפל בודד
// עמודים נוספים
// const About = () => (
//   <div style={{ padding: 32 }}>
//     <h2>אודות</h2>
//     <p>מידע על המרכז...</p>
//   </div>
// );

function ForceHomeOnRefresh({ children }) {
  const location = useLocation();
  React.useEffect(() => {
    if (performance.navigation.type === 1 && location.pathname !== '/') {
      window.location.replace('/');
    }
  }, [location]);
  return children;
}

function App() {
  return (
    <Router>
      <ForceHomeOnRefresh>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Navigate to="/login" replace />} />
          <Route path="/About" element={<About />} />
          <Route path="/therapists" element={<GetAllTherapistsDetails />} />
          <Route path="/therapists/:therapistId" element={<TherapistDetails />} />
          <Route path="/patients-contact" element={<GetAllPatientsContactInfo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/personal-area" element={<PersonalArea />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup-success" element={<SignupSuccess />} />
        </Routes>
      </ForceHomeOnRefresh>
    </Router>
  );
}

export default App;
