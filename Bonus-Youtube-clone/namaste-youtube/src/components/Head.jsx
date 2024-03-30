import { useDispatch } from "react-redux";
import { toggleSidebar } from "../utils/appSlice";

const Head = () => {

  const dispatch = useDispatch()

  const handleHamburgerClick = () => {
    dispatch(toggleSidebar())
  }
  return (
    <div className="grid grid-flow-col shadow-lg p-2">
      <div className="flex col-span-1 px-6 py-2">
        <img onClick={handleHamburgerClick}
          className="h-5 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg"
          alt="hamburger"
        />
        <img
          className="h-5 pl-4"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt="youtube-logo"
        />
      </div>
      <div className="col-span-10 flex justify-center">
        <input className="w-5/12 p-2 border border-gray-400 rounded-l-full" type="text" placeholder="Search" />
        <button className="border p-2 border-gray-400 rounded-r-full">Search</button>
        <img src="" alt="" />
      </div>
      <div className="col-span-1">
        <img
        className=" h-8"
          src="https://cdn-icons-png.flaticon.com/128/64/64572.png"
          alt="user-icon"
        />
      </div>
    </div>
  );
};
export default Head;
