import React, { useEffect } from "react";
import Cake from "../assets/images/home_cake_carousal.png";
import Line from "../assets/images/Line65.png";
import BrownCake from "../assets/images/brown_cake.png";
import Line2 from "../assets/images/Line2.png";
import { Link } from "react-router-dom";
import Women from "../assets/images/women-3.png";
import Card6 from "../assets/images/card6-1.png";
import Card7 from "../assets/images/card6-2.png";
import Card8 from "../assets/images/card6-3.png";
import Card9 from "../assets/images/card6-4.png";
import BckCake2 from "../assets/images/bckgnd-cake2.png";
import BckCake3 from "../assets/images/bckgnd-cake3.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./home.scss";
import Slider from "react-slick";
import Responsive from "./slider";
import WhiteArr_right from "../assets/images/white-arrow-right.png";
import WhiteArr_left from "../assets/images/white-arrow-left.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

// import { useStateValue } from "../StateProvider";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={"slider-action slider-action-next"}
      onClick={onClick}
    >
      <img src={WhiteArr_right} alt="" />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className={"slider-action slider-action-prev"} onClick={onClick}>
      <img src={WhiteArr_left} alt="" />
    </div>
  );
}

function Home() {
  // const [{ loginModalShow }, dispatch] = useStateValue();

  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  useEffect(() => {
    window.scrollTo(0, 0)
    AOS.init({
      once: true,
    }
    );

  }, []);
  return (
    <main>
      <section className="home-main">

        <div className="wrap2" data-aos="fade-up" data-aos-duration="1200">
          <div className="spcl-cake-mobile-title">
            Special of the Day <br />
            <img src={Line} alt="Line" />
          </div>
          <div className="col1">
            <Slider {...settings}>
              <div>
                <img src={Cake} alt="Cake" />
              </div>
              <div>
                <img src={BckCake2} alt="Cake" />
              </div>
              <div>
                <img src={BckCake3} alt="Cake" />
              </div>
            </Slider>
          </div>
          <div className="col2" >
            <h2 className="spcl-day">Special of the Day</h2>
            <img className="line1" src={Line} alt="line" />
            <p className="content-1">
              Treat yourself to todays special mouth-watering dessert. Get the
              ultimate experience of deliciousness with a blend of our exquisite
              fresh flavors.
            </p>
            <button className="btn-home">Try Now</button>
          </div>
        </div>
      </section>

      <section className="section2-home">
        <div className="wrap" data-aos="fade-up" data-aos-duration="1200">
          <div className="col1">
            <h2>Make Your Own Cake Design</h2>
            <img src={Line2} alt="line" />
            <br />
            <p className="content-2">
              Bring home a customised cake perfect for you and the occasion.
              Lightly whipped cream and fresh berries or a drizzle of caramel
              sauce and golden biscuits crumbs. Do it your way and order now.
            </p>
            <Link to="/no-page"><button className="btn-home">Try Now</button></Link>
          </div>
          <div className="col2">
            <img src={BrownCake} alt="Brown cake" className="brown-cake" />
          </div>
        </div>
      </section>

      <section className="section3-home" id="about-section" >
        <div className="wrap">
          <div className="content-about" data-aos="fade-up" data-aos-duration="1200">
            <h2>ABOUT Heaven's</h2>
            <p className="how-we-got-here">How We Got Here</p>
            <p className="content-para">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.""Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.""Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua."
            </p>
          </div>
        </div>
      </section>

      <section className="section4-home">
        <div className="main-content" data-aos="fade-up" data-aos-duration="1200">
          <div className="text-content">
            <h2>heaven's special cake</h2>
            <img src={Line2} alt="Line Yellow" />
            <p className="content4-text">
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
              ullamco cillum dolor. Voluptate exercitation reprehenderit elit
              laborum.
            </p>
          </div>
          <div className="card-content" data-aos="fade-up" data-aos-duration="1200">
            <Responsive />
          </div>
        </div>
      </section>

      <section className="section5-home">
        <div className="wrap5" data-aos="fade-up" data-aos-duration="1200">
          <div className="text-content5">
            <h2>Become women entrepreneur on Heaven's</h2>
            <p className="content-women">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </p>
            <div className="button-section">
              <Link to="/no-page"><button className="btn-home">
                Start women entrepreneur journey
              </button></Link>
              <Link to="/no-page"><button className="btn-home-white">Avail Offer</button></Link>
            </div>
          </div>
          <div className="women-img">
            <img src={Women} alt="Women" />
          </div>
        </div>
      </section>

      <section className="section6-home">
        <div className="main-content6" >
          <div className="text-content6">
            <h2 className="our-team">Our Team</h2>
            <img src={Line2} alt="Line Yellow" />
            <p>
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
              ullamco cillum dolor. Voluptate exercitation reprehenderit elit
              laborum.
            </p>
          </div>
          <div className="container">
            <div className="card-content6">
              <div className="wrap-content-6" >
                <div className="card-content-6" data-aos="fade-up" data-aos-duration="1200">
                  <img src={Card6} alt="Card-" />
                  <div className="card-text6">
                    <h3>Jenny Wilson</h3>
                    <h5>Chef</h5>
                    <p>
                      Nulla Lorem mollit cupidatat irure. Laborum magna nulla
                      duis ullamco cillum dolor. Voluptate exercitation
                      reprehenderit elit laborum.
                    </p>
                    <div className="fa-icon">
                      <span className="sm-icon">
                        <FaFacebook />
                      </span>
                      <span className="sm-icon">
                        <FaInstagram />
                      </span>
                      <span className="sm-icon">
                        <FaTwitter />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="card-content-6" data-aos="fade-up" data-aos-duration="1200">
                  <img src={Card7} alt="Card-" />
                  <div className="card-text6">
                    <h3>Leslie Alexander</h3>
                    <h5>Chef</h5>
                    <p>
                      Nulla Lorem mollit cupidatat irure. Laborum magna nulla
                      duis ullamco cillum dolor. Voluptate exercitation
                      reprehenderit elit laborum.
                    </p>
                    <div className="fa-icon">
                      <span className="sm-icon">
                        <FaFacebook />
                      </span>
                      <span className="sm-icon">
                        <FaInstagram />
                      </span>
                      <span className="sm-icon">
                        <FaTwitter />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wrap-content-6">
                <div className="card-content-6" data-aos="fade-up" data-aos-duration="1200">
                  <img src={Card8} alt="Card-" />
                  <div className="card-text6">
                    <h3>Jane Cooper</h3>
                    <h5>Chef</h5>
                    <p>
                      Nulla Lorem mollit cupidatat irure. Laborum magna nulla
                      duis ullamco cillum dolor. Voluptate exercitation
                      reprehenderit elit laborum.
                    </p>
                    <div className="fa-icon">
                      <span className="sm-icon">
                        <FaFacebook />
                      </span>
                      <span className="sm-icon">
                        <FaInstagram />
                      </span>
                      <span className="sm-icon">
                        <FaTwitter />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="card-content-6" data-aos="fade-up" data-aos-duration="1200">
                  <img src={Card9} alt="Card-" />
                  <div className="card-text6">
                    <h3>Robert Fox</h3>
                    <h5>Chef</h5>
                    <p>
                      Nulla Lorem mollit cupidatat irure. Laborum magna nulla
                      duis ullamco cillum dolor. Voluptate exercitation
                      reprehenderit elit laborum.
                    </p>
                    <div className="fa-icon">
                      <span className="sm-icon">
                        <FaFacebook />
                      </span>
                      <span className="sm-icon">
                        <FaInstagram />
                      </span>
                      <span className="sm-icon">
                        <FaTwitter />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
