import logo from "../assets/playmusic.png";
import "../css/sidebar.css";
import { FaHome, FaSearch, FaBook, FaPlusSquare, FaHeart } from 'react-icons/fa'

const Sidebar = ():JSX.Element => {
    return (
        <div className="sidebar">
            <div className="row">
                <div 
                    style={{"width": "300px", "userSelect": "none"}} 
                    className="text-white col-auto col-md-3 min-vh-100">
                        
                    <a className="text-decoration-none align-itemcenter">
                        <img src={logo} className="logo" alt="" srcSet="" />
                        <span id="logo" className="fs-3 pt-5 align-middle">Play Music</span>
                    </a>

                    {/* <div style={{"paddingTop": "1px"}} className="bg-primary"></div> */}

                    <ul className="nav flex-column ms-5 mt-4">
                        <li className="nav-item nav-menu fs-5 my-3">
                            <FaHome />
                            <span className="ms-3">Home</span>
                        </li>
                        <li className="nav-item nav-menu fs-5 my-3">
                            <FaSearch />
                            <span className="ms-3">Search</span>
                        </li>
                        <li className="nav-item nav-menu fs-5 my-3">
                            <FaBook />
                            <span className="ms-3">Your Library</span>
                        </li>
                        <li className="nav-item nav-menu fs-5 my-3">
                            <FaPlusSquare />
                            <span className="ms-3">Create Playlist</span>
                        </li>
                        <li className="nav-item nav-menu fs-5 my-3">
                            <FaHeart />
                            <span className="ms-3">Liked Songs</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;