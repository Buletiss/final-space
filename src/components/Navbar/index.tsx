import { Flex, Text, Image, Box } from '@chakra-ui/react';

export default function NavBar() {
  return (
    <>
      <Flex
        h="60px"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex alignItems="center">
          <Image
            src="mooncake.png"
            alt="mooncake"
            h="60px"
            w="90px"
          />
          <Text fontSize="25px" color="white">
            Final Space
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
