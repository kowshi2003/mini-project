// // GroupClassesPage.js
// import React from 'react';

// const GroupClassesPage = () => {
//   return (
//     <div className="group-classes-container">
//       <h2>Group Classes</h2>
//       <p>Join our group classes and stay motivated with others. Classes available for all fitness levels.</p>
//     </div>
//   );
// };

// export default GroupClassesPage;


import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming axios for API calls

const GroupClassesPage = () => {
  const [classes, setClasses] = useState([]); // To store group classes from API
  const [filteredClasses, setFilteredClasses] = useState([]); // For filtering
  const [selectedLevel, setSelectedLevel] = useState('All'); // Default level filter

  // Fetch group classes from the API on component mount
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axios.get('https://api.example.com/group-classes'); // API endpoint
        setClasses(response.data); // Assuming API returns class data
        setFilteredClasses(response.data); // Initialize filteredClasses with all classes
      } catch (error) {
        console.error('Error fetching group classes:', error);
      }
    };

    fetchClasses();
  }, []);

  // Handle fitness level filter change
  const handleFilterChange = (event) => {
    const level = event.target.value;
    setSelectedLevel(level);

    if (level === 'All') {
      setFilteredClasses(classes);
    } else {
      const filtered = classes.filter(cls => cls.level === level);
      setFilteredClasses(filtered);
    }
  };

  // Simulate booking a class
  const handleBookClass = (classId) => {
    // API call to book the class can be made here
    alert(`You have booked class ID: ${classId}`);
  };

  return (
    <div className="group-classes-container">
      <h2>Group Classes</h2>
      <p>Join our group classes and stay motivated with others. Classes available for all fitness levels.</p>

      {/* Fitness level filter */}
      <div className="filter-container">
        <label htmlFor="fitness-level">Filter by Fitness Level: </label>
        <select id="fitness-level" value={selectedLevel} onChange={handleFilterChange}>
          <option value="All">All Levels</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>

      {/* Group class list */}
      <div className="group-classes-list">
        {filteredClasses.length > 0 ? (
          filteredClasses.map(cls => (
            <div key={cls.id} className="group-class-item">
              <h3>{cls.name}</h3>
              <p>{cls.description}</p>
              <p><strong>Instructor:</strong> {cls.instructor}</p>
              <p><strong>Time:</strong> {cls.time}</p>
              <p><strong>Level:</strong> {cls.level}</p>
              <p><strong>Capacity:</strong> {cls.capacity}</p>
              <button onClick={() => handleBookClass(cls.id)}>Book this Class</button>
            </div>
          ))
        ) : (
          <p>No classes available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default GroupClassesPage;
