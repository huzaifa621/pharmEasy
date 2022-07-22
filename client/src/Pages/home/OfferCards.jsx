import { useNavigate } from "react-router-dom";
import styles from "../../Styles/home/offerCards.module.css";

const OfferCards = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div>
        <div style={{ backgroundColor: "#cff0ea" }}>
          <div className={styles.discount}>FLAT 15% OFF</div>
          <div className={styles.heading}>Order Medicines</div>
        </div>
        <div>
          <button onClick={() => navigate("/orderMed")} className={styles.btn}>
            Order Now
          </button>
        </div>
      </div>

      <div>
        <div style={{ backgroundColor: "#fdf2d2" }}>
          <div className={styles.discount}>UPTO 60% OFF</div>
          <div className={styles.heading}>Healthcare Products</div>
        </div>
        <div>
          <button
            onClick={() => navigate("/healthcare")}
            style={{ backgroundColor: "#fc8019" }}
            className={styles.btn}
          >
            Order Now
          </button>
        </div>
      </div>

      <div>
        <div style={{ backgroundColor: "#d6f0ff" }}>
          <div className={styles.discount}>UPTO 70% OFF</div>
          <div className={styles.heading}>Lab tests</div>
        </div>
        <div>
          <button
            onClick={() => navigate("/labtest")}
            style={{ backgroundColor: "#00b9e1" }}
            className={styles.btn}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export { OfferCards };
