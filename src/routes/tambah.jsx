import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../data";
import { Alert, Form, Button, InputGroup } from "react-bootstrap";

export default function Tambah({status, show}) {
    const { data, addData} = useContext(DataContext);
    const [detail, setDetail] = useState("");
    const [nominal, setNominal] = useState("");
    const [showAlert, setShowAlert] = useState({ type: "", message: "" });
    const [visible, setVisible] = useState(show)

    useEffect(() => {
        setVisible(show)
    }, [show])

    const newNote = (e) => {
        e.preventDefault();

        if (!detail) {
        setShowAlert({ type: "danger", message: "Detail tidak boleh kosong!" });
        return;
        }
        if (!nominal || isNaN(nominal)) {
        setShowAlert({ type: "danger", message: "Nominal harus berupa angka!" });
        return;
        }

        try {
        addData({ detail, nominal: parseInt(nominal), status: status});
        setShowAlert({ type: "success", message: "Data berhasil ditambahkan!" });
        setNominal("");
        setDetail("");
        setTimeout(() => setShowAlert({ type: "", message: "" }), 3000);
        setVisible(false)
    } catch (error) {
        setShowAlert({
            type: "danger",
            message: "Terjadi kesalahan saat menambahkan data!",
        });
        console.error("Error:", error);
    }
    console.log(data);
    };
    if (!visible) return null;

    return (
        <div>
        {showAlert.message && (
            <Alert variant={showAlert.type} className="mb-3">
            {showAlert.message}
            </Alert>
        )}
            <Form onSubmit={newNote}>
                <InputGroup className="mb-3">
                    <InputGroup.Text>Detail</InputGroup.Text>
                    <Form.Control
                        type="text"
                        value={detail}
                        onChange={(e) => setDetail(e.target.value)}
                        placeholder="Masukkan detail"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text>$</InputGroup.Text>
                        <Form.Control
                            type="number"
                            value={nominal}
                            onChange={(e) => setNominal(e.target.value)}
                            placeholder="Masukkan nominal"
                            />
                </InputGroup>
                <Button type="submit" className="mt-3 mb-3" >Tambah Data</Button>
            </Form>
        </div>
        );
    }
