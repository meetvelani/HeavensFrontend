import React, { useEffect, useState } from "react";
import "./your-order.scss";
// import Cake1 from "../assets/images/card1.png";
// import IncDecCounter from "../product-info/inc-dec";
// import DateTime from "../components/date-time";
import { Link } from "react-router-dom";
import { getOrder } from "../apiCalls";
// import { toast } from "react-toastify";
import { domainName } from "../constants";
import AOS from 'aos';
import { useStateValue } from "../StateProvider";


function YourOrders() {
  const [{isLogin}] = useStateValue();

  const [orders, setOrders] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0)
    AOS.init({
      once: true,
    }
    );

    const fetchData = async () => {
      const token = sessionStorage.getItem("token") || ""
      const re = await getOrder(token)
      const reMessage = re.status[0].ResponseMessage
      console.log(re)
      if (reMessage === "Successfully Orders fetch.") {
        const order = JSON.parse(re.Value)
        console.log(order.results)
        setOrders(order.results)

      }
      else {
        // toast.error(reMessage)
      }

    }
    fetchData();

  }, [])
  return (
    
    <div className="your-orders">
      {isLogin?<>
      {orders.length > 0 ?
      <div className="container">
        <div className="heading-ofy">
          <h1 className="shop-heading">Your Orders</h1>
          <hr className="line-yellow" />
          {orders.map(order =>
            <div className="content" data-aos="fade-up" data-aos-duration="1200">
              <div className="content-1" >
                {/* <h3 className="delivery-date">Delivery Date: <DateTime /></h3> */}
                {order.product.map(product =>
                  <div className="cake-content">
                    {/* <h3 className="delivery-date">Delivery Date: 14 March</h3> */}
                    <div className="col-cake2">
                      <img src={domainName + "/uploads/" + product.productDetail.image_1} alt="" />
                    </div>
                    <div className="col-cake3">
                      <h3>{product.productDetail.title}</h3>
                      <h3>Rs {product.productDetail.price}</h3>
                      <h3>Qty. {product.quantity}</h3>
                      {/* <IncDecCounter /> */}
                      {/* <button className="button-tyo-mobile"><Link to="/track-my-order">Track your Order</Link></button> */}
                    </div>
                    {/* <button className="btn btn-dark p-3">Trcak your Order</button> */}
                  </div>
                )}
              </div>
              <div className="track-order">
              <Link to={"/track-my-order/"+order.id}><button className="button-tyo btn btn-dark p-3">Track your Order</button></Link>
              </div>
            </div>
          )}

        </div>
      </div>:
      <div className="empty-order">You Don't Have Any Orders.....</div>}</>:<div className="empty-order">
        Please Login First...
        </div>}
    </div>
  );
}

export default YourOrders;
