import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <Box bg="white" color="black" borderRadius='lg'>
      <VStack>
        <Image src={imageSrc} borderRadius='lg' width="100%"/>
        <VStack p={4} spacing={4} alignItems="left">
          <Heading size="md">{title}</Heading>
          <Text color="gray">{description}</Text>
          <HStack>
            <Text fontWeight="bold">See more</Text>
            <FontAwesomeIcon icon={faArrowRight} size="1x"/>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Card;
