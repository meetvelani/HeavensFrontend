import React from "react";
import './offers-for-you.scss';
import CakeBe1 from "../assets/images/be-cake1.png";
import CakeBe2 from "../assets/images/be-cake2.png";
import CakeBe3 from "../assets/images/be-cake3.png";
import CakeBe4 from "../assets/images/be-cake4.png";
// import Button from "react-bootstrap/Button";
// import Offcanvas from "react-bootstrap/Offcanvas";
import { AiFillStar } from "react-icons/ai";

function OffersForYou() {
  return (
    <div className="ofc-main-div">
      <div className="heading-ofy">
        <h1 className="shop-heading">Offers For You</h1>
        <h2 className="bottom-txt">Today's Top Deals And Offers Exclusively For you!</h2>
      </div>
      {/* ************************************** */}
      <hr className="line-yellow" />
      <div className="container">
        <div className="row">
          <div className="col-6 col-sm-4 col-md-3 col-xl-2">
            <div className="card-cake">
              <img src={CakeBe1} alt="Cakeimage" />
              <p className="cake-title">RedVelvet</p>
              <p className="stars-be">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </p>
              <p className="cake-price">Rs. 150.00</p>
              <p className="badge-p-be">
                <span className="badge bg-light text-secondary">Red Velvet</span>{" "}
                <span className="badge bg-light text-secondary">Cake</span>
              </p>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-xl-2">
            <div className="card-cake">
              <img src={CakeBe2} alt="Cakeimage" />
              <p className="cake-title">RedVelvet</p>
              <p className="stars-be">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </p>
              <p className="cake-price">Rs. 150.00</p>
              <p className="badge-p-be">
                <span className="badge bg-light text-secondary">Red Velvet</span>{" "}
                <span className="badge bg-light text-secondary">Cake</span>
              </p>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-xl-2">
            <div className="card-cake">
              <img src={CakeBe3} alt="Cakeimage" />
              <p className="cake-title">RedVelvet</p>
              <p className="stars-be">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </p>
              <p className="cake-price">Rs. 150.00</p>
              <p className="badge-p-be">
                <span className="badge bg-light text-secondary">Red Velvet</span>{" "}
                <span className="badge bg-light text-secondary">Cake</span>
              </p>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-xl-2">
            <div className="card-cake">
              <img src={CakeBe4} alt="Cakeimage" />
              <p className="cake-title">RedVelvet</p>
              <p className="stars-be">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </p>
              <p className="cake-price">Rs. 150.00</p>
              <p className="badge-p-be">
                <span className="badge bg-light text-secondary">Red Velvet</span>{" "}
                <span className="badge bg-light text-secondary">Cake</span>
              </p>
            </div>
          </div>

          <div className="col-6 col-sm-4 col-md-3 col-xl-2">
            <div className="card-cake">
              <img src={CakeBe1} alt="Cakeimage" />
              <p className="cake-title">RedVelvet</p>
              <p className="stars-be">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </p>
              <p className="cake-price">Rs. 150.00</p>
              <p className="badge-p-be">
                <span className="badge bg-light text-secondary">Red Velvet</span>{" "}
                <span className="badge bg-light text-secondary">Cake</span>
              </p>
            </div>
          </div>


          
        </div>
      </div>
      {/* ********************************************** */}
    </div>
  );
}

export default OffersForYou;
