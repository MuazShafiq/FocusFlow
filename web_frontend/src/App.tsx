import React from 'react';
import './App.css';
import Login from './Login';
import Register from './Register';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';

const App: React.FC = () => {
  return (
    <div className='bg-cover bg-center h-screen' style={{ backgroundColor: "#323234" }}>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} /> 
          <Route path="/Dashboard" element={<Dashboard />} /> 
      </Routes>
    </div>
  );
};

export default App;
