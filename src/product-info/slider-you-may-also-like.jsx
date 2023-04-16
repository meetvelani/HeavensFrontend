import React, {  useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import Slider from "react-slick";

import "./slider-cart.scss";
import Arr_left from "../assets/images/arrow-left.png";
import Arr_right from "../assets/images/arrow-right.png";
import { getYouAlsoLikeCake } from "../apiCalls";
import { Link } from "react-router-dom";
import { domainName } from "../constants";


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

const ResponsiveCart = () => {

  const [alsoLikePrdt, setAlsoLikePrdt] = useState([]);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: alsoLikePrdt.length <= 4 ? alsoLikePrdt.length : 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: alsoLikePrdt.length <= 3 ? alsoLikePrdt.length : 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: alsoLikePrdt.length <= 2 ? alsoLikePrdt.length : 2,
          slidesToScroll: 1,
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
  useEffect(() => {
    const fetchData = async () => {
      try {
        const alsoLikedata = await getYouAlsoLikeCake();
        const alsoLikedataPrdt = JSON.parse(alsoLikedata.Value);
        console.log(alsoLikedataPrdt);
        setAlsoLikePrdt(alsoLikedataPrdt);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [])

  return (
    <div>
      {/* <h2> Responsive </h2> */}
      <Slider {...settings}>
        {alsoLikePrdt.map((product) => (

          <div className="slider-item">
            <Link to={`/product-info?id=${product.pk}`} ><img className="img-slider" src={`${domainName}/uploads/${product.fields.image_1}`} alt={product.title} /></Link>
            <div className="content">
              <h3>{product.fields.title}</h3>
              <p className="text-warning">
                {
                  Array.from(Array(product.fields.rating)).map(rating => <AiFillStar />)
                }
              </p>
              <h3>Rs {product.fields.price}</h3>
              {/* <p>
                <span className="badge bg-light text-secondary">
                  Redvelvet Cake
                </span>{" "}
                <span className="badge bg-light text-secondary">Cake</span>
              </p> */}
            </div>
            {/* <span className="text-of-card">Red velvet</span> */}
          </div>
        ))}


      </Slider>
    </div>
  );
};

export default ResponsiveCart;