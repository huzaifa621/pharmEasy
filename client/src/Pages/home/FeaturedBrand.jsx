import styles from "../../Styles/home/featuredBrand.module.css";
import Slider from "react-slick";
import { FeatureCards } from "./FeatureCards";

const db = [
  {
    img:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/6d462f424a43372ea8b7b6f8ca13e052.png",
    title: "Covid Essentials",
    link: "/"
  },
  {
    img:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/b4a3a67a59783e0ca738884c9acc8e7b.png",
    title: "Personal Care",
    link: "/"
  },
  {
    img:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/62e6d7551ecf3a5da1d2336c41cc0549.png",
    title: "Health Food and Drinks",
    link: "/"
  },
  {
    img:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/8a45f5baa68e3b72ae631003faa97bdb.png",
    title: "Beauty",
    link: "/"
  },
  {
    img:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/ff5aaa03881e3016bf409f85b4e328aa.png",
    title: "Skin Care",
    link: "/"
  },
  {
    img:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/68ae87e29f4a3abbb8ed69fe7ecf057c.png",
    title: "Home Care",
    link: "/"
  },
  {
    img:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/4209e1d247cd30fca1f619786fa3e9c1.png",
    title: "Ayurvedic Care",
    link: "/"
  },
  {
    img:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/7e509ee2f5413b0483d00c0b30067ee0.png",
    title: "Sexual Wellness",
    link: "/"
  },
  {
    img:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/0e9613b95131376b95bcbf92c48149b5.png",
    title: "Fitness & Supplements",
    link: "/"
  },
  {
    img:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/af8d32e30757338787ca3e9267865d4f.png",
    title: "Mother and Baby Care",
    link: "/"
  }
];

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
          {db.map((el) => (
            <FeatureCards props={el} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export { FeaturedBrand };
