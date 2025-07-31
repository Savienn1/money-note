import { IoCheckboxOutline} from 'react-icons/io5'
import { calculateMoney }from './show-money'

const HealthyBar = () => {
    const { pemasukkan, pengeluaran} = calculateMoney();

    const percentage = Math.round((pemasukkan / (pemasukkan + pengeluaran)) * 100);
    const warn = percentage > 50 ? "Keuanganmu masih stabil" : "Keuanganmu mulai tidak stabil";


    return (
        <div className=' w-full h-15 rounded-lg flex items-center justify-center py-2'>
            <div className='bg-red-pastel w-4/6 h-full flex justify-between items-center rounded-4xl'>
                <h3 className='ml-4 text-white font-bold text-xl'>{percentage}%</h3>
                <div className='bg-green-pastel h-full flex items-center justify-end pr-4 rounded-4xl' style={{ width: `${percentage}%` }}>
                    <h3 className='text-white font-bold text-xl'>Rp1.200.000</h3>
                </div>
            </div>
            <div className=' w-2/6 h-full flex items-center justify-start pl-2'>
                <span className='h-full w-10 flex items-center'><IoCheckboxOutline className='text-4xl text-gray'/></span>
                <div className='flex flex-col'>
                    <p className='text-sm text-gray'>{percentage}% {warn}</p>
                </div>
            </div>
        </div>
    )
}

export default HealthyBar