import React, { useState } from 'react'
import { useEffect } from 'react'
import styles from "../Styles/Desc.module.css"
import axios from "axios"
import { Heading } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {BsArrowLeft, BsArrowRight} from "react-icons/bs";


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

const Desc = () => {
  const[desData,setDesdata] = useState([])
  const[slider,setSlider] = useState([])

    const detail = JSON.parse(localStorage.getItem("productDetails"))
    const detail2 = JSON.parse(localStorage.getItem("frequently"))

    console.log(detail2,"detail")

    useEffect(() => {

      getData()
      getData2()

    },[])

    const getData2 = () =>{
      axios.get(`http://localhost:8080/api/product?q=${detail2}`).then(({data})=>{
        console.log(data,"data")
        setSlider(data)
        
      })
     
    }

    const getData = () =>{
      axios.get(`http://localhost:8080/api/product/single/${detail}`).then(({data})=>{
        // console.log(data,"data1")
        setDesdata(data)
      })
     
    }
    const handleClick  = () => {
      console.log(desData.img1)
      desData.img1=desData.img2

    }
    const handleClick1 = () => {
      console.log("cart")
    }
    // console.log((Number(desData.mrp)),Number(desData.strike))

    var offer = ((Number(desData.mrp)/Number(desData.strike))*100).toFixed(2)
    console.log(offer,"offer")

    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    
    };

    return (
      <>
      <div className={styles.div}>
          <div>
            <p>Home {'>'} {desData.title}</p>
          </div>
          <div className={styles.outer_div_1}>
                <div className={styles.main_div1}>
                      <div className={styles.desc_img_div1}>
                            <img src={desData.img1} alt=""/>
                      </div>
                      <div className={styles.desc_img_div2}>
                          <img onClick={handleClick} src={desData.img1} alt=""/>
                          <img src={desData.img2} alt=""/>
                          <img src={desData.img3} alt=""/>
                      </div>
                </div>
                <div className={styles.main_div2}>
                      <Heading as='h1' fontSize='20px' >{desData.title}</Heading>
                      
                      <div style={{display:"flex",gap:"20px"}}>
                      <Heading as='h1' fontSize='20px'>{'\u20B9'}{desData.mrp}</Heading>
                      <p>MRP</p>
                      <p style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>{'\u20B9'}{desData.strike}</p>
                      <p style={{backgroundImage: "url(" + "https://assets.pharmeasy.in/web-assets/_next/icons/pdp-discount.png" + ")",
                        fontSize:"13px",margin:"auto",color:'white',marginTop:"-1px"}}>{offer}%OFF</p>
                      </div>

                      <p style={{fontSize:"12px"}}>Inclusive of all taxes</p>
                      <p>Delivery by Tommorrow, before 10.00 pm</p>


                </div>
                <div  className={styles.main_div3}>
                <Stack spacing={4} direction='row' align='center'>
                  <Button onClick={handleClick1} colorScheme='teal' size='lg'>Add to Cart</Button>
                </Stack>
                </div>

                <div  className={styles.main_div4}>
                  <p style={{fontWeight:"bold"}}>Items in Cart</p>
                  <Stack spacing={4} direction='row' align='center' marginTop='1rem' marginBottom='4rem'>
                      <Button colorScheme='teal' size='lg' width='20rem'>
                       View Cart {'>'}
                      </Button>
                  </Stack>

                  <div className={styles.offerdiv}>
                    <p style={{fontWeight:"bold"}}>Offers just for you</p>
                    <div style={{display:"flex",marginTop:"1rem",gap:"10px"}}>
                      <img src="https://cms-contents.pharmeasy.in/offer/60165886431-ten_per.jpg" alt=""/>
                      <p>Get extra 10% Off on Everherb, Liveasy<br/>
                       PharmEasy products</p>
                    </div>
                    <div style={{display:"flex",marginTop:"1rem",gap:"10px"}}>
                    <img src="https://cms-contents.pharmeasy.in/offer/94fa2133c15-Plum_logo2.jpg" alt=""/>
                      <p>Get Flat 50% off on Plum</p>
                    </div>
                  </div>
                </div>
                
          </div>
         
           
            <div className={styles.slider_1}>
          <Heading as='h4' size='md'>Frequently Bought Together</Heading>
          <Slider {...settings}>

                {slider.map((el) =>{

                  return <>
                <div className={styles.slider_1_div}>
                      <div className={styles.slider_1_div_flex}>
                      <img className={styles.slider_img} src={el.img1}/>
                      <p>{el.title}</p>
                      <p style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>{'\u20B9'}{el.strike}</p>
                      <p>{'\u20B9'} {el.mrp} </p>
                      {offer}%OFF
                      <Stack direction='row' spacing={4} align='center'>
                      <Button marginTop='1rem' width='20vh' colorScheme='teal' variant='outline'>
                        Add
                      </Button>
                      </Stack>
                      </div>
                </div>
                </>
                })}
              </Slider>

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
              <a href="https://play.google.com/store/apps/details?id=com.phonegap.rxpal&hl=en_IN&gl=US&utm_source=web&utm_medium=footer" target="_blank" rel="noreferrer">
              <img src="https://www.idfcfirstbank.com/content/dam/IDFCFirstBank/apple-store-icon.svg" alt=""/>
              </a>
             
            </div>
            <div>
              <a href="https://apps.apple.com/in/app/pharmeasy-healthcare-app/id982432643" target="_blank" rel="noreferrer">
              <img src="https://www.idfcfirstbank.com/content/dam/IDFCFirstBank/android-store-icon.svg" alt=""/>
              </a>
            </div>
            </div>
          </div>
        </div>

      </div>
      </>
    )
}

export default Desc
