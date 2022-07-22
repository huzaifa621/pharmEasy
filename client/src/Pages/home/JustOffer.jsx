import styles from "../../Styles/home/justOffer.module.css";
import Slider from "react-slick";
import { OfferBox } from "./OfferBox";

const JustOffer = () => {
  var settings = {
    dots: false,
    speed: 500,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true
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
