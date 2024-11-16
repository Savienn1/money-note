import { Button } from "react-bootstrap";
import { useState} from "react";
import Tambah from "./tambah";
import { ShowMoney, ShowNote} from "./note";
import { DataProvider } from "../data";

export default function Root() {
    const [show, setShow] = useState(false)
    const [status, setStatus] = useState(true)
    
    const showAdd = (value) => {
        setShow(false)
        setStatus(value)
        setTimeout(() => setShow(true), 10)
    }

    return (
        <>
            <DataProvider>
                <ShowMoney />
                <div className="m-4 d-flex gap-3">
                    <Button onClick={() => showAdd(true)}>Tambah Pemasukkan</Button>
                    <Button onClick={() => showAdd(false)}>Tambah Pengeluaran</Button>
                </div>
                <div>
                    {show == true && <Tambah status={status} show={show}/>}
                </div>
                <div>
                    <h2>Data Transaksi</h2>
                </div>
                <ShowNote />
            </DataProvider>
        </>
    );
}

