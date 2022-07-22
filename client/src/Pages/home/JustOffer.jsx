import styles from "../../Styles/home/justOffer.module.css";
import Slider from "react-slick";
import { OfferBox } from "./OfferBox";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

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

const JustOffer = () => {
  var settings = {
    dots: false,
    speed: 500,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className={styles.container}>
      <div className={styles.first}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <img
              width="80%"
              src="https://assets.pharmeasy.in/web-assets/dist/67890676.svg"
              alt=""
            />
          </div>
          <div>Offers Just For You</div>
        </div>
        <div style={{ color: "teal" }}>See All Offers</div>
      </div>
      <div className={styles.second}>
        <Slider {...settings}>
          <OfferBox />
          <OfferBox />
          <OfferBox />
          <OfferBox />
          <OfferBox />
          <OfferBox />
          <OfferBox />
          <OfferBox />
          <OfferBox />
          <OfferBox />
          <OfferBox />
          <OfferBox />
          <OfferBox />
          <OfferBox />
          <OfferBox />
        </Slider>
      </div>
    </div>
  );
};

export { JustOffer };
