import React, { useState } from 'react'
import MyCart from './my-cart'
import Checkout from './checkout/checkout'

function PlaceOrder() {
    const token = localStorage.getItem("token")
    const orderInitialData = { step: 1, "coupon_code": "", "name": "", "phoneNumber": "", "addressId": "", "address": "", "country": "", "city": "", "state": "", "zipCode": "", "paymentOrderId": "", "paymentMethod": "", "paymentId": "", "codFee": 0, "totalAmount": "", "totalDiscount": 0, "token": token }
    const [orderData, setOrderData] = useState(orderInitialData)
    const [cartDetail, setCartDetail] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    const [cartSubTotal, setCartSubTotal] = useState(0);
    const [discountAmount, setDiscountAmount] = useState(0)

    console.log(orderData)
    const nextStep = async () => {
        const newStep = orderData.step + 1
        console.log(orderData)
        setOrderData({ ...orderData, step: newStep });
    }
    switch (orderData.step) {
        case 1:
            return (
                <MyCart
                    orderData={orderData}
                    setOrderData={setOrderData}
                    nextStep={nextStep}
                    cartDetail={cartDetail}
                    setCartDetail={setCartDetail}
                    cartTotal={cartTotal}
                    setCartTotal={setCartTotal}
                    setCartSubTotal={setCartSubTotal}
                    cartSubTotal={cartSubTotal}
                    discountAmount={discountAmount}
                    setDiscountAmount={setDiscountAmount}

                />
            )
        case 2:
            return (
                <Checkout
                    orderData={orderData}
                    setOrderData={setOrderData}
                    nextStep={nextStep}
                    cartDetail={cartDetail}
                    setCartDetail={setCartDetail}
                    cartTotal={cartTotal}
                    setCartTotal={setCartTotal}
                    setCartSubTotal={setCartSubTotal}
                    cartSubTotal={cartSubTotal}
                    discountAmount={discountAmount}

                />
            )

        default:
            return (<>
            </>)

    }
}

export default PlaceOrder