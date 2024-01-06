// Incidents.js
import React, { useEffect, useState } from 'react';
import './Incidents.css'; // Import the CSS file

function Incidents() {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    // Retrieve all reported incidents from local storage
    const storedIncidents = JSON.parse(localStorage.getItem('reportedIncidents')) || [];
    console.log(storedIncidents);
    setIncidents(storedIncidents);
  }, []);

  const clearIncidents = () => {
    // Remove the "reportedIncidents" key from local storage to clear incidents
    localStorage.removeItem('reportedIncidents');
    // Clear the incidents state in your component
    setIncidents([]);
  };

  return (
    <div className="incidents-container">
      <h2>Reported Incidents</h2>
      <button onClick={clearIncidents}>Clear Incidents</button>
      <table className="incidents-table">
        <thead>
          <tr>
            <th>Incident Category</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Money Involved</th>
            <th>Personnel Threatening or Blackmailing</th>
            <th>Crime Description</th>
            <th>Time and Date of Incident</th>
            <th>Location</th>
            <th>Actions Taken</th>
            <th>Evidence Document</th>
          </tr>
        </thead>
        <tbody>
          {incidents.map((incident, index) => (
            <tr key={index}>
              <td>{incident.attackType}</td>
              <td>{incident.name}</td>
              <td>{incident.email}</td>
              <td>{incident.phoneNumber}</td>
              <td>{incident.moneyInvolved ? 'Yes' : 'No'}</td>
              <td>{incident.threateningOrBlackmailing ? 'Yes' : 'No'}</td>
              <td>{incident.crimeDescription}</td>
              <td>{incident.dateTime}</td>
              <td>{incident.location}</td>
              <td>{incident.actionsTaken}</td>
              <td>
                {incident.evidenceDocument && (
                  <a href={incident.evidenceDocument} target="_blank" rel="noopener noreferrer">View Evidence</a>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Incidents;
