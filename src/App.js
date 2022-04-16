import React from "react";
import MessengerCustomerChat from "react-messenger-customer-chat";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Profile from "./pages/Profile";
import Wallet from "./pages/Wallet";
import { Order } from "./pages/Order";
import AddMoney from "./pages/AddMoney";
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
  ScrollToTop();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        {/* Protected Routes */}
        <Route path="profile" element={<Profile />} />
        <Route path="profile/order" element={<Order />} />
        <Route path="wallet" element={<Wallet />} />
        <Route path="add-money" element={<AddMoney />} />

        {/* Topup Pages */}
        <Route path="/topup/freefire-id-code" element={<FreeFireIdCode />} />
        <Route path="/topup/freefire-in-game" element={<FreeFireInGame />} />
        <Route path="/topup/ramadan-offer" element={<RamadanOffer />} />
        <Route path="/topup/arena-of-valor" element={<ArenaOfValor />} />
        <Route path="/topup/call-of-duty" element={<CallOfDuty />} />
        <Route path="/topup/pubg-mobile" element={<PubgMobile />} />
      </Routes>
      <MessengerCustomerChat
        pageId="100997619156440"
        appId="708315717188627>"
      />
      ,
      <Footer />
    </>
  );
};

export default App;
