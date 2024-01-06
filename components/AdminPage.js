import React from 'react';
import { useReportStorage } from './ReportStorage';

function Admin() {
  const { state } = useReportStorage();

  return (
    <div>
      <h2>Admin Page</h2>
      <ul>
        {state.reports.map((report, index) => (
          <li key={index}>
            {/* Display the report details here */}
            <p>Name: {report.name}</p>
            <p>Email: {report.email}</p>
            {/* Add more report details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Admin;
