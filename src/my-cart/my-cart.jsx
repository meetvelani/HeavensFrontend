// import PropTypes from "prop-types";
import "./my-cart.scss";
import { Link } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
// import { AiFillStar } from "react-icons/ai";
import Cake1 from "../assets/images/card1.png";
import IncDecCounter from "../product-info/inc-dec";
import { getCart, getCouponDetail, verifyCouponCode, verifyToken } from "../apiCalls";
import { useStateValue } from "../StateProvider";
import { toast } from "react-toastify";
import CartIncDecCounter from "./cartProductIncDec";
import { domainName } from "../constants";
// import NavbarBlack from "../components/header/navbar-black";
// import Footer from "../components/footer/footer";

function MyCart({ orderData, setOrderData, nextStep, cartDetail, setCartDetail, cartTotal, setCartTotal, setCartSubTotal, cartSubTotal, discountAmount, setDiscountAmount }) {
  const [{ isLogin }, dispatch] = useStateValue();

  const [couponCodeStatus, SetCouponCodeStatus] = useState("")
  const token = sessionStorage.getItem("token") || ""
  const couponCodeRef = useRef(null);

  const applyCouponCode = async () => {
    SetCouponCodeStatus("")
    const code = couponCodeRef.current.value
    console.log(code)
    const re = await getCouponDetail(code, token)
    const message = re["status"][0]["ResponseMessage"]
    if (message === "Coupon Detail Fetched Successfully.") {
      const discount = parseInt(re["Value"]["discount"])
      const minimumCartValue = parseInt(re["Value"]["minimum_cart_value"])
      const maximumDiscount = parseInt(re["Value"]["maximum_discount_amount"])
      if (cartSubTotal >= minimumCartValue) {
        const discountAmount = Math.min(parseInt(maximumDiscount), (parseInt(cartSubTotal) * discount) / 100)
        const afterDiscount = parseInt(cartSubTotal) - discountAmount
        setDiscountAmount(discountAmount)
        setCartTotal(afterDiscount)
        orderData.totalAmount = afterDiscount
        orderData.totalDiscount = discountAmount
        orderData.coupon_code = code
        console.log(orderData)

        SetCouponCodeStatus({ success: "Coupon Applied" })
      }
      else {
        SetCouponCodeStatus({ error: `Total Value of cart must be larger than ${minimumCartValue}.` })
      }
    }
    else {
      setCartTotal(cartSubTotal + orderData.codFee)
      orderData.coupon_code = ""
      orderData.totalAmount = cartSubTotal + orderData.codFee
      setDiscountAmount(0)
      orderData.totalDiscount = 0
      console.log(orderData)

      SetCouponCodeStatus({ error: re["status"][0]["Message"] })
    }
  }


  useEffect(() => {

    const fetchData = async () => {
      dispatch({
        type: "SET_LOADER_STATUS",
        status: true,
      })
      const token = sessionStorage.getItem("token") || ""
      const tokenRe = await verifyToken({ "login_token": token })
      const reMessage = tokenRe.status[0].Message
      if (reMessage === "Token Is Valid.") {


        const getCartRe = await getCart(token);
        if (getCartRe.status[0].ResponseMessage === "CartData fetched successfully") {
          const cartData = (JSON.parse(getCartRe.Value))
          const cartTotal = cartData.totalCartValue
          delete cartData.totalCartValue
          setCartTotal(cartTotal)
          setCartSubTotal(cartTotal)
          orderData.totalAmount = cartTotal
          setCartDetail(Object.values(cartData))
        }
        else {
          toast.error("Something went wrong please reload the page")

        }
      }
      else {
        toast.warning("Please Login.")

      }
      dispatch({
        type: "SET_LOADER_STATUS",
        status: false,
      })

    }
    fetchData();

  }, [dispatch, token, orderData]);

  return (
    <div>
      {/* <NavbarBlack/> */}
      <div className="my-cart">
        <div className="container">
          <h2 className="my-cart-heading">My Cart</h2>
          <hr className="line-yellow" />
          {cartDetail.map(cartProduct =>

            <div className="cake-content">
              <div className="col-cake2">
                <img src={domainName + "/uploads/" + cartProduct.image_1} alt="" />
              </div>
              <div className="col-cake3">
                <h3>{cartProduct.title}</h3>
                <h3>Rs {cartProduct.price}</h3>
                <div className="quantity"> <CartIncDecCounter productPrice={cartProduct.price} qty={cartProduct.quantity} productId={cartProduct.id} setCartTotal={setCartTotal} cartTotal={cartTotal} setCartSubTotal={setCartSubTotal} cartSubTotal={cartSubTotal} /> </div>
              </div>
            </div>
          )}

          <div className="coupon input-group btn-cake">
            <input
              type="text"
              ref={couponCodeRef}
              className="form-control"
              placeholder="Enter Coupon Code"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button className="btn btn-dark" type="button" id="button-addon2" onClick={() => applyCouponCode()}>
              Apply
            </button>
          </div>
          <div className='input-error'>{couponCodeStatus.error}</div>
          <div className='input-success'>{couponCodeStatus.success}</div>

          <hr className="line-gray" />
          <div className="order-details">
            <div className="container">
              <h3 className="order-summary">Order Summary</h3>
              {cartDetail.map(cartProduct =>

                <p className="products">
                  <span className="left-content">{cartProduct.title}</span>
                  <span className="right-content">Rs {cartProduct.price}  </span>
                </p>
              )}

              <hr />
              <p className="subtotal">
                <span className="left-content">Subtotal</span>
                <span className="right-content">Rs {cartSubTotal}</span>
              </p>
              {discountAmount === 0 ? <></> :
                <p className="discount">
                  <span className="left-content">Discount</span>
                  <span className="right-content">- {discountAmount}</span>
                </p>
              }
              <p className="delivery">
                <span className="left-content">Delivery Fee</span>
                <span className="right-content">Free</span>
              </p>

              <hr />
              <h5>
                <span className="left-content">Total</span>
                <span className="right-content">Rs {cartTotal}</span>
              </h5>
            </div>
            <button className="checkout-btn btn btn-dark" onClick={() => nextStep()}>
              Checkout
            </button>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default MyCart;
