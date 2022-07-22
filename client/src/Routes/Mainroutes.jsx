import React from "react";
import { Routes, Route } from "react-router-dom";
import Desc from "../Pages/Desc";
import LabDetails from "../Pages/Labdetails/LabDetails";
import OrderMedicines from "../Pages/OrderMedicines";
import { Rtcprtest } from "../Pages/RtpcrTest/Rtcprtest";

const Mainroutes = () => {
  return (
    <div>
      <Rtcprtest/>
      <Routes>
        <Route path="productdetails" element={<Desc />} />
        <Route path="med" element={<OrderMedicines />} />
      </Routes>
    </div>
  );
};

export default Mainroutes;
