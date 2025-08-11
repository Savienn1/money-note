import Header from "./components/header";
import Sidebar from "./layouts/sidebar";
import ShowMoney from "./components/show-money";
import HealthyBar from "./components/healthy-bar";
import SearchBar from "./components/search-bar";
import TrackingMoney from "./components/tracking-money";
import ChangeButton from "./components/change-button";
import AddTransaction from "./components/add-transaction";
import Callendar from "./components/callendar";

function App() {
    return (
        <>
            <div className="flex flex-row min-h-screen w-screen ">
                <div className="flex">
                    <Sidebar />
                </div>
                <div className="w-screen h-screen">
                    <div className="grid grid-cols-6 w-full h-full gap-4 p-2 ">
                        <div className="col-span-4 flex flex-col gap-4 h-full">
                            <div className="flex items-end w-full pr-9">
                                <Header />
                                <ChangeButton />
                            </div>
                            <div className="flex flex-col gap-2 flex-1 ">
                                <ShowMoney />
                                <HealthyBar />
                                <SearchBar />
                                <TrackingMoney />
                            </div>
                        </div>
                        <div className="col-span-2 flex flex-col gap-4 pt-10">
                            <Callendar />
                            <AddTransaction />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
