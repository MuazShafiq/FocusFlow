import React from 'react';

const Dashboard: React.FC = () => {
  const mainContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '8rem',
  };

  const topRectangleStyle: React.CSSProperties = {
    width: '100%', // Adjust width as needed
    height: '90px', // Adjust height as needed
    backgroundColor: '#E5E7EB', // Example background color
    marginBottom: '20px', // Space below top rectangle
    borderRadius: '8px', // Rounded corners
  };

  const rowContainerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-around', // Equal space between rectangles
    width: '100%', // Adjust width as needed
  };

  const rectangleStyle: React.CSSProperties = {
    width: '300px', // Adjust width as needed
    height: '200px', // Adjust height as needed
    backgroundColor: '#E5E7EB', // Example background color
    borderRadius: '8px', // Rounded corners
  };

  return (
    <div style={mainContainerStyle}>
      {/* Top Rectangle */}
      <div style={topRectangleStyle}>
        <h2 className="text-lg font-semibold mb-2">Header</h2>
        {/* Content */}
      </div>

      {/* Row of Rectangles */}
      <div style={rowContainerStyle}>
        {/* Sidebar Rectangle */}
        <div style={rectangleStyle}>
          <h2 className="text-lg font-semibold mb-2">Sidebar</h2>
          {/* Sidebar content */}
        </div>

        {/* Tasks Rectangle */}
        <div style={rectangleStyle}>
          <h2 className="text-lg font-semibold mb-2">Tasks</h2>
          {/* Tasks content */}
        </div>

        {/* Calendar Rectangle */}
        <div style={rectangleStyle}>
          <h2 className="text-lg font-semibold mb-2">Calendar</h2>
          {/* Calendar content */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
