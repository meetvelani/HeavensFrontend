import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./signup.scss";
import { useForm } from "react-hook-form";
import { SignUp } from "../../apiCalls";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { FcGoogle } from "react-icons/fc";
import "react-phone-number-input/style.css";
import { useStateValue } from "../../StateProvider";
// import PhoneInput from "react-phone-number-input";

function SignupFrontEnd() {
  const [{signupModalShow}, dispatch] = useStateValue();


  // const [value, setValue] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      dispatch({
        type: "SET_LOADER_STATUS",
        status: true,
      })
      const newData = { ...data, token: "demovalue" };
      const su = await SignUp(newData);
      if ((su.status[0].Message) === "Successfully User Created.") {
        toast.success(JSON.stringify(su.status[0].Message));
        handleClose()
        
      } else {
        toast.error(JSON.stringify(su.status[0].Message));
      }
      dispatch({
        type: "SET_LOADER_STATUS",
        status: false,
      })
    } catch (error) {

    }
  };

  const [show, setShow] = useState(signupModalShow);

  const handleClose = () => {
    dispatch({
      type: "SET_SIGNUP_MODAL",
      status: false,
    })
  };
  const handleShow = () => {
    dispatch({
      type: "SET_SIGNUP_MODAL",
      status: true,
    })
  };
  return (
    <div className="signup-main-div">
      <Button className="signup-button" variant="primary" onClick={handleShow}>
        SignUp
      </Button>

      <Modal className="model-content-h" show={signupModalShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="model-header-h">Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body className="model-body-h">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="field">
              <label className="label-profile hc">
                Full Name
                <span className="text-danger">*</span>
              </label>
              <input
                className="input-profile input-hc"
                placeholder="Your name here"
                type="text"
                {...register("name", { required: true })}
              />
            </div>
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
            {errors.email && (
              <p className="text-danger err-pr">Please check the Email</p>
            )}
            <div className="field">
              <label className="label-profile hc">Phone Number</label>
              <input
                className="input-profile input-hc"
                placeholder="Phone Number"

                {...register("phoneNumber", {
                  required: true,
                  pattern: /^[6-9]\d{9}$/i,

                })}
              />
            </div>

            <div className="field">
              <label className="label-profile hc">
                Password
                <span className="text-danger">*</span>
              </label>
              <input
                className="input-profile input-hc"
                placeholder="Your Password here"
                type="password"
                {...register("password", {
                  required: true,
                  pattern:
                    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/,
                })}
              />
            </div>
            {errors.password && <p className="text-danger">Please enter strong password</p>}

            <button className="btn-hc" type="submit">
              Sign Up
            </button>
          </form>
          {/* <div className="google-signup">
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
            Already have an account?{" "}
            <a href="/" className="signup-modal">
              Login
            </a>
          </p>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SignupFrontEnd;
