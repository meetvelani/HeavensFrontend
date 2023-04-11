import React, { useState } from "react";
import "./be.scss";
import CakeBe1 from "../assets/images/be-cake1.png";
import CakeBe2 from "../assets/images/be-cake2.png";
import CakeBe3 from "../assets/images/be-cake3.png";
import CakeBe4 from "../assets/images/be-cake4.png";
// import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { AiFillStar, AiOutlineBars, AiOutlineSearch } from "react-icons/ai";

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
        <div class="offcanvas-body">
                  <p>
                    <a
                      class="categories"
                      data-bs-toggle="collapse"
                      href="#collapseExample"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      Cake
                    </a>
                  </p>
                  <div class="collapse" id="collapseExample">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Default checkbox
                      </label>
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Default checkbox
                      </label>
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Default checkbox
                      </label>
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Default checkbox
                      </label>
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Default checkbox
                      </label>
                    </div>
                  </div>

                  {/* ********************* */}

                  <p>
                    <a
                      class="categories"
                      data-bs-toggle="collapse"
                      href="#CheeseCake"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      Cheese Cake
                    </a>
                  </p>
                  <div class="collapse" id="CheeseCake">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Default checkbox
                      </label>
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Default checkbox
                      </label>
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Default checkbox
                      </label>
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Default checkbox
                      </label>
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Default checkbox
                      </label>
                    </div>
                  </div>

                  {/* ************************************ */}

                  <p>
                    <a
                      class="categories"
                      data-bs-toggle="collapse"
                      href="#Cookies"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      Cookies
                    </a>
                  </p>
                  <div class="collapse" id="Cookies">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Default checkbox
                      </label>
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Default checkbox
                      </label>
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Default checkbox
                      </label>
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Default checkbox
                      </label>
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Default checkbox
                      </label>
                    </div>
                  </div>
                  {/* *************************** */}
                  <p>
                    <a
                      class="categories"
                      data-bs-toggle="collapse"
                      href="#Cupcakes"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      Cupcakes
                    </a>
                  </p>
                  <div class="collapse" id="Cupcakes">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Default checkbox
                      </label>
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Default checkbox
                      </label>
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Default checkbox
                      </label>
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Default checkbox
                      </label>
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Default checkbox
                      </label>
                    </div>
                  </div>

                  {/* ************************** */}

                  <p>
                    <a
                      class="categories"
                      data-bs-toggle="collapse"
                      href="#Muffins"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      Muffins
                    </a>
                  </p>
                  <div class="collapse" id="Muffins">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Default checkbox
                      </label>
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Default checkbox
                      </label>
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Default checkbox
                      </label>
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Default checkbox
                      </label>
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Default checkbox
                      </label>
                    </div>
                  </div>

                  {/* ************************** */}

                  <p>
                    <a
                      class="categories"
                      data-bs-toggle="collapse"
                      href="#JarCakes"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      Jar Cakes
                    </a>
                  </p>
                  <div class="collapse" id="JarCakes">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Default checkbox
                      </label>
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Default checkbox
                      </label>
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Default checkbox
                      </label>
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Default checkbox
                      </label>
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
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

function BecomeE() {
  return (
    <div className="become-e">
      <div className="flex be-container-1">
        <div className="text-div">
          <h1 className="heading-text">Heaven's by Jenny Wilson</h1>
          <p className="para-text">
            To day top deals and offers exclusively for you!.
          </p>
        </div>
      </div>
      {/* ********************************************** */}
      <div className="shop-content">
        {/* **********sidebar************* */}

        <div className="sidebar-be">
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon2">
              <AiOutlineSearch />
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Search"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
          </div>

          <div className="categories-be">
            <p className="categories">categories</p>
            <p>
              <a
                class="categories"
                data-bs-toggle="collapse"
                href="#collapseExample"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Cake
              </a>
            </p>
            <div class="collapse" id="collapseExample">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Default checkbox
                </label>
              </div>
            </div>

            {/* ********************* */}

            <p>
              <a
                class="categories"
                data-bs-toggle="collapse"
                href="#CheeseCake"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Cheese Cake
              </a>
            </p>
            <div class="collapse" id="CheeseCake">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Default checkbox
                </label>
              </div>
            </div>

            {/* ************************************ */}

            <p>
              <a
                class="categories"
                data-bs-toggle="collapse"
                href="#Cookies"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Cookies
              </a>
            </p>
            <div class="collapse" id="Cookies">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Default checkbox
                </label>
              </div>
            </div>
            {/* *************************** */}
            <p>
              <a
                class="categories"
                data-bs-toggle="collapse"
                href="#Cupcakes"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Cupcakes
              </a>
            </p>
            <div class="collapse" id="Cupcakes">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Default checkbox
                </label>
              </div>
            </div>

            {/* ************************** */}

            <p>
              <a
                class="categories"
                data-bs-toggle="collapse"
                href="#Muffins"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Muffins
              </a>
            </p>
            <div class="collapse" id="Muffins">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Default checkbox
                </label>
              </div>
            </div>

            {/* ************************** */}

            <p>
              <a
                class="categories"
                data-bs-toggle="collapse"
                href="#JarCakes"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Jar Cakes
              </a>
            </p>
            <div class="collapse" id="JarCakes">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
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
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon2">
                <AiOutlineSearch />
              </span>
              <input
                type="text"
                class="form-control"
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
            <div class="dropdown">
              <button
                class="btn btn-outline-secondary dropdown-toggle float-end"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Best Sellers
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/">
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
                    <span class="badge bg-light text-secondary">
                      Red Velvet
                    </span>{" "}
                    <span class="badge bg-light text-secondary">Cake</span>
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
                    <span class="badge bg-light text-secondary">
                      Red Velvet
                    </span>{" "}
                    <span class="badge bg-light text-secondary">Cake</span>
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
                    <span class="badge bg-light text-secondary">
                      Red Velvet
                    </span>{" "}
                    <span class="badge bg-light text-secondary">Cake</span>
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
                    <span class="badge bg-light text-secondary">
                      Red Velvet
                    </span>{" "}
                    <span class="badge bg-light text-secondary">Cake</span>
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
                    <span class="badge bg-light text-secondary">
                      Red Velvet
                    </span>{" "}
                    <span class="badge bg-light text-secondary">Cake</span>
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
                    <span class="badge bg-light text-secondary">
                      Red Velvet
                    </span>{" "}
                    <span class="badge bg-light text-secondary">Cake</span>
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
                    <span class="badge bg-light text-secondary">
                      Red Velvet
                    </span>{" "}
                    <span class="badge bg-light text-secondary">Cake</span>
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
                    <span class="badge bg-light text-secondary">
                      Red Velvet
                    </span>{" "}
                    <span class="badge bg-light text-secondary">Cake</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* *********************************************** */}
    </div>
  );
}

export default BecomeE;
