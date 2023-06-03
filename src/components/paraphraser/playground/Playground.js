import React, { useEffect, useRef, useState } from "react";
import styles from "./playground.module.css";
import { Box, Button, Icon, IconButton, Text } from "@chakra-ui/react";
import { ContentState, EditorState } from "draft-js";
import Toolbar from "./Toolbar";
import Draft from "@/components/editor/Editor";
import { paraphraseService } from "../../../services/paraphraser";
import { toast } from "react-hot-toast";
import {
  AiOutlineShareAlt,
  AiOutlineCopy,
  AiOutlineDelete,
} from "react-icons/ai";

function Playground() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [content, setContent] = useState(null);
  const [wordCount, setWordCount] = useState(0);
  const [rephraseLoading, setRephraseLoading] = useState(false);
  const [rephrasedContent, setRephrasedContent] = useState(null);
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef?.current) {
      editorRef.current.focus();
    }
  }, []);

  useEffect(() => {
    const count = getWordCount(content);
    setWordCount(count);
  }, [content]);

  const getWordCount = () => {
    console.log("Asdas");
    const words = content?.match(/\b[-?(\w+)?]+\b/gi);
    if (words) return words.length;
    return 0;
    // return replace(/\n/g, " ").split(" ").length - 1;
  };

  const rephrase = async () => {
    setRephraseLoading(true);
    try {
      const res = await paraphraseService({ content });
      console.log(res.data);
      setRephrasedContent(res?.data?.paraPhrase);
      setRephraseLoading(false);
    } catch (error) {
      console.log(error);
      setRephraseLoading(false);
    }
  };
  const handleClear = () => {
    const editorstate = EditorState.push(
      editorState,
      ContentState.createFromText(""),
      "remove-range"
    );
    editorRef.current.focus();
    setEditorState(editorstate);
    setContent("");
    setRephrasedContent(null);
  };
  //   handling copy
  const handleCopy = () => {
    if (content.length > 1) {
      navigator.clipboard.writeText(rephrasedContent);
      toast.success("Copied rephrased content to clipboard", {
        duration: 1500,
      });
    } else {
      toast.error("No content to copy", { duration: 1300 });
    }
  };
  return (
    <Box mt={["20px"]}>
      <Box w={["100%", "100%", "100%", "75%"]}>
        <Box
          w="100%"
          borderRadius={"10px"}
          boxShadow="base"
          my={1}
          overflow={"hidden"}
        >
          <Toolbar handleDelete={handleClear} handleCopy={handleCopy} />
          <Box
            display="flex"
            justifyContent={"center"}
            alignItems={"flex-start"}
            flexWrap={"wrap"}
            position={"relative"}
            h={"100%"}
            backgroundColor={"var(--secondary-background-color)"}
          >
            <Box
              h="100%"
              py={3}
              pb={["5vh"]}
              px={4}
              position={"relative"}
              width={["100%", "100%", "50%"]}
              backgroundColor={"var(--primary-background-color)"}
            >
              <Box
                h="100%"
                minH={["35vh", "50vh"]}
                cursor={"text"}
                onClick={() => {
                  editorRef?.current?.focus();
                }}
              >
                <Draft
                  setEditorState={setEditorState}
                  editorState={editorState}
                  setContent={setContent}
                  ref={editorRef}
                  stripStyles={true}
                />
              </Box>
              <Box
                h={"5vh"}
                display={["flex", "flex", "none"]}
                justifyContent={"space-between"}
                alignItems={"center"}
                position={"absolute"}
                bottom={"0px"}
                w={["100%", "100%", "100%"]}
                left={0}
                my={1}
              >
                <Text
                  fontSize={"15px"}
                  color={"#585858"}
                  fontWeight={500}
                  pl={4}
                >
                  Word count: {wordCount}
                </Text>
                <IconButton
                  variant={"ghost"}
                  onClick={handleClear}
                  mr={2}
                  icon={<Icon as={AiOutlineDelete} boxSize={5} />}
                />
              </Box>
            </Box>
            <Box
              position={"relative"}
              py={3}
              pb={["5vh"]}
              px={4}
              h={"100%"}
              width={["100%", "100%", "50%"]}
              backgroundColor={"var(--secondary-background-color)"}
            >
              <Box minH={["35vh", "50vh"]} h={"100%"}>
                {rephrasedContent && <Text>{rephrasedContent}</Text>}

                <Box
                  h={"5vh"}
                  display={["flex", "flex", "none"]}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  position={"absolute"}
                  bottom={"0px"}
                  w={["100%", "100%", "100%"]}
                  left={0}
                  my={1}
                >
                  <Text
                    fontSize={"15px"}
                    color={"#585858"}
                    fontWeight={500}
                    pl={4}
                  >
                    Word count: {}
                  </Text>
                  <IconButton
                    variant={"ghost"}
                    onClick={handleCopy}
                    mr={2}
                    icon={<Icon as={AiOutlineCopy} boxSize={5} />}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            justifyContent={"center"}
            alignItems={"flex-start"}
            flexWrap={"wrap"}
            position={"relative"}
            display={["none", "none", "flex"]}
            h={"100%"}
            backgroundColor={"var(--secondary-background-color)"}
          >
            <Box
              h={"5vh"}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              w={["100%", "100%", "50%"]}
              left={0}
              // my={1}
              backgroundColor={"var(--primary-background-color)"}
            >
              <Text fontSize={"15px"} color={"#585858"} fontWeight={500} pl={4}>
                Word count: {wordCount}
              </Text>
              <IconButton
                variant={"ghost"}
                onClick={handleClear}
                mr={2}
                icon={<Icon as={AiOutlineDelete} boxSize={5} />}
              />
            </Box>
            <Box
              h={"5vh"}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              w={["100%", "100%", "50%"]}
              left={0}
            >
              <Text fontSize={"15px"} color={"#585858"} fontWeight={500} pl={4}>
                Word count: {}
              </Text>
              <IconButton
                variant={"ghost"}
                onClick={handleCopy}
                mr={2}
                icon={<Icon as={AiOutlineCopy} boxSize={5} />}
              />
            </Box>
          </Box>
        </Box>
        <Button
          mr={["auto", "auto", "0"]}
          ml={["auto"]}
          my={4}
          w={["150px"]}
          display={"flex"}
          color={"var(--white)"}
          isLoading={rephraseLoading}
          onClick={rephrase}
          backgroundColor="var(--primary-color)"
          spinnerPlacement="start"
          loadingText="Loading"
          _hover={{
            backgroundColor: "var(--hover-color)",
          }}
          _active={{
            transform: "scale(0.98)",
          }}
        >
          Rephrase
        </Button>
      </Box>
    </Box>
  );
}

export default Playground;
