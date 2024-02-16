import Logo from "./Logo"
import NavItems from "./NavItems"

const Header = () => {
    return (
        <div className="flex justify-between bg-pink-100">
            <Logo/>
            <NavItems/>
        </div>
    )
}

export default Header;