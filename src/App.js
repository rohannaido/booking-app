import Home from './pages/Home/Home';
import './App.css';
// import NavBar from './components/NavBar/NavBar';
// import { useEffect, useState } from 'react';
import {HashRouter, Routes, Route} from 'react-router-dom';
import Hotels from './pages/Hotels/Hotels';
import HotelPage from './pages/HotelPage/HotelPage';

function App() {

  // const []

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/hotels/:city' element={<Hotels />} />
          <Route path='/hotel/:hotelname' element={<HotelPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
