
const Testing = () => {
  return (
    <div className="min-h-screen grid grid-cols-[auto_1fr] md:grid-cols-1">
    {/* Sidebar */}
    <aside className="bg-gray-900 text-white p-4 hidden md:block">
        {/* sidebar content here */}
    </aside>

    {/* Main Content */}
    <main className="bg-white p-4">
        {/* Greeting */}
        <div className="mb-4">
        <h1 className="text-2xl font-bold">Hi, Caroline</h1>
        <p>Your personal Tracking wealth</p>
        </div>

        {/* Balance Cards */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        <div className="bg-gray-100 p-4 rounded">Saldo</div>
        <div className="bg-gray-100 p-4 rounded">Pemasukan</div>
        <div className="bg-gray-100 p-4 rounded">Pengeluaran</div>
        </div>

        {/* Budget Bar & Filters */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
        <div className="flex-1 flex items-center bg-red-200 p-2 rounded">
            <span>40%</span>
            <span className="ml-auto text-green-600 font-bold">Rp10.000.000</span>
        </div>
        <div className="flex space-x-2">
            <button className="px-4 py-2 bg-gray-300 rounded">Yearly</button>
            <button className="px-4 py-2 bg-gray-500 text-white rounded">Monthly</button>
            <button className="px-4 py-2 bg-gray-300 rounded">Weekly</button>
        </div>
        </div>

        {/* Tracking Notes */}
        <section className="mb-4">
        <h2 className="font-semibold text-lg">Tracking money notes</h2>
        <div className="space-y-2 mt-2">
            {/* Repeatable row */}
            <div className="flex justify-between bg-gray-50 p-2 rounded items-center">
            <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-green-200 rounded-full" />
                <div>
                <div className="font-semibold">Salary</div>
                <div className="text-sm text-gray-500">Monthly</div>
                </div>
            </div>
            <div className="text-sm text-blue-500">18:27 – April 30</div>
            <div className="text-green-600 font-bold">+Rp4.000,00</div>
            </div>
        </div>
        </section>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Calendar */}
        <div className="bg-white p-4 rounded shadow">
            <div className="text-lg font-semibold mb-2">Juli 2025</div>
            {/* Replace with actual calendar component */}
            <div className="grid grid-cols-7 gap-1 text-center">
            {/* tanggal diisi manual atau dengan lib */}
            {[...Array(31)].map((_, i) => (
                <div key={i} className="p-1 rounded bg-red-100">{i + 1}</div>
            ))}
            </div>
        </div>

        {/* Chart */}
        <div className="bg-blue-100 p-4 rounded shadow">
            <div className="font-semibold">Income & Expenses</div>
            {/* Replace with chart lib */}
            <div className="h-40 bg-white mt-2 rounded"></div>
        </div>
        </div>
    </main>
    </div>
    
  );
}

export default Testing;