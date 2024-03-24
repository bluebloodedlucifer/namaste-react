import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMAGE_URL, USER_AVATAR } from "../utils/constatants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const firstName = useRef(null);
  const lastName = useRef(null)

  const handleButtonclick = () => {
    // validate the form
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    // if somee error => message exists => return, else => move forward
    if (message) return;

    if (!isSignInForm) {
      // Signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          updateProfile(auth.currentUser, {
            displayName: firstName.current.value + " "+ lastName.current.value, photoURL: USER_AVATAR
          }).then(() => {
            // Profile updated!
            console.log("Profile Updated")
            const {uid, email, displayName, photoURL} = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL
              })
            )
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      // Sign in logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInform = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BG_IMAGE_URL}
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        action=""
        className="p-12 bg-black absolute w-1/4  my-16 mx-auto right-0 left-0 text-white rounded-xl bg-opacity-80"
      >
        <h1 className="mb-2 font-bold text-2xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={firstName}
            className="p-3 my-1 w-full bg-gray-800 rounded-md placeholder:text-gray-500"
            type="text"
            placeholder="First Name"
          />
        )}
        {!isSignInForm && (
          <input
            ref={lastName}
            className="p-3 my-1 w-full bg-gray-800 rounded-md placeholder:text-gray-500"
            type="text"
            placeholder="Last Name"
          />
        )}
        {/* {!isSignInForm && <input className="p-3 my-1 w-full bg-gray-800 rounded-md placeholder:text-gray-500" type="number" placeholder="Phone Number" />} */}
        <input
          ref={email}
          className="p-3 my-1 w-full bg-gray-800 rounded-md placeholder:text-gray-500"
          type="text"
          placeholder="Email"
        />
        <input
          ref={password}
          className="p-3 my-2 w-full bg-gray-800 rounded-md placeholder:text-gray-500"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-3 my-8 bg-red-700 w-full rounded-md"
          onClick={handleButtonclick}
        >
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className=" my-3 cursor-pointer" onClick={toggleSignInform}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
