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
}

export default App;
