"use client"
import { Box, Stack, Flex, Heading, Text, Button } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import Link from 'next/link';

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    return (
        <Stack align={'center'} justify={'center'} h={'70vh'}>
            <Box display="inline-block">
                <Flex
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    bg={'red.500'}
                    rounded={'50px'}
                    w={'55px'}
                    h={'55px'}
                    textAlign="center">
                    <CloseIcon boxSize={'20px'} color={'white'} />
                </Flex>
            </Box>
            <Heading as="h2" size="xl" mt={6} mb={2}>
                Whoopsie! Something Went Wrong
            </Heading>
            <Text color={'gray.500'}>
                An unexpected error might have occured while proceeding your request. Please try again later.
            </Text>
            <Button
                colorScheme="red"
                bgGradient="linear(to-r, red.400, red.500, red.600)"
                color="white"
                variant="solid"
                onClick={() => reset()}
            >
                Try again
            </Button>
        </Stack>
    );
}