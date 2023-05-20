import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import styles from "./header.module.css";
function Header({ logo, menu }) {
  return (
    <Box
      m={2}
      py={5}
      px={["20px", 50, 100]}
      gap={3}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box w={["200px", "220px", "250px"]}>
        <Image src={logo} alt="contentdectector.ai" />
      </Box>
      <Box>
        <Text>asdas</Text>
      </Box>
    </Box>
  );
}

export default Header;
