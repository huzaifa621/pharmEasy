import styles from "../../Styles/home/appDownload.module.css";
import { Heading } from "@chakra-ui/react";

const AppDownload = () => {
  return (
    <div className={styles.container}>
      <Heading style={{ marginBottom: "60px" }} className={styles.heading}>
        Simplifying Healthcare, Impacting Lives
      </Heading>
      <Heading style={{ marginBottom: "18px" }} className={styles.heading}>
        Download the App for free
      </Heading>

      <div className={styles.app_download}>
        <div>
          <a
            href="https://play.google.com/store/apps/details?id=com.phonegap.rxpal&hl=en_IN&gl=US&utm_source=web&utm_medium=footer"
            target="_blank"
          >
            <img
              src="https://assets.pharmeasy.in/web-assets/dist/4e4f1cab.png"
              alt=""
            />
          </a>
        </div>
        <div>
          <a
            href="https://apps.apple.com/in/app/pharmeasy-healthcare-app/id982432643"
            target="_blank"
          >
            <img
              src="https://assets.pharmeasy.in/web-assets/dist/83095c03.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export { AppDownload };
