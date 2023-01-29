import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack >
      <Image src={imageSrc} />
      <Heading as="h3">{title}</Heading>
      <Text>{description}</Text>
    </VStack>
  );
};

export default Card;
