import React from 'react';
import { Counter } from './rtk/features/counter/Counter';
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
        <Route path='/counter' element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
