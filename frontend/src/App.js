import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import CyberBatyr from './pages/CyberBatyr';
import Contacts from './pages/Contacts';
import About from './pages/About';
import Partners from './pages/Partners';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/cyber-batyr" element={<CyberBatyr />} />
            <Route path="/cyber-batyr/:newsId" element={<CyberBatyr />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/about" element={<About />} />
            <Route path="/partners" element={<Partners />} />
          </Routes>
        </main>
        <Footer />
    </div>
    </Router>
  );
}

export default App;
