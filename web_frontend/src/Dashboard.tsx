import React from 'react';
import Logo from '../src/assets/Logo.png';

const Dashboard: React.FC = () => {
  return (
    <div className="relative h-screen w-screen flex justify-center items-center">
      {/* Wrapper div for all rectangles */}
      <div className="flex flex-col h-full w-full p-4">
        {/* First rectangle (Current one) */}
        <div className="bg-customGray2 rounded-lg py-3 flex items-center w-full mb-2 mt-[-5px] ml-0">
          {/* Left-aligned logo */}
          <div className="flex items-center h-full">
            <img src={Logo} alt="Logo" className="w-45 h-10 ml-4 mr-8 mt-[-6px]" />
            {/* Add other content here */}
          </div>
        </div>

        {/* Second row for three rectangles */}
        <div className="flex flex-row h-full w-full">
          {/* Second rectangle */}
          <div className="bg-customGray2 rounded-lg py-3 flex items-center flex-1 mb-[-5px] mr-2" style={{ width: '25%', minWidth: '300px' }}>
            {/* Add content for the second rectangle */}
          </div>

          {/* Third rectangle */}
          <div className="bg-customGray2 rounded-lg py-3 flex items-center flex-2 mb-[-5px] mr-2" style={{ width: '45%', minWidth: '100px' }}>
            {/* Add content for the third rectangle */}
          </div>

          {/* Fourth rectangle */}
          <div className="bg-customGray2 rounded-lg py-3 flex items-center flex-4 mb-[-5px]" style={{ width: '100%', minWidth: '200px' }}>
            {/* Add content for the fourth rectangle */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
