import "@/styles/globals.css";
import { theme } from "@/themes/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
});
export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-rubik: ${inter.style.fontFamily};
          }
        `}
      </style>
      <CacheProvider>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </CacheProvider>
    </>
  );
}
