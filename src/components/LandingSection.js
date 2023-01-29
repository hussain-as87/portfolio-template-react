import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Hussain!";
const bio1 = "A full-stack developer";
const bio2 = "specialized in Node.js & React.js";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={8}>
      <Avatar size="2xl" name="Hussain" src="../images/Untitled design3.png" />
      <Heading as="h1" fontSize="2xl">
        {greeting}
      </Heading>
      <Heading as="h3" fontSize="lg">
        {bio1} {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
