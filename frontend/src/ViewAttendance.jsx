// import React, { useState } from 'react';
// import './Attendance.css';

// const ViewAttendance = () => {
//   const [attendanceRecords, setAttendanceRecords] = useState([]);
//   const [date, setDate] = useState('');
//   const [error, setError] = useState(null);

//   const fetchAttendanceRecords = async () => {
//     try {
//       const response = await fetch(`http://localhost:3001/attendance?date=${date}`);
//       if (!response.ok) {
//         const errorText = await response.text();
//         throw new Error(`HTTP error! Status: ${response.status}. Message: ${errorText}`);
//       }
//       const data = await response.json();
//       setAttendanceRecords(data);
//       setError(null); // Clear any previous errors
//     } catch (error) {
//       console.error('Error fetching attendance records:', error);
//       setError(error.message);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetchAttendanceRecords();
//   };

//   return (
//     <div className="container">
//       {error && <p className="error">{error}</p>}
//       <h1>View Attendance</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Date:
//           <input
//             type="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//           />
//         </label>
//         <button type="submit">View Attendance</button>
//       </form>

//       <table>
//         <thead>
//           <tr>
//             <th>Employee Name</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {attendanceRecords.length > 0 ? (
//             attendanceRecords.map((record, index) => (
//               <tr key={index}>
//                 <td>{record.memberId.fullName}</td> {/* Display populated fullName */}
//                 <td>{record.status}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="2">No attendance records available for the selected date.</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ViewAttendance;




// import React, { useState } from 'react';
// import './Attendance.css';

// const ViewAttendance = () => {
//   const [attendanceRecords, setAttendanceRecords] = useState([]);
//   const [date, setDate] = useState('');
//   const [error, setError] = useState(null);

//   // Function to fetch attendance records
//   const fetchAttendanceRecords = async () => {
//     try {
//       const response = await fetch(`http://localhost:3001/attendance?date=${date}`);
//       if (!response.ok) {
//         const errorText = await response.text();
//         throw new Error(`HTTP error! Status: ${response.status}. Message: ${errorText}`);
//       }
//       const data = await response.json();
//       setAttendanceRecords(data);
//       setError(null); // Clear any previous errors
//     } catch (error) {
//       console.error('Error fetching attendance records:', error);
//       setError(error.message);
//     }
//   };

//   // Handle form submission to fetch attendance records
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetchAttendanceRecords();
//   };

//   return (
//     <div className="container">
//       {error && <p className="error">{error}</p>}
//       <h1>View Attendance</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Date:
//           <input
//             type="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//           />
//         </label>
//         <button type="submit">View Attendance</button>
//       </form>

//       <table>
//         <thead>
//           <tr>
//             <th>Employee Name</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {attendanceRecords.length > 0 ? (
//             attendanceRecords.map((record, index) => (
//               <tr key={index}>
//                 <td>{record.memberId ? record.memberId.fullName : 'Unknown Member'}</td> {/* Safeguard for null memberId */}
//                 <td>{record.status}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="2">No attendance records available for the selected date.</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ViewAttendance;




import React, { useState } from 'react';
import jsPDF from 'jspdf'; // Import jsPDF
import 'jspdf-autotable'; // Import for table formatting
import './Attendance.css';

const ViewAttendance = () => {
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [date, setDate] = useState('');
  const [error, setError] = useState(null);

  // Function to fetch attendance records
  const fetchAttendanceRecords = async () => {
    try {
      const response = await fetch(`http://localhost:3001/attendance?date=${date}`);
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! Status: ${response.status}. Message: ${errorText}`);
      }
      const data = await response.json();
      setAttendanceRecords(data);
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error('Error fetching attendance records:', error);
      setError(error.message);
    }
  };

  // Handle form submission to fetch attendance records
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchAttendanceRecords();
  };

  // Function to calculate total present and absent members
  const calculateTotals = () => {
    const totalPresent = attendanceRecords.filter(record => record.status === 'Present').length;
    const totalAbsent = attendanceRecords.filter(record => record.status === 'Absent').length;
    return { totalPresent, totalAbsent };
  };

  // Function to download attendance records as a PDF
  const downloadAttendance = () => {
    if (attendanceRecords.length === 0) {
      alert('No attendance records to download.');
      return;
    }

    const { totalPresent, totalAbsent } = calculateTotals();

    // Create a new PDF document
    const doc = new jsPDF();

    // Add title
    doc.setFontSize(18);
    doc.text('Matrix Gym', 105, 15, null, null, 'center'); // Centered title
    doc.setFontSize(14);
    doc.text(`Attendance Record - Date: ${date}`, 105, 25, null, null, 'center');

    // Create table for attendance records
    const tableColumn = ['Employee Name', 'Status'];
    const tableRows = attendanceRecords.map((record) => {
      const memberName = record.memberId ? record.memberId.fullName : 'Unknown Member';
      return [memberName, record.status];
    });

    // Add the attendance table
    doc.autoTable({
      startY: 35,
      head: [tableColumn],
      body: tableRows,
    });

    // Add total summary (Present and Absent count)
    doc.text(`Total Present: ${totalPresent}`, 14, doc.autoTable.previous.finalY + 10);
    doc.text(`Total Absent: ${totalAbsent}`, 14, doc.autoTable.previous.finalY + 20);

    // Save the generated PDF
    doc.save(`attendance_${date}.pdf`);
  };

  return (
    <div className="container">
      {error && <p className="error">{error}</p>}
      <h1>View Attendance</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <button type="submit">View Attendance</button>
      </form>

      {attendanceRecords.length > 0 && (
        <button onClick={downloadAttendance}>Download Attendance (PDF)</button>
      )}

      <table>
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendanceRecords.length > 0 ? (
            attendanceRecords.map((record, index) => (
              <tr key={index}>
                <td>{record.memberId ? record.memberId.fullName : 'Unknown Member'}</td>
                <td>{record.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">No attendance records available for the selected date.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ViewAttendance;
