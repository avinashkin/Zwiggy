import React, { useState } from "react";
import Logo from "../assets/file.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedin, setLogin] = useState(false);
  return (
    <header className="w-full shadow-lg h-[80px]">
      <div className="w-[124rem] flex justify-between items-center my-0 mx-auto">
        <Link to="/"><img className="scale-[1.45]" height="80" width="80" src={Logo} /></Link>
        <input
          className="w-1/2 h-16 border rounded-lg outline-0 border-solid border-[rgb(232, 232, 232)] p-5 text-2xl shadow-md"
          placeholder="Search for dish, restaurant or cusine...."
        />
        <div className="nav-items">
          <ul className="flex gap-24 text-3xl">
            <l1 className="cursor-pointer hover:hover:text-[#fc8019]"><Link to="/about">About Us</Link></l1>
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
