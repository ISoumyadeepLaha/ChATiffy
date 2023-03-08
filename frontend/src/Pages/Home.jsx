import React from "react";
import {
  Container,
  Box,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import LogIn from "../components/Authentication/LogIn";
import Register from "../components/Authentication/Register";

const Home = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        padding={4}
        bg="white"
        w="100%"
        m="40px 0px 15px 0px"
        borderRadius="10px"
        borderWidth="1px"
        boxShadow="2xl"
      >
        <Text textAlign="center" fontSize="3xl" fontFamily="Montserrat">
          ChATiffy
        </Text>
      </Box>
      <Box
        d="flex"
        justifyContent="center"
        padding={4}
        bg="white"
        w="100%"
        m="0px 0px 15px 0px"
        borderRadius="10px"
        borderWidth="1px"
        boxShadow="2xl"
      >
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab color="black" fontSize="xl" fontFamily="Montserrat">
              Log In
            </Tab>
            <Tab color="black" fontSize="xl" fontFamily="Montserrat">
              Register
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <LogIn />
            </TabPanel>
            <TabPanel>
              <Register />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Home;
