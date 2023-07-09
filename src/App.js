import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Adminlogin from './pages/Adminlogin';
import Admindash from './pages/Admindash';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/adminlogin' element={<Adminlogin />} />
        <Route exact path='/admindash' element={<Admindash />} />
      </Routes>
    </div>
  );
}

export default App;
