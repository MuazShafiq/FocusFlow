import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox, faCalendarAlt, faCog, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import Calendar from 'react-calendar';
import Logo from '../src/assets/Logo.png';
import 'react-calendar/dist/Calendar.css';

const Dashboard: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState('');
  const [showCalendarContent, setShowCalendarContent] = useState(false);
  const [showAdditionalRectangle, setShowAdditionalRectangle] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [showDoneButton, setShowDoneButton] = useState(true);
  const [showTaskNameField, setShowTaskNameField] = useState(true);
  const [showDescriptionField, setShowDescriptionField] = useState(true);

  const [displayedTask, setDisplayedTask] = useState<{
    name: string;
    description: string;
  } | null>(null);

  const [tasksByDate, setTasksByDate] = useState<{ [date: string]: { name: string; description: string }[] }>({});

  const handleButtonClick = (buttonName: string) => {
    if (selectedButton === buttonName) {
      setSelectedButton('');
      setShowCalendarContent(false);
      setShowAdditionalRectangle(false);
      setShowTaskNameField(false);
      setShowDescriptionField(false);
      setShowDoneButton(false);
    } else {
      setSelectedButton(buttonName);
      if (buttonName === 'calendar') {
        setShowCalendarContent(true);
        setShowAdditionalRectangle(false);
      } else {
        setShowCalendarContent(false);
        setShowAdditionalRectangle(false);
        setShowTaskNameField(false);
        setShowDescriptionField(false);
        setShowDoneButton(false);
      }
    }
  };

  const handleAddRectangleClick = () => {
    setShowAdditionalRectangle(!showAdditionalRectangle);
    setShowTaskNameField(true);
    setShowDescriptionField(true);
    setShowDoneButton(true);
  };

  const handleDoneButtonClick = () => {
    setDisplayedTask({ name: taskName, description });
    setTaskName('');
    setDescription('');
    setShowTaskNameField(false);
    setShowDescriptionField(false);
    setShowAdditionalRectangle(true);
    setShowDoneButton(false);

    const date = new Date().toISOString().split('T')[0];
    if (tasksByDate[date]) {
      setTasksByDate({
        ...tasksByDate,
        [date]: [...tasksByDate[date], { name: taskName, description }],
      });
    } else {
      setTasksByDate({
        ...tasksByDate,
        [date]: [{ name: taskName, description }],
      });
    }
  };

  return (
    <div className="relative h-screen w-screen flex justify-center items-center">
      <div className="flex flex-col h-full w-full p-4">
        {/* Header */}
        <div className="bg-customGray2 rounded-lg py-3 flex items-center w-full mb-2 mt-[-5px] ml-0">
          <div className="flex items-center h-full">
            <img src={Logo} alt="Logo" className="w-45 h-10 ml-4 mr-8 mt-[-6px]" />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-row h-full w-full">
          {/* Sidebar */}
          <div className="bg-customGray2 rounded-lg py-3 flex flex-col items-center justify-between flex-1 mb-[-5px] mr-2" style={{ width: '25%', minWidth: '300px' }}>
            <div className="flex flex-col justify-center h-full">
              {/* Inbox Button */}
              <button
                className={`w-full text-white rounded-md py-2 px-4 mb-2 self-start flex items-center ${selectedButton === 'inbox' ? 'bg-customGray' : 'bg-customGray2 hover:bg-customGray focus:bg-customGray focus:outline-none transition-colors duration-300'}`}
                style={{ width: '280px' }}
                onClick={() => handleButtonClick('inbox')}
              >
                <FontAwesomeIcon icon={faInbox} className="mr-2" /> Inbox
              </button>

              {/* Calendar Button */}
              <button
                className={`w-full text-white rounded-md py-2 px-4 mb-2 self-start flex items-center ${selectedButton === 'calendar' ? 'bg-customGray' : 'bg-customGray2 hover:bg-customGray focus:bg-customGray focus:outline-none'}`}
                style={{ width: '280px' }}
                onClick={() => handleButtonClick('calendar')}
              >
                <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" /> Calendar
              </button>

              {/* Settings Button */}
              <div className="flex-grow"></div>
              <button
                className={`w-full text-white rounded-md py-2 px-4 self-end flex items-center ${selectedButton === 'settings' ? 'bg-customGray' : 'bg-customGray2 hover:bg-customGray focus:bg-customGray focus:outline-none'}`}
                style={{ width: '280px' }}
                onClick={() => handleButtonClick('settings')}
              >
                <FontAwesomeIcon icon={faCog} className="mr-2" /> Settings
              </button>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="bg-customGray2 rounded-lg py-3 flex flex-col items-center justify-between flex-2 mb-[-5px] mr-2" style={{ width: '45%', minWidth: '100px' }}>
            <div className="w-full flex flex-col items-start">
              {showCalendarContent && (
                <div className="bg-customGray rounded-lg p-4 w-11/12 mx-auto mt-4 mb-2 text-white flex items-center">
                  <FontAwesomeIcon icon={faPlusSquare} className="mr-2" onClick={handleAddRectangleClick} />
                  Add Tasks
                </div>
              )}

              {showAdditionalRectangle && (
                <div className="bg-customGray rounded-lg p-4 w-11/12 mx-auto mt-2 mb-2 flex flex-col text-white">
                  {displayedTask && (
                    <div className="flex flex-col">
                      <h3 className="text-white mb-2">{displayedTask.name}</h3>
                      <p className="text-white mb-2">{displayedTask.description}</p>
                    </div>
                  )}
                  {showTaskNameField && (
                    <div className="flex flex-col">
                      <input
                        id="taskName"
                        type="text"
                        placeholder="Task Name"
                        className="border rounded-md p-2 mb-2"
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                        style={{ textAlign: 'left', color: 'black' }}
                      />
                    </div>
                  )}
                  {showDescriptionField && (
                    <div className="flex flex-col">
                      <textarea
                        id="description"
                        placeholder="Description"
                        className="border rounded-md p-2 mb-2 resize-y"
                        rows={4}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        style={{ textAlign: 'left', color: 'black' }}
                      />
                    </div>
                  )}
                  {showDoneButton && (
                    <button
                      className="bg-customGray2 text-white py-2 px-4 rounded-md"
                      onClick={handleDoneButtonClick}
                    >
                      Done
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
          {/* Placeholder for additional content */}
          <div className="bg-customGray2 rounded-lg py-3 flex items-center flex-4 mb-[-5px]" style={{ width: '100%', minWidth: '200px', justifyContent: 'center' }}>
            {showCalendarContent && (
              <div className="text-center">
                <Calendar
                  tileContent={({ date }) => {
                    const formattedDate = date.toISOString().split('T')[0];
                    if (tasksByDate[formattedDate]) {
                      return tasksByDate[formattedDate].map((task, index) => (
                        <div key={index}>
                          {task.name} - {task.description}
                        </div>
                      ));
                    }
                    return null;
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
