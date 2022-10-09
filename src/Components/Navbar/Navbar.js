import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../img/580b57fcd9996e24bc43c529.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const transitionNavbar = () => {
    if (window.scrollY > 0) setShow(true);
    else setShow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__content">
        <img
          onClick={() => navigate("/")}
          className="nav__logo"
          src={logo}
          alt=""
        />
        <img
          onClick={() => navigate("/profile")}
          className="nav__avater"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRel4c26sEwdj81loUzjfgikPTZXdlfHh3MnJAcKP2vkA&s"
          alt=""
        />
      </div>
    </div>
  );
};

export default Navbar;
