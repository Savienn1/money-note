import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const addData = (newData) => {
    setData((prevData) => [...prevData, newData]);
  };

  return (
    <DataContext.Provider value={{ data, addData }}>
      {children}
    </DataContext.Provider>
  );
};
