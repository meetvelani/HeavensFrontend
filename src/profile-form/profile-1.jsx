// import React from 'react'
import React, { useState } from "react";
// import "semantic-ui-css/semantic.min.css";
// import { Form, Button, FormField, Checkbox } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import "./profile-1.scss";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Login } from "../apiCalls";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Link} from "react-router-dom"

function Profile1() {
  const [value, setValue] = useState();
  const [fullname, setName] = useState("Your Name Here");
  function handleChange(e) {
    e.preventDefault();
    setName(e.target.value);
    console.log(fullname);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const re = await Login(data);
    console.log(re);
    console.log(re.status[0].Message);
    if (re.status[0].Message === "Successfully Logged In.") {
      toast.success("Success Notification !", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      toast.error(re.status[0].Message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  // const showToastMessage = () => {
  //   toast.success("Success Notification !", {
  //     position: toast.POSITION.TOP_RIGHT,
  //   });
  // };

  // const onSubmit = (data) => {
  //   console.log(data);
  // }
  return (
    <div className="profile-1-main-div">
      <div>
        {/* <button onClick={showToastMessage}>Notify</button> */}
        <ToastContainer />
      </div>
      <div className="container">
        <div className="container-add-address">
          <div className="heading">
            <h1>Profile</h1>
            <hr className="line-yellow" />
            <h2 className="name-of-profile">{fullname}</h2>
          </div>
          <div className="form-add-address ui">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="field">
                <label className="label-profile">
                  Full name
                  <span className="text-danger">*</span>
                </label>
                <input className="input-profile"
                  placeholder="Enter the Your Full Name"
                  type="text"
                  {...register("fullname", { required: true })}
                  onChange={handleChange}
                />
              </div>
              {errors.fullname && <p></p>}
              {/* <Example /> */}
              {/* ******************************************************** */}
              <div className="field">
                <label className="label-profile">Phone Number</label>
                <PhoneInput
                  placeholder="Enter phone number"
                  value={value}
                  onChange={setValue}
                  // {...register("phonenumber")}
                />
              </div>
              {/* *********************************************************** */}
              {errors.areastreet && <p>Field required. Some error!</p>}
              <div className="field">
                <label className="label-profile">
                  Email<span className="text-danger">*</span>
                </label>
                <input
                className="input-profile"
                  placeholder="Email"
                  type="email"
                  {...register("email", {
                    required: true,
                    pattern:
                      /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />
              </div>
              {errors.email && <p className="err-pr">Please check the Email</p>}

              {/* ************************************************************** */}

              <h2 className="favorite-cakes-profile">Favorite Cakes</h2>
              <h3 className="settings-profile">Settings</h3>
              <div className="form-check form-switch">
                <p className="notification">
                  Notification on/off{" "}
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                  />
                </p>
              </div>
              <div className="form-check form-switch">
                <p className="rec">
                  Recommendation on/off{" "}
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                  />
                </p>
              </div>
              <h3 className="your-orders-profile">Your Orders</h3>
              <h4 className="help-support"><Link to="/help">Help & Support</Link></h4>
              <p className="faqs">FaQs</p>
              <h4 className="signout-profile">Sign Out</h4>

              {/* ************************************************************* */}

              <button className="save-address" type="submit">
                Edit Profile
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile1;
