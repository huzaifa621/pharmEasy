

import React from 'react'
import "./Healthcare.css";
import { useState } from 'react'
import { SliderData } from './SliderData'
import {AiFillLeftCircle ,AiFillRightCircle} from "react-icons/ai";
import { Box, Grid } from '@chakra-ui/react'

const Healthcare = ({slides}) => {
    const [current,setCurrent]=useState(0);
    const length=slides.length;

    const nextSlide=()=>{
        setCurrent(current ===length-1 ? 0 : current+1);
    }
    const prevSlide=()=>{
        setCurrent(current === 0 ? length-1 : current-1);
    }
    
  return (
    <>
       <div className='heading'>Home &gt; <span style={{color:"gray"}}>Healthcare</span></div>
       <div className='slider'>
        
        <AiFillLeftCircle className='left-arrow' onClick={prevSlide}/>
       <AiFillRightCircle className='right-arrow' onClick={nextSlide}/>
      {SliderData.map((img,ind)=> {
          return (
                 <div key={ind}>{ind === current && (<img src={img.image} alt="images" className='sliderimage'/>)}</div>
              )
        })}
    </div>
  <Box w="80%" m="auto">
  <Grid templateColumns='repeat(3, 1fr)' gap={6}>
  <Box w='100%' h='20' bg='white' border="1px" borderRadius="11" boxShadow="md" _hover={{borderColor:"green" , borderWidth:"3px"}} > Hello</Box>
  <Box w='100%' h='20' bg='white' border="1px" borderRadius="11" boxShadow="md" _hover={{borderColor:"green" , borderWidth:"3px"}} > Hello</Box>
  <Box w='100%' h='20' bg='white' border="1px" borderRadius="11" boxShadow="md" _hover={{borderColor:"green" , borderWidth:"3px"}} > Hello</Box>
  <Box w='100%' h='20' bg='white' border="1px" borderRadius="11" boxShadow="md" _hover={{borderColor:"green" , borderWidth:"3px"}} > Hello</Box>
  <Box w='100%' h='20' bg='white' border="1px" borderRadius="11" boxShadow="md" _hover={{borderColor:"green" , borderWidth:"3px"}} > Hello</Box>
  <Box w='100%' h='20' bg='white' border="1px" borderRadius="11" boxShadow="md" _hover={{borderColor:"green" , borderWidth:"3px"}} > Hello</Box>
  <Box w='100%' h='20' bg='white' border="1px" borderRadius="11" boxShadow="md" _hover={{borderColor:"green" , borderWidth:"3px"}} > Hello</Box>
  <Box w='100%' h='20' bg='white' border="1px" borderRadius="11" boxShadow="md" _hover={{borderColor:"green" , borderWidth:"3px"}} > Hello</Box>
  <Box w='100%' h='20' bg='white' border="1px" borderRadius="11" boxShadow="md" _hover={{borderColor:"green" , borderWidth:"3px"}} > Hello</Box>
  <Box w='100%' h='20' bg='white' border="1px" borderRadius="11" boxShadow="md" _hover={{borderColor:"green" , borderWidth:"3px"}} > Hello</Box>
  <Box w='100%' h='20' bg='white' border="1px" borderRadius="11" boxShadow="md" _hover={{borderColor:"green" , borderWidth:"3px"}} > Hello</Box>
  <Box w='100%' h='20' bg='white' border="1px" borderRadius="11" boxShadow="md" _hover={{borderColor:"green" , borderWidth:"3px"}} > Hello</Box>
  <Box w='100%' h='20' bg='white' border="1px" borderRadius="11" boxShadow="md" _hover={{borderColor:"green" , borderWidth:"3px"}} > Hello</Box>
  <Box w='100%' h='20' bg='white' border="1px" borderRadius="11" boxShadow="md" _hover={{borderColor:"green" , borderWidth:"3px"}} > Hello</Box>
  <Box w='100%' h='20' bg='white' border="1px" borderRadius="11" boxShadow="md" _hover={{borderColor:"green" , borderWidth:"3px"}} > Hello</Box>
</Grid>
</Box>
  
    </>
    
  )
}

export default Healthcare


