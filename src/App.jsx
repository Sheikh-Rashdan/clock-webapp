import { Navigate, Routes, Route } from 'react-router';
import ClockPage from './pages/ClockPage';

import './App.css'

function App() {

  return (
    <Routes>
      <Route index element={<Navigate to="/clock" />} />
      <Route path="/clock" element={<ClockPage />} />
    </Routes>
  )
}

export default App
