
import { React, useState } from "react";
import { updateCart } from "../apiCalls";
import { toast } from "react-toastify";
function CartIncDecCounter({productPrice, qty, productId,setCartTotal,cartTotal,setCartSubTotal,cartSubTotal }) {

  let [quantity, setQuantity] = useState(qty);
  const token = sessionStorage.getItem("token")

  let incNum = async() => {
    setQuantity(Number(quantity) + 1);
    setCartSubTotal(cartSubTotal+productPrice)
    setCartTotal(cartTotal+productPrice)
    const cartDatd = {
      "productId": productId,
      "quantity": Number(quantity) + 1,
      "token": token
    }
    const re = await updateCart(cartDatd)
    if(re.status[0].Message !== "Successfully Cart Updated."){
      toast.error("Something went wrong please reload the page")
    }
  };
  let decNum = async () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setCartSubTotal(parseInt(cartSubTotal)- parseInt(productPrice))
      setCartTotal(parseInt(cartTotal)- parseInt(productPrice))
      const cartDatd = {
        "productId": productId,
        "quantity": Number(quantity) - 1,
        "token": token
      }
    const re = await updateCart(cartDatd)
    if(re.status[0].Message !== "Successfully Cart Updated."){
      toast.error("Something went wrong please reload the page")
    }
    }
    console.log(quantity);
  };
  let handleChange = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <>
      <div className="col-xl-1">
        <div className="input-group">
          <div className="input-group-prepend">
            <button
              className="btn btn-outline-primary"
              type="button"
              onClick={decNum}
            >
              -
            </button>
          </div>
          <div className="input-container">

            <input
              type="text"
              className="form-control"
              value={quantity}
              onChange={handleChange}
              style={{ width: "50px", textAlign: "center" }}
            />
          </div>
          <div className="input-group-prepend">
            <button
              className="btn btn-outline-primary"
              type="button"
              onClick={incNum}
            >
              +
            </button>
          </div>
        </div>
      </div>

    </>
  );
}

export default CartIncDecCounter;
