import { CiMoneyBill } from "react-icons/ci"




const TrackingMoney = () => {
    const transactions = [
        {id: 1, description: 'Salary',type: 'income', date: '2023-10-01', amount: 1000, icon: CiMoneyBill},
        {id: 2, description: 'Groceries', type: 'expense', date: '2023-10-02', amount: 2000, icon: CiMoneyBill},
        {id: 3, description: 'Utilities', type: 'expense', date: '2023-10-03', amount: 1500, icon: CiMoneyBill},
    ]

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Tracking Money</h1>
            <div className="">
                {transactions.length > 0 ? (
                    transactions.map((transaction) => (
                        <div key={transaction.id} className="flex items-center justify-center p-2">
                            <div className="flex items-center justify-center w-12 h-12 bg-[#54C6AB] rounded-[15px] mr-5">
                                <transaction.icon className="text-white text-3xl" />
                            </div>
                            <div className="flex items-center justify-between w-full">
                                <p className="font-semibold w-36 text-lg">{transaction.description}</p>
                                <div className="w-[2px] bg-grey-dark h-7"> </div>
                                <p className="font-medium text-grey w-36 text-center">{transaction.type}</p>
                                <div className="w-[2px] bg-grey-dark h-7"> </div>
                                <p className="text-sm font-semibold text-green-pastel w-36 text-center">{transaction.date}</p>
                                <div className="w-[2px] bg-grey-dark h-7"> </div>
                                <span className={`text-${transaction.type === 'income' ? 'green-pastel' : 'red-pastel'} font-semibold w-36 text-end text-lg`}>
                                    {transaction.type === 'income' ? '+' : '-'}Rp{transaction.amount}
                                </span>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-grey">No transactions recorded yet.</p>
                )}
            </div>
        </div>
    )
}
export default TrackingMoney