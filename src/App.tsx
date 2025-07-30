import Header from "./components/header"
import Sidebar from "./layouts/sidebar"
import ShowMoney from "./components/show-money"

function App() {

  return (
    <>
      <div className="flex flex-row min-h-screen w-screen">
        <div className="flex">
          <Sidebar />
        </div>
        <div className="grid grid-cols-6 p-2">
          <Header className="col-span-6"/>
          <div className="grid grid-cols-6 p-2 bg-red-500 ">
          </div>
          </div>
        </div>
    </>
  )
}

export default App
