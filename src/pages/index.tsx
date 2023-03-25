import {
  Box,
  Button,
  FormControl,
  Heading,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { type NextPage } from "next";
import { useState } from "react";

import PageWrapper from "~/src/components/Layout/PageWrapper";
import { trpc } from "~/src/utils/api";

const Home: NextPage = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const hello = trpc.example.hello.useMutation();

  const handleSubmit = async () => {
    hello.mutate(
      { name: name },
      {
        onSuccess(data) {
          setMessage(data.message);
        },
      },
    );
  };

  return (
    <PageWrapper title="Meratus Dev">
      <VStack pt="5">
        <Heading>Meratus Dev</Heading>
        <FormControl w="fit-content">
          <HStack pt="3">
            <Input
              placeholder="Input Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <Button onClick={handleSubmit} colorScheme="blue" w="36">
              Submit
            </Button>
          </HStack>
        </FormControl>

        <Box>
          <Text>{message}</Text>
        </Box>
      </VStack>
    </PageWrapper>
  );
};

export default Home;
