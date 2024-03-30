import SideCardContainer from "./SideCardContainer"
import {sidebarData} from "../utils/constants"

const Sidebar = () => {

  return (
    <div className="p-5 m-5 shadow-lg w-48">
        {sidebarData.map(e => <SideCardContainer key={e.title} title={e.title} subTitles={e.subTitles}/>)}
    </div>
  )
}
export default Sidebar