import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons"
import Navbar from "./NavBar";

const Header = () => {

    function showNavBar(){
        document.querySelector(".sidenav").classList.toggle("show");
        document.querySelector("body").classList.toggle("opacity");
    }

    return (
        <>
            <div className="header">
                <button onClick={showNavBar}><FontAwesomeIcon icon={faBars} /></button>
            </div>
            <Navbar close={showNavBar}></Navbar>
        </>
    )
}

export default Header;