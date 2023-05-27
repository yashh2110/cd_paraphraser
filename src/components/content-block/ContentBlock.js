import { Box, Text } from "@chakra-ui/react";
import React from "react";

function ContentBlock({ title, content, theme }) {
  return (
    <Box
      //   minH="60vh"
      backgroundColor={
        theme !== "secondary"
          ? "var(--primary-background-color)"
          : "var(--secondary-background-color)"
      }
      display="flex"
      justifyContent="center"
      alignItems="center"
      //   flexDirection={"row"}
      w={"100vw"}
      flexWrap={"wrap"}
      py={10}
    >
      <Box position={"relative"} w={["90%", "90%", "85%"]}>
        <Box w={["100%", "100%", "80%"]}>
          <Text
            fontSize={["22px", "28px"]}
            fontWeight={800}
            textAlign={["center", "center", "left"]}
          >
            {title}
          </Text>
          <Text mt={"20px"} textAlign={["center", "center", "left"]}>
            {content}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default ContentBlock;
