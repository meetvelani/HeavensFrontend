import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/scroll";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./home/home";
// import MyCart from "./my-cart/my-cart";
// import Checkout from "./checkout/checkout";
import TrackMyOrder from "./track-my-order/track-my-order";
import NavbarBlack from "./components/header/navbar-black";
import Footer from "./components/footer/footer";
import Func from "./components/header/func";
import AddAddress from "./add-address/add-address";
import YourProfile2 from "./your-profile-2/your-profile-2";
import BecomeE from "./become-entrepreneur/be";
import Shop from "./shop/shop";
import OffersForYou from "./offer-for-you/offers-for-you";
import FavoriteCakes from "./favorite-cake/favorite-cake";
import YourOrders from "./your-orders/your-orders";
import Profile1 from "./profile-form/profile-1";
import Help from "./help/help";
import NoPage from "./components/no-page";
import Loader from "./components/Loader/Loader";
import { useStateValue } from "./StateProvider";
import {  verifyToken } from "./apiCalls";
import jwt_decode from "jwt-decode";
import ProductInfo from "./product-info/product-info";
import PlaceOrder from "./my-cart/place-order";
import UpdateAddress from "./update-address/update-address";
import 'aos/dist/aos.css';



function App() {
  const [{ loaderShow }, dispatch] = useStateValue();

  // const [show, setShow] = useState(false);
  useEffect(() => {

    const fetchData = async () => {

      // *********************************verify Token **********************************
      const token = sessionStorage.getItem("token")||""
      const tokenRe = await verifyToken({ "login_token": token })
      const reMessage = tokenRe.status[0].Message
      if (reMessage === "Token Is Valid.") {
        var decoded = jwt_decode(token);
        const detail = JSON.parse((decoded.sub).replaceAll("'", '"'))
        dispatch({
          type: "SET_USER",
          userDetail: detail,
        })
        dispatch({
          type: "SET_LOGIN_STATUS",
          status: true,
        })


      }
      else {

      }

    }
    fetchData();

  }, [dispatch])
  return (
    <div className="App">

      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<><Func /><Home /><Footer /></>} />
          <Route path="/product-info" element={<><NavbarBlack /><ProductInfo /><Footer /></>} />
          <Route path="/become-entrepreneur" element={<><NavbarBlack /><BecomeE /><Footer /></>} />
          <Route
            path="/add-address"
            element={
              <>
                <NavbarBlack />
                <AddAddress />
                {/* <ChartBe/> */}
                <Footer />
              </>
            }
          />
          <Route
            path="/update-address/:id"
            element={
              <>
                <NavbarBlack />
                {/* <Update /> */}
                <UpdateAddress />
                {/* <ChartBe/> */}
                <Footer />
              </>
            }
          />
          <Route
            path="/my-cart"
            element={
              <>
                <NavbarBlack />
                <PlaceOrder />
                <Footer />
              </>
            }
          />
          {/* <Route
            path="/checkout"
            element={
              <>
                <NavbarBlack />
                <Checkout />
                <Footer />
              </>
            }
          /> */}
          <Route
            path="/track-my-order/:id"
            element={
              <>
                <NavbarBlack />
                <TrackMyOrder />
                <Footer />
              </>
            }
          />
          <Route
            path="/shop"
            element={
              <>
                <NavbarBlack />
                <Shop />
                <Footer />
              </>
            }
          />
          <Route
            path="/offers-for-you"
            element={
              <>
                <NavbarBlack />
                <OffersForYou />
                <Footer />
              </>
            }
          />
          <Route
            path="/favorite-cakes"
            element={
              <>
                <NavbarBlack />
                <FavoriteCakes />
                <Footer />
              </>
            }
          />
          <Route
            path="/your-orders"
            element={
              <>
                <NavbarBlack />
                <YourOrders />
                <Footer />
              </>
            }
          />
          <Route
            path="your-profile-2"
            element={
              <>
                <NavbarBlack />
                <YourProfile2 />
                <Footer />
              </>
            }
          />
          <Route
            path="/profile-1"
            element={
              <>
                <NavbarBlack />
                <Profile1 />
                <Footer />
              </>
            }
          />
          <Route
            path="/help"
            element={
              <>
                <NavbarBlack />
                <Help />
                <Footer />
              </>
            }
          />
          <Route
            path="/no-page"
            element={
              <>
                {/* <NavbarBlack /> */}
                <NoPage />
                {/* <Footer /> */}
              </>
            }
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        // pauseOnFocusLoss
        draggable
        theme="light" />
      {loaderShow ?
        <Loader /> : <></>}
    </div>
  );
}

export default App;
