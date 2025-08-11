import { BiMoney, BiPlus } from 'react-icons/bi'
import { MdFoodBank } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

const AddTransaction = () => {
  return (
    <div className='grid grid-cols-12 rounded-4xl bg-grey-dark w-full h-35 p-3 gap-4'>
        <div className='col-span-10 row-span-2 flex flex-col items-center rounded-4xl justify-between bg-grey-light px-5 py-3 gap-2'>
            <div className="flex items-end w-full h-1/2 p-1 border-b-2 border-[#708090]">
                <BiMoney className="text-2xl text-grey mr-3" />
                <input
                    type="text"
                    placeholder="Jumlah"
                    className="flex-1 text-end font-semibold bg-transparent outline-none text-grey text-base"
                />
            </div>
            <div className='flex items-center justify-between w-full h-1/2'>
                <NavLink
                    to="/pemasukkan"
                    className={({ isActive }) =>
                        `flex items-center justify-center rounded-xl w-fit h-fit p-2 ${
                            isActive
                                ? 'bg-[#5C8D99] text-white' // active: darker blue
                                : 'bg-[#9ac8ce] text-[#5C8D99]' // passive: lighter blue, blue text
                        }`
                    }
                >
                    <p className='font-normal text-sm'>Pemasukkan</p>
                </NavLink>
                <div className='bg-grey-dark w-[2px] h-8'></div>
                <NavLink
                    to="/pengeluaran"
                    className={({ isActive }) =>
                        `flex items-center justify-center rounded-xl w-fit h-fit p-2 ${
                            isActive
                                ? 'bg-[#A05A5A] text-white' // active: darker red
                                : 'bg-[#E7B6B6] text-[#A05A5A]' // passive: lighter red, red text
                        }`
                    }
                >
                    <p className='font-normal text-sm'>Pengeluaran</p>
                </NavLink>
            </div>
        </div>
        <div className='col-span-2 flex items-center justify-center'>
            <div className='w-fit rounded-3xl p-[2px] bg-grey-light'>
                <BiPlus className='text-4xl text-green-pastel'/>
            </div>
        </div>
        <div className='col-span-2 flex flex-col items-center'>
            <div className=' w-fit rounded-xl p-1 bg-blue-dark'>
                <MdFoodBank className='text-3xl text-grey-light'/>
            </div>
            <p className='text-grey-light text-[10px]'>Makanan</p>
        </div>
    </div>
  )
}

export default AddTransaction
