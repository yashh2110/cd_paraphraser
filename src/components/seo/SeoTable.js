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
      <Box position={"relative"} w={["90%", "90%", "85%"]}>
        <Text
          fontSize={["22px", "28px"]}
          fontWeight={800}
          textAlign={["center", "center", "left"]}
        >
          Why ContentDectecor.AI
        </Text>
        <TableContainer w={["100%", "100%", "60%"]} mt="20px">
          <Table variant="simple">
            {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}

            <Tbody>
              <Tr>
                <Td border={"1px"} borderColor={"var(--border-color)"}>
                  🔤 No of Languages
                </Td>
                <Td border={"1px"} borderColor={"var(--border-color)"}>
                  50+
                </Td>
              </Tr>
              <Tr>
                <Td border={"1px"} borderColor={"var(--border-color)"}>
                  🔁 Check Counts
                </Td>
                <Td border={"1px"} borderColor={"var(--border-color)"}>
                  Unlimited
                </Td>
              </Tr>
              <Tr>
                <Td border={"1px"} borderColor={"var(--border-color)"}>
                  ⌛ Text Length{" "}
                </Td>
                <Td border={"1px"} borderColor={"var(--border-color)"}>
                  Unlimited
                </Td>
              </Tr>
              <Tr>
                <Td border={"1px"} borderColor={"var(--border-color)"}>
                  🆓 Free or Paid
                </Td>
                <Td border={"1px"} borderColor={"var(--border-color)"}>
                  Free
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
