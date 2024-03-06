import { useState } from "react"
import Header from "./Header"

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const toggleSignInform = () => {
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div>
            <Header/>
            <div className="absolute">
                <img  src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background" srcset="" />
            </div>
            <form action="" className="p-12 bg-black absolute w-1/4  my-16 mx-auto right-0 left-0 text-white rounded-xl bg-opacity-80">
                <h1 className="mb-2 font-bold text-2xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input className="p-3 my-1 w-full bg-gray-800 rounded-md placeholder:text-gray-500" type="text" placeholder="First Name" />}
                {!isSignInForm && <input className="p-3 my-1 w-full bg-gray-800 rounded-md placeholder:text-gray-500" type="text" placeholder="Last Name" />}
                {/* {!isSignInForm && <input className="p-3 my-1 w-full bg-gray-800 rounded-md placeholder:text-gray-500" type="number" placeholder="Phone Number" />} */}
                <input className="p-3 my-1 w-full bg-gray-800 rounded-md placeholder:text-gray-500" type="text" placeholder="Email or phone number" />
                <input className="p-3 my-2 w-full bg-gray-800 rounded-md placeholder:text-gray-500"type="password" placeholder="Password"  />
                <button className="p-3 my-8 bg-red-700 w-full rounded-md"> {isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className=" my-3 cursor-pointer" onClick={toggleSignInform}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In"}</p>
            </form>
        </div>
    )
}

export default Login