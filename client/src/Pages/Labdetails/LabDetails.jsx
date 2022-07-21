import React from 'react'
import {  Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Text} from "@chakra-ui/react"
import "./LabDetails.css"

const LabDetails = () => {
  return (
    <Box>
        <Box className='lab_details_box'>
            <Box className='textname'>Lab Details</Box>
            <Box className='all_detail_div'>
                <Box className='box1'>
                    <Box className='covidrtpcr_box'>
                        <img src="https://assets.pharmeasy.in/web-assets/dist/f9973775.svg" alt="labs" />
                        <Text className='rtpcr_text'>PharmEasy Labs (Covid RTPCR)</Text>
                    </Box>

                    <Accordion border={"white"} mt={"2rem"} defaultIndex={[0]} allowMultiple>
                  <AccordionItem>
                    <h2>
                      <AccordionButton  color={"#4f585e"}>
                        <Box className='discription' flex="1" textAlign="left">     
                        Description
                        </Box>
                        <AccordionIcon color={"#10847e"} />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel color={"#4f585e"} pb={4}>
                    Thyrocare Technologies Limited is a chain of diagnostic and preventive care laboratories, based in Navi Mumbai. The company has 1,122 outlets and collection centers across India. Labs HQ Address : D=37/1, TTC INDUSTRIAL AREA, MIDC, TURBHE, NAVI MUMBAI MH 400703 IN. Customer Support: 7022000900. Grievance Officer - Name : Sameer Jha. Mobile : 9987573048. Designation : Sr Manager
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                </Box>
                <Box className='box1'></Box>
            </Box>
        </Box>
    </Box>
  )
}

export default LabDetails