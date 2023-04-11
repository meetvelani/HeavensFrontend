import React, { useEffect, useState } from "react";
import './progressbar.scss';

function Progressbar1({orderStatus}) {
  const [progressStep,setProgressStep] = useState(4)

  useEffect(()=>{
    if(orderStatus === "Received"){
      setProgressStep(1)
    }
    else if(orderStatus === "Packed"){
      setProgressStep(2)

    }
    else if(orderStatus === "Out For Delivery"){
      setProgressStep(3)

    }
    else if(orderStatus === "Completed"){
      setProgressStep(4)

    }

  },[])
  
  return (
    <div className="main-pb">
      <div className="row d-flex justify-content-center">
        <div className="col-12">
          <ul id="progressbar" className="text-center">
          <li className={progressStep>1 || progressStep===1?"active step0":" step0"}><span className="below-txt">Received</span></li>
            <li className={progressStep>2 || progressStep===2?"active step0":" step0"}><span className="below-txt">Picked</span></li>
            <li className={progressStep>3 || progressStep===3?"active step0":" step0"}><span className="below-txt">Out For Delivery</span></li>
            <li className={progressStep>4 || progressStep===4 ?"active step0":" step0"}><span className="below-txt">Delivered</span></li>
            {/* <li className="step0"></li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Progressbar1;
