import styles from "../../Styles/home/labTest.module.css";
import Slider from "react-slick";
import { LabTestInfo } from "./LabTestInfo";
import { LabTestCards } from "./LabTestCards";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function NextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <IoIosArrowForward
      className={className}
      style={{
        ...style,
        display: "block",
        color: "black",
        height: "2rem",
        marginRight: "1rem",
        background: "none",
        width: "2rem",
        zIndex: 50,
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowBack
      className={className}
      style={{
        ...style,
        display: "block",
        marginLeft: "1rem",
        background: "none",
        color: "black",
        height: "2rem",
        width: "2rem",
        zIndex: 50,
      }}
      onClick={onClick}
    />
  );
}
const LabTest = () => {
  var settings = {
    dots: false,
    speed: 500,
    infinite: false,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  const navigate = useNavigate();
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
