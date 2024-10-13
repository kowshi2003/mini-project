// import React, { useState, useEffect } from 'react';
// import './Attendance.css'; // Ensure you have the corresponding CSS

// const AttendancePage = () => {
//   const [members, setMembers] = useState([]);
//   const [attendance, setAttendance] = useState({});
//   const [attendanceRecords, setAttendanceRecords] = useState([]);
//   const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchMembers = async () => {
//       try {
//         const response = await fetch('http://localhost:3001/members');
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         setMembers(data);
//       } catch (error) {
//         console.error('Error fetching members:', error);
//         setError('Error fetching members.');
//       }
//     };

//     const fetchAttendanceRecords = async () => {
//       try {
//         const response = await fetch(`http://localhost:3001/attendance?date=${date}`);
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         setAttendanceRecords(data);
//       } catch (error) {
//         console.error('Error fetching attendance records:', error);
//         setError('Error fetching attendance records.');
//       }
//     };

//     fetchMembers();
//     fetchAttendanceRecords();
//   }, [date]);

//   const handleAttendanceChange = (memberId, status) => {
//     setAttendance((prev) => ({ ...prev, [memberId]: status }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const attendanceData = Object.keys(attendance).map((memberId) => ({
//       memberId,
//       date,
//       status: attendance[memberId],
//     }));

//     try {
//       const response = await fetch('http://localhost:3001/attendance', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(attendanceData),
//       });
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       const data = await response.json();
//       alert('Attendance saved successfully!');
//     } catch (error) {
//       console.error('Error saving attendance:', error);
//       setError('Error saving attendance data.');
//       alert('Failed to save attendance. Please try again.');
//     }
//   };

//   return (
//     <div className="container">
//       {error && <p className="error">{error}</p>}
//       <h1>Daily Attendance</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Date:
//           <input
//             type="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//           />
//         </label>
//         <table>
//           <thead>
//             <tr>
//               <th>Member Name</th>
//               <th>Present</th>
//               <th>Absent</th>
//             </tr>
//           </thead>
//           <tbody>
//             {members.length > 0 ? (
//               members.map((member) => (
//                 <tr key={member._id}>
//                   <td>{member.fullName}</td>
//                   <td>
//                     <input
//                       type="radio"
//                       name={`attendance-${member._id}`}
//                       value="Present"
//                       checked={attendance[member._id] === 'Present'}
//                       onChange={() =>
//                         handleAttendanceChange(member._id, 'Present')
//                       }
//                     />
//                   </td>
//                   <td>
//                     <input
//                       type="radio"
//                       name={`attendance-${member._id}`}
//                       value="Absent"
//                       checked={attendance[member._id] === 'Absent'}
//                       onChange={() =>
//                         handleAttendanceChange(member._id, 'Absent')
//                       }
//                     />
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="4">No members found.</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//         <button type="submit">Save Attendance</button>
//       </form>
//     </div>
//   );
// };

// export default AttendancePage;




// import React, { useState, useEffect } from 'react';
// import './Attendance.css'; // Ensure you have the corresponding CSS

// const AttendancePage = () => {
//   const [members, setMembers] = useState([]); // Stores the list of members fetched from the backend
//   const [attendance, setAttendance] = useState({}); // Stores the attendance status for each member
//   const [date, setDate] = useState(new Date().toISOString().split('T')[0]); // Default to today's date
//   const [error, setError] = useState(null); // For displaying errors to the user

//   // Fetch members when the component mounts
//   useEffect(() => {
//     const fetchMembers = async () => {
//       try {
//         const response = await fetch('http://localhost:3001/members');
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         setMembers(data);
//       } catch (error) {
//         console.error('Error fetching members:', error);
//         setError('Error fetching members.');
//       }
//     };

//     fetchMembers(); // Call the fetch function when the component is rendered
//   }, []); // Only run the effect on initial render

//   // Handle attendance status change
//   const handleAttendanceChange = (memberId, status) => {
//     setAttendance((prev) => ({ ...prev, [memberId]: status })); // Set attendance for each member
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent default form submission behavior

//     const attendanceData = Object.keys(attendance).map((memberId) => ({
//       memberId, // Use memberId to store the attendance record
//       date,
//       status: attendance[memberId],
//     }));

//     try {
//       const response = await fetch('http://localhost:3001/attendance', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(attendanceData), // Send attendance data to the backend
//       });
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       const data = await response.json();
//       alert('Attendance saved successfully!');
//     } catch (error) {
//       console.error('Error saving attendance:', error);
//       setError('Error saving attendance data.');
//       alert('Failed to save attendance. Please try again.');
//     }
//   };

