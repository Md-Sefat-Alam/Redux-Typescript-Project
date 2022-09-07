import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Nav from './components/util/Nav';
import Launch from './pages/launch/Launch';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/launch/:flight_number' element={<Launch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
