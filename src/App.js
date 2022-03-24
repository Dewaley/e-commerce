import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './components/Product';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';

function App() {
  const [open, setOpen] = useState(false);
  return (
    <Router>
      <div
        className={`bg-blue relative ${
          open === true ? 'overflow-hidden h-screen' : 'overflow-x-hidden'
        }`}
      >
        <Navbar open={open} setOpen={setOpen} />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/product/:id' element={<Product />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
