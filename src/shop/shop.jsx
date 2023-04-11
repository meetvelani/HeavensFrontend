import React, { useEffect, useState } from "react";
import "./shop.scss";
// import { getBestProducts } from "../apiCalls";
// import CakeBe1 from "../assets/images/be-cake1.png";
// import CakeBe2 from "../assets/images/be-cake2.png";
// import CakeBe3 from "../assets/images/be-cake3.png";
// import CakeBe4 from "../assets/images/be-cake4.png";
// import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { AiFillStar, AiOutlineBars, AiOutlineSearch } from "react-icons/ai";
import { useStateValue } from "../StateProvider";
import { getAllProduct } from "../apiCalls";
import { toast } from "react-toastify";
import { domainName } from "../constants";
import { Link } from "react-router-dom";


function OffCanvasExample({ name, ...props }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <div className="offcanvas-be">
      <a href="#offcanvas" variant="primary" onClick={handleShow} className="me-2">
        <AiOutlineBars />
      </a>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><h5 id="offcanvasRightLabel">Categories</h5></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="offcanvas-body">
            <p>
              <a
                className="categories"
                data-bs-toggle="collapse"
                href="#collapseExample"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Cake
              </a>
            </p>
            <div className="collapse" id="collapseExample">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>
            </div>

            {/* ********************* */}

            <p>
              <a
                className="categories"
                data-bs-toggle="collapse"
                href="#CheeseCake"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Cheese Cake
              </a>
            </p>
            <div className="collapse" id="CheeseCake">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>
            </div>

            {/* ************************************ */}

            <p>
              <a
                className="categories"
                data-bs-toggle="collapse"
                href="#Cookies"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Cookies
              </a>
            </p>
            <div className="collapse" id="Cookies">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>
            </div>
            {/* *************************** */}
            <p>
              <a
                className="categories"
                data-bs-toggle="collapse"
                href="#Cupcakes"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Cupcakes
              </a>
            </p>
            <div className="collapse" id="Cupcakes">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>
            </div>

            {/* ************************** */}

            <p>
              <a
                className="categories"
                data-bs-toggle="collapse"
                href="#Muffins"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Muffins
              </a>
            </p>
            <div className="collapse" id="Muffins">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>
            </div>

            {/* ************************** */}

            <p>
              <a
                className="categories"
                data-bs-toggle="collapse"
                href="#JarCakes"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Jar Cakes
              </a>
            </p>
            <div className="collapse" id="JarCakes">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>
            </div>

            {/* ************************** */}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

function Shop() {
  const [ ,dispatch] = useStateValue();

  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const bestdata = await getBestProducts();
  //       const bestPrdt = JSON.parse(bestdata.Value);
  //       console.log(bestPrdt);
  //       setBestPrdt(bestPrdt);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  useEffect(() => {
    dispatch({
      type: "SET_LOADER_STATUS",
      status: true,
    })
    const fetchData = async () => {

      const productRe = await getAllProduct()
      console.log(productRe)
      const reMessage = productRe.status[0].ResponseMessage
      if (reMessage === "Products fetched successfully") {
        const products = JSON.parse(productRe.Value)
        console.log(products)
        setProducts(products)

      }
      else {
        toast.error(reMessage)
      }
    }
    fetchData();


    dispatch({
      type: "SET_LOADER_STATUS",
      status: false,
    })

  }, [dispatch,setProducts])
  return (
    <div className="shop-cake">

      <div className="shop-content">
        {/* **********sidebar************* */}

        <div className="sidebar-be">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon2">
              <AiOutlineSearch />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
          </div>

          <div className="categories-be">
            <p className="categories">categories</p>
            <p>
              <a
                className="categories"
                data-bs-toggle="collapse"
                href="#collapseExample"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Cake
              </a>
            </p>
            <div className="collapse" id="collapseExample">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>
            </div>

            {/* ********************* */}

            <p>
              <a
                className="categories"
                data-bs-toggle="collapse"
                href="#CheeseCake"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Cheese Cake
              </a>
            </p>
            <div className="collapse" id="CheeseCake">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>
            </div>

            {/* ************************************ */}

            <p>
              <a
                className="categories"
                data-bs-toggle="collapse"
                href="#Cookies"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Cookies
              </a>
            </p>
            <div className="collapse" id="Cookies">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>
            </div>
            {/* *************************** */}
            <p>
              <a
                className="categories"
                data-bs-toggle="collapse"
                href="#Cupcakes"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Cupcakes
              </a>
            </p>
            <div className="collapse" id="Cupcakes">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>
            </div>

            {/* ************************** */}

            <p>
              <a
                className="categories"
                data-bs-toggle="collapse"
                href="#Muffins"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Muffins
              </a>
            </p>
            <div className="collapse" id="Muffins">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>
            </div>

            {/* ************************** */}

            <p>
              <a
                className="categories"
                data-bs-toggle="collapse"
                href="#JarCakes"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Jar Cakes
              </a>
            </p>
            <div className="collapse" id="JarCakes">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Default checkbox
                </label>
              </div>
            </div>

            {/* ************************** */}
          </div>
        </div>
        {/* ***************************************************** */}
        <div className="card-of-cakes">

          {/* ************************ */}
          <div className="mobile-search-be">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon2">
                <AiOutlineSearch />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
            </div>
            <div className="three-bar">
              <div className="offcanvas-be">
                {["end"].map((placement, idx) => (
                  <OffCanvasExample
                    key={idx}
                    placement={placement}
                    name={placement}
                  />
                ))}
              </div>

            </div>
          </div>
          {/* ********************** */}
          <div className="heading-div">
            <h1 className="shop-heading">Shop</h1>

            {/* ******************* */}
            <div className="dropdown">
              <button
                className="btn btn-light border-secondary text-secondary dropdown-toggle float-end"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Best Sellers
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a className="dropdown-item" href="/">
                    Price
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Ratings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* ******************* */}
          <hr className="line-yellow" />
          <div className="container">
            <div className="row">
              {products.map(product =>
                <div className="col-6 col-sm-6 col-md-4 col-xl-3">
                  <div className="card-cake">
                    <Link to={`/product-info?id=${product.pk}`}>
                      <img src={domainName + "/uploads/" + product["fields"]["image_1"]} alt="Cakeimage" className="cakeimage" />
                    </Link>
                    <p className="cake-title">{product.fields.title}</p>
                    <p className="stars-be">
                      {
                        Array.from(Array(product.fields.rating)).map(rating => <AiFillStar />)
                      }
                    </p>
                    <p className="cake-price">Rs. {product.fields.price}</p>
                    <p className="badge-p-be">
                      <span className="badge bg-light text-secondary">
                        Red Velvet
                      </span>{" "}
                      <span className="badge bg-light text-secondary">Cake</span>
                    </p>
                  </div>
                </div>
              )}
              {/* <div className="col-6 col-sm-6 col-md-4 col-xl-3">
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
                    <span className="badge bg-light text-secondary">
                      Red Velvet
                    </span>{" "}
                    <span className="badge bg-light text-secondary">Cake</span>
                  </p>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-xl-3">
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
                    <span className="badge bg-light text-secondary">
                      Red Velvet
                    </span>{" "}
                    <span className="badge bg-light text-secondary">Cake</span>
                  </p>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-xl-3">
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
                    <span className="badge bg-light text-secondary">
                      Red Velvet
                    </span>{" "}
                    <span className="badge bg-light text-secondary">Cake</span>
                  </p>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-4 col-xl-3">
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
                    <span className="badge bg-light text-secondary">
                      Red Velvet
                    </span>{" "}
                    <span className="badge bg-light text-secondary">Cake</span>
                  </p>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-xl-3">
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
                    <span className="badge bg-light text-secondary">
                      Red Velvet
                    </span>{" "}
                    <span className="badge bg-light text-secondary">Cake</span>
                  </p>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-xl-3">
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
                    <span className="badge bg-light text-secondary">
                      Red Velvet
                    </span>{" "}
                    <span className="badge bg-light text-secondary">Cake</span>
                  </p>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-xl-3">
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
                    <span className="badge bg-light text-secondary">
                      Red Velvet
                    </span>{" "}
                    <span className="badge bg-light text-secondary">Cake</span>
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
export default Shop;