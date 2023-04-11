import React from "react";
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import "./help.scss";

function Help() {
  return (
    <div className="help-main-div">
      <div className="container">
        <h1 className="how-can-i-help-you">Hi,What can we help you with?</h1>
        <hr className="line-yellow" />
        <div className="wrap">
          <p className="search-icon-help">
            <AiOutlineSearch />
          </p>
          <input type="text" placeholder="Search" />
        </div>
        <div className="inner-container">
          <div className="each-answer">
            <div className="display-ans">
              <a
                className="expand-ans"
                data-bs-toggle="collapse"
                href="#collapse-ans"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <AiOutlinePlus />
              </a>
              <p className="answer-query">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="collapse-ans" id="collapse-ans">
              <div className="ans-ans">
                Some placeholder content for the collapse component. This panel
                is hidden by default but revealed when the user activates the
                relevant trigger.
              </div>
            </div>
          </div>
          {/* ******************************************************* */}
          <div className="each-answer">
            <div className="display-ans">
              <a
                className="expand-ans"
                data-bs-toggle="collapse"
                href="#collapse-ans1"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <AiOutlinePlus />
              </a>
              <p className="answer-query">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="collapse-ans" id="collapse-ans1">
              <div className="ans-ans">
                Some placeholder content for the collapse component. This panel
                is hidden by default but revealed when the user activates the
                relevant trigger.
              </div>
            </div>
            <hr/>
          </div>
          
          {/* ******************************************************* */}
          <div className="each-answer">
            <div className="display-ans">
              <a
                className="expand-ans"
                data-bs-toggle="collapse"
                href="#collapse-ans2"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <AiOutlinePlus />
              </a>
              <p className="answer-query">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="collapse-ans" id="collapse-ans2">
              <div className="ans-ans">
                Some placeholder content for the collapse component. This panel
                is hidden by default but revealed when the user activates the
                relevant trigger.
              </div>
            </div>
            <hr/>
          </div>
          {/* ******************************************************* */}
        </div>
      </div>
    </div>
  );
}

export default Help;
