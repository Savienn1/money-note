import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const addData = (newData) => {
    setData((prevData) => [...prevData, newData]);
  };

  const deleteData = (index) => {
    const newData = data.filter((_, i) => i !== index)
    setData(newData)
  }

  return (
    <DataContext.Provider value={{ data, addData, deleteData }}>
      {children}
    </DataContext.Provider>
  );
};
