import './App.css';
import { useState } from 'react';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';


function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className={`bg-blue overflow-x-hidden w-screen relative ${open ? 'overflow-y-hidden h-screen' : null}`}>
      <Navbar open={open} setOpen={setOpen}/>
      <HomePage/>
    </div>
  );
}

export default App;
