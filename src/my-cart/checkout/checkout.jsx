// import PropTypes from 'prop-types'
import React, { useEffect, useState } from "react";
// import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import "./checkout.scss";
// import Cake1 from "../../assets/images/card1.png";
// import NavbarBlack from "../components/header/navbar-black";
// import Footer from "../components/footer/footer";
// import IncDecCounter from "../../product-info/inc-dec";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import GreeTick from "../../assets/images/green-tick.png";
import { domainName } from "../../constants";
import CartIncDecCounter from "../cartProductIncDec";
import { createOrder, getAddress } from "../../apiCalls";
// import { Container } from "react-bootstrap";
import { toast } from "react-toastify";
import { displayRazorpay } from "../Razorpay";

function Checkout({ orderData, setOrderData, nextStep, cartDetail, setCartDetail, cartTotal, setCartTotal, setCartSubTotal, cartSubTotal, discountAmount }) {
  // static propTypes = {};
  const [show, setShow] = useState(false);
  const [PaymentType, setPaymentType] = useState("")
  const [deliveryAddress, setDeliveryAddress] = useState([])
  const [selectedAddressId, setSelectedAddressId] = useState("")
  const navigate = useNavigate()

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const selectAddress = (address)=>{
    setSelectedAddressId(address.pk)
    orderData.addressId = address.pk
    orderData.city = address.fields.city
    orderData.state = address.fields.state
    orderData.country = address.fields.country
    orderData.zipCode = address.fields.pin_code
    orderData.phoneNumber = address.fields.phone_number
    orderData.address = `${address["fields"]["house_number"]}, ${address["fields"]["area"]}, ${address["fields"]["landmark"]}, ${address["fields"]["city"]}, ${address["fields"]["state"]}, ${address["fields"]["pin_code"]}.` 
    orderData.name = address.fields.fullname
  }
  const handleSubmit = async()=>{
    if(selectedAddressId===""){
      toast.warning("Please Select address.")
    }
    else if(PaymentType===""){
      toast.warning("Please Select Payment Method.")
    }
    else if( PaymentType ==="COD") {
      orderData.token = sessionStorage.getItem("token") ||""
      const re= await createOrder(orderData)
      const reMessage = re.status[0].Message
      if(reMessage === "Successfully Order Created."){
        toast.success(reMessage)
        navigate("/your-orders")

      }
      else{
        toast.error(reMessage)
      }
      console.log(re)

    }
    else{
      orderData.token = sessionStorage.getItem("token") ||""
      displayRazorpay(orderData)
    }
    console.log(orderData)
  }
  

  const setPaymentMethod = (type) => {
    orderData.paymentMethod = type
    setPaymentType(type)
    console.log(orderData)

  }
  useEffect(() => {

    const fetchData = async () => {
      const token = sessionStorage.getItem("token") || ""

      const addressRe = await getAddress(token)
      const reMessage = addressRe.status[0].ResponseMessage
      if (reMessage === "Successfully Address fetch.") {
        const address = JSON.parse(addressRe.Value)
        setDeliveryAddress(address)
        console.log(address)

      }
      console.log(addressRe)
    }
    fetchData();

  }, [])



  return (
    <div>
      {/* <NavbarBlack /> */}
      <div className="chectout-main-div">
        <div className="container">
          <div className="check-out">
            <h2>Checkout</h2>
            <hr className="line-yellow" />
            <div className="content-1">
              <h5>Select Delivery address</h5>
              {deliveryAddress.map(address =>
                <div className={address.pk===selectedAddressId?"address-Container selected-address":"address-Container"} id={address.pk} onClick={()=>selectAddress(address)}>
                  <p className="name">{address.fields.fullname}</p>
                  <p className="address" >{address["fields"]["house_number"]}, {address["fields"]["area"]}, {address["fields"]["landmark"]}, {address["fields"]["city"]}, {address["fields"]["state"]}, {address["fields"]["pin_code"]}. </p>

                </div>)}

            </div>
            {/* <div className="btn-deli">
              <button className="deliver-btn btn btn-dark">
                Deliver to this Address
              </button>
            </div> */}
            <div className="btn-row-bk mt-4">
              <div className="btn-col-3 col mb-4">
                <Link to="/add-address"><button className="next-btn1 btn btn-dark">Add Address</button></Link>
              </div>
              <div className="row-col-3">
                <div className="btn-col-3-r col">
                  <button className="next-btn2 btn btn-dark">Edit</button>
                </div>
                <div className="btn-col-3-r col">
                  <button className="next-btn3 btn btn-dark">Delete</button>
                </div>
              </div>
            </div>
            <div className="select-payment">
              <h5 className="mb-4">Select Payment Method</h5>
              <button className={PaymentType === "Prepaid" ? "btn btn-outline-secondary p-3 pay-btn-cake active" : "btn btn-outline-secondary p-3 pay-btn-cake "} onClick={() => setPaymentMethod("Prepaid")}>
                {/* <FcGoogle /> Google Pay */}
                Pay Online
              </button>
              <button className={PaymentType === "COD" ? "btn btn-outline-secondary p-3 pay-btn-cake mt-3 active" : "btn btn-outline-secondary p-3 pay-btn-cake mt-3"} onClick={() => setPaymentMethod("COD")}>
                Pay On Delivery
              </button>
            </div>
            {/* <hr /> */}
            <div className="content-2">
              {cartDetail.map(cartProduct =>

                <div className="row-cake-co mt-4">
                  <div className="col-img ">
                    <img src={domainName + "/uploads/" + cartProduct.image_1} alt="" />
                  </div>
                  <div className="col-txt">
                    <h3>{cartProduct.title}</h3>
                    <h3>Rs {cartProduct.price}</h3>
                    <CartIncDecCounter productPrice={cartProduct.price} qty={cartProduct.quantity} productId={cartProduct.id} setCartTotal={setCartTotal} cartTotal={cartTotal} setCartSubTotal={setCartSubTotal} cartSubTotal={cartSubTotal} />
                  </div>
                </div>
              )}

            </div>
            <hr className="line-hr mt-5" />
            <div className="order-details mt-5">
              <div className="container">
                <h3 className="order-summary mb-4">Order Summary</h3>
                {cartDetail.map(cartProduct =>

                  <p>
                    <span className="left-content">{cartProduct.title}</span>
                    <span className="right-content">Rs {cartProduct.price} </span>
                  </p>
                )}

                <hr />
                <p>
                  <span className="left-content">Subtotal</span>
                  <span className="right-content">Rs {cartSubTotal}</span>
                </p>
                {discountAmount === 0 ? <></> :
                  <p className="discount">
                    <span className="left-content">Discount</span>
                    <span className="right-content">- {discountAmount}</span>
                  </p>
                }
                <p>
                  <span className="left-content">Delivery Fee</span>
                  <span className="right-content">Free</span>
                </p>
                <hr />
                <h5>
                  <span className="left-content">Total</span>
                  <span className="right-content">Rs {cartTotal}</span>
                </h5>
              </div>

              <button
                onClick={handleSubmit}
                className="btn btn-dark mt-4 mb-4 check-out-btn"
              >
                PLACE YOUR ORDER
              </button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>
                    <div className="green-tick">
                      <img src={GreeTick} alt="green tick" />
                    </div>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <h3 className="order-placed-successfully">
                    Order placed successfully.
                  </h3>
                  <h5 className="thank-you">Thank you!</h5>
                  <p className="order-id">Order ID: #KLSOO3456</p>
                  <p className="order-amnt">Order Amount: Rs. 150.00</p>
                  <Link to="/track-my-order">
                    <button className="track-order-btn">Track My Order</button>
                  </Link>
                </Modal.Body>
                {/* <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer> */}
              </Modal>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Checkout;
