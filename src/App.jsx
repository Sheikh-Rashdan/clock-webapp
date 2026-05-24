import { Navigate, Routes, Route } from 'react-router';
import BasePage from './pages/BasePage';
import ClockPage from './pages/ClockPage';
import StopwatchPage from './pages/StopwatchPage';
import AlarmPage from './pages/AlarmPage';

import './App.css'

function App() {

  return (
    <Routes>
      <Route index element={<Navigate to="/webapp/clock" />} />
      <Route path="webapp" element={<BasePage />}>
        <Route path="clock" element={<ClockPage />} />
        <Route path="stopwatch" element={<StopwatchPage />} />
        <Route path="alarm" element={<AlarmPage />} />
      </Route>
    </Routes>
  )
}

export default App
