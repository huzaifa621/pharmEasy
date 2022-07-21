import React from 'react';
import "./Facility.css";
import { Box } from '@chakra-ui/react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "./facility/img1.png"
import img2 from "./facility/img2nd.png"
import img3 from "./facility/img3.png"

export const FacilitySlider = () => {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true
      };
      const images = [img1, img2, img3]
  return (
    <Box>
         <Box  className='facility_box'>
        <Box className='servic3_box'>
        <Slider {...settings}>
            {images.map((e)=>{
                return <img src={e} style={{width: "10rem"}} alt="" />
            })}
        </Slider>
        </Box>
      </Box>
    </Box>
  )
}
