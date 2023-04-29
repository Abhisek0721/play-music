import "../css/header.css";

const Header = ():JSX.Element => {
    return (
        <div id="header"  className="container-fluid min-vw-100 text-white">
            <div  className="py-3 float-end">
                <button className="header-btn">Sign up</button>
                <button className="header-btn btn-bg mx-3">Log in</button>
            </div>
        </div>
    );
}

export default Header;
