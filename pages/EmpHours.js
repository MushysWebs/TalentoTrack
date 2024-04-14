'use client'
import { getSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

const EmpHours = () => {
  const [session, setSession] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [hoursWorked, setHoursWorked] = useState({});
  const [timerId, setTimerId] = useState(null);
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const userSession = await getSession();
      setSession(userSession);
    };


    fetchData();
  }, []);

  useEffect(() => {
    const dateTimeInterval = setInterval(() => {
      setCurrentDateTime(new Date().toLocaleString('en-US', {
        month: 'long', day: 'numeric', year: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true
      }));
    }, 1000);
    return () => clearInterval(dateTimeInterval);
  }, []);


  if (!session) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="border-solid bg-gray-300 p-5 rounded-xl text-center shadow-lg'">
          <p className="text-lg font-semibold mb-2">You currently don't have access to this page, Please log in to gain access.</p>
        </div>
      </div>
    );
  }

  const handleClockIn = () => {
    const currentTime = Date.now();
    setStartTime(currentTime);
  };

  const handleClockOut = () => {
    if (timerId) clearInterval(timerId);
    setTimerId(null);

    const currentTime = Date.now();
    const elapsed = currentTime - startTime;
    const elapsedSeconds = Math.floor(elapsed / 1000);
    const dayOfWeek = new Date(startTime).toLocaleString('en-US', { weekday: 'long' });

    setHoursWorked(prevHours => {

      const previousSeconds = prevHours[dayOfWeek] || 0;
      const totalSeconds = previousSeconds + elapsedSeconds;
      return { ...prevHours, [dayOfWeek]: totalSeconds };
    });

    setStartTime(null);
  };

  const formatTime = (milliseconds) => {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    seconds %= 60;
    minutes %= 60;
    return `${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  return (
    <div className="flex flex-col items-center p-4">

      <div className="text-xl font-semibold mb-4">{currentDateTime}</div>


      <div className="flex justify-between w-full mb-4">
        <button
          onClick={handleClockIn}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l"
          disabled={startTime != null}
        >
          Clock-In
        </button>
        <span>{startTime ? formatTime(Date.now() - startTime) : '--:--'}</span>
        <button
          onClick={handleClockOut}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-r"
          disabled={startTime == null}
        >
          Clock-Out
        </button>
      </div>
      <table className="min-w-full bg-white">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Day</th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Hours Worked</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
            <tr key={day}>
              <td className="text-left py-3 px-4">{day}</td>
              <td className="text-left py-3 px-4">
                {hoursWorked[day] !== undefined ? formatTime(hoursWorked[day] * 1000) : '--:--'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default EmpHours;
