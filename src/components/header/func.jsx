import React, { useState } from "react";
import { FaTimes, FaUserAlt } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

// import { GoThreeBars } from "react-icons/go";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import Logo from "../../assets/images/heavensLogoFooter.svg";
import "./func.scss";
import Sidebar from "./sidebar";
import { Link } from "react-router-dom";
// import Login from "../Login/login";
import LoginFrontEnd from "../Login/login";
import SignupFrontEnd from "../signup/signup";
import { useStateValue } from "../../StateProvider";

const Func = () => {
  const [{ isLogin, user }, dispatch] = useStateValue();

  const [toggelState, updatedToggelState] = useState(false);
  const [toggelSearchMobile, updatedSearchMobile] = useState(true);

  const onClickSearchIconMobile = () => {
    console.log(toggelSearchMobile);
    updatedSearchMobile(!toggelSearchMobile);
  };

  // const handleLogin = () => {
  //   console.log("LLL Clicked");
  //   updatedLogin(!toggelLogin);
  // };

  // const handleSignup = () => {
  //   console.log("SSS Clicked");
  //   updatedSignup(!toggelSignup);
  // };

  const onClickSearchIcon = () => {
    console.log("Clicked");
    updatedToggelState(!toggelState);
  };

  // const onClickThreeBar = () => {
  //   console.log(toggelThreeBar);
  //   updatedThreeBar(!toggelThreeBar);
  // };
  return (
    <div>
      <nav className="primary-navbar">
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
                <a href="/home#about-section">About</a>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/your-orders">Order</Link>
              </li>
              <li>
                <Link to="/help">Help</Link>
              </li>
              <li>
                {/* <button className="custom-button" onClick={onClickSearchIcon}>
                  <AiOutlineSearch />
                </button> */}
              </li>
              <li>
                <button className="custom-button">
                  <Link to="/my-cart"> <AiOutlineShoppingCart /></Link>
                </button>
              </li>
            </ul>
          </div>
          <div className={isLogin ? "login-signup-div-none" : "login-signup-div"}>
            <LoginFrontEnd />
            <SignupFrontEnd />
          </div>
          <div className={isLogin ? "user-credentials" : "user-credentials-none"}>
            <button className="custom-button" ><Link to="/profile-1">{user[0]}</Link></button>
            <button className="user" ><FaUserAlt /></button>
          </div>
        </div>
        {/* <div className={toggelState ? "search-bar" : "search-bar-none"}>
          <div className="wrap">
            <p className="search-icon-navbar">
              <AiOutlineSearch />
            </p>
            <input placeholder="Seach"></input>
            <button className="custom-button cross-btn-nav-h" onClick={onClickSearchIcon}>
              <FaTimes />
            </button>
          </div>
        </div> */}
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
              <Link TO="/">
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
                <Link to="/your-orders"> <AiOutlineShoppingCart /></Link>
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
                <p
                  className="cross-search"
                  onClick={onClickSearchIconMobile}
                  href="/"
                >
                  <FaTimes />
                </p>
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

export default Func;