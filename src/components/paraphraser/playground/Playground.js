import React, { useState } from "react";
import styles from "./playground.module.css";
import { Box } from "@chakra-ui/react";
import { EditorState } from "draft-js";
import Toolbar from "./Toolbar";
import Draft from "@/components/editor/Editor";

function Playground() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [content, setContent] = useState(null);
  return (
    <Box mt={["20px"]}>
      <Box
        w={["100%", "100%", "100%", "75%"]}
        borderRadius={"10px"}
        boxShadow="base"
        my={1}
      >
        <Toolbar />
        <Box
          display="flex"
          justifyContent={"center"}
          alignItems={"flex-start"}
          flexWrap={"wrap"}
        >
          <Box minH={["30vh", "60vh"]} p={4} width={["100%", "100%", "50%"]}>
            <Draft
              setEditorState={setEditorState}
              editorState={editorState}
              setContent={setContent}
              stripStyles={true}
            />
          </Box>
          <Box
            minH={["30vh", "60vh"]}
            p={4}
            width={["100%", "100%", "50%"]}
            backgroundColor={"var(--secondary-background-color)"}
          >
            {/* <Draft
              setEditorState={setEditorState}
              editorState={editorState}
              setContent={setContent}
              stripStyles={true}
            /> */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Playground;
