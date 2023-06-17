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
function Toolbar({ handleDelete, handleCopy, onChange, mode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const modeRef = useRef(null);
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      borderBottom="1px"
      borderBottomColor="#1a1a1a26"
      py={2.5}
      px={4}
    >
      <Select
        placeholder="Mode"
        hideFrom={"md"}
        w={"35%"}
        fontWeight={500}
        value={mode}
        onChange={(item) => {
          onChange(item.target.value);
        }}
      >
        <option value="standard">Standard</option>
        <option value="human">Human</option>
      </Select>
      <Box
        display="flex"
        alignItems="center"
        fontSize="14.5px"
        fontWeight="500"
        hideBelow="md"
      >
        <Text fontWeight="600" mr={2}>
          Mode:
        </Text>
        <Button
          colorScheme="teal"
          variant="ghost"
          onClick={() => onChange("standard")}
        >
          <Text
            color={
              mode === "standard"
                ? "var(--primary-color)"
                : "var(--secondary-text-color)"
            }
            cursor="pointer"
          >
            Standard
          </Text>
        </Button>
        <Button
          colorScheme="teal"
          variant="ghost"
          onClick={() => onChange("human")}
        >
          <Text
            color={
              mode === "human"
                ? "var(--primary-color)"
                : "var(--secondary-text-color)"
            }
            cursor="pointer"
          >
            Human
          </Text>
        </Button>
      </Box>
      <Box display="flex" alignItems="center" gap={3}>
        {/* <IconButton
          variant={"ghost"}
          icon={<Icon as={AiOutlineShareAlt} boxSize={5} />}
        />
        <IconButton
          variant={"ghost"}
          onClick={handleCopy}
          icon={<Icon as={AiOutlineCopy} boxSize={5} />}
        />
        <IconButton
          variant={"ghost"}
          onClick={handleDelete}
          icon={<Icon as={AiOutlineDelete} boxSize={5} />}
        /> */}
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
