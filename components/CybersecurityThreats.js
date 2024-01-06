import React from 'react';
import './CybersecurityThreats.css'

const CybersecurityThreats = () => {
  return (
    <div className="container">
      <h1>Cybersecurity Threats</h1>

      <div className="threat">
        <h2>Phishing Attack:</h2>
        <p><strong>Definition:</strong> Phishing is a form of cyberattack where attackers impersonate trusted entities to deceive individuals into revealing sensitive information or performing malicious actions.</p>
        <h3>Before Attack:</h3>
        <ul>
          <li>Employee Training: Educate employees about recognizing phishing emails and suspicious links.</li>
          <li>Email Filtering: Implement advanced email filtering to block known phishing attempts.</li>
          <li>Sender Identity Validation: Use DMARC, SPF, and DKIM to validate the authenticity of email senders.</li>
        </ul>
        <h3>After Attack:</h3>
        <ul>
          <li>Incident Response: Execute a well-defined incident response plan to address compromised accounts and systems.</li>
          <li>User Awareness: Enhance user awareness and education to reduce susceptibility to future phishing attempts.</li>
          <li>Monitoring: Continuously monitor for similar phishing attacks and patterns.</li>
        </ul>
      </div>
    </div>
  );
};

export default CybersecurityThreats;
