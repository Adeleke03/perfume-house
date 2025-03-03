import React from "react";
import { Link } from "react-router-dom";

const AuthBtn = () => {
  return (
    <div className="md:flex gap-[34px] ">
      <button className="mb-2 md:mb-0 w-full   md:w-[140px] h-[61px] bg-[#E6D2FF] rounded text-[#8D34FF] cursor-pointer">
        <Link to="/auth/sign-in">Login</Link>
      </button>
      <button className=" mb-2 md:mb-0 w-full md:w-[140px] h-[61px] bg-[#8D34FF] rounded text-[#F5F5F5] cursor-pointer">
        <Link to="/auth/sign-up">Sign Up</Link>
      </button>
    </div>
  );
};

export default AuthBtn;
