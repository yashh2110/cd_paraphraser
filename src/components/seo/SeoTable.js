import {
  Box,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

function SeoTable() {
  return (
    <Box
      //   minH="60vh"
      backgroundColor="var(--primary-background-color)"
      display="flex"
      justifyContent="center"
      alignItems="center"
      //   flexDirection={"row"}
      w={"100vw"}
      flexWrap={"wrap"}
      py={10}
    >
      <Box position={"relative"} w={["90%", "90%", "81%"]}>
        <Text
          fontSize={["22px", "28px"]}
          fontWeight={800}
          textAlign={["center", "center", "left"]}
        >
          Why Paraphrasing Tool
        </Text>
        <TableContainer w={["100%", "100%", "60%"]} mt="20px">
          <Table variant="simple">
            {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}

            <Tbody>
              <Tr w={["50vw", "50%", "auto"]}>
                <Td border={"1px"} borderColor={"var(--border-color)"}>
                  🔁 No Limits
                </Td>
                <Td border={"1px"} borderColor={"var(--border-color)"}>
                  Unlimited Usage with no limitations
                </Td>
              </Tr>
              <Tr>
                <Td border={"1px"} borderColor={"var(--border-color)"}>
                  🔤 Instant Paraphrase
                </Td>
                <Td border={"1px"} borderColor={"var(--border-color)"}>
                  Paraphrase your text instantly
                </Td>
              </Tr>
              <Tr>
                <Td border={"1px"} borderColor={"var(--border-color)"}>
                  👤 No Login
                </Td>
                <Td border={"1px"} borderColor={"var(--border-color)"}>
                  No Registration or Signup required
                </Td>
              </Tr>
              <Tr>
                <Td border={"1px"} borderColor={"var(--border-color)"}>
                  🆓 100% Free
                </Td>
                <Td border={"1px"} borderColor={"var(--border-color)"}>
                  Free and no payment required
                </Td>
              </Tr>
            </Tbody>
            {/* <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot> */}
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default SeoTable;
