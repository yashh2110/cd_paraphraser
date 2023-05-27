// import { testimonial_settings } from "@/data/home";
import Image from "next/image";
import React from "react";
import circle from "../../assets/svg/circle-creative.svg";
import square from "../../assets/svg/square-creative.svg";
import { Box, Card, Text } from "@chakra-ui/react";
import { testimonials } from "@/data/common";
import StarIcon from "@mui/icons-material/Star";
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
      alignItems="center"
      //   flexDirection={"row"}
      w={"100vw"}
      flexWrap={"wrap"}
      py={10}
    >
      <Box position={"relative"} w={["90%", "90%", "85%"]}>
        <Text
          fontSize={["22px", "28px"]}
          fontWeight={800}
          textAlign={["center", "center", "left"]}
        >
          Testimonials
        </Text>
        <Box position={"relative"} w="100%" mt="20px">
          <Box
            position={"absolute"}
            left={"0"}
            top={"0"}
            zIndex={0}
            w={"100px"}
            h={"100px"}
          >
            <Image src={square} alt="cd" />
          </Box>
          <Box
            position={"absolute"}
            right={"0"}
            bottom={"0"}
            zIndex={0}
            w={"100px"}
            h={"100px"}
          >
            <Image src={circle} alt="cd" />
          </Box>
          <Box
            position={"relative"}
            // w="100%"
            display={"flex"}
            flexDirection={"row"}
            alignItems={"flex-start"}
            justifyContent={"center"}
            flexWrap={"wrap"}
            // my={"25px"}
          >
            {testimonials.map((item) => (
              <Box
                boxShadow="sm"
                position={"relative"}
                w={["99%", "99%", "30%"]}
                bg={"var(--white)"}
                borderRadius={10}
                m="10px"
                p="20px"
                maxW="400px"
                h={"auto"}
                key={item.id}
              >
                <Box display={"flex"} my="10px">
                  <StarIcon style={{ color: "#FDCC0D" }} />
                  <StarIcon style={{ color: "#FDCC0D" }} />
                  <StarIcon style={{ color: "#FDCC0D" }} />
                  <StarIcon style={{ color: "#FDCC0D" }} />
                  <StarIcon style={{ color: "#dddddd" }} />
                </Box>
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
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Testimonials;
