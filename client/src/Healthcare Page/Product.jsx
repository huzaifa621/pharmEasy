
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const Product = () => {
    const [data,setData]=useState([]);

    useEffect(()=>{
        const getData= async()=>{
            let res=await axios.get("http://localhost:8080/api/product?q=Personal Care");
            setData(res.data);
        }
        getData();
    },[])
    console.log(data);
  return (
    <div>
    product page
    {
   data.map((elem,ind)=>(
    <div key={elem._id}>
        <h3>{elem.title}</h3>
        <img src={elem.img1} alt="" />
        <p>{elem.mrp}</p>
        </div>
      
   ))
    }
   
      
    </div>
  )
}

export default Product
