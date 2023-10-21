import { Outlet } from "react-router-dom";
import NavBar from "../Compunents/Header/Navbar";
import Footer from "../Compunents/Footer/Footer";



const Roots = () => {
    return (
        <div>
            <div className="max-w-[1600px] mx-auto">
           <NavBar></NavBar>
            <div>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
        </div>
    );
};

export default Roots;