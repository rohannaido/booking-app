import Home from './pages/Home/Home';
import './App.css';
// import NavBar from './components/NavBar/NavBar';
// import { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Hotels from './pages/Hotels/Hotels';
import HotelPage from './pages/HotelPage/HotelPage';

function App() {

  // const []

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/hotels/:city' element={<Hotels />} />
          <Route path='/hotel/:hotelname' element={<HotelPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
