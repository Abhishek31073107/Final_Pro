// ReportForm.js
import React, { useState } from 'react';
import './ReportForm.css';
import { useReportStorage } from './ReportStorage'; // Import the context hook
import i5 from "./imgs/image1.png";

function ReportForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [attackType, setAttackType] = useState('');
  const [moneyInvolved, setMoneyInvolved] = useState(false);
  const [threateningOrBlackmailing, setThreateningOrBlackmailing] = useState(false);
  const [crimeDescription, setCrimeDescription] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [location, setLocation] = useState('');
  const [actionsTaken, setActionsTaken] = useState('');
  const [evidenceDocument, setEvidenceDocument] = useState(null);
  const { dispatch } = useReportStorage(); // Get the dispatch function from the context

  const handleEvidenceDocumentChange = (e) => {
    const selectedFile = e.target.files[0];
    setEvidenceDocument(selectedFile);
  };

  const handleSubmit = async (e) => {
    alert("Your Response successfully submitted. Our customer Support will get back to you soon.")
    e.preventDefault();

    const formData = {
      name,
      email,
      phoneNumber,
      attackType,
      moneyInvolved,
      threateningOrBlackmailing,
      crimeDescription,
      dateTime,
      location,
      actionsTaken,
      evidenceDocument: evidenceDocument ? URL.createObjectURL(evidenceDocument) : null,
      
    };
    const storedIncidents = JSON.parse(localStorage.getItem('reportedIncidents')) || [];

    // Add the new incident to the existing incidents
    const updatedIncidents = [storedIncidents, formData];
    console.log(updatedIncidents)

    // Store the updated incidents in local storage
    localStorage.setItem('reportedIncidents', JSON.stringify(updatedIncidents));


    // Dispatch the report to the context
    dispatch({ type: 'ADD_REPORT', payload: formData });

    // Clear form fields after successful submission
    setName('');
    setEmail('');
    setPhoneNumber('');
    setAttackType('');
    setMoneyInvolved(false);
    setThreateningOrBlackmailing(false);
    setCrimeDescription('');
    setDateTime('');
    setLocation('');
    setActionsTaken('');
    setEvidenceDocument(null);
  };

  return (
    <div>
      <h2>Report Cybercrime</h2>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="text" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </div>
        <div>
          <label htmlFor="attackType">Attack Type:</label>
          <select id="attackType" value={attackType} onChange={(e) => setAttackType(e.target.value)} required>
            <option value="">Select an Attack Type</option>
            <option value="Phishing">Phishing</option>
            <option value="Malware">Malware</option>
            <option value="Hacking">Hacking</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label>Money Involved:</label>
          <input type="checkbox" checked={moneyInvolved} onChange={() => setMoneyInvolved(!moneyInvolved)} />
        </div>
        <div>
          <label>Personnel Threatening or Blackmailing:</label>
          <input
            type="checkbox"
            checked={threateningOrBlackmailing}
            onChange={() => setThreateningOrBlackmailing(!threateningOrBlackmailing)}
          />
        </div>
        <div>
          <label htmlFor="crimeDescription">Crime Description:</label>
          <textarea
            id="crimeDescription"
            value={crimeDescription}
            onChange={(e) => setCrimeDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="dateTime">Time and Date of Incident:</label>
          <input
            type="datetime-local"
            id="dateTime"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>
        <div>
          <label htmlFor="actionsTaken">Actions Taken:</label>
          <textarea
            id="actionsTaken"
            value={actionsTaken}
            onChange={(e) => setActionsTaken(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label htmlFor="evidenceDocument">Upload Evidence Document:</label>
          <input
            type="file"
            id="evidenceDocument"
            accept=".jpg, .jpeg, .png, .pdf"
            onChange={handleEvidenceDocumentChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default ReportForm;
