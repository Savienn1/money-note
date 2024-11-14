import { Button } from "react-bootstrap";
import { useState, useContext, useEffect } from "react";
import { DataContext } from "../data";
import Tambah from "./tambah";

function showMoney({ data }) {
    const [money, setMoney] = useState(0);
    const [pengeluaran, setPengeluaran] = useState(0);
    const [pemasukkan, setPemasukkan] = useState(0);

    useEffect(() => {
        const nominal = data.nominal
        const type = data.type
        if (!nominal || isNaN(nominal)) return;
        const amount = parseInt(nominal);
        
        if (type == true) {
            setPemasukkan(amount + pemasukkan);
            setMoney(money + amount);
        } else {
            setPengeluaran(pengeluaran + amount);
            setMoney(money - amount);
        }
    }, [data])

    return(
        <>
            <div className="money-note-uang">
                <h3>Pemasukkan</h3>
                <p>Rp. {pemasukkan}</p>
            </div>
            <div className="money-note-uang">
                <h3>Pengeluaran</h3>
                <p>Rp. {pengeluaran}</p>
            </div>
                <div className="money-note-uang">
                <h3>Saldo</h3>
                <p>Rp. {money}</p>
            </div>
        </>
    )
}
function showNote({data}){

}

export default function Root() {
    const [show, setShow] = useState(false)
    const [status, setStatus] = useState(true)
    
    const showAdd = (value) => {
        setShow(true)
        setStatus(true)
    }

    return (
        <>
        <div className="money-note">
            <showMoney  data={data}/>
        </div>
        <div className="tambah">
            <Button onClick={() => showAdd(true)}>Tambah Pemasukkan</Button>
            <Button onClick={() => showAdd(false)}>Tambah Pengeluaran</Button>
        </div>
        <div>
            {show == true && <Tambah status={status}/>}
        </div>
        <div>
            <h2>Data Transaksi</h2>
            <ul>
            {data.map((item, index) => (
                <li key={index}>
                {item.type}: Rp. {item.nominal}
                </li>
            ))}
            </ul>
        </div>
    </>
    );
}

