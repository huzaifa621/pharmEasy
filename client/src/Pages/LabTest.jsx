import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import Slider from "react-slick"
import img1 from "./labtest IMG/onTime.jpg"
import img2 from "./labtest IMG/pre health check up.jpg"
import img3 from "./labtest IMG/stomach issue.jpg"


export const LabTest = () => {
  
        const settings = {
          dots: true,
          infinite: true,
          speed: 5000,
          slidesToShow: 1,
          slidesToScroll: 1
        };
        const Images = [img1, img2, img3];
      
  return (
    <div>
         <div style={{  height:"30%", alignitems: "left", marginBottom: "50px"}}>
        <Slider {...settings}>
        {Images.map((e) => {
            return <img style={{ borderRadius: "10px",height: "50%"}} src={e} alt="" />
            })}
        </Slider>
      </div>







      {/* <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                What are the covid precautions PharmEasy is taking for the
                testing purpose?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            PharmEasy takes safety of our patients and staff very seriously.
            Which is why since the onset of COVID-19, we formulated a 5-step
            safety program to offer 100% protection to all stakeholders.. Along
            with this, NABL guidelines are followed to ensure samples are not
            corrupted during collection, transportation or storage. Here are the
            safety measures that we adhere to-Vigilance about face masksHand
            hygiene including sanitization and wearing of glovesFrequent thermal
            checksHygienic sample collectionCareful disposal of wasteCheck flu
            symptoms with patients
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton className="btn">
              <Box flex="1" textAlign="left">
                Are the phlebotomists sufficiently qualified?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={1}>
            PharmEasy owns 18 state-of-the-art diagnostic laboratories in the
            country with an inhouse fleet of 500 phlebotomists across 2500+
            pincodes. We have a dedicated training team for the technicians
            which constantly track their performance on parameters like on time
            arrival, painless collection, adherence to NABL guidelines for
            sample storage & transport and customer support. We have a very
            strict hiring process which ensures that every sample collection
            experience is best in class.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton className="btn">
              <Box flex="1" textAlign="left">
                How efficient is the sample collection and analysis process?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={1}>
            Utmost care is taken to collect samples while maintaining complete
            hygiene. Only new and fresh collection kits and needles are used.
            After collection, the sample is immediately transferred into an
            icebox to prevent degradation and bacterial build-up which may lead
            to inaccurate diagnosis. The samples are barcode tagged to prevent
            mix up and in the laboratories, technicians use high-end,
            state-of-the-art devices to analyse the samples.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton className="btn">
              <Box flex="1" textAlign="left">
                Why are lab tests essential?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={1}>
            Lab tests or diagnostic tests are recommended by doctors when they
            suspect that there might be something wrong with your health.
            Samples of your blood, stool, urine, or mucus can reveal a lot about
            the state of your health when analysed with special devices. Once
            the problem is detected, your doctor can diagnose and put you on
            medication or suggest a course of treatment.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton className="btn">
              <Box flex="1" textAlign="left">
                How long does it take for the report to be delivered?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={1}>
            It takes 24-48 hours for the lab to prepare your report and have it
            delivered to you.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton className="btn">
              <Box flex="1" textAlign="left">
                How should one prepare for a lab test?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={1}>
            Different tests have different requirements. Some may need to be on
            an empty stomach whereas, for some other tests, you may need to
            consume food before the sample is collected. Speak with your doctor
            regarding what you need to do to prepare for a lab test. Let your
            doctor know if you are already on any medication.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton className="btn">
              <Box flex="1" textAlign="left">
                How are lab test reports interpreted?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={1}>
            The reports that our labs will deliver to you will be quite
            detailed. There will be charts of reference ranges to help you
            understand the report and a statement from a qualified doctor. But,
            once you receive your report, it is best to consult your doctor and
            ask him/her to explain it to you.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton className="btn">
              <Box flex="1" textAlign="left">
                If the lab test results are within normal range, does that mean
                no illness has been detected?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={1}>
            If your reports are within normal range, it is certainly good news.
            But normal results do not always give you a clean bill of health. If
            symptoms persist, your doctor will recommend other tests to detect
            what is triggering the unusual signs.
          </AccordionPanel>
        </AccordionItem>
      </Accordion> */}
    </div>
  )
}