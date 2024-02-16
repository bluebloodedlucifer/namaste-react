import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/Usercontext";
import { useSelector } from "react-redux";

const NavItems = () => {

    const [buttonName, setButtonName] = useState("Login")
    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);
    useEffect(()=>{
        console.log('useEffect Called')
    }, [buttonName])

    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems)

    return (
        <div className="flex items-center">
            <ul className="flex p-4 m-4">
                <li className="px-4">Online Status: {onlineStatus? "🟢":"🔴"}</li>
                <li className="px-4"><Link to={"/"}>Home</Link></li>
                <li className="px-4"><Link to={"/about"}>About Us</Link></li>
                <li className="px-4"><Link to={"/contact"}>Contact Us</Link></li>
                <li className="px-4"><Link to={"/grocery"}>Grocery</Link></li>
                <li className="px-4"><Link to={"/cart"}>Cart - ({cartItems.length} items)</Link></li>
                <button className="px-4" onClick={()=>{
                    buttonName === "Login" ? setButtonName("Logout"):setButtonName("Login");
                }}>{buttonName}</button>
                <li className="px-4 font-bold">{loggedInUser}</li>
            </ul>
        </div>
    )
}

export default NavItems;