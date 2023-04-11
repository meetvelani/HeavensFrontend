import "./login.scss";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Login } from "../../apiCalls";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AiOutlineMail } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useStateValue } from "../../StateProvider";
import jwt_decode from "jwt-decode";

function LoginFrontEnd() {
  const [{ loginModalShow }, dispatch] = useStateValue();


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // try {
    dispatch({
      type: "SET_LOADER_STATUS",
      status: true,
    })
    const re = await Login(data);
    console.log(re)
    if (re.status[0].Message === "Successfully Logged In.") {
      var decoded = jwt_decode(re["access_token"]);
      const detail = JSON.parse((decoded.sub).replaceAll("'", '"'))
      sessionStorage.setItem("token", re["access_token"])
      toast.success("Successfully Logged In.");
      dispatch({
        type: "SET_USER",
        userDetail: detail,
      })
      dispatch({
        type: "SET_LOGIN_STATUS",
        status: true,
      })
      handleClose()
    } else {
      toast.error(re.status[0].Message);
    }
    dispatch({
      type: "SET_LOADER_STATUS",
      status: false,
    })
    // } 
  };

  const [show, setShow] = useState(loginModalShow);
  const handleClose = () => {
    dispatch({
      type: "SET_LOGIN_MODAL",
      status: false,
    })
  };
  const handleShow = () => {
    dispatch({
      type: "SET_LOGIN_MODAL",
      status: true,
    })
  };
  return (
    <div className="login-main-div">
      <Button variant="primary" onClick={handleShow} className="login-button">
        Login
      </Button>

      <Modal centered className="model-content-h" show={loginModalShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="model-header-h">Login</Modal.Title>
        </Modal.Header>
        <Modal.Body className="model-body-h">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="field">
              <label className="label-profile hc">
                Email<span className="text-danger">*</span>
              </label>
              <input
                className="input-profile input-hc"
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
            <div className="field">
              <label className="label-profile hc">
                Password
                <span className="text-danger">*</span>
              </label>
              <input
                className="input-profile input-hc"
                placeholder="Your Password here"
                type="password"
                {...register("password", { required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/, })}
              />
            </div>
            {errors.password && <p></p>}
            <button className="btn-hc" type="submit">Login</button>
          </form>
          {/* <hr className="hr-line" /> */}
          {/* <div className="google-signup">
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
          </div> */}
        </Modal.Body>
        <Modal.Footer>
          <p className="bottom-text">
            Don't have an account?{" "}
            <a href="/" className="signup-modal">
              Sign Up
            </a>
          </p>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default LoginFrontEnd;
