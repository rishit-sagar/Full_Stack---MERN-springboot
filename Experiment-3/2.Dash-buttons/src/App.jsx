// App.js
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function Profile() {
  return (
    <div>
      <h1>Rishit Sagar</h1>
      <h2>Full Stack</h2>
      <marquee behavior="scroll" direction="left" scrollamount="5">
        Welcome to my profile dashboard 🚀
      </marquee>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h1>Skills</h1>
      <h2>HTML</h2>
      <h2>CSS</h2>
      <h2>JavaScript</h2>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>Dashboard</h1>
        <nav>
          <Link to="/profile">
            <button>Go to Profile</button>
          </Link>
          <Link to="/dashboard">
            <button>Go to Dashboard</button>
          </Link>
        </nav>
      </header>

      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;