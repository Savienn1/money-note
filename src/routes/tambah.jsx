import React, { useContext } from "react";
import { DataContext } from "../data";

export default function Tambah( {} ) {
    const { data, addData } = useContext(DataContext);

    const handleAddTransaction = () => {
        const type = 
        const nominal = 
        if (!type || !nominal || isNaN(nominal)) return;

        addData({ type, nominal: parseInt(nominal) });
        alert("Transaksi ditambahkan!");
    };

    return (
        <div>
            <input type="text" value={data.type}/>
            <input type="number" value={data.nominal}/>
            <button onClick={handleAddTransaction}>Tambah Data</button>      
        </div>
    );
}