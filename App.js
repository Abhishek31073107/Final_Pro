// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import ReportForm from './components/ReportForm';
import Incidents from './components/Incidents';
import Login from './components/Login';
import AdminPage from './components/AdminPage';
import CybersecurityThreats from './components/CybersecurityThreats';
import { ReportStorageProvider } from './components/ReportStorage';



function App() {
  return (


    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/report" element={<ReportForm />} />
        <Route path="/incidents" element={<Incidents />} />
        <Route path="/report" component={<ReportForm/>} />
        <Route path="/admin" component={<AdminPage/>} />
        <Route path='/cyberawarness' component={<CybersecurityThreats/>}/>
        
      </Routes>
    </Router>
    
  );
}

export default App;
