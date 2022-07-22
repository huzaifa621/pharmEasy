import styles from "../../Styles/home/labTest.module.css";

const LabTestCards = () => {
  return (
    <div className={styles.box}>
      <div>
        <img
          width="60px"
          src="https://assets.pharmeasy.in/web-assets/dist/51ffd21a.svg"
          alt=""
        />
      </div>
      <div>
        <p>Comprehensive Full Body check...</p>
        <p>Available at 1 cerified Lab</p>
      </div>
      <div className={styles.bottomDiv}>
        <div>
          <b>₹1,499</b> Onwards
        </div>
        <div style={{ color: "teal" }}>
          <b>Book Now {">"}</b>
        </div>
      </div>
    </div>
  );
};

export { LabTestCards };
