import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { useState } from "react";
import Calendar from "react-calendar";
import "../calendar.css";

const Callendar = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div className="w-full h-fit flex flex-col">
            <Calendar
                prevLabel={<BiLeftArrow />}
                nextLabel={<BiRightArrow />}
                prev2Label={null}
                next2Label={null}
                value={date}
            />
        </div>
    );
};
export default Callendar;
