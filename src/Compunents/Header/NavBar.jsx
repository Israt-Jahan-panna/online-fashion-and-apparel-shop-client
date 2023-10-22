import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handelSingOut = () => {
    logOut();
  };

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Function to toggle the dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="max-w-[1600px] mx-auto">
      <div className="navbar bg-white w-full py-5 px-24 ">
        <div className="navbar-start">
          <div className="dropdown ">
            <label tabIndex={0} className="lg:hidden " onClick={toggleDropdown}>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
            </label>
            { isDropdownOpen && <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2   w-52"
            >
               <li className="block p-1 font-SometypeMono text-lg font-normal leading-normal text-inherit antialiased">
                  <a className="flex items-center" href="#">
                  <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#FF324D] underline"
                        : ""
                    }
                  >
                    Home
                  </NavLink>
                  </a>
                </li>
                <li className="block p-1 font-SometypeMono text-lg font-normal leading-normal text-inherit antialiased">
                  <a className="flex items-center" href="#">
                  <NavLink
                    to="/addproduct"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#FF324D] underline"
                        : ""
                    }
                  >
                    Add Product
                  </NavLink>
                  </a>
                </li>
                <li className="block p-1 font-SometypeMono text-lg font-normal leading-normal text-inherit antialiased">
                  <a className="flex items-center" href="#">
                  <NavLink
                    to="/mycart"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#FF324D] underline"
                        : ""
                    }
                  >
                    My Cart
                  </NavLink>
                  </a>
                </li>
                <li className="block p-1 font-SometypeMono text-lg font-normal leading-normal text-inherit antialiased">
                  <a className="flex items-center" href="#">
                  <NavLink
                to="/registration"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF324D] underline"
                    : ""
                }
              >
                Registration
              </NavLink>
                  </a>
                </li>
            </ul>}
            
          </div>
          <div className="ml-4">
          <Logo></Logo>
          </div>
        </div>
        <div className="navbar hidden lg:flex">
          <ul className="gap-10 menu-horizontal px-1">
          <li className="block p-1 font-SometypeMono text-lg font-normal leading-normal text-inherit antialiased">
                  <a className="flex items-center" href="#">
                  <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#FF324D] underline"
                        : ""
                    }
                  >
                    Home
                  </NavLink>
                  </a>
                </li>
                <li className="block p-1 font-SometypeMono text-lg font-normal leading-normal text-inherit antialiased">
                  <a className="flex items-center" href="#">
                  <NavLink
                    to="/addproduct"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#FF324D] underline"
                        : ""
                    }
                  >
                    Add Product
                  </NavLink>
                  </a>
                </li>
                <li className="block p-1 font-SometypeMono text-lg font-normal leading-normal text-inherit antialiased">
                  <a className="flex items-center" href="#">
                  <NavLink
                    to="/mycart"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#FF324D] underline"
                        : ""
                    }
                  >
                    My Cart
                  </NavLink>
                  </a>
                </li>
                <li className="block p-1 font-SometypeMono text-lg font-normal leading-normal text-inherit antialiased">
                  <a className="flex items-center" href="#">
                  <NavLink
                to="/registration"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF324D] underline"
                    : ""
                }
              >
                Registration
              </NavLink>
                  </a>
                </li>
          </ul>
        </div>
        {user ? (
          <div className="flex gap-2 
          ">
            <img className="rounded-lg w-4 h-4" src={user.photoURL} alt="" />
            <p className="text-xs ">{user.displayName}</p>
            <button onClick={handelSingOut} className="btn  mb-2 rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
              Sing Out
            </button>
          </div>
        ) : (
          <div className="navbar-end   
          ">
            <Link to={"/login"}>
              <a className="btn mb-2  rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Log In</a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
