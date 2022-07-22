import styles from "../../Styles/home/featuredBrand.module.css";
import Slider from "react-slick";
import { FeatureCards } from "./FeatureCards";

const FeaturedBrand = () => {
  var settings = {
    dots: false,
    speed: 500,
    infinite: false,
    slidesToShow: 8,
    slidesToScroll: 1,
    swipeToSlide: true
  };
  return (
    <div className={styles.container}>
      <h3 style={{ color: "#4f585e" }}>Featured Brands</h3>
      <div>
        <Slider {...settings}>
          <FeatureCards />
          <FeatureCards />
          <FeatureCards />
          <FeatureCards />
          <FeatureCards />
          <FeatureCards />
          <FeatureCards />
          <FeatureCards />
          <FeatureCards />
          <FeatureCards />
          <FeatureCards />
          <FeatureCards />
          <FeatureCards />
        </Slider>
      </div>
    </div>
  );
};

export { FeaturedBrand };
