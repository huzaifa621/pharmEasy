import styles from "../../Styles/home/chooseUs.module.css";

const db = [
  {
    img: "https://assets.pharmeasy.in/web-assets/dist/4d2f7c48.svg",
    title: "32 Million+",
    para: "Registered users as of Mar 31, 2022"
  },
  {
    img: "https://assets.pharmeasy.in/web-assets/dist/92c372bb.svg",
    title: "36 Million+",
    para: "Orders on Pharmeasy till date"
  },
  {
    img: "https://assets.pharmeasy.in/web-assets/dist/773ae9c5.svg",
    title: "99000+",
    para: "Unique items sold last 3 months"
  },
  {
    img: "https://assets.pharmeasy.in/web-assets/dist/f2d557d3.svg",
    title: "19500+",
    para: "Pin codes serviced last 3 months"
  }
];

const ChooseUs = () => {
  return (
    <div className={styles.container}>
      <h3>Why Choose Us?</h3>
      <div className={styles.flexBox}>
        {db.map((el) => {
          return (
            <div>
              <img src={el.img} alt="" />
              <h2>{el.title}</h2>
              <h3>{el.para}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { ChooseUs };
