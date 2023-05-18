"use client"
import { Heading, Text, Button, Stack } from '@chakra-ui/react';
import Link from 'next/link';

export default function NotFound() {
    return (
        <Stack align={'center'} justify={'center'} h={'70vh'}>
            <Heading
                display="inline-block"
                as="h2"
                size="2xl"
                bgGradient="linear(to-r, red.400, red.600)"
                backgroundClip="text">
                404
            </Heading>
            <Text fontSize="18px" mt={3} mb={2}>
                Page Not Found
            </Text>
            <Text color={'gray.500'} mb={6}>
                The page you&apos;re looking for does not seem to exist
            </Text>

            <Button
                as={Link}
                href={'/'}
                colorScheme="red"
                bgGradient="linear(to-r, red.400, red.500, red.600)"
                color="white"
                variant="solid">
                Go to Home
            </Button>
        </Stack>
    );
}