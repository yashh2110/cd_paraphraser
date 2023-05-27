import { faq } from "@/data/common";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react";
import React from "react";

function Faq() {
  return (
    <Box
      minH="60vh"
      backgroundColor="var(--primary-background-color)"
      display="flex"
      justifyContent="center"
      alignItems="flex-start"
      flexDirection={"row"}
      flexWrap={"wrap"}
      py={10}
    >
      <Box w={["90%", "90%", "85%"]}>
        <Text
          fontSize={["22px", "28px"]}
          fontWeight={800}
          w="100%"
          textAlign={["center", "center", "left"]}
        >
          FAQs
        </Text>
        <Box mt="20px">
          <Accordion allowToggle w="100vw">
            {faq.map((item) => (
              <AccordionItem
                w={["90%", "70%"]}
                mb={"15px"}
                border={"1px"}
                borderRadius={"8px"}
                borderColor={"#00000029"}
                boxShadow={"sm"}
              >
                <AccordionButton py={5}>
                  <AccordionIcon
                    color={"var(--primary-color)"}
                    w={"25px"}
                    h={"25px"}
                    mr={3}
                  />
                  <Box as="span" flex="1" textAlign="left">
                    {item.title}
                  </Box>
                </AccordionButton>
                <AccordionPanel pb={4}>{item.desc}</AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
      </Box>
    </Box>
  );
}

export default Faq;
