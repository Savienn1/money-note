import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

import { BiHome } from "react-icons/bi"
import { GrAnalytics, GrMoney } from "react-icons/gr";
import { BiNotification } from "react-icons/bi";
import { MdOutlineSettings } from "react-icons/md";
import { IoMdStats } from "react-icons/io";
import { AiOutlineSetting } from "react-icons/ai";

import Profile from "../assets/profile.jpeg";
import { BsLayoutSidebarInset } from "react-icons/bs";

const Sidebar = ( ) => {
    const [isLogoHovered, setIsLogoHovered] = useState(true);
    const [isOpen, setIsOpen] = useState(true);
    const location = useLocation();

    const navItems = [
        {path: '/', name : "Home", icon: <BiHome className="w-5 h-5" /> },
        {path: '/grafik', name : "Grafik", icon: <IoMdStats className="w-5 h-5" /> },
        {path: '/laporan', name : "Laporan", icon: <GrAnalytics className="w-5 h-5" /> },
        {path: '/notifikasi', name : "Notifikasi", icon: <BiNotification className="w-5 h-5" /> },
        {path: '/pengaturan', name : "Pengaturan", icon: <MdOutlineSettings className="w-5 h-5" /> }
    ]

    const ChangeSidebar = () => {
        setIsOpen(!isOpen);
    };

    return(
        <>
            <div 
            className={`h-screen p-2 flex flex-col justify-between items-start
            ${isOpen ? "w-35 bg-[#CBD9E6] transition-all duration-300" : "w-fit bg-white transition-all duration-300"}
            `}
                >
                <div className="w-10 h-10 px-1 py-2 mb-4">
                    <div
                        className="flex items-center justify-center w-fit h-fit p-2 rounded-2xl transition-colors duration-200 group hover:bg-[#CBD9E6]"
                        onMouseEnter={() => setIsLogoHovered(false)}
                        onMouseLeave={() => setIsLogoHovered(true)}
                    >
                        {isLogoHovered ? (
                            <GrMoney className="w-6 h-6 group-hover:text-green-500 transition-colors duration-200"/>
                        ) : (
                            <BsLayoutSidebarInset 
                                className="w-6 h-6 group-hover: transition-colors duration-200"
                                onClick={ChangeSidebar}
                            />
                        )}
                    </div>
                    <p className="text-[9px] text-center leading-tight text-gray-700 font-semibold">Money <br />Tracker</p>
                </div>
                <div className="rounded-4xl w-10 px-1 py-2 mb-4 gap-1 flex flex-col">
                    {navItems.map((item, idx) => (
                    <>
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`flex items-center justify-center w-fit h-fit gap-2 p-2 rounded-2xl ${
                                location.pathname === item.path
                                    ? "bg-[#708090] text-white"
                                    : "bg-white text-gray-800 hover:bg-[#CBD9E6]"
                            }`}
                        >
                            {item.icon}
                            {isOpen && <span className="text-sm font-medium">{item.name}</span>}
                        </Link>
                        {idx !== navItems.length - 1 && (
                            <div className="w-4 h-[1px] bg-[#708090] self-center my-1" />
                        )}
                    </>
                    ))}
                </div>
                <div className="w-10 h-10 px-1 py-2 mb-9 flex flex-col gap-1 items-center">
                    <div className="flex items-center justify-center mb-2">
                        <AiOutlineSetting className="w-5 h-5 text-black   "/>
                    </div>
                    <div className="flex items-start justify-center mb-2 rounded-3xl w-12 h-12">
                        <img 
                            src={Profile} 
                            alt="Profile" 
                            className="w-11 h-11 rounded-full object-cover object-top" />
                    </div>
                </div>
            </div>
        </>
    )

    // return (
    //     <>
    //         <div className="w-fit h-creen p-2 flex flex-col gap-5">
    //             <div className="flex flex-col gap-2 rounded-4xl w-fit h-fit px-1 py-2">
    //                 <div className="flex items-center px-1">
    //                     <GrMoney className="w-6 h-6 text-black strokeWidth={2.5}"/>
    //                 </div>
    //                 <div className="flex items-center">
    //                     <p className="text-[9px] text-center leading-tight text-gray-700 font-semibold" >Money <br />Tracker</p>
    //                 </div>
    //             </div>
    //             <div 
    //                 className="flex flex-col gap-2 rounded-4xl w-fit h-fit px-1 py-2 bg-[#CBD9E6]"
    //                 >
    //                 {navItems.map((item) => (
    //                     <Link
    //                         key={item.path}
    //                         to={item.path}
    //                         className={`flex items-center gap-2 p-2 rounded-xl ${
    //                             location.pathname === item.path
    //                                 ? "bg-black text-white"
    //                                 : "bg-white text-gray-800"
    //                         }`}
    //                     >
    //                         {item.icon}
    //                         {isOpen && <span className="text-sm font-medium">{item.name}</span>}
    //                     </Link>
    //                 ))}
    //             </div>
    //                 <div className="flex items-center p-1.5 bg-black rounded-4xl">
    //                     <BiHome  className="w-5 h-5 text-white"/>
    //                 </div>
    //             <div>
    //                 <div>
    //                     <BiHome/>
    //                 </div>
    //             </div>
    //         </div>
    //     </>
    //)
}
export default Sidebar