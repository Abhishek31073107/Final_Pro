import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ReportStorageProvider } from './components/ReportStorage';

ReactDOM.render(
  <ReportStorageProvider>
    <App />
  </ReportStorageProvider>,
  document.getElementById('root')
);
