
import styles from "../Styles/OrderMedicine.module.css"
import { Heading } from '@chakra-ui/react'
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {BsArrowLeft, BsArrowRight} from "react-icons/bs";
import {useNavigate} from "react-router-dom"

import Select from 'react-select'
// import AsyncSelect from 'react-select/async'
// import Creatable, { useCreatable } from 'react-select/creatable'
import { useState } from 'react'

// import Creatable from 'react-select/creatable';


const options = [
  { value: 'Ecosprin 75mg Strip Of 14 Tablets', label: 'Ecosprin 75mg Strip Of 14 Tablets' },
  { value: 'Dolo 650mg Stip Of 15 Tablets', label: 'Dolo 650mg Stip Of 15 Tablets' },
  { value: 'Evion 400mg Strip of 10 Capsules', label: 'Evion 400mg Strip of 10 Capsules' },
  { value: 'Pan 40mg Strip of 15 Tablets', label: 'Pan 40mg Strip of 15 Tablets' },
  { value: 'Pharmeasy Multivitamin', label: 'Pharmeasy Multivitamin' },
  { value: 'Dolo 650mg Stip Of 15 Tablets', label: 'Dolo 650mg Stip Of 15 Tablets' },
  { value: 'Ecosprin 75mg Strip Of 14 Tablets', label: 'Ecosprin 75mg Strip Of 14 Tablets' },
  { value: 'Pharmeasy Multivitamin', label: 'Pharmeasy Multivitamin' },
  { value: 'Ecosprin 75mg Strip Of 14 Tablets', label: 'Ecosprin 75mg Strip Of 14 Tablets' }
]

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <BsArrowRight
    
      className={className}
      style={{ ...style, display: "block", color: "black",border:"1px solid rgb(238, 233, 233)", height:"1.5rem",width:"1.5rem" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <BsArrowLeft
      className={className}
      style={{ ...style, display: "block", color: "black",border:"1px solid rgb(238, 233, 233)",
       height:"1.5rem",width:"1.5rem" }}
      onClick={onClick}
    />
  );
}

