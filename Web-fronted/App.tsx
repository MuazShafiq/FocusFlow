import React from 'react';
import './App.css';
import Login from './Login';
import { Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className='bg-cover bg-center h-screen' style={{ backgroundColor: "#2b282f" }}>
      <div className='flex justify-center items-center h-full'>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
