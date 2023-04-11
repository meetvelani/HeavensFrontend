import React from 'react'
import PropTypes from 'prop-types'
import "../Login/login.scss";
import { FaFlag } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { RxCross1 } from "react-icons/rx";
import FlagIndian from "../../assets/images/india-flag-icon.png";
import Logo from "../../assets/images/heavensLogoFooter.svg";


const Otp_verfication = props => {
  if (!props.show) {
    return null;
  }
  return (
    <div>
    <div className="model">
      <div className="model-content">
        <div className="model-header">
          <p className="cross" onClick={props.onClose}><RxCross1/></p>
          <h4>Otp_verfication</h4>
        </div>
        <div className="model-body">
          <p>Enter your number</p>
          <div className="wrap">
            <div className="india">
              <img src={FlagIndian} alt="Indian Flag" />
              {/* <span className="nine-one">+91</span> */}
            </div>
            <div>
              <input placeholder="XXX-XXX-XXXX"></input>
            </div>
          </div>
          <button className="send-otp">Send One Time Password</button>
          <hr className="hr-line" />
          <div className="google-signup">
            <div className="email">
              <p>
                <span className="mail">
                  <AiOutlineMail />
                </span>
                Continue with Email
              </p>
            </div>
            <div className="email">
              <p>
                <span className="mail">
                  <FcGoogle />
                </span>
                Continue with Google
              </p>
            </div>
          </div>
        </div>
        <div className="model-footer">
          <p className="bottom-text">Don't have an account? <a href="#" className="signup-modal">Sign Up</a></p>
        </div>
      </div>
    </div>
  </div>
  )


Otp_verfication.propTypes = {}

}

export default Otp_verfication;



