import React, { useState } from "react";
import { FaTimes, FaUserAlt } from "react-icons/fa";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import Logo from "../../assets/images/header-logo.svg";
import "./navbar-black.scss";
import Sidebar from "./sidebar";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import LoginFrontEnd from "../Login/login";
import SignupFrontEnd from "../signup/signup";
import { FiLogOut } from "react-icons/fi";
import Dropdown from 'react-bootstrap/Dropdown';

const NavbarBlack = () => {
  const [{ isLogin, user },dispatch] = useStateValue();

  const [toggelState, updatedToggelState] = useState(false);

  const [toggelSearchMobile, updatedSearchMobile] = useState(true);

  const onClickSearchIconMobile = () => {
    console.log(toggelSearchMobile);
    updatedSearchMobile(!toggelSearchMobile);
  };

  const logout = ()=>{
    sessionStorage.setItem("token","")
    dispatch({
      type: "SET_LOGIN_STATUS",
      status: false,
    })
  }


  const onClickSearchIcon = () => {
    console.log("Clicked");
    updatedToggelState(!toggelState);
  };

 
  return (
    <div>
      <nav className="primary-navbar-black">
        {/* ************************************************************ */}
        <div className="cross-mobile-navbar">
          <FaTimes />
        </div>
        <div className="logo-name">
          <div className="logo-image">
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
          </div>
        </div>
        <div className={toggelState ? "sub-menu-none" : "sub-menu"}>
          <div className="general-menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                {/* <a href="#about-section">About</a> */}
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/your-orders">Your Orders</Link>
              </li>
              <li>
                <Link to="/help">Help</Link>
              </li>
              {/* <li>
                <button className="custom-button" onClick={onClickSearchIcon}>
                  <AiOutlineSearch />
                </button>
              </li> */}
              <li>
                <button className="custom-button">
                  <Link to="/my-cart">
                    <AiOutlineShoppingCart />
                  </Link>
                </button>
              </li>
            </ul>
          </div>
          <div className={isLogin ? "login-signup-div-none" : "login-signup-div"}>
            <LoginFrontEnd />
            <SignupFrontEnd />
          </div>
          <div className={isLogin ? "user-credentials" : "user-credentials-none"}>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {user[0]} <FaUserAlt />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {/* <Dropdown.Item href="#/action-1"><CgProfile /> <div>My Profile</div></Dropdown.Item> */}
                <Dropdown.Item onClick={()=>logout()}><FiLogOut /> <div>Log Out</div></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          {/* <div
            className={
              toggelLogin ? "login-signup-div-none" : "login-signup-div"
            }
            // className="login-signup-div"
          >
            <button onClick={handleLogin} className="login-button">
              Login
            </button>
            <button onClick={handleSignup} className="signup-button">
              Signup
            </button>
          </div>
          <div
            className={
              toggelLogin ? "user-credentials" : "user-credentials-none"
            }
          >
            <button className="custom-button" onClick={handleLogin}>
              <Link to="/profile-1">Jennifer Lopez</Link>
            </button>
            <FaUserAlt />
          </div> */}
        </div>
        <div className={toggelState ? "search-bar" : "search-bar-none"}>
          <div className="wrap">
            <button className="custom-button">
              <AiOutlineSearch />
            </button>
            <input placeholder="Seach"></input>
            <button className="custom-button" onClick={onClickSearchIcon}>
              <FaTimes />
            </button>
          </div>
        </div>
      </nav>

      {/* *************** Mobile Navbar ********************  */}
      <nav className="whole-mobile-nav">
        <div className="mobile-navbar">
          <div className="main-navigation-mobile">
            {/* <div className="three-bar">
              <span onClick={onClickThreeBar}>
                <GoThreeBars />
              </span>
            </div> */}
            <div>
              <Sidebar />
            </div>
            <div
              className={
                !toggelSearchMobile
                  ? "logo-mobile-main-hide"
                  : "logo-mobile-main"
              }
            >
              <Link to="/">
                <img src={Logo} alt="Logo" />
              </Link>
            </div>
            <div
              className={
                toggelSearchMobile
                  ? "search-cart-mobile"
                  : "search-cart-mobile-hide"
              }
            >
              <span onClick={onClickSearchIconMobile}>
                <AiOutlineSearch />
              </span>
              <span className="shopping-cart">
                <Link to="/my-cart">
                  <AiOutlineShoppingCart />
                </Link>
              </span>
            </div>
            <div
              className={
                toggelSearchMobile
                  ? "search-box-mobile-hide"
                  : "search-box-mobile"
              }
            >
              <div className="wrap">
                {/* <a href="#">
                  <FaSearch />
                </a> */}
                <input placeholder="Seach"></input>
                <button
                  className="custom-button"
                  onClick={onClickSearchIconMobile}
                >
                  <FaTimes />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <Sidebar/> */}
        {/* <div className={toggelThreeBar ? "side-menu-hide" : "side-menu"}>
          <h5 onClick={onClickThreeBar} className="cross-button">
            <FaTimes />
          </h5>
          <div className="general-mobile-view">
            <ul>
              <li>home</li>
              <li>about</li>
              <li>shop</li>
              <li>make your own cake</li>
              <li>help</li>
            </ul>
            <div className="login-signup-mobile">
              <button onClick={handleLogin} className="login-button">
                Login
              </button>
              <button onClick={handleSignup} className="signup-button">
                Sign up
              </button>
            </div>
          </div>
        </div> */}
      </nav>
    </div>
  );
};

export default NavbarBlack;
