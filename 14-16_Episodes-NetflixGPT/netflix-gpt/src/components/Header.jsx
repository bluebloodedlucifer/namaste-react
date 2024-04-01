import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constatants";
import { toggleGPTSeachView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // navigate("/")
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const handleGPTSearchClick = () => {
    // toggle GPT Search Button
    dispatch(toggleGPTSeachView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute md:px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex flex-col md:flex-row md:justify-between items-center">
      <Link to={"/browse/"}>
        <img className="w-44" src={LOGO} alt="logo" />
      </Link>
      {user && (
        <div className="flex p-2">
          {showGPTSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((language) => (
                <option key={language.identifier} value={language.identifier}>
                  {language.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="text-white py-2 px-4 mx-4 my-2 bg-purple-800 rounded-md"
            onClick={handleGPTSearchClick}
          >
            {showGPTSearch? "Back":"GPT Search"}
          </button>
          <img className="w-12 h-12 rounded-xl" src={user.photoURL} alt="profile-icon" />
          <button
            className="text-white bg-red-600 px-4 py-2 mx-4 my-2 rounded-md font-bold "
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
