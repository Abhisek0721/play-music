import "../css/header.css";
import { Link } from "react-router-dom";

const Header = ():JSX.Element => {
    return (
        <div id="header"  className="container-fluid min-vw-100 text-white">
            <div  className="py-3 float-end">
                <Link to={"/signup"}>
                    <button className="header-btn">Sign up</button>
                </Link>
                <Link to={"/login"}>
                    <button className="header-btn btn-bg mx-3">Log in</button>
                </Link>
            </div>
        </div>
    );
}

export default Header;
