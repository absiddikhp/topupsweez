import React, { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import MessengerCustomerChat from "react-messenger-customer-chat";

import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import LoadingBar from "react-top-loading-bar";
import Profile from "./pages/ProfilePages/Profile";
import Wallet from "./pages/ProfilePages/Wallet";
import ForgetPassword from "./pages/ProfilePages/ForgetPassword";
import Order from "./pages/ProfilePages/Order";
import AddMoney from "./pages/ProfilePages/AddMoney";
import FreeFireIdCode from "./pages/Topup/FreeFireIdCode";
import FreeFireInGame from "./pages/Topup/FreeFireInGame";
import RamadanOffer from "./pages/Topup/RamadanOffer";
import CallOfDuty from "./pages/Topup/CallOfDuty";
import PubgMobile from "./pages/Topup/PubgMobile";
import ArenaOfValor from "./pages/Topup/ArenaOfValor";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  const [userLoggdin, setUserLoggdin] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setUserLoggdin(true);
    }, 4000);
  }, []);

  const [progress, setProgress] = useState(0);
  ScrollToTop();
  return (
    <>
      <Navbar progress={() => setProgress(100)} isAuth={userLoggdin} />
      <LoadingBar
        color="#F97316"
        progress={progress}
        height="3px"
        onLoaderFinished={() => setProgress(0)}
      />
      <Routes>
        <Route path="/" element={<Home progress={() => setProgress(100)} />} />
        {!userLoggdin ? (
          <>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
          </>
        ) : (
          <>
            {/* Protected Routes */}
            <Route path="profile" element={<Profile />} />
            <Route path="profile/order" element={<Order />} />
            <Route path="wallet" element={<Wallet />} />
            <Route path="add-money" element={<AddMoney />} />
          </>
        )}

        {/* Topup Pages */}
        <Route path="/topup/freefire-id-code" element={<FreeFireIdCode />} />
        <Route path="/topup/freefire-in-game" element={<FreeFireInGame />} />
        <Route path="/topup/ramadan-offer" element={<RamadanOffer />} />
        <Route path="/topup/arena-of-valor" element={<ArenaOfValor />} />
        <Route path="/topup/call-of-duty" element={<CallOfDuty />} />
        <Route path="/topup/pubg-mobile" element={<PubgMobile />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <MessengerCustomerChat
        pageId="100997619156440"
        appId="708315717188627>"
      />
      <Footer />
    </>
  );
};

export default App;
