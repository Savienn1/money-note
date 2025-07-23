import Header from "./components/header"
import Sidebar from "./layouts/sidebar"
import SidebarRoute from "./layouts/sidebar-route"

function App() {

  return (
    <>
      <div className="flex flex-row min-h-screen">
        <div className="flex">
          <Sidebar />
        </div>
        <div className="flex-1 p-2">
          <Header />
        </div>
      </div>
    </>
  )
}

export default App
