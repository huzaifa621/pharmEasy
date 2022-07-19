

import React from 'react'
import "./Healthcare.css";
import { useState } from 'react'
import { SliderData } from './SliderData'
import {AiFillLeftCircle ,AiFillRightCircle} from "react-icons/ai";

const Healthcare = ({slides}) => {
    const [current,setCurrent]=useState(0);
    const length=slides.length;

    const nextSlide=()=>{
        setCurrent(current ===length-1 ? 0 : current+1);
    }
    const prevSlide=()=>{
        setCurrent(current === 0 ? length-1 : current-1);
    }
    
  return (
    <>
       <div className='heading'>Home : Healthcare</div>
       <div className='slider'>
        
        <AiFillLeftCircle className='left-arrow' onClick={prevSlide}/>
       <AiFillRightCircle className='right-arrow' onClick={nextSlide}/>
      {SliderData.map((img,ind)=> {
          return (
                 <div key={ind}>{ind === current && (<img src={img.image} alt="images" className='sliderimage'/>)}</div>
              )
        })}
    </div>
    <p>kay ata</p>
    </>
    
  )
}

export default Healthcare


