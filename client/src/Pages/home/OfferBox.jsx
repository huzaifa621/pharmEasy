import styles from "../../Styles/home/justOffer.module.css";

const OfferBox = () => {
  return (
    <div className={styles.offerBox}>
      <div>
        <img
          height="50px"
          width="50px"
          src="https://cms-contents.pharmeasy.in/offer/37c262d84a5-25.jpg?dim=60x0&dpr=1&q=100"
          alt=""
        />
      </div>
      <div>
        <p>Flat 25% OFF</p>
        <p>
          Code: <b>GIFT25</b>
        </p>
      </div>
    </div>
  );
};

export { OfferBox };
