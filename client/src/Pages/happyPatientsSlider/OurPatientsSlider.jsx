import React from "react";
import { Box } from "@chakra-ui/react";
import "./PatientsSlider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "./pslider/imgfirst.jpg";
import img2 from "./pslider/img2nd.jpg";
import img3 from "./pslider/img3.jpg";
import img4 from "./pslider/img4.png";

const OurPatientsSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnHover: true,
  };
  const Images = [img1, img2, img3, img4];
  return (
    <Box>
      <Box className="our_happy_patients_div">
        <Box className="happypatientsbox">
          <Box className="firstbox">
            <p className="hap">Our Happy Patients</p>
          </Box>

          <Box>
            <Slider {...settings}>
              {Images.map((e) => {
                return <img src={e} style={{ height: "10rem" }} alt="" />;
              })}
            </Slider>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OurPatientsSlider;