const OrderMedicines = () => {

  const navigate = useNavigate()

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  
  };



 const[val,setVal] = useState("")

 console.log(val.value,"val")
 var details = val.value

 if(val.value)
 {
  localStorage.setItem("productDetails",details)
  navigate("/productdetails")
 }


  return (
    <div>
      <div className={styles.maindiv}>
        <div className={styles.top_1}>
          <p>Home  Order Medicines Online</p>
        </div>
        <div className={styles.order_div}>
          <div className={styles.left_div}>
            <div>
            <Heading as='h1' fontSize='30px' noOfLines={1}>Order Medicines Online</Heading>
          {/* <h2>Order Medicines Online</h2> */}
          <div className={styles.left_div2}>
            <div>
            <div className={styles.flex_1}>
              <p >Flat 15% Off</p>
              <p>1 Lakh+ Products</p>
              <p>Easy Returns</p>
            </div >
            <Heading style={{color:"white"}} as='h4' size='md'>Search for Medicines / Healthcare Products</Heading>
              {/* <h4>Search for Medicines / Healthcare Products</h4> */}
              </div>
              <div className={styles.select}>
                <input type="text" placeholder='Select Pincode'/>
              <Select onChange={(values) => setVal(values)} placeholder="Search medicines/Healthcare products" svg="" options={ options} />
              </div>
            </div>
          </div>
          </div>
          <div className={styles.right_div}>
            <div>
              <img className={styles.imgicon} src="https://assets.pharmeasy.in/web-assets/dist/3d74cbff.svg" alt=""/>
              <p>Order viaPrescription</p>
              <img/>
            </div>
            <div>
               <img className={styles.imgicon} src="https://assets.pharmeasy.in/web-assets/dist/3d74cbff.svg" alt=""/>
                <p>Don't have a Prescription?</p>
                <img/>
            </div>
          </div>
        </div>
        <div className={styles.slider_1}>
          <Heading as='h4' size='md'>All Offers</Heading>

          <Slider {...settings}>
                    <div className={styles.slider_1_div}>
                      <div className={styles.slider_1_div_flex}>
      
                      <img className={styles.slider_img} src="https://cms-contents.pharmeasy.in/offer/beff77d2d65-Diagnostics-11-min.png?w=64&q=75"/>
                      <p>Get FLAT rs.1000 OFF on booking <br/>Code: GRAND1000</p>
                  
                      </div>
                     
                    </div>
                    <div  className={styles.slider_1_div}>
                    <div className={styles.slider_1_div_flex}>
      
                    <img className={styles.slider_img} src="https://cms-contents.pharmeasy.in/offer/6b979e67782-Diagnostics-02-min.png?w=64&q=75"/>
                    <p>Get FLAT rs.1000 OFF on booking <br/>Code: GRAND1000</p>
                
                    </div>
        
                    </div>
                    <div  className={styles.slider_1_div}>
                    <div className={styles.slider_1_div_flex}>
      
                    <img className={styles.slider_img} src="https://cms-contents.pharmeasy.in/offer/8cdf65ac110-mobiwiklogo.png?w=64&q=75"/>
                    <p>Get up to 500Rs caseback <br/>
                    vio Mobikwink
                     <br/>Code: Not Required</p>
                
                    </div>
                     
                    </div>
                    <div  className={styles.slider_1_div}>

                    <div className={styles.slider_1_div_flex}>
                      
                      <img className={styles.slider_img} src="https://cms-contents.pharmeasy.in/offer/beff77d2d65-Diagnostics-11-min.png?w=64&q=75"/>
                      <p>Get FLAT rs.1000 OFF on booking <br/>Code: GRAND1000</p>
                  
                      </div>
                     
                    </div>
                    <div  className={styles.slider_1_div}>
                    <div className={styles.slider_1_div_flex}>
      
                    <img className={styles.slider_img} src="https://cms-contents.pharmeasy.in/offer/2846076d5d2-Diagnostics-10-min.png?w=64&q=75"/>
                    <p>Order medicines and get <br/> FLAT 400 OFF 
                    <br/>Code: CARE4U</p>
                
                    </div>
                    </div>
                    <div  className={styles.slider_1_div}>
                    <div className={styles.slider_1_div_flex}>
      
                    <img className={styles.slider_img} src="https://cms-contents.pharmeasy.in/offer/6b979e67782-Diagnostics-02-min.png?w=64&q=75"/>
                    <p>Get FLAT RS.300 OFF on PharmEasy<br/>Code: CSHB200</p>
                
                    </div>
                    </div>
                  </Slider>

        </div>
        <div className={styles.slider_2}></div>
        <div className={styles.slider_3}></div>



        <div className={styles.desc}>
          <div>
          <Heading s as='h4' size='md'>India's No. 1 Medicine Delivery App</Heading>
          <p>The concept of medicine home delivery has been taken to a new level by the PharmEasy online medicine delivery app. You can use the PharmEasy online medicine delivery app to browse through an extensive range of medicines. Each medicine undergoes a 3-step quality check.
          Whatever be your medicine requirement, you are sure to locate it in this online pharmacy. All you have to do then is to add it to your cart and place the order and get your order delivered quickly. India’s beloved online medicine delivery app makes sure that you get your
          <br/> medicines in record time because we know how vital time is in any treatment. Sit back, and we will have all your medical necessities delivered to your doorstep.</p>
          </div>
          <div>
          <Heading s as='h4' size='md'>Online Medicine - Your Online Medical Store in India</Heading>
          <p>Tired of walking all the way to your local medicine store? <br/>
            Worried that going out is risky during the current times? Order medicines online at PharmEasy, India’s trusted online medicine app. With more than 1 lakh medicines always in stock, you are sure to find what
             you are looking for, and that too at affordable prices!</p>
          </div>
          <div>
          <Heading s as='h4' size='md'>Reasons To Buy Medicine Online From PharmEasy</Heading>
          <p>Here are a few reasons that will convince you to give online medicine order through the PharmEasy app -</p>
          <li>1,200+ cities and 20,000+ Pin codes served</li>
          <li>Express Delivery</li>
          <li>1 Lakh+ medicines available</li>
          <li>Cash on delivery option available</li>
          <li>Attractive offers</li>
          <li>Cashback option through wallet</li>
          <li>Stringent quality checks</li>
          <li>Garnered the trust of more than 10 million users who have made an online purchase through PharmEasy</li>
          </div>
          <div>
          <Heading s as='h4' size='md'>Get 3-Step Quality-checked Medicines</Heading>
          <p>PharmEasy is a one-stop-shop for all your healthcare needs. We have 1L+ products for you to choose 
          from. Buy medicines online at affordable prices from the comforts of your home in just a few clicks and get 
          them delivered at your doorstep.The en  tire process of shopping for medicines is hassle-free and convenient. 
          All you have to do is search for the products you need on our website or app, add to cart and then proceed with 
          the checkout process.With our scheduled refill reminder, you don’t even need to keep track of your refill dates.
          What’s more, we have great offers, with added discounts and massive e-wallet cashbacks on purchasing medicines!</p>
          </div>
        </div>
        <div className={styles.faq}>
         
        </div>
        <div className={styles.bottom_1}>
          <div>
              <img className={styles.bottom_1_img1} src="https://is5-ssl.mzstatic.com/image/thumb/Purple125/v4/25/e3/46/25e346ae-5ef1-7160-ce1b-b026792dae2d/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/230x0w.webp" alt="" />
              <Heading as='h4' size='md'>1 Lakh+Products</Heading>
              <p>We maintain strict quality <br/> 
                controls on all our partner retailers,<br/> 
                so that you always get standard <br/> 
                quality products.</p>
          </div>
          <div>
              <img className={styles.bottom_1_img}src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRZTLyoLYiQZNQ0yg_oYch7AEptx8Xi2YCG0F03_mVIWomqypwq" alt="" />
              <Heading as='h4' size='md'>Secure Payment</Heading>
              <p>100% secure and trusted <br/>
                payment protection</p>
          </div>
          <div>
              <img className={styles.bottom_1_img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShVaypOjjhUQzWBVQiYwSwhMn1QrUmGJ58I0bLJ6xTgLQMvflW" alt="" />
              <path fill="#F4F7FB" d="M49.935 25.034c0 13.659-11.162 24.731-24.93 24.731-13.77 0-24.932-11.072-24.932-24.73C.073 11.374 11.235.302 25.004.302c13.77 0 24.931 11.073 24.931 24.731"></path>
              <Heading as='h4' size='md'>Easy Return</Heading>
              <p>We have a new and dynamic return window <br/> 
                policy for medicines and healthcare items. <br/> 
                Refer FAQs section for more details.</p>
          </div>
        </div>
        <div className={styles.bottom_2}>
          <div className={styles.bottom_21}>
            <img src="https://assets.pharmeasy.in/web-assets/_next/icons/footerMobile.jpg" alt=""/>
          </div>
          <div className={styles.bottom_22}>
            <p>Download the App for Free</p>
            <div>
            <div>
              <img src="https://www.idfcfirstbank.com/content/dam/IDFCFirstBank/apple-store-icon.svg" alt=""/>
            </div>
            <div>
              <img src="https://www.idfcfirstbank.com/content/dam/IDFCFirstBank/android-store-icon.svg" alt=""/>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderMedicines
