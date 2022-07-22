import React from "react";
import { Routes, Route } from "react-router-dom";



import Desc from "../Pages/Desc/Desc";
import LabDetails from "../Pages/Labdetails/LabDetails";
import { LabTest } from "../Pages/LabTest";

import OrderMedicines from "../Pages/OrderMedicines";

import { Rtcprtest } from "../Pages/RtpcrTest/Rtcprtest";

import Cart from "../Pages/Cart/Cart";


const Mainroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="productdetails" element={<Desc />} />
        <Route path="med" element={<OrderMedicines />} />
        <Route path="cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
};

export default Mainroutes;
