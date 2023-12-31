import { Outlet } from "react-router-dom";
import Footer from "../Compunents/Footer/Footer";
import NavBar from "../Compunents/Header/NavBar";



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