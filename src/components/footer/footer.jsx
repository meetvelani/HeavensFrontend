import React from "react";
import { Component } from "react";
import "./footer.scss";
import qrCode from "./qrCode.png";
import logo from "./heavensLogoFooter.svg";
import { Icon } from "@iconify/react";
import playStore from './Play Store badge.png'
import appleStore from './App Store badge.png'
class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="col">
            <div className="wrp">
            <div className="qrCode">
              <div className="qrImg">
                <img className="qrImgSec" src={qrCode} alt="QR Code" />
              </div>
            </div>
            <div className="downloadApp">
              <h2>
                Download the app to
                <br />
                explore any cake
              </h2>
              <div className="app">
                {/* <Icon icon="logos:google-play-icon" width="38" />
                Get it on
                <br />
                <span className="playStore">Google Play</span> */}
                <img src={playStore} alt="Play store app"/>
              </div>
              <br />
              <div className="app">
                {/* <Icon icon="bi:apple" width="38" />
                Get it on
                <br />
                <span className="playStore">App Store</span> */}
                <img src={appleStore} alt="Apple store app"/>
              </div>
            </div>
            </div>
            <div className="socialMedia">
              <img src={logo} alt="Heavens Logo" />
              <h2>Join Heaven's Community</h2>
              <span className="socialMediaText">
                Good cake isn't cheap and cheap cake isn't good!
              </span>
              <div className="smIconDiv">
                <span className="smIcon" id="linkedIn">
                  <Icon icon="entypo-social:linkedin-with-circle" width="35" />
                </span>
                <span className="smIcon">
                  <Icon icon="akar-icons:instagram-fill" width="35" />
                </span>
                <span className="smIcon">
                  <Icon icon="ic:twotone-facebook" width="35" />
                </span>
                <span className="smIcon">
                  <Icon icon="jam:twitter-circle" width="35" />
                </span>
              </div>
              <span className="socialMediaText2">Toll Free: XXX-XXX-XXXX</span>
            </div>
          </div>
        </div>
        <div className="footerTextBottom">
            <span className="footText">
              <Icon icon="ri:copyright-line" width="16" /> 2021-2022 Heavens
              Network Inc.
            </span>
            <span className="footRightText">
              {" "}
              Terms of Services &emsp; &emsp; Privacy Policy
            </span>
          </div>
      </footer>
    );
  }
}
export default Footer;
