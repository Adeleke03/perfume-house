import React from "react";
import { Outlet } from "react-router-dom";
import navLogo from "../assets/pz.png";
import AuthBtn from "../components/AuthBtn";
import menuImg from "../assets/ci_hamburger-lg.png";

const Navbar = () => {
  return (
    <>
      <nav className="container mx-auto p-[25px] md:px-[15px]  lg:py-[33px] lg:px-[99px] flex justify-between items-center sm:border-b-0 border-b-[1px] shadow-[#0000001A]">
        {/* Div-1 for nav logo  */}
        <div className="flex items-center gap-4">
          <img src={navLogo} alt="logo" />
          <h2 className="hidden md:block font-sansita text-[28.3px]">
            Perfume House
          </h2>
        </div>
        {/* Div-2 for auth btn */}

        {/* div for btns */}
        <div className="hidden md:block">
          <AuthBtn />
        </div>
        {/* div for menu/ hamburger img */}
        <div className="md:hidden">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="">
              <img src={menuImg} alt="menu" />
              {/* Click  ⬇️</div> */}
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-70 p-4 shadow-sm"
              >
                <AuthBtn />
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
