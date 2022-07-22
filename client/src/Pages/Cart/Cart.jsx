
import React, { useState } from 'react'
import { useEffect } from 'react'
import styles from "../../Styles/Cart.module.css"
// import styles from "../../Styles/Desc.module.css"
import axios from "axios"
import { Heading } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {BsArrowLeft, BsArrowRight} from "react-icons/bs";
import { Navigate, useNavigate } from 'react-router-dom'
import { Select } from '@chakra-ui/react'

var cart = [
  {
      title:"Everherb (By Pharmeasy) Flaxseed Omega 3 - Essential Fatty Acids - Healthy Heart - Bottle Of 60",
      img1:"https://cdn01.pharmeasy.in/dam/products_otc/D64484/everherb-by-pharmeasy-flaxseed-omega-3-essential-fatty-acids-healthy-heart-bottle-of-60-2-1654165285.jpg?dim=320x320&dpr=1&q=100",
      mrp:100,
      strike:120
  },
  {
    title:"Liveasy Wellness Calcium, Magnesium, Vitamin D3 & Zinc - Bones & Dental Health - Bottle 60 Tabs",
    img1:"https://cdn01.pharmeasy.in/dam/products_otc/T22634/liveasy-wellness-calcium-magnesium-vitamin-d3-zinc-bones-dental-health-bottle-60-tabs-2-1654233851.jpg?dim=320x320&dpr=1&q=100",
    mrp:200,
    strike:240
  }
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


const Cart = () => {
  const[slider,setSlider] = useState([])
  const[val,setVal] = useState("")
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />

  };

  const handleAddToCartS = (el) => {
    // var product_idS = el._id

    console.log(el,"slider")

    // console.log(product_idS,Qty,UserId,"slider")
    // axios.post("/",{
    //   productId:product_idS,
    //   qty:1,
    //   user_id: "62d7ce9fc8c9b354e8c3705b"
    // })
  }

  const changeQty = () => {
    console.log(val,"qty")

  }
  const detail2 = JSON.parse(localStorage.getItem("frequently"))

  // console.log(desData,"detail")

  useEffect(() => {
    getData2()

  },[])

  const getData2 = () =>{
    axios.get(`http://localhost:8080/api/product?q=${detail2}`).then(({data})=>{
      // console.log(data,"data")
      setSlider(data)

    })

  }
  return (
    <div className={styles.div}>
      <div className={styles.main}>

            <div className={styles.left}>
              <div>
              <Heading as='h1' fontSize='30px' >{cart.length} Items In Cart</Heading>

               {cart.map((el) => {
                return <>
                    <div className={styles.cart_div}>
                      <div>
                          <img src={el.img1} alt=""/>
                      </div>
                        
                      <div className={styles.div2}>
                        <div style={{display:"flex",justifyContent:"space-between"}}>
                        <h1>{el.title}</h1>
                        <img style={{width:'4vh',height:'4vh'}} src="data:image/png;base64,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" alt=""/>
                        </div>
                        <Select onClick={changeQty} width='20vh' marginBottom='2rem' onChange={(e) => setVal(e.target.value)}  placeholder='Qty'>
                        <option  style={{color:'black'}} value='1'>1</option>
                        <option  style={{color:'black'}} value='2'>2</option>
                        <option  style={{color:'black'}} value='3'>3</option>
                        <option  style={{color:'black'}} value='4'>4</option>
                        <option  style={{color:'black'}} value='5'>5</option>
                        <option  style={{color:'black'}} value='6'>6</option>
                        <option  style={{color:'black'}} value='7'>7</option>
                        <option  style={{color:'black'}} value='8'>8</option>
                        <option  style={{color:'black'}} value='9'>9</option>
                        <option  style={{color:'black'}} value='10'>10</option>
                        </Select>
                        <p>Delivery by Tomorrow, before 10:00pm</p>
                      </div>
                    
                    </div>
                </>
               })} 


              </div>
              <div></div>
              <div  className={styles.slider}>
                    <div className={styles.slider_1}>

                  <Heading as='h4' size='md'>Customers who bought above items also bought</Heading>
                  <Slider {...settings}>

                        {slider.map((el) =>{

                        return <>
                        <div className={styles.slider_1_div}>
                              <div className={styles.slider_1_div_flex}>
                              <img className={styles.slider_img} src={el.img1}/>
                              <p style={{height:'7rem',fontSize:'13px'}}>{el.title}</p>
                              <p style={{ fontSize:'13px', textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>MRP {'\u20B9'}{el.strike}</p>
                              <p>{'\u20B9'} {el.mrp} </p>

                              <Select onClick={handleAddToCartS(el)} color='teal' margin='auto' width='25vh' onChange={(e) => setVal(e.target.value)}  placeholder='Add to Cart'>
                                <option  style={{color:'black'}} value='1'>1</option>
                                <option  style={{color:'black'}} value='2'>2</option>
                                <option  style={{color:'black'}} value='3'>3</option>
                                <option  style={{color:'black'}} value='4'>4</option>
                                <option  style={{color:'black'}} value='5'>5</option>
                                <option  style={{color:'black'}} value='6'>6</option>
                                <option  style={{color:'black'}} value='7'>7</option>
                                <option  style={{color:'black'}} value='5'>8</option>
                                <option  style={{color:'black'}} value='6'>9</option>
                                <option  style={{color:'black'}} value='7'>10</option>
                            </Select>
                              </div>
                        </div>
                        </>
                        })}
                      </Slider>

              
              
              
              </div>
              </div>
            </div>
            <div className={styles.right}>
              left
            </div>
            
            
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
  )
}

export default Cart

