import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { getBestProducts } from "../apiCalls";
import Arrow_left from "../assets/images/arrow-left.png";
import Arrow_right from "../assets/images/arrow-right.png";
import './slider.scss';
import { Link } from "react-router-dom";
import { getSpecialCake } from "../apiCalls";
import { domainName } from "../constants";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    ><img src={Arrow_right} alt="arrow next" /></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    ><img src={Arrow_left} alt="arrow previous" /></div>
  );
}

const MyCarousel = () => {
  const [bestPrdt, setBestPrdt] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bestdata = await getSpecialCake();
        const bestPrdt = JSON.parse(bestdata.Value);
        console.log(bestPrdt);
        setBestPrdt(bestPrdt);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow:  bestPrdt.length <= 4 ? bestPrdt.length : 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: bestPrdt.length <= 2 ? bestPrdt.length : 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 877,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <Slider {...settings}>
        {bestPrdt.map((product) => (
          <div key={product.pk}>
            {console.log(product.fields)}
            <Link to={`/product-info?id=${product.pk}`} ><img className="img-slider" src={`${domainName}/uploads/${product.fields.image_1}`} alt={product.title} /></Link>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default MyCarousel;
