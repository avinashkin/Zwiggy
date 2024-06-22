import React, { useState } from "react";
import Logo from "../assets/file.png";

const Header = () => {
  const [isLoggedin, setLogin] = useState(false);
  return (
    <header className="w-full shadow-lg">
      <div className="w-[124rem] flex justify-between items-center my-0 mx-auto">
        <img className="logo" height="100" width="100" src={Logo} />
        <input
          className="w-1/2 h-20 border rounded-lg outline-0 border-solid border-[rgb(232, 232, 232)] p-5 text-2xl shadow-md"
          placeholder="Search for dish, restaurant or cusine...."
        />
        <div className="nav-items">
          <ul className="flex gap-24 text-3xl">
            <li
              className="cursor-pointer hover:text-[#fc8019] h-full"
              onClick={() => setLogin(!isLoggedin)}
            >
              <i className="fa-regular fa-user mr-3"></i>
              {isLoggedin ? "Logout" : "Login"}
            </li>
            <li className="cursor-pointer hover:text-[#fc8019] h-full">
              <i className="fa-solid fa-basket-shopping mr-3"></i>Cart
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
