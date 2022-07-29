import Home from './pages/Home/Home';
import './App.css';
// import NavBar from './components/NavBar/NavBar';
// import { useEffect, useState } from 'react';
import {HashRouter, Routes, Route} from 'react-router-dom';
import Hotels from './pages/Hotels/Hotels';
import HotelPage from './pages/HotelPage/HotelPage';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp';
import Bookings from './pages/Bookings/Bookings';

function App() {

  // const []

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/hotels/:city' element={<Hotels />} />
          <Route path='/hotel/:hotelname' element={<HotelPage />} />
          <Route path='/bookings' element={<Bookings />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
