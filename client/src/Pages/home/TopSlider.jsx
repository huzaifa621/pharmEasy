import Slider from "react-slick";

const TopSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div style={{ backgroundColor: "whitesmoke", paddingBottom: "30px" }}>
      <Slider {...settings}>
        <div>
          <img
            style={{ width: "100%" }}
            src="https://cms-contents.pharmeasy.in/banner/c414a98e027-dwebjpg.jpg?dim=1440x0&dpr=1&q=100"
            alt=""
          />
        </div>
        <div>
          <img
            style={{ width: "100%" }}
            src="https://cms-contents.pharmeasy.in/banner/3f636edf697-GRAND1000_Dweb.jpg?dim=1440x0&dpr=1&q=100"
            alt=""
          />
        </div>
        <div>
          <img
            style={{ width: "100%" }}
            src="https://cms-contents.pharmeasy.in/banner/4a92d1f76bf-Get_end_to_end.jpg?dim=1440x0&dpr=1&q=100"
            alt=""
          />
        </div>
        <div>
          <img
            style={{ width: "100%" }}
            src="https://cms-contents.pharmeasy.in/banner/31e6940d27f-WP.jpg?dim=1440x0&dpr=1&q=100"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export { TopSlider };
