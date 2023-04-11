import { api, domainName } from "./constants";

// *************************************************** demo ****************************************************************

export async function Login(userData) {

    const data = await fetch(`${domainName}${api.login}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    }).then((data) => data.json());
    return data;
}
export async function SignUp(userData) {

    const data = await fetch(`${domainName}${api.register}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    }).then((data) => data.json());
    return data;
}

export async function verifyToken(token) {

    const data = await fetch(`${domainName}${api.verifyToken}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(token),
    }).then((data) => data.json());
    return data;
}

export async function addToCart(productData) {

    const data = await fetch(`${domainName}${api.addToCart}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
    }).then((data) => data.json());
    return data;
}
export async function addAddress(addressDetail) {

    const data = await fetch(`${domainName}${api.addAddress}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(addressDetail),
    }).then((data) => data.json());
    return data;
}

export async function getAddress(token) {
    const data = await fetch(`${domainName}${api.getAddress}?token=${token}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((data) => data.json());
    return data;
}
export async function getAddressById(token,id) {
    const data = await fetch(`${domainName}${api.getAddress}?token=${token}&id=${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((data) => data.json());
    return data;
}

export async function deleteDeliveryAddress(id,token) {

    const data = await fetch(`${domainName}${api.deleteDeliveryAddress}?id=${id}&token=${token}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(),
    }).then((data) => data.json());
    return data;
}


export async function updateDeliveryAddress(address) {

    const data = await fetch(`${domainName}${api.updateDeliveryAddress}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(address),
    }).then((data) => data.json());
    return data;
}
// 



export async function getProductById(id) {
    const data = await fetch(`${domainName}${api.getProductById}/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((data) => data.json());
    return data;
}

export async function getOrder(token) {
    const data = await fetch(`${domainName}${api.getOrder}?token=${token}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((data) => data.json());
    return data;
}
export async function getOrderById(token,id) {
    const data = await fetch(`${domainName}${api.getOrder}/${id}?token=${token}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((data) => data.json());
    return data;
}

export async function getCart(token) {
    const data = await fetch(`${domainName}${api.getCart}?token=${token}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((data) => data.json());
    return data;
}
export async function getSpecialCake() {
    const data = await fetch(`${domainName}${api.getSpecialCake}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((data) => data.json());
    return data;
}
export async function getCouponDetail(coupon,token) {
    const data = await fetch(`${domainName}${api.getCouponDetail}?coupon_code=${coupon}&token=${token}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((data) => data.json());
    return data;
}


export async function updateCart(cartData) {

    const data = await fetch(`${domainName}${api.updateCart}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(cartData),
    }).then((data) => data.json());
    return data;
}

export async function createOrder(userData) {

    const data = await fetch(`${domainName}${api.createOrder}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    }).then((data) => data.json());
    return data;
}

export async function createPaymentOrder(token, amount) {
    return fetch(`${domainName}${api.createPaymentOrder}?token=${token}&amount=${amount}`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify()
    })
      .then(data => data.json())
    }

export async function getAllProduct() {
    return fetch(`${domainName}${api.getAllProduct}`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify()
    })
      .then(data => data.json())
    }

