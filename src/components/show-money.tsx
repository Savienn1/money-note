import React from "react";
import { BiMoney } from "react-icons/bi";
import { MdInbox, MdOutbox } from "react-icons/md";

interface Fund {
    label: string;
    nominal: string;
    icon: React.ReactNode;
    text_color: string;
}

export const calculateMoney = () => {
    const pemasukkan = 4000000;
    const pengeluaran = 3200000;
    const saldo = pemasukkan - pengeluaran;

    return { pemasukkan, pengeluaran, saldo };
}

const ShowMoney = () => {
    const { pemasukkan, pengeluaran, saldo } = calculateMoney();

    const funds: Fund[] = [
        { label: "Saldo", nominal: `Rp${saldo.toLocaleString()}`, icon: <BiMoney />, text_color: "white" },
        { label: "Pemasukkan", nominal: `+Rp${pemasukkan.toLocaleString()}`, icon: <MdInbox />, text_color: "#093030" },
        { label: "Pengeluaran", nominal: `-Rp${pengeluaran.toLocaleString()}`, icon: <MdOutbox />, text_color: "#900B09" },
    ];

    return (
        <div className="bg-gray-dark w-full h-27 rounded-[40px] flex items-center justify-center">
            {funds.map((fund, idx) => (
            <div className={`w-3/10 h-full flex flex-col items-start justify-center border-white px-2
            ${idx === 0 ? "border-x-1" : ""} ${idx === funds.length - 1 ? "border-x-1" : ""}`}>
                <p className={`text-[#093030] text-lg flex flex-row items-center gap-1 font-medium`}><span>{fund.icon}</span>{fund.label}</p>
                <h1 className={`text-[28px] font-extrabold`} style={{ color : fund.text_color}}>{fund.nominal}</h1>
            </div>
            ))}
        </div>
    );
}
export default ShowMoney;