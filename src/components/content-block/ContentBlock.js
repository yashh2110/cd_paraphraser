import { Box, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";

function ContentBlock({
  title,
  content,
  theme,
  titleFormat,
  titleFontSize,
  listItems,
}) {
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
      <Box position={"relative"} w={["90%", "90%", "81%"]}>
        <Box w={["100%", "100%", "80%"]}>
          <Heading
            as={titleFormat}
            fontSize={titleFontSize || ["22px", "28px"]}
            fontWeight={800}
            textAlign={["center", "center", "left"]}
          >
            {title}
          </Heading>
          {content?.map((item) => (
            <Text mt={"20px"} textAlign={["center", "center", "left"]}>
              {item}
            </Text>
          ))}
          <UnorderedList mt={"20px"}>
            {listItems?.map((item) => (
              <ListItem mb={"15px"}>{item}</ListItem>
            ))}
          </UnorderedList>
        </Box>
      </Box>
    </Box>
  );
}

export default ContentBlock;
