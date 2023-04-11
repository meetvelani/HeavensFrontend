import React, { Component } from "react";
import { AiFillStar } from "react-icons/ai";
import Slider from "react-slick";
import Cake1 from "../assets/images/card1.png";
import Cake2 from "../assets/images/card2.png";
import Cake3 from "../assets/images/card3.png";
import Cake4 from "../assets/images/card4.png";
import "./slider-cart.scss";
import Arr_left from "../assets/images/arrow-left.png";
import Arr_right from "../assets/images/arrow-right.png";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "transparent" }}
      onClick={onClick}
    >
      <img src={Arr_right} alt="" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "transparent" }}
      onClick={onClick}
    >
      <img src={Arr_left} alt="" />
    </div>
  );
}

export default class ResponsiveCart extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1080,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        {/* <h2> Responsive </h2> */}
        <Slider {...settings}>
          <div>
            <img src={Cake1} alt="Card_of_Cake" />
            <div className="content">
              <h3>Red velvet</h3>
              <p className="text-warning">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </p>
              <h3>Rs 150.00</h3>
              <p>
                <span className="badge bg-light text-secondary">
                  Redvelvet Cake
                </span>{" "}
                <span className="badge bg-light text-secondary">Cake</span>
              </p>
            </div>
            {/* <span className="text-of-card">Red velvet</span> */}
          </div>
          <div>
            <img src={Cake2} alt="Card_of_Cake" />
            <div className="content">
              <h3>Red velvet</h3>
              <p className="text-warning">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </p>
              <h3>Rs 150.00</h3>
              <p>
                <span className="badge bg-light text-secondary">
                  Redvelvet Cake
                </span>{" "}
                <span className="badge bg-light text-secondary">Cake</span>
              </p>
            </div>
            {/* <span className="text-of-card">Red velvet</span> */}
          </div>
          <div>
            <img src={Cake2} alt="Card_of_Cake" />
            <div className="content">
              <h3>Red velvet</h3>
              <p className="text-warning">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </p>
              <h3>Rs 150.00</h3>
              <p>
                <span className="badge bg-light text-secondary">
                  Redvelvet Cake
                </span>{" "}
                <span className="badge bg-light text-secondary">Cake</span>
              </p>
            </div>
            {/* <span className="text-of-card">Red velvet</span> */}
          </div>

          <div>
            <img src={Cake3} alt="Card_of_Cake" />
            <div className="content">
              <h3>Red velvet</h3>
              <p className="text-warning">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </p>
              <h3>Rs 150.00</h3>
              <p>
                <span className="badge bg-light text-secondary">
                  Redvelvet Cake
                </span>{" "}
                <span className="badge bg-light text-secondary">Cake</span>
              </p>
            </div>
            {/* <span className="text-of-card">Red velvet</span> */}
          </div>
          <div>
            <img src={Cake2} alt="Card_of_Cake" />
            <div className="content">
              <h3>Red velvet</h3>
              <p className="text-warning">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </p>
              <h3>Rs 150.00</h3>
              <p>
                <span className="badge bg-light text-secondary">
                  Redvelvet Cake
                </span>{" "}
                <span className="badge bg-light text-secondary">Cake</span>
              </p>
            </div>
            {/* <span className="text-of-card">Red velvet</span> */}
          </div>
          <div>
            <img src={Cake4} alt="Card_of_Cake" />
            <div className="content">
              <h3>Red velvet</h3>
              <p className="text-warning">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </p>
              <h3>Rs 150.00</h3>
              <p>
                <span className="badge bg-light text-secondary">
                  Redvelvet Cake
                </span>{" "}
                <span className="badge bg-light text-secondary">Cake</span>
              </p>
            </div>
            {/* <span className="text-of-card">Red velvet</span> */}
          </div>
        </Slider>
      </div>
    );
  }
}
