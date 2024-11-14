import React, {useState, createContext, Children}  from "react";

export const DataContext = createContext();

export const DataProvider = ({Children}) => {
    const [data, setData] = useState([])

    const addData = (newData) =>{
        setData(...data, newData)
    }

    return (
        <DataContext.Provider>
            {Children}
        </DataContext.Provider>
    )
}