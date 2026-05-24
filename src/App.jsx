import { Navigate, Routes, Route } from 'react-router';
import ClockPage from './pages/ClockPage';
import StopwatchPage from './pages/StopwatchPage';
import AlarmPage from './pages/AlarmPage';

import './App.css'

function App() {

  return (
    <Routes>
      <Route index element={<Navigate to="/clock" />} />
      <Route path="/clock" element={<ClockPage />} />
      <Route path="/stopwatch" element={<StopwatchPage />} />
      <Route path="/alarm" element={<AlarmPage />} />
    </Routes>
  )
}

export default App
