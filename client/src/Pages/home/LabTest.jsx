import styles from "../../Styles/home/labTest.module.css";
import Slider from "react-slick";
import { LabTestInfo } from "./LabTestInfo";
import { LabTestCards } from "./LabTestCards";

const LabTest = () => {
  var settings = {
    dots: false,
    speed: 500,
    infinite: false,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    swipeToSlide: true
  };
  return (
    <div className={styles.container}>
      <h3 style={{ color: "#4f585e", margin: "0px" }}>
        Frequently Booked Lab Tests
      </h3>
      <div className={styles.second}>
        <Slider {...settings}>
          <LabTestInfo />
          <LabTestCards />
          <LabTestCards />
          <LabTestCards />
          <LabTestCards />
          <LabTestCards />
          <LabTestCards />
          <LabTestCards />
        </Slider>
      </div>
    </div>
  );
};

export { LabTest };
