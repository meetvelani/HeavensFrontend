import React from "react";
import Cake from "../assets/images/card1.png";
import IncDecCounter from "../product-info/inc-dec";
import "./your-profile-2.scss";

function YourProfile2() {
  return (
    <div>
      <div className="main-div-your-profile-2">
        <div className="heading">
          <h1>Your Orders</h1>
        </div>
        <hr className="line-yellow" />
        <h3 className="delivery-date">Delivery date: 13 Oct 2022</h3>
        <div className="col-y-p-2">
          <div className="rr1">
            <div className="col-x-p-1">
              <img className="col-card-img" src={Cake} alt="" />
            </div>
            <div className="col-x-p-2">
              <h2>RedVelvet Rs. 150.00</h2>
              <IncDecCounter />
            </div>
          </div>
          <div className="btn-track-order">
            <button className="btn-t-o">Track Your Order</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YourProfile2;
