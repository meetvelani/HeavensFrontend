import React, { Component, useState } from "react";
// import { GoThreeBars } from "react-icons/go";
import "./sidebar.scss";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import { AiOutlineBars } from "react-icons/ai";
// import { Login } from "../../apiCalls";
// import LoginFrontEnd from "../Login/login";
// import SignupFrontEnd from "../signup/signup";
import { useStateValue } from "../../StateProvider";
import { FaUserAlt } from "react-icons/fa";

function OffCanvasExample({ name, ...props }) {
  const [{ isLogin, user }, dispatch] = useStateValue();
  const openLoginModal = () => {
    dispatch({
      type: "SET_LOGIN_MODAL",
      status: true,
    })
    handleClose()
  }
  const openSignupModal = () => {
    dispatch({
      type: "SET_SIGNUP_MODAL",
      status: true,
    })
    handleClose()

  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const logout = ()=>{
    sessionStorage.setItem("token","")
    dispatch({
      type: "SET_LOGIN_STATUS",
      status: false,
    })
    handleClose()
  }

  return (
    <div className="offcanvas-be">
      <div variant="primary" onClick={handleShow} className="me-2 btn three-bar">
        <AiOutlineBars />
      </div>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          {/* <Offcanvas.Title><h5 id="offcanvasRightLabel">Categories</h5></Offcanvas.Title> */}
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="offcanvas-body">
            <div className="general-mobile-view">
              <ul>
                <li onClick={handleClose}><Link to="/" >home</Link></li>
                <li onClick={handleClose}><a href="/#about-section">about</a></li>
                <li onClick={handleClose}><Link to="/shop">Shop</Link></li>
                <li onClick={handleClose}><Link to="/your-orders">Orders</Link></li>
                <li onClick={handleClose}><Link to="/help">Help</Link></li>
              </ul>
              {isLogin ? <div className="user-credentials" >
                <button className="user" ><FaUserAlt /></button>
                <button className="username" ><Link to="/profile-1">{user[0]}</Link></button>
                <div className="log-out">
                  <button className="logout-button" onClick={()=>logout()}>
                    Logout
                  </button>
                </div>
              </div> :
                <div className="login-signup-mobile">
                  <button className="login-button" onClick={() => openLoginModal()}>
                    Login
                  </button>
                  <button className="signup-button" onClick={() => openSignupModal()}>
                    Sign up
                  </button>
                  {/* <LoginFrontEnd/> */}
                  {/* <SignupFrontEnd /> */}

                  {/* <button className="signup-button">
                Sign up
              </button> */}
                </div>}
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}


export class Sidebar extends Component {
  render() {
    return (
      <div>
        {/* <button
          className="btn three-bar"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <GoThreeBars/>
        </button>

        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
          style={{width:"70%"}}
        >
          <div className="offcanvas-header"> */}
        {/* <h5 className="offcanvas-title" id="offcanvasExampleLabel">
              Offcanvas
            </h5> */}
        {/* <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body"> */}
        {/* <div>
              Some text as placeholder. In real life you can have the elements
              you have chosen. Like, text, images, lists, etc.
            </div> */}
        {/* <div className="dropdown mt-3">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
              >
                Dropdown button
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
            </div> */}
        {/* <div className="general-mobile-view">
            <ul>
              <li><Link to="/">home</Link></li>
              <li><a href="#about-section">about</a></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/no-page">make your own cake</Link></li>
              <li><Link to="/help">Help</Link></li>
            </ul>
            <div className="login-signup-mobile">
              <button className="login-button">
                Login
              </button>
              <button className="signup-button">
                Sign up
              </button>
            </div>
          </div>
          </div>
        </div> */}

        <div className="offcanvas-be">
          {["start"].map((placement, idx) => (
            <OffCanvasExample
              key={idx}
              placement={placement}
              name={placement}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Sidebar;
