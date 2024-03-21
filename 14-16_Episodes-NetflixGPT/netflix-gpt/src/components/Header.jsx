
import {signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { LOGO } from "../utils/constatants";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user)
  const handleSignOut = () => {

    
    signOut(auth).then(() => {
      // Sign-out successful.
      // navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });

  }
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
        <img className="w-44" src = {LOGO} alt="logo" />
        {user && <div className="flex p-4 w-40 justify-between">
          <img className="w-10 h-10 " src={user.photoURL} alt="profile-icon" />
          <button className="text-white bg-red-600 px-2 text-sm rounded-md font-bold" onClick={handleSignOut}>Sign Out</button>
        </div>}
    </div>
  )
}
export default Header