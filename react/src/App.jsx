import { Outlet } from "react-router-dom";
import Header from "./views/Header";
import SideBar from "./views/SideBar";
import Login from "./views/Login";

function App() {

  return (
      <>
        <div className="flex flex-row h-screen w-screen overflow-hidden ">
            <SideBar/>
            <div className="flex flex-col flex-1">
                <Header/>
                <div className="flex-1 overflow-auto w-full">
                    <Outlet/>
                </div>
            </div>
        </div>
        <Login />
      </>
  )
}

export default App;
