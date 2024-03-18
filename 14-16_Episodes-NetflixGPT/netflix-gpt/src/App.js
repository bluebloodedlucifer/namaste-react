import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import Header from "./components/Header";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { addUser, removeUser } from "./utils/userSlice";



function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  useEffect(() => {
    const unsubsribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
        // console.log("inisde if user")
        navigate("/browse")
        // ...
      } else {
        // console.log("inside else")
        dispatch(removeUser())
        navigate("/")
      }
    });

    return () => unsubsribe();
  }, []);

  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  );
}

export default App;
