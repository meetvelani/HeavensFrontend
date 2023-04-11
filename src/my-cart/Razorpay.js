import { toast } from "react-toastify";
import { createOrder, createPaymentOrder } from "../apiCalls";

function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
}


export async function displayRazorpay(orderData) {
    const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
    }

    // creating a new order
    const token = localStorage.getItem("token")
    const result = await createPaymentOrder(token, orderData.totalAmount);
    console.log(result)
    const order = result["order"]


    if (!result) {
        alert("Server error. Are you online?");
        return;
    }

    // Getting the order details back

    const options = {
        key: order["razorpay_merchant_key"], // Enter the Key ID generated from the Dashboard
        amount: order["razorpay_amount"],
        currency: order["currency"],
        name: "Flabites",
        description: "Test Transaction",
        order_id: order["razorpay_order_id"],
        handler: async function (response) {
            const data = {
                orderCreationId: order["razorpay_order_id"],
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
                razorpaySignature: response.razorpay_signature,
            };
            orderData.paymentId = data.razorpayPaymentId
            orderData.orderId = data.razorpayOrderId
            const orderRe = await createOrder(orderData);
            if (orderRe["status"][0]["Message"] === "Successfully Order Created.") {
                toast.success(orderRe["status"][0]["Message"])
                window.location.href = "/order-placed/"+ orderData.address +"/"+ orderData.phoneNumber;;

            }
            else {
                toast.error(orderRe["status"][0]["Message"])
            }
        },
        prefill: {
            name: "Soumya Dey",
            email: "SoumyaDey@example.com",
            contact: "9999999999",
        },
        notes: {
            address: "Soumya Dey Corporate Office",
        },
        theme: {
            color: "#61dafb",
        },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open()
}