import './App.css';
import { useState } from 'react';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';


function App() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`bg-blue w-screen relative ${
        open === true ? 'overflow-hidden h-screen' : 'overflow-x-hidden'
      }`}
    >
      <Navbar open={open} setOpen={setOpen} />
      <HomePage />
    </div>
  );
}

export default App;
