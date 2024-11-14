import { Button } from "react-bootstrap"
import { useState, useContext } from "react"

import { DataContext } from "../note"

export default function Root(){
    const [data, addData] = useContext(DataContext)

    const [money, setMoney] = useState(0)
    const [pengeluaran, setPengeluaran] = useState(0)
    const [pemasukkan, setPemasukkan] = useState(0)
    const [show, setShow] = useState(true)

    const handleMoney = (isPemasukkan) => {
        const nominal = prompt("masukkan Nominal: ");

        if (!nominal || isNaN(nominal)) return;

        const amount = parseInt(nominal)

        if (isPemasukkan){
            setPemasukkan(pemasukkan + amount)
            setMoney(money + amount);
            addData({type: "pemasukkan", nominal: amount })
        }else {
            setPengeluaran(pengeluaran + amount)
            setMoney(money - amount);
            addData({type: "pemasukkan", nominal: amount })
        }
    }
    

    return (
        <>
            <div className="money-note">
                <div className="money-note-uang">
                    <h3>pemasukkan</h3>
                    <p>Rp.{pemasukkan}</p>
                </div>
                <div className="money-note-uang">
                    <h3>pengeluaran</h3>
                    <p>Rp.{pengeluaran}</p>
                </div>
                <div className="money-note-uang">
                    <h3>saldo</h3>
                    <p onChange={handleMoney}>Rp.{money}</p>
                </div>
            </div>
            <div className="tambah">
                <form onSubmit={(e) => {
                    e.preventDefault()
                }}>
                    <Button onClick={() => handleMoney(true)}>Tambah Pemasukkan</Button>
                    <Button onClick={() => handleMoney(false)}>Tambah Pengeluaran</Button>
                </form>
            </div>
            {show || <Tambah />}
        </>
    )
}