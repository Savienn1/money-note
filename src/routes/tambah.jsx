import { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import { DataContext } from "../note";

export default function TambahNote({addMoney}) {
    const [detail, setDetail] = useState("")
    const [nominal, setNominal] = useState(0)
    const [status, setStatus] = useState(false)
    const { addData } = useContext(DataContext);

    handleSubmit = (e) => {
        e.preventDefault();

        if (addMoney == tambah) {
            setStatus(true)
        }
        
        if (detail.trim() && nominal && status) {
            addData(detail, nominal)

            setDetail("")
            setNominal(0)
        } 
    }

    return (
        <>
            <div className="tambah-note">
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        value={newNote.detail}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <input 
                        type="number" 
                        value={newNote.nominal}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <Button type="submit">Add</Button>
                </form>
            </div>
        </>
    )
}