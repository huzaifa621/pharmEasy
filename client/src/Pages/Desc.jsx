import React from "react";
import { useEffect } from "react";
import axios from "axios";

const Desc = () => {
  const detail = localStorage.getItem("productDetails");

  console.log(detail);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    // axios.get(`http://localhost:8080/api/product/single/${detail}`).then(({data})=>{
    //   console.log(data)
    // })
  };

  return (
    <div>
      <h1>description</h1>
    </div>
  );
};

export default Desc;
