import {
  Box,
  Button,
  Icon,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import {
  AiOutlineShareAlt,
  AiOutlineCopy,
  AiOutlineDelete,
} from "react-icons/ai";
function Toolbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const modeRef = useRef(null);
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      borderBottom="1px"
      borderBottomColor="#1a1a1a26"
      p={1}
      px={4}
    >
      <Select placeholder="Mode" hideFrom={"md"} w={"35%"} fontWeight={500}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
      <Box
        display="flex"
        alignItems="center"
        gap={6}
        fontSize="14.5px"
        fontWeight="500"
        hideBelow="md"
      >
        <Text fontWeight="600">Mode:</Text>
        <Text color="var(--secondary-text-color)" cursor="pointer">
          Standard
        </Text>
        <Text color="var(--primary-color)" cursor="pointer">
          Simplify
        </Text>
        <Text color="var(--secondary-text-color)" cursor="pointer">
          Formal
        </Text>
        <Text color="var(--secondary-text-color)" cursor="pointer">
          Summarise
        </Text>
      </Box>
      <Box display="flex" alignItems="center" gap={3}>
        <IconButton
          variant={"ghost"}
          icon={<Icon as={AiOutlineShareAlt} boxSize={5} />}
        />
        <IconButton
          variant={"ghost"}
          icon={<Icon as={AiOutlineCopy} boxSize={5} />}
        />
        <IconButton
          variant={"ghost"}
          icon={<Icon as={AiOutlineDelete} boxSize={5} />}
        />
      </Box>
      {/* <Modal finalFocusRef={modeRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
    </Box>
  );
}

export default Toolbar;
