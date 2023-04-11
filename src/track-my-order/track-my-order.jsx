import React, { useEffect, useState } from "react";
// import NavbarBlack from "../components/header/navbar-black";
import "./track-my-order.scss";
import Map1 from "../assets/images/map.png";
// import { ProgressBar } from "react-bootstrap";
import Progressbar1 from "./progressbar";
import { useParams } from "react-router-dom";
import { getOrder, getOrderById } from "../apiCalls";
import { toast } from "react-toastify";
// import Footer from "../components/footer/footer"
// import PropTypes from 'prop-types'

function TrackMyOrder(props) {
  const [orders, setOrders] = useState([])
  // const [orders, setOrders] = useState([])

  const { id } = useParams()
  useEffect(() => {
    const fetchData = async () => {
      const token = sessionStorage.getItem("token") || ""
      const re = await getOrderById(token, id)
      const reMessage = re.status[0].ResponseMessage
      if (reMessage === "Successfully Orders fetch.") {
        const order = JSON.parse(re.Value)
        console.log(order.results)
        setOrders(order.results)


      }
      else if (re?.status[0]?.Message === "Invalid Token.") {

        toast.warning("Please Login.")
      }
      else {
        toast.error(reMessage)
      }

    }
    fetchData();


  }, [])
  return (
    <>
      {/* <NavbarBlack /> */}
      <div className="main-div">
        <div className="container">
          <h3 className="track-order-heading">track your order</h3>
          <hr className="line-yellow" />
          {/* <div className="map-img-track">
          <img src={Map1} alt="map" />
        </div> */}
          <br></br>
          {orders.map(order =>
            <div>
              <Progressbar1 orderStatus = {order.status} />
              <hr className="mt-5" />

              <div className="order-details">
                <div className="container">
                  <h3 className="order-summary">Order Summary</h3>
                  {order.product.map(product =>
                    <p className="products">
                      <span className="left-content">{product.productDetail.title} </span>
                      <span className="right-content">Rs {product.productDetail.price} x {product.quantity} </span>
                    </p>

                  )}

                  <hr />
                  <p className="subtotal">
                    <span className="left-content">Subtotal</span>
                    <span className="right-content">Rs {order.total_amount + order.total_discount}</span>
                  </p>
                  <p className="delivery">
                    <span className="left-content">Delivery Fee</span>
                    <span className="right-content">Free</span>
                  </p>
                  <hr />
                  <h5>
                    <span className="left-content">Total</span>
                    <span className="right-content">Rs {order.total_amount}</span>
                  </h5>
                </div>
                {order.payment_method === "COD" ?
                  <button className="checkout-btn btn btn-outline-secondary">Your Bill  ₹ {order.total_amount} </button> :
                  <button className="checkout-btn btn btn-outline-secondary">Your Bill Successfully ₹ {order.total_amount}  paid.</button>}
              </div>
            </div>
          )}

        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
}

// TrackMyOrder.propTypes = {}

export default TrackMyOrder;
