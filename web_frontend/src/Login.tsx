import React, { useState } from 'react';
import GoogleIcon from '../src/assets/google.png';
import OutlookIcon from '../src/assets/outlook.png';

const Login: React.FC = () => {
  const [activePage, setActivePage] = useState('login');

  const handleGoogleLogin = () => {
    // Handle Google login action
    console.log('Google login button clicked');
  };

  const handleOutlookLogin = () => {
    // Handle Outlook login action
    console.log('Outlook login button clicked');
  };

  const handleSignup = () => {
    setActivePage('signup');
    window.location.href = '/Register'; // Redirect to the 'register' route
    console.log('Signup button clicked');
  };

  const handleLogin = () => {
    setActivePage('login');
    window.location.href = '/Login'; // Redirect to the 'Login' route
    console.log('Login button clicked');
  };

  return (
    <div>
      <div className='bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative'>
        <div className='flex flex-col mb-4'>
          <div className='relative mb-4 flex justify-between'>
            <button
              className={`w-32 py-2 px-3 text-white bg-customGray border border-white rounded-md focus:outline-none focus:border-blue-600 ${activePage === 'signup' ? 'opacity-50 pointer-events-none' : ''}`}
              onClick={handleSignup}
            >
              Signup
            </button>
            <button
              className={`w-32 py-2 px-3 text-white bg-customGray border border-white rounded-md focus:outline-none focus:border-blue-600 ${activePage === 'login' ? 'opacity-50 pointer-events-none' : ''}`}
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
          <div className='relative mb-2'>
            <button className='flex items-center justify-center w-72 py-2 px-3 text-white bg-customGray border border-white rounded-md focus:outline-none focus:border-blue-600' onClick={handleGoogleLogin}>
              <span>Login With Google</span>
              <img src={GoogleIcon} alt="Google Icon" className="ml-2 w-4 h-4" />
            </button>
          </div>
          <div className='relative mb-2'>
            <button className='flex items-center justify-center w-72 py-2 px-3 text-white bg-customGray border border-white rounded-md focus:outline-none focus:border-blue-600' onClick={handleOutlookLogin}>
              <span>Login With Outlook</span>
              <img src={OutlookIcon} alt="Outlook Icon" className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="text-center text-white mb-6 text-2xl font-bold">
          or
        </div>
        <form action="">
          <div className='relative mb-2'>
            <input
              type="email"
              placeholder="Email"
              className='block w-72 py-2 px-3 text-white bg-customGray border border-white rounded-md focus:outline-none focus:border-blue-600'
              style={{ caretColor: 'white' }}
            />
            <style>
              {`input[type="email"]::placeholder {color: #575659;}`}
            </style>
          </div>
          <div className='relative mb-2'>
            <input
              type="password"
              placeholder="Password"
              className='block w-72 py-2 px-3 text-white bg-customGray border border-white rounded-md focus:outline-none focus:border-blue-600'
              style={{ caretColor: 'white' }}
            />
            <style>
              {`input[type="password"]::placeholder {color: #575659;}`}
            </style>
          </div>
          <div className="flex justify-center mt-10">
            <button className='w-32 py-2 px-3 text-white bg-customGray border border-white rounded-md focus:outline-none focus:border-blue-600'>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;