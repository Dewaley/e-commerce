import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import ProductPage from './pages/ProductPage';
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
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/product/:id' element={<ProductPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
