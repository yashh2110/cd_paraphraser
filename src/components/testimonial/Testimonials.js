// import { testimonial_settings } from "@/data/home";
import Image from "next/image";
import React from "react";
import circle from "../../assets/svg/circle-creative.svg";
import square from "../../assets/svg/square-creative.svg";
import { Box, Card, Text } from "@chakra-ui/react";
import { testimonials } from "@/data/common";
import Rating from "@mui/material/Rating";
function Testimonials({ styles }) {
  const testimonial_settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    // centerMode: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  return (
    <Box
      minH="60vh"
      backgroundColor="var(--secondary-background-color)"
      display="flex"
      justifyContent="center"
      alignItems="flex-start"
      flexDirection={"row"}
      flexWrap={"wrap"}
      py={10}
    >
      <Box position={"relative"}>
        <Text
          fontSize={"28px"}
          fontWeight={800}
          mx={["20px", 50, 50, 130]}
          pb={5}
        >
          Testimonials
        </Text>
        <Box position={"relative"} w="100vw" m={0}>
          <Box
            position={"absolute"}
            left={"-25px"}
            top={"-25px"}
            zIndex={0}
            w={"100px"}
            h={"100px"}
            mx={["20px", 50, 50, 130]}
          >
            <Image src={square} alt="cd" />
          </Box>
          <Box
            position={"absolute"}
            right={"-25px"}
            bottom={"-25px"}
            zIndex={0}
            w={"100px"}
            h={"100px"}
            mx={["20px", 50, 50, 130]}
          >
            <Image src={circle} alt="cd" />
          </Box>
          <Box
            position={"relative"}
            w="100%"
            display={"flex"}
            flexDirection={"row"}
            alignItems={"flex-start"}
            justifyContent={"center"}
            flexWrap={"wrap"}
            my={"25px"}
          >
            {/* <Slider {...testimonial_settings}> */}
            {testimonials.map((item) => (
              <Box
                boxShadow="sm"
                position={"relative"}
                w={["90%", "90%", "30%"]}
                bg={"var(--white)"}
                borderRadius={10}
                m="10px"
                p="20px"
                maxW="400px"
                h={"auto"}
                key={item.id}
              >
                {/* <Box> */}
                {/* <div>
                  <Rating name="read-only" value={item.rating} readOnly />
                </div> */}
                {/* </Box> */}
                <Text my="15px">{item.desc}</Text>
                <Box
                  pt="10px"
                  display={"flex"}
                  // justifyContent={"center"}
                  alignItems={"center"}
                  paddingTop={"10px"}
                >
                  <Box boxSize={"50px"} borderRadius={"50%"}>
                    <Image
                      src={item.avatar}
                      alt="image"
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                  <Text fontWeight={"bold"} ml="10px">
                    {item.user}
                  </Text>
                </Box>
              </Box>
            ))}

            {/* </Slider> */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Testimonials;
