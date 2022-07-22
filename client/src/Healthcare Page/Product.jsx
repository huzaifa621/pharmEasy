
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Box ,Grid, Heading, Image,Text,Select ,Stack,Checkbox, Divider} from "@chakra-ui/react";



const Product = () => {
    const [data,setData]=useState([]);
    const [type,setType]=useState([]);
   

    useEffect(()=>{
        const getData= async()=>{
            let res=await axios.get("http://localhost:8080/api/product?q=");
            setData(res.data);
        }
        getData();
    },[])
    // console.log(data);

    const handleFilter = async(val)=>{
      
      if(val==="price-asc"){
       data.sort(function(a,b){
        return a.mrp-b.mrp
      })
        setType([...data,data])
      }
       else if(val=== "price-dsc"){
        data.sort(function(a,b){
          return b.mrp - a.mrp
        })
        setType([...data,data])
      }
      else if(val==="discount"){
        data.sort(function(a,b){
          return b.discount - a.discount
        })
        setType([...data,data]);
      }    
    }

      return (
       <Box>
       <Box w={'92%'}  m='6rem auto auto auto' display={'flex'} >
       <Box w={'30%'}  >
       <Box p={'1rem'}>
       <Text fontSize={'4xl'} mr={'5rem'} as='h5' size='lg' m={'0rem 2rem 2rem 1rem'} justifySelf={'left'}>Filter</Text>
      <Heading fontSize='lg' m={'1rem'} >Category</Heading>
      <Stack spacing={5} direction='row'>
       <Checkbox  colorScheme='green' defaultChecked>
        Personal Care
       </Checkbox>
       </Stack>
      <Divider m={'2rem'}/>
      <Heading fontSize='lg' m={'1rem'} >Sub Category</Heading>
        <Stack>
       <Checkbox colorScheme='green' m='0.5rem' >
       Ayurvedic Medicines
       </Checkbox>
       </Stack>
       <Stack>
       <Checkbox colorScheme='green' m='0.5rem' >
       Homeopathic Medicine
       </Checkbox>
       </Stack>
       <Stack>
       <Checkbox colorScheme='green' m='0.5rem' >
        Beauty
       </Checkbox>
       </Stack>
       <Stack>
       <Checkbox colorScheme='green' m='0.5rem' >
        Sexuall Wellness
       </Checkbox>
       </Stack>
       <Stack>
       <Checkbox colorScheme='green' m='0.5rem' >
        Skin
       </Checkbox>
       </Stack>
       <Stack>
       <Checkbox colorScheme='green' m='0.5rem' >
        Fitness Medicines
       </Checkbox>
       </Stack>
       <Divider m='1rem' />
       <Heading fontSize='lg' m={'1rem'} > Brand</Heading>
        <Stack>
       <Checkbox colorScheme='green' m='0.5rem' >
        Baidyanath
       </Checkbox>
       </Stack>
       <Stack>
       <Checkbox colorScheme='green' m='0.5rem' >
        Zandu
       </Checkbox>
       </Stack>
       <Stack>
       <Checkbox colorScheme='green' m='0.5rem' >
        Durex
       </Checkbox>
       </Stack>
       <Stack>
       <Checkbox colorScheme='green' m='0.5rem' >
        &Me
       </Checkbox>
       </Stack>
       <Stack>
       <Checkbox colorScheme='green' m='0.5rem' >
        Covid Test Kits & Masks
       </Checkbox>
       </Stack>
       <Stack>
       <Checkbox colorScheme='green' m='0.5rem' >
         Men Care
       </Checkbox>
       </Stack>
       <Stack>
       <Checkbox colorScheme='green' m='0.5rem' >
        Women Care
       </Checkbox>
       </Stack>
       <Divider m={'2rem'}/>
       <Heading fontSize='lg' m={'1rem'} > Price</Heading>
        <Stack>
       <Checkbox colorScheme='green' m='0.5rem' >
       Below 99
       </Checkbox>
       </Stack>
       <Stack>
       <Checkbox colorScheme='green' m='0.5rem' >
        100 - 199
       </Checkbox>
       </Stack>
       <Stack>
       <Checkbox colorScheme='green' m='0.5rem' >
        200 - 299
       </Checkbox>
       </Stack>
       <Stack>
       <Checkbox colorScheme='green' m='0.5rem' >
        300 - 399
       </Checkbox>
       </Stack>
       <Stack>
       <Checkbox colorScheme='green' m='0.5rem' >
        400 - 499
       </Checkbox>
       </Stack>
       <Stack>
       <Checkbox colorScheme='green' m='0.5rem' >
       Above 500
       </Checkbox>
       </Stack>
        </Box>
      </Box>
      <Box w={'70%'} h='auto' >
       <Box w={'100%'} h='4rem' m='0.2rem auto auto auto' display={'flex'} >
       <Text fontSize={'4xl'} mr={'7rem'} as='h5' size='lg' justifySelf={'left'}>Personal Care</Text>
       <Text  m='0.2rem 3rem 1rem 3rem'>Sort By: </Text>
       <Select onChange={(e)=>{handleFilter(e.target.value)}} borderColor='black' w={'20rem'} placeholder='Popularity'>
          <option value='discount'>Discount</option>
          <option value='price-asc'>Price low to high</option>
          <option value='price-dsc'>Price High to low</option>
         </Select>
       </Box>
        <Grid templateRows='repeat(4,1fr)' templateColumns='repeat(3, 1fr)'  gap='6' padding={'1rem'} >
        {
          data.map((elem,ind)=>(
            <Box key={elem._id} border='1px' boxShadow='md' p='2' rounded='md' bg='white' borderColor={'gray'} _hover={{ borderColor: "gray", borderWidth: "2px" }}>
            <Image m={'1rem auto 1rem auto'} w='9rem' h='9rem' src={elem.img2} alt="" />
            <Heading mb={'0.7rem'} noOfLines={2} as='h5' size='sm'>{elem.title}</Heading>
            <Box display={'flex'} >
            <Text color={'gray'} mr='1.3rem' mt={'1px'} as='s'>MRP ₹ {elem.strike}</Text>
            <Box position={'relative'} textAlign='left'>
            <Image h={'1.3rem'} w='100%' src='https://assets.pharmeasy.in/web-assets/_next/icons/pdp-discount.png'/>
            <Box color={'white'} fontSize={'10.3px'} position={'absolute'} top='35%' left={'35%'} transform='translate(-50%,-50%)' >{elem.discount} % OFF</Box>
            </Box>
           </Box>
             <Heading fontSize='lg'> ₹ {elem.mrp}</Heading>
            </Box>
            ))
          }
       </Grid>
      </Box>
    </Box>
     <Divider m={'5rem'}/>
        <Box w={"60%"} m='auto' mb={'2rem'} >
       <Grid templateColumns='repeat(3, 1fr)' gap={6} >
       <Box w='100%' h='16rem' bg='white' >
       <Image src="https://uploads-ssl.webflow.com/598435743262c800013158eb/5fccdb2bbb42677c2f3efa4e_moneyback-icon-green.svg"
           w="20%"
           h="20%"
           alt="Dan Abramov"
         />
         <Heading as='h4' size='md'  mt='1rem'>1 Lakh+ Products</Heading>
         <Text fontSize={"lg"} textAlign='left' mt="1rem" color={'gray'}>
         We maintain strict quality controls on all our partner retailers, so that you always get standard quality products.
         </Text>
        </Box>
       <Box w='100%' h='16rem' bg='white'>
       <Image borderRadius={'21rem'}
        src="https://www.datocms-assets.com/22250/1583380060-shield-lock-2x.png?auto=format&dpr=0.8&w=244"
           w="20%"
           h="15%"
           mt={"0.5rem"} 
           alt="Dan Abramov"
         />
         <Heading as='h4' size='md'  mt='1rem'>Secure Payment</Heading>
         <Text fontSize={"lg"} textAlign='left' mt="1rem" color={'gray'}>
         100% secure and trusted payment protection.
         </Text>
     </Box>
     <Box w='100%' h='16rem' bg='white'>
     <Image  borderRadius={'21rem'}
           src="https://i.pinimg.com/564x/31/55/64/315564aece0f76bde01696ce11b8f47f.jpg"
           w="20%"
           h="15%"
           mt={"0.5rem"} 
           alt="Dan Abramov"
         />
         <Heading as='h4' size='md'  mt='1rem'>Easy Return </Heading>
         <Text fontSize={"lg"} textAlign='left' mt="1rem" color={'gray'}>
         We have a new and dynamic return window policy for medicines and healthcare items. Refer FAQs section for more details.
         </Text>
      </Box>
     </Grid>
   </Box>
   <Divider mb={'5rem'}/>
   <Box w={'80%'} m='auto'>
   <Grid templateColumns='repeat(3, 1fr)' gap={8}>
   <Box w='90%' h='33rem' ml='1rem' bg='white'> <Image w ='100%' h='100%' src="https://assets.pharmeasy.in/web-assets/_next/icons/footerMobile.jpg" /></Box>
   <Box w='100%' h='22rem' bg='white'  >
     <Text fontSize={"xl"} textAlign='left' mt="1rem" ml={'1rem'}>Download the App for Free</Text>
     <a href="https://play.google.com/store/apps/details?id=com.phonegap.rxpal&hl=en_IN&gl=US&utm_source=web&utm_medium=footer"><Image src="https://www.idfcfirstbank.com/content/dam/IDFCFirstBank/android-store-icon.svg" /></a>
    <a href="https://apps.apple.com/in/app/pharmeasy-healthcare-app/id982432643"><Image src="https://www.idfcfirstbank.com/content/dam/IDFCFirstBank/apple-store-icon.svg" /></a> 
   </Box>
   </Grid>
   </Box>
   <Divider mb={'2rem'}/>
</Box>    
  )
}

export default Product
