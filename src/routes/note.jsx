import { useEffect, useState, useContext } from "react";
import { DataContext } from "../data";
import { InputGroup, Alert,  } from "react-bootstrap";

export function ShowMoney() {
    const { data } = useContext(DataContext);
    const [money, setMoney] = useState(0);
    const [pengeluaran, setPengeluaran] = useState(0);
    const [pemasukkan, setPemasukkan] = useState(0);

    useEffect(() => {
        let totalPemasukkan = 0
        let totalPengeluaran = 0
        let totalUang = 0

        try{
            data.forEach(item => {
                const nominal = parseInt(item.nominal);
                if (isNaN(nominal)) return;
                
                if (item.status === true){
                    totalPemasukkan += nominal;
                    totalUang += nominal;
                }if (item.status === false) {
                    totalPengeluaran += nominal;
                    totalUang -= nominal;
                } else {
                    console.error("penghitungan bermasalah")
                }   
            });
            
            setPemasukkan(totalPemasukkan);
            setPengeluaran(totalPengeluaran);
            setMoney(totalUang);
        }catch (error) {
            console.error(error)
        }
    }, [data]);

    return(
        <div className="money-note">
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
        </div>
    )
}
// export default function ShowNote(){
//     const { data } = useContext(DataContext)

//     return(
//         <div>
//         {data.map((datas, index) => (
//             <React.Fragment key={index}>
//                 <InputGroup>
//                     <Alert variant="primary">{datas.type} | {datas.nominal}</Alert>
//                     <InputGroup.Text variant="danger" className="h-1" onClick={() => deleteData(index)}>delete</InputGroup.Text>
//                 </InputGroup>
//             </React.Fragment>
//         ))}
//         </div>
//     )
// }
