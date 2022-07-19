import Home from './pages/Home/Home';
import './App.css';
// import NavBar from './components/NavBar/NavBar';
// import { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Hotels from './pages/Hotels/Hotels';

function App() {

  // const []

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/hotels/:city' element={<Hotels />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
