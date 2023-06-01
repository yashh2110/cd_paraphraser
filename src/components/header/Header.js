import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import ai from "../../assets/svg/ai_icon.svg";
import styles from "./header.module.css";
import Link from "next/link";

import { Icon } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
function Header({ logo, menu }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      //   m={2}
      py={5}
      px={["20px", "40px", "40px", 130]}
      gap={3}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      borderBottom="1px"
      borderBottomColor="var(--border-color)"
    >
      <Box w={["200px", "220px", "250px"]}>
        <Image src={logo} alt="paraphasingtool.app" />
      </Box>
      <Box display="flex" gap={10} alignItems="center" hideBelow="md">
        {menu?.map((item) => (
          <Link key={item.title} href={item.link}>
            <Box display="flex" gap={2} alignItems="center">
              <Box w="22px" h="22px">
                <Image src={item.icon} alt="ai" />
              </Box>
              <Text fontWeight="600">{item.title}</Text>
            </Box>
          </Link>
        ))}
      </Box>
      <Icon as={FiMenu} onClick={onOpen} hideFrom="md" boxSize={5} />
      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            {menu?.map((item) => (
              <Link key={item.title} href={item.link}>
                <Box display="flex" gap={2} my={6} alignItems="center">
                  <Box w="22px" h="22px">
                    <Image src={item.icon} alt="ai" />
                  </Box>
                  <Text fontWeight="600">{item.title}</Text>
                </Box>
              </Link>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Header;
