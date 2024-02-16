import { LOGO_URL } from "../utils/constants";

const Logo = () => {
    return (
        <div className="logo-container">
            <img className= "w-56" src = {LOGO_URL}></img>
        </div>
    )
}

export default Logo;