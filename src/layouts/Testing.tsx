const Testing = () => {
    return (
        <div className="w-full h-screen bg-gray-100 grid grid-flow-col grid-rows-6">
            <div className="flex flex-col items-center justify-center col-span-5 row-span-1 bg-green-800">
                <h1>01</h1>
            </div>
            <div className="flex flex-col items-center justify-center col-span-5 row-span-5 bg-blue-800">
                <h1>05</h1>
            </div>
            <div className="flex flex-col items-center justify-center row-span-6 bg-red-800">
                <h1>02</h1>
            </div>
        </div>
    );
};

export default Testing;
