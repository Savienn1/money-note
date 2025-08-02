
import { NavLink } from 'react-router-dom'

const ChangeButton = () => {
    const navItems = [
        { Label: 'Yearly', to: '/yearly' },
        { Label: 'Monthly', to: '/monthly' },
        { Label: 'Weekly', to: '/weekly' },
    ];

    return (
        <div className="flex items-center justify-between w-55 h-10 p-1 bg-grey-light rounded-[5px] cursor-pointer  ml-5">
            {navItems.map((item, index) => (
                <NavLink
                    key={index}
                    to={item.to}
                    className={({ isActive }) =>
                        `flex items-center justify-center w-4/13 h-full rounded-[5px] font-semibold text-sm ${isActive ? 'bg-grey-dark text-white' : 'text-grey'}`
                    }
                >
                    <p>{item.Label}</p>
                </NavLink>
            ))}
        </div>
    )
}
export default ChangeButton