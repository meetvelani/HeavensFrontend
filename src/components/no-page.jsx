import React from "react";
import UnderC from "../assets/images/working-on.gif";

function NoPage() {
  return (
    <div className="m-auto p-5" style={{backgroundColor: "black", height:"100vh"}}>
      <h1 className=" m-auto p-5 text-center text-capitalize text-warning" >
        This page is under construction
      </h1>
      <img className=" m-auto" src={UnderC} alt="under construction gif" />
      <h3>
        {" "}
        <a href="/">Visit our home page now!</a>{" "}
      </h3>
    </div>
  );
}

export default NoPage;
