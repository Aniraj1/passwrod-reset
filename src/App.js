import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PasswordResetPage from './components/passResetPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/reset/:uid/:token" element={<PasswordResetPage />} />
        {/* Other routes and components */}
      </Routes>
    </Router>
  );
};

export default App;
