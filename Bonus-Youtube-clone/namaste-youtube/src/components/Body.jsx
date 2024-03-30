import { useSelector } from "react-redux";
import MainContainer from "./MainContainer"
import Sidebar from "./Sidebar"

const Body = () => {
    const {isSidebarOpen} = useSelector(store => store.app);
  return (
    <div className="flex">
        {isSidebarOpen && <Sidebar/>}
        <MainContainer/>
    </div>
  )
}
export default Body