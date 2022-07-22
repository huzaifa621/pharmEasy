import React from "react";
import { Routes, Route } from "react-router-dom";
import Desc from "../Pages/Desc/Desc";
import LabDetails from "../Pages/Labdetails/LabDetails";
import { LabTest } from "../Pages/LabTest";
import OrderMedicines from "../Pages/OrderMedicines";
import { Rtcprtest } from "../Pages/RtpcrTest/Rtcprtest";
import Cart from "../Pages/Cart/Cart";
import { Navbar } from "../Components/navbar/Navbar";
import { Main } from "../Pages/home/Main";
import { Footer } from "../Components/Footer";
import Healthcare from "../Healthcare Page/Healthcare";
import { SliderData } from "../Healthcare Page/SliderData";
import Product from "../Healthcare Page/Product";

const Mainroutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="productdetails" element={<Desc />} />
        <Route path="/orderMed" element={<OrderMedicines />} />
        <Route path="cart" element={<Cart />} />
        <Route
          path="/healthcare"
          element={<Healthcare slides={SliderData} />}
        />
        <Route path="/labtest" element={<LabTest />} />
        <Route path="/rtpcr" element={<Rtcprtest />} />
        <Route path="/products/:str" element={<Product />} />
        <Route path="/labdetails" element={<LabDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Mainroutes;
