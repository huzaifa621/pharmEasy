import Slider from "react-slick";

const FullScreenSlider = () => {
  const db = [
    "https://cms-contents.pharmeasy.in/banner/3f636edf697-GRAND1000_Dweb.jpg?dim=1440x0&dpr=1&q=100",
    "https://cms-contents.pharmeasy.in/banner/120c8087074-Diag_old_Dweb.jpg?dim=1440x0&dpr=1&q=100",
    "https://cms-contents.pharmeasy.in/banner/4a92d1f76bf-Get_end_to_end.jpg?dim=1440x0&dpr=1&q=100",
    "https://cms-contents.pharmeasy.in/banner/31e6940d27f-WP.jpg?dim=1440x0&dpr=1&q=100",
    "https://cms-contents.pharmeasy.in/banner/2567342497f-DWEB.jpg?dim=1440x0&dpr=1&q=100",
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
            <img src={db[0]} alt="" />
        </div>
        {/* <div>
            <img src={db[1]} alt="" />
        </div>
        <div>
            <img src={db[2]} alt="" />
        </div>
        <div>
            <img src={db[3]} alt="" />
        </div>
        <div>
            <img src={db[4]} alt="" />
        </div> */}
      </Slider>
    </div>
  );
};

export { FullScreenSlider };
