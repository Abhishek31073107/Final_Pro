// ReportStorage.js
import React, { createContext, useContext, useReducer } from 'react';

const ReportStorageContext = createContext();

export function useReportStorage() {
  return useContext(ReportStorageContext);
}

// Define your reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'ADD_REPORT':
      return {
        reports: [...state.reports, action.payload],
      };
    default:
      return state;
  }
}

export function ReportStorageProvider({ children }) {
  const initialState = {
    reports: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ReportStorageContext.Provider value={{ state, dispatch }}>
      {children}
    </ReportStorageContext.Provider>
  );
}
