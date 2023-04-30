import Sidebar from "../components/Sidebar";
import { Outlet } from 'react-router-dom';
import Header from "../components/Header";

const BasePage = ():JSX.Element => {
    return (
        <div>
            <Header />
            <section className="d-flex min-vw-100">
                {/* sidebar */}
                <div
                    // style={{"width": "15%"}}
                    className={``}
                >
                    <Sidebar />
                </div>
                {/* component render */}
                <div 
                    style={{"width": "100%"}}
                    className={`container-fluid bg-dark text-white min-h-100`}>
                        <div style={{"marginTop": "100px"}}>
                            <Outlet />
                        </div>
                </div>
            </section>
        </div>
    );
}

export default BasePage;