import React, { useState } from "react";
import Logo from "../assets/file.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedin, setLogin] = useState(false);
  return (
    <header className="w-full shadow-lg h-[80px]">
      <div className="w-[124rem] flex justify-between items-center my-0 mx-auto">
        <div className="flex items-center gap-8 flex-1">
          <Link to="/">
            <img className="scale-[1.45]" height="80" width="80" src={Logo} />
          </Link>
          <div className="flex items-center flex-1">
            <div className="text-xl border-b rounded-l-lg outline-0 border-solid border-[rgb(232, 232, 232)] p-5 flex items-center h-16 cursor-pointer">
              <i
                className="fa-solid fa-xl fa-location-dot mr-4"
                style={{ color: "#fc8019" }}
              ></i>
              Pune, Maharastra, India
              <i
                className="fa-solid fa-xl fa-angle-down ml-4 "
                style={{ color: "#fc8019" }}
              ></i>
              <div className="ml-4 w-[2px] bg-slate-200 h-10"></div>
            </div>
            
            <input
              className="w-8/12 h-16 border-b rounded-r-lg outline-0 border-solid border-[rgb(232, 232, 232)] p-0 text-2xl"
              placeholder="Search for dish, restaurant or cusine...."
            />
          </div>
        </div>
        <div className="nav-items">
          <ul className="flex gap-24 text-3xl">
            <li className="cursor-pointer hover:hover:text-[#fc8019]">
              <Link to="/about">About Us</Link>
            </li>
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
