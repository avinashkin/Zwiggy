import React from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return (
      <header className="w-full shadow-lg">
        <div className="w-[110rem] flex justify-between items-center my-0 mx-auto">
          <div className="logo-container">
            <img
              className="logo"
              height="90"
              width="90"
              src={LOGO_URL}
            />
          </div>
          <input
            className="w-1/2 h-20 border rounded-lg outline-0 border-solid border-[rgb(232, 232, 232)] p-5 text-2xl shadow-md"
            placeholder="Search for dish, restaurant or cusine...."
          />
          <div className="nav-items">
            <ul className="flex gap-24 text-2xl">
              <li className="cursor-pointer hover:text-[#fc8019] h-full">
                Login
              </li>
              <li className="cursor-pointer hover:text-[#fc8019] h-full">
                Sign Up
              </li>
              <li className="cursor-pointer hover:text-[#fc8019] h-full">Cart</li>
            </ul>
          </div>
        </div>
      </header>
    );
  };

  export default Header;