import Header from "./components/header"
import Sidebar from "./layouts/sidebar"
import ShowMoney from "./components/show-money"
import HealthyBar from "./components/healthy-bar"
import SearchBar from "./components/search-bar"

function App() {

  return (
    <>
      <div className="flex flex-row min-h-screen w-screen ">
        <div className="flex">
          <Sidebar />
        </div>
        <div className="flex flex-col p-2 w-screen">
          <Header className="col-span-6 "/>
          <div className="grid grid-cols-6 w-full h-full gap-2 p-2">
            <div className="col-span-4  flex flex-col gap-2">
              <ShowMoney />
              <HealthyBar />
              <SearchBar />
            </div>
            <div className="col-span-2 "></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
