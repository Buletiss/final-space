import { Box } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import NavBar from '../components/Navbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Box
        bg="linear-gradient(90deg, rgba(15,32,39,1) 0%, rgba(44,83,100,1) 100%)"
        h="100vh"
      >
        <NavBar />
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </Box>
    </>
  );
}
