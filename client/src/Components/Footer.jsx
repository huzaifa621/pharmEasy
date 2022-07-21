import styles from "./footer.module.css";
import facebook from "./assets/facebook.png";
import instagram from "./assets/instagram.png";
import twitter from "./assets/twitter.png";
import youtube from "./assets/youtube.png";
import { Heading } from "@chakra-ui/react";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.columns_container}>
        <div>
          <div>
            <Heading>
              <h4>Company</h4>
            </Heading>
            <div>
              <a href="">About Us</a>
            </div>
            <div>
              <a href="">Careers</a>
            </div>
            <div>
              <a href="">Blog</a>
            </div>
            <div>
              <a href="">Partner with PharmEasy</a>
            </div>
            <div>
              <a href="">Sell at PharmEasy</a>
            </div>
          </div>
          <div>
            <Heading>
              <h4>Our Services</h4>
            </Heading>

            <div>
              <a href="">Order Medicine</a>
            </div>
            <div>
              <a href="">Healthcare Products</a>
            </div>
            <div>
              <a href="">Lab Tests</a>
            </div>
            <div>
              <a href="">Find Nearest Collection Centre</a>
            </div>
          </div>
        </div>

        <div>
          <Heading>
            <h4>Featured Categories</h4>
          </Heading>

          <div>
            <a href="">Covid Essentials</a>
          </div>
          <div>
            <a href="">Health Food and Drinks</a>
          </div>
          <div>
            <a href="">Beauty</a>
          </div>
          <div>
            <a href="">Skin Care</a>
          </div>
          <div>
            <a href="">Home Care</a>
          </div>
          <div>
            <a href="">Ayurvedic Care</a>
          </div>
          <div>
            <a href="">Sexual Wellness</a>
          </div>
          <div>
            <a href="">Fitness & Supplements</a>
          </div>
          <div>
            <a href="">Mother and Baby Care</a>
          </div>
          <div>
            <a href="">Healthcare Devices</a>
          </div>
          <div>
            <a href="">Health Condition</a>
          </div>
          <div>
            <a href="">Diabetic Care</a>
          </div>
          <div>
            <a href="">Elderly Care</a>
          </div>
          <div>
            <a href="">Accessories And Wearables</a>
          </div>
          <div>
            <a href="">Value Store</a>
          </div>
        </div>

        <div>
          <div>
            <Heading>
              <h4>Need Help</h4>
            </Heading>

            <div>
              <a href="">Browse All Medicines</a>
            </div>
            <div>
              <a href="">Browse All Molecules</a>
            </div>
            <div>
              <a href="">Browse All Cities & Areas</a>
            </div>
            <div>
              <a href="">Browse All Stores</a>
            </div>
            <div>
              <a href="">FAQs</a>
            </div>
          </div>
          <div>
            <Heading>
              <h4>Policy Info</h4>
            </Heading>

            <div>
              <a href="">Editorial Policy</a>
            </div>
            <div>
              <a href="">Privacy Policy</a>
            </div>
            <div>
              <a href="">Vulnerability Disclosure Policy</a>
            </div>
            <div>
              <a href="">Terms and Conditions</a>
            </div>
            <div>
              <a href="">Customer Support Policy</a>
            </div>
            <div>
              <a href="">Return Policy</a>
            </div>
          </div>
        </div>

        <div>
          <Heading>
            <h4>FOLLOW US</h4>
          </Heading>

          <div className={styles.social_media}>
            <div>
              <a href="https://www.instagram.com/pharmeasyapp/" target="_blank">
                <img src={instagram} alt="" />
              </a>
            </div>
            <div>
              <a href="https://www.facebook.com/pharmeasy/" target="_blank">
                <img src={facebook} alt="" />
              </a>
            </div>
            <div>
              <a
                href="https://www.youtube.com/channel/UCDats_DLX-bGZH3-KGu8JhA"
                target="_blank"
              >
                <img src={youtube} alt="" />
              </a>
            </div>
            <div>
              <a href="https://www.twitter.com/pharmeasyapp/" target="_blank">
                <img src={twitter} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h4>Our Payment Partners</h4>
        <div className={styles.payment_partners_container}>
          <div className={styles.payment_partners}>
            <div>
              <img
                src="https://assets.pharmeasy.in/web-assets/dist/af0c6812.svg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://assets.pharmeasy.in/web-assets/dist/0e010044.svg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://assets.pharmeasy.in/web-assets/dist/1066bb1f.svg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://assets.pharmeasy.in/web-assets/dist/3a1a533d.svg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://assets.pharmeasy.in/web-assets/dist/fbea1701.svg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://assets.pharmeasy.in/web-assets/dist/4733a49d.svg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://assets.pharmeasy.in/web-assets/dist/b278e536.svg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://assets.pharmeasy.in/web-assets/dist/44a51ca5.svg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://assets.pharmeasy.in/web-assets/dist/d058b00d.svg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://assets.pharmeasy.in/web-assets/dist/e9445364.svg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://assets.pharmeasy.in/web-assets/dist/6e09c713.svg"
                alt=""
              />
            </div>
            <div>
              <img src="" alt="" />
            </div>
          </div>
          <div style={{ fontSize: "18px", color: "#4f585e" }}>
            © 2022 PharmEasy. All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export { Footer };
