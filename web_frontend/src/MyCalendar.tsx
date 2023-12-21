import React, { useState } from 'react';

const MyCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const handlePrev = () => {
    setSelectedDate(prevDate => {
      const prevMonth = new Date(prevDate);
      prevMonth.setMonth(prevMonth.getMonth() - 1);
      return prevMonth;
    });
  };

  const handleNext = () => {
    setSelectedDate(prevDate => {
      const nextMonth = new Date(prevDate);
      nextMonth.setMonth(nextMonth.getMonth() + 1);
      return nextMonth;
    });
  };

  const renderCalendar = () => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const firstDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
    const startingDay = firstDayOfMonth.getDay();
    const totalDays = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate();

    const calendarDays: JSX.Element[] = [];
    let dayCounter = 1;

    for (let i = 0; i < 6; i++) {
      const week: JSX.Element[] = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < startingDay) {
          week.push(<td key={j} className="border px-4 py-2"></td>);
        } else if (dayCounter <= totalDays) {
          week.push(
            <td key={j} className="border px-4 py-2">
              {dayCounter}
            </td>
          );
          dayCounter++;
        } else {
          week.push(<td key={j} className="border px-4 py-2"></td>);
        }
      }
      calendarDays.push(<tr key={i}>{week}</tr>);
    }

    return (
      <table className="w-full">
        <thead>
          <tr>
            <th colSpan={7} className="text-center py-2">
              <button onClick={handlePrev} className="px-2 py-1 bg-blue-500 text-white rounded-md mr-2">
                Prev
              </button>
              <span>{months[selectedDate.getMonth()]} {selectedDate.getFullYear()}</span>
              <button onClick={handleNext} className="px-2 py-1 bg-blue-500 text-white rounded-md ml-2">
                Next
              </button>
            </th>
          </tr>
          <tr>
            {daysOfWeek.map(day => (
              <th key={day} className="border px-4 py-2">{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>{calendarDays}</tbody>
      </table>
    );
  };

  return (
    <div className="my-calendar bg-gray-100 p-4 rounded-md" style={{ width: '700px', height: '600px' }}>
      <div className="calendar-nav flex items-center justify-between mb-4">
        <div className="flex items-center">
          <select
            onChange={(e) => setSelectedDate(prevDate => new Date(prevDate.setFullYear(parseInt(e.target.value, 10))))}
            className="border rounded-md px-2 py-1 mr-2"
          >
            {[...Array(50)].map((_, i) => (
              <option key={i} value={selectedDate.getFullYear() - 25 + i}>
                {selectedDate.getFullYear() - 25 + i}
              </option>
            ))}
          </select>
          <select
            onChange={(e) => setSelectedDate(prevDate => new Date(prevDate.setMonth(parseInt(e.target.value, 10))))}
            className="border rounded-md px-2 py-1 mr-2"
          >
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i} value={i}>
                {i + 1}
              </option>
            ))}
          </select>
          <select
            onChange={(e) => setSelectedDate(prevDate => new Date(prevDate.setDate(parseInt(e.target.value, 10))))}
            className="border rounded-md px-2 py-1"
          >
            {Array.from({ length: 31 }, (_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="calendar-view">
        {renderCalendar()}
      </div>
    </div>
  );
};

export default MyCalendar;
