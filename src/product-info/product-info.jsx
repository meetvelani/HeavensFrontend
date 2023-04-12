import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
// import Cake1 from "../assets/images/card1.png";
// import Cake2 from "../assets/images/card2.png";
// import Cake3 from "../assets/images/card3.png";
// import Cake4 from "../assets/images/card4.png";
import { AiFillStar } from "react-icons/ai";
import "./product-info.scss";
// import ResponsiveCart from "./slider-you-may-also-like";
import IncDecCounter from "./inc-dec";
import CartIncDecCounter from "./cartProductIncDec";
// import { useParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { addToCart, getCart, getProductById } from "../apiCalls";
import { toast } from "react-toastify";
import { useStateValue } from "../StateProvider";
import { domainName } from "../constants";
import ResponsiveCart from "./slider-you-may-also-like";
// import { toast } from "react-toastify";


function OffCanvasExample({ name, product, quantity, setQuantity, ...props }) {
  const [{ isLogin }] = useStateValue();

  const [show, setShow] = useState(false);
  const [cartDetail, setCartDetail] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    if (isLogin) {
      if (quantity > 0) {

        const token = sessionStorage.getItem("token") || ""

        const productData = {
          "productId": product.pk,
          "quantity": quantity,
          "token": token
        }
        const addToCartRe = await addToCart(productData)
        console.log(addToCartRe)
        if (addToCartRe.status[0].Message === "Successfully Product Added.") {
          const getCartRe = await getCart(token);
          if (getCartRe.status[0].ResponseMessage === "CartData fetched successfully") {
            const cartData = (JSON.parse(getCartRe.Value))
            const cartTotal = cartData.totalCartValue
            delete cartData.totalCartValue
            setCartTotal(cartTotal)
            setCartDetail(Object.values(cartData))
            setShow(true)
          }
          else {
            toast.error("Something went tywrong please reload the page")

          }

        }
        else {
          toast.error(addToCartRe.status[0].Message)
        }
        // setShow(true)
      }
      else {
        toast.warning("Product Quantity Must Be Greater Then 0.")
      }
    }
    else {
      toast.warning("Please Login.")

    }
  };

  return (
    <>
      <Button
        className="me-2 btn btn-dark mt-3 btn-add-to-cart"
        variant="primary"
        onClick={handleShow}
      >
        Add To Cart
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h5 className="cart-sidebar-heading">Cart</h5>
            <hr className="line-yellow" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="container offcanvas-cake-container">
            {cartDetail.map(cartProduct =>
              <div className="whole-row">
                <div className="cart-img">
                  <img src={domainName + "/uploads/" + cartProduct.image_1} alt="cake" />
                </div>
                <div className="content-col">
                  <div>
                    <h3>{cartProduct.title}</h3>
                    <h3>Rs {cartProduct.price}</h3>
                    <div className="quantity"> <CartIncDecCounter productPrice={cartProduct.price} qty={cartProduct.quantity} productId={cartProduct.id} setCartTotal={setCartTotal} cartTotal={cartTotal} /> </div>
                  </div>
                  {/* <div className="close-btn-card">
                  <CloseButton />
                </div> */}
                </div>
                <br />
              </div>
            )}

            <div className="div-total-amount  mt-5">
              <div className="item-cake">
                <h5 className="subtotal-h5">Subtotal</h5>
                <h5>Rs {cartTotal}</h5>
                <hr className="line1 mt-5 mb-5" />
                <Link to="/my-cart">
                  <button className="btn-view-cart btn btn-dark">
                    View Cart
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function ProductInfo() {
  const [, dispatch] = useStateValue();

  const location = useLocation();
  const id = new URLSearchParams(location.search).get('id');
  const [quantity, setQuantity] = useState(1);

  const [product, setProduct] = useState("");
  // const [error, setError] = useState(null);

  useEffect(() => {

    const fetchProduct = async (id) => {
      // try {
      dispatch({
        type: "SET_LOADER_STATUS",
        status: true,
      })
      const Re = await getProductById(id);
      const reMessage = Re.status[0].ResponseMessage
      console.log(Re)
      if (reMessage === "Product fetched successfully") {
        const data = JSON.parse(Re.Value)
        console.log(data)
        setProduct(data[0]);
        // console.log(product.length)
      }
      else {
        toast.error(reMessage)
      }
      // } 
      dispatch({
        type: "SET_LOADER_STATUS",
        status: false,
      })
    };
    fetchProduct(id);
  }, [id,dispatch]);


  return (
    <div>
      <div className="product-info-root">
        <div className="container">
          <div className="row container-1">
            <div className="col-8">
              {(product !== "") ?

                <div className="row whole-div-slider-cart-details">
                  <div className="col whole-content">
                    <div
                      id="carouselExampleControls"
                      className="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img src={domainName + "/uploads/" + product["fields"]["image_1"]} className="d-block w-100" alt="..." />
                        </div>
                        {/* <div className="carousel-item">
                          <img src={Cake2} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                          <img src={Cake3} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                          <img src={Cake4} className="d-block w-100" alt="..." />
                        </div> */}
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                  <div className="col cart-details">
                    <h3>{product.fields.title}</h3>
                    <h3>Rs {product.fields.price}</h3>
                    <p>
                      <span className="badge bg-light text-secondary badge-cake">
                        Redvelvet Cake
                      </span>{" "}
                      <span className="badge bg-light text-secondary badge-cake">
                        Cake
                      </span>
                    </p>
                    <p className="id-name">Id. {product.pk}</p>
                    <p className="text-warning starts-cake-des">
                      {
                        Array.from(Array(product.fields.rating)).map(rating => <AiFillStar />)
                      }

                    </p>
                    <p className="description">
                      "{product.fields.description}"
                    </p>
                    <p className="quantity">Quantity</p>
                    <IncDecCounter quantity={quantity} setQuantity={setQuantity} />
                    <div className="add-to-cart-button">
                      {/* <Button
                      className="add-to-cart-button btn btn-dark mt-3"
                      variant="primary"
                      onClick={handleShow}
                    >
                      Add To Cart
                    </Button>

                    <Offcanvas show={show} onHide={handleClose}>
                      <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                      </Offcanvas.Header>
                      <Offcanvas.Body>
                        <div className="container">
                          <div className="row">
                            <div className="col cart-img">
                              <img src={Cake1} alt="cake" />
                            </div>
                            <div className="col">
                              <h3>Red Velvet Cake</h3>
                              <h3>Rs 150.00</h3>
                              <div>
                                <IncDecCounter />
                              </div>
                            </div>
                            <br />
                            <div className="div-total-amount mt-5">
                              <div className="item-cake">
                                <h5 className="subtotal-h5">Subtotal</h5>
                                <h5>Rs 150.00</h5>
                                <hr className="line1 mt-5 mb-5" />
                                <button className="btn btn-dark">
                                  <Link to="/my-cart">View Cart</Link>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Offcanvas.Body>
                    </Offcanvas> */}
                      {["end"].map((placement, idx) => (
                        <OffCanvasExample
                          key={idx}
                          placement={placement}
                          name={placement}
                          product={product}
                          quantity={quantity}
                          setQuantity={setQuantity}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                : <></>}
            </div>
            <div className="col-4"></div>
          </div>
        </div>
        <div className=" mb-5 container p-4 pl-5">
          <h1 className="mt-3 you-might-also-like">You Might Also Like</h1>
          <hr className="line-yellow" />
          <ResponsiveCart />
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
