import { useState } from 'react';
import Clock from "./components/clock";

import './App.css'

function App() {
  const [use24Hours, setUse24Hours] = useState(false);

  return (
    <>
      <Clock use24Hours={use24Hours} />
    </>
  )
}

export default App
