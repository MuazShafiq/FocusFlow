import React from 'react';
import GoogleIcon from '../src/assets/google.png'; 
import OutlookIcon from '../src/assets/outlook.png'; 

const Login: React.FC = () => {
  const handleGoogleLogin = () => {
    console.log('Google login button clicked');
    // Replace placeholders with your actual Google Client ID and Redirect URI
    const clientId = 'YOUR_GOOGLE_CLIENT_ID';
    const redirectUri = 'YOUR_REDIRECT_URI';
  
    // Redirect to Google Sign-in page
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=email%20profile`;
  };  
  
  const handleOutlookLogin = () => {
    console.log('Outlook login button clicked');
    // Define Microsoft OAuth 2.0 parameters
    const clientId = 'YOUR_MICROSOFT_CLIENT_ID';
    const redirectUri = 'YOUR_REDIRECT_URI';
    const scope = 'openid profile email'; // Define necessary scopes
  
    // Redirect users to Microsoft login page
    window.location.href = `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`;
  };
  

  return (
    <div>
      <div className='bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative'>
        <div className='flex flex-col mb-4'>
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
