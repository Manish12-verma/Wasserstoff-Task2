import './App.css';
import Register from './pages/Register';
import TicketGenerated from './pages/TicketGenerated';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/ticket" element={<TicketGenerated />} />
      </Routes>
    </Router>
  );
}

export default App;
