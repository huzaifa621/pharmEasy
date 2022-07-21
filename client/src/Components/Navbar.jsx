import styles from "./navbar.module.css";
import {
  Input,
  InputGroup,
  InputRightAddon,
  InputRightElement,
  Select,
} from "@chakra-ui/react";
import { ArrowDownIcon, SearchIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div>
        <img
          src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png"
          alt=""
        />
      </div>

      <div>
        <div>
          <InputGroup width={"80%"}>
            {/* <Select icon={<ArrowDownIcon />} placeholder="Select Pincode" /> */}
            <Input
              placeholder="Seach medicines/Healthcare product"
              bg="white"
              size="lg"
            />
            <InputRightAddon children={<SearchIcon h={8} color="gray.300" />} />
          </InputGroup>
        </div>
        <div className={styles.tabContainer}>
          <div>
            <div>
              <a href="">Order Medicines</a>
            </div>
            <div>
              <a href="">Healthcare Products</a>
            </div>
            <div>
              <a href="">Lab tests</a>
            </div>
            <div>
              <a href="">RTPCR</a>
            </div>
          </div>
          <div>
            <div>
              <a href="">Offers</a>
            </div>
            <div>
              <a href="">Login/Signup</a>
            </div>
            <div>
              <a href="">Cart</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Navbar };
