// App.js
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function Profile() {
  return (
    <>
      <h1>Rishit Sagar</h1>
      <h2>Full Stack</h2>
    </>
  );
}

function Dashboard() {
  return (
    <>
      <h1>Skills</h1>
      <h2>HTML</h2>
      <h3>CSS</h3>
    </>
  );
}

function Navbar() {
  return (
    <nav style={{ marginBottom: "20px" }}>
      <Link to="/profile" style={{ marginRight: "10px" }}>Profile</Link>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;