
import { React } from "react";
function IncDecCounter({quantity,setQuantity}) {
  let incNum = () => {
    if (quantity < 10) {
      setQuantity(Number(quantity) + 1);
    }
    console.log(quantity);
  };
  let decNum = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
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
          <input
            type="text"
            className="form-control"
            value={quantity}
            onChange={handleChange}
          />
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

export default IncDecCounter;