//   return (
//     <div className="container">
//       {error && <p className="error">{error}</p>}
//       <h1>Daily Attendance</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Date:
//           <input
//             type="date"
//             value={date} // Binds the input value to the state
//             onChange={(e) => setDate(e.target.value)} // Update the date value
//           />
//         </label>
//         <table>
//           <thead>
//             <tr>
//               <th>Member Name</th>
//               <th>Present</th>
//               <th>Absent</th>
//             </tr>
//           </thead>
//           <tbody>
//             {members.length > 0 ? (
//               members.map((member) => (
//                 <tr key={member._id}>
//                   <td>{member.fullName}</td> {/* Display the member's name */}
//                   <td>
//                     <input
//                       type="radio"
//                       name={`attendance-${member._id}`}
//                       value="Present"
//                       checked={attendance[member._id] === 'Present'} // Checked if Present is selected
//                       onChange={() => handleAttendanceChange(member._id, 'Present')} // Change attendance to Present
//                     />
//                   </td>
//                   <td>
//                     <input
//                       type="radio"
//                       name={`attendance-${member._id}`}
//                       value="Absent"
//                       checked={attendance[member._id] === 'Absent'} // Checked if Absent is selected
//                       onChange={() => handleAttendanceChange(member._id, 'Absent')} // Change attendance to Absent
//                     />
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="3">No members found.</td> {/* Display this if no members are available */}
//               </tr>
//             )}
//           </tbody>
//         </table>
//         <button type="submit">Save Attendance</button> {/* Submit attendance */}
//       </form>
//     </div>
//   );
// };

// export default AttendancePage;





import React, { useState, useEffect } from 'react';
import './Attendance.css'; // Ensure you have the corresponding CSS

const AttendancePage = () => {
  const [members, setMembers] = useState([]); // Stores the list of members fetched from the backend
  const [attendance, setAttendance] = useState({}); // Stores the attendance status for each member
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]); // Default to today's date
  const [error, setError] = useState(null); // For displaying errors to the user

  // Fetch members when the component mounts
  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch('http://localhost:3001/members');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setMembers(data);

        // Set default attendance to "Present" for all members
        const defaultAttendance = data.reduce((acc, member) => {
          acc[member._id] = 'Present';
          return acc;
        }, {});
        setAttendance(defaultAttendance);

      } catch (error) {
        console.error('Error fetching members:', error);
        setError('Error fetching members.');
      }
    };

    fetchMembers(); // Call the fetch function when the component is rendered
  }, []); // Only run the effect on initial render

  // Handle attendance status change
  const handleAttendanceChange = (memberId, status) => {
    setAttendance((prev) => ({ ...prev, [memberId]: status })); // Set attendance for each member
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const attendanceData = Object.keys(attendance).map((memberId) => ({
      memberId, // Use memberId to store the attendance record
      date,
      status: attendance[memberId],
    }));

    try {
      const response = await fetch('http://localhost:3001/attendance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(attendanceData), // Send attendance data to the backend
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      alert('Attendance saved successfully!');
    } catch (error) {
      console.error('Error saving attendance:', error);
      setError('Error saving attendance data.');
      alert('Failed to save attendance. Please try again.');
    }
  };

  return (
    <div className="container">
      {error && <p className="error">{error}</p>}
      <h1>Daily Attendance</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input
            type="date"
            value={date} // Binds the input value to the state
            onChange={(e) => setDate(e.target.value)} // Update the date value
          />
        </label>
        <table>
          <thead>
            <tr>
              <th>Member Name</th>
              <th>Present</th>
              <th>Absent</th>
            </tr>
          </thead>
          <tbody>
            {members.length > 0 ? (
              members.map((member) => (
                <tr key={member._id}>
                  <td>{member.fullName}</td> {/* Display the member's name */}
                  <td>
                    <input
                      type="radio"
                      name={`attendance-${member._id}`}
                      value="Present"
                      checked={attendance[member._id] === 'Present'} // Checked if Present is selected
                      onChange={() => handleAttendanceChange(member._id, 'Present')} // Change attendance to Present
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name={`attendance-${member._id}`}
                      value="Absent"
                      checked={attendance[member._id] === 'Absent'} // Checked if Absent is selected
                      onChange={() => handleAttendanceChange(member._id, 'Absent')} // Change attendance to Absent
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No members found.</td> {/* Display this if no members are available */}
              </tr>
            )}
          </tbody>
        </table>
        <button type="submit">Save Attendance</button> {/* Submit attendance */}
      </form>
    </div>
  );
};

export default AttendancePage;
