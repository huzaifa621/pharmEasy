import styles from "./navbar.module.css";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  InputRightElement,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { ArrowDownIcon, SearchIcon } from "@chakra-ui/icons";
import SelectPin from "./SelectPin";
import Select from "react-select";
import { useRef, useState } from "react";
import { TbDiscount2 } from "react-icons/tb";
import { RiUser5Fill } from "react-icons/ri";
import { HiShoppingCart } from "react-icons/hi";
import { FiMail } from "react-icons/fi";
import axios from "axios";

const options = [
  {
    value: "Ecosprin 75mg Strip Of 14 Tablets",
    label: "Ecosprin 75mg Strip Of 14 Tablets",
  },
  {
    value: "Dolo 650mg Stip Of 15 Tablets",
    label: "Dolo 650mg Stip Of 15 Tablets",
  },
  {
    value: "Evion 400mg Strip of 10 Capsules",
    label: "Evion 400mg Strip of 10 Capsules",
  },
  {
    value: "Pan 40mg Strip of 15 Tablets",
    label: "Pan 40mg Strip of 15 Tablets",
  },
  {
    value: "Pharmeasy Multivitamin",
    label: "Pharmeasy Multivitamin",
  },
  {
    value: "Dolo 650mg Stip Of 15 Tablets",
    label: "Dolo 650mg Stip Of 15 Tablets",
  },
  {
    value: "Ecosprin 75mg Strip Of 14 Tablets",
    label: "Ecosprin 75mg Strip Of 14 Tablets",
  },
  { value: "Pharmeasy Multivitamin", label: "Pharmeasy Multivitamin" },
  {
    value: "Ecosprin 75mg Strip Of 14 Tablets",
    label: "Ecosprin 75mg Strip Of 14 Tablets",
  },
];

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    background: "#fff",
    borderColor: "#9e9e9e",
    minHeight: "30px",
    height: "3rem",
    boxShadow: state.isFocused ? null : null,
  }),

  valueContainer: (provided, state) => ({
    ...provided,
    height: "30px",
    padding: "0 6px",
  }),

  input: (provided, state) => ({
    ...provided,
    margin: "0px",
  }),
  indicatorSeparator: (state) => ({
    display: "none",
  }),
  indicatorsContainer: (provided, state) => ({
    ...provided,
    height: "3rem",
  }),
};
const Navbar = () => {
  const [val, setVal] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [email, setEmail] = useState("");
  const btnRef = useRef();
  const [otpState, setOtpState] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendMail = async (mail) => {
    setLoading(true);
    try {
      // const res = await axios.post("http://localhost:8080")
      setOtpState(true);
      setLoading(false);
    } catch (err) {
      setOtpState(false);
      setLoading(false);
    }
  };

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
          <InputGroup size="lg" width={"75%"}>
            <InputLeftAddon children={<SelectPin />} />
            {/* <Input
              placeholder="Seach medicines/Healthcare product"
              bg={"white"}
              color={"black"}
            /> */}
            <div
              style={{ width: "40rem", height: "3rem", objectFit: "contain" }}
            >
              <Select
                onChange={(values) => setVal(values)}
                placeholder="Search medicines/Healthcare products"
                // width="200px"
                // height="3rem"
                color={"black"}
                options={options}
                styles={customStyles}
              />
            </div>
            <InputRightAddon children={<SearchIcon h={8} color="gray.500" />} />
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
          <Flex marginRight={"2rem"}>
            <Flex>
              <TbDiscount2
                style={{ marginTop: "0.2rem", marginRight: "0.4rem" }}
                size="23px"
              />
              <a href="">Offers</a>
            </Flex>
            <Flex>
              <RiUser5Fill
                style={{ marginTop: "0.2rem", marginRight: "0.4rem" }}
                size="23px"
              />
              <p style={{ cursor: "pointer" }} ref={btnRef} onClick={onOpen}>
                Login/Signup
              </p>
              <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                size="sm"
                finalFocusRef={btnRef}
              >
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader>
                    <Flex bg="teal.500" height="100px">
                      <Box marginTop={"1rem"} marginLeft={"1rem"}>
                        <Image
                          src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png"
                          alt=""
                          width={"10rem"}
                        />
                      </Box>

                      <Box marginTop={"1rem"} marginLeft={"3rem"}>
                        <Image
                          src="	https://assets.pharmeasy.in/web-assets/dist/1fe1322a.svg"
                          alt=""
                          width={"8rem"}
                        />
                      </Box>
                    </Flex>
                  </DrawerHeader>

                  <DrawerBody>
                    <Heading size="md"> Quick Login / Register</Heading>
                    <br />
                    <InputGroup>
                      <InputLeftAddon children={<FiMail />} />
                      <Input
                        type="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </InputGroup>
                    <br />
                    <Button
                      onClick={() => sendMail(email)}
                      isLoading={loading ? true : false}
                      colorScheme="teal"
                      size="lg"
                      width={"25rem"}
                    >
                      Send Otp
                    </Button>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </Flex>
            <Flex>
              <HiShoppingCart
                style={{ marginTop: "0.2rem", marginRight: "0.4rem" }}
                size="23px"
              />
              <a href="">Cart</a>
            </Flex>
          </Flex>
        </div>
      </div>
    </div>
  );
};

export { Navbar };
