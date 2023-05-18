"use client"
import {
    Flex,
    Box,
    useColorModeValue,
} from '@chakra-ui/react';
import { Image } from '@chakra-ui/next-js';
import Link from 'next/link';
import Rating from '../Rating';


export interface MovieCard {
    id: number;
    imageURL: string,
    name: string,
    rating: number,
    numReviews: number
}

function MovieCard(props: MovieCard) {
    return (
        <Box
            bg={useColorModeValue('white', 'gray.800')}
            maxW="sm"
            borderWidth="1px"
            rounded="lg"
            shadow="lg"
            position="relative"
            _hover={{ cursor: 'pointer', boxShadow: useColorModeValue('2xl', 'dark-lg'), transition: '0.5s ease-in' }}
            as={Link}
            href={`/movie/${props.id}`}
        >
            <Image
                width={500}
                height={500}
                src={`https://image.tmdb.org/t/p/original${props.imageURL}`}
                alt={`Picture of ${props.name}`}
                roundedTop="lg"
                w={'md'}
                h={'md'}
                objectFit='cover'
            />

            <Box p="6">
                <Flex mt="1" justifyContent="space-between" alignContent="center">
                    <Box
                        fontSize="2xl"
                        fontWeight="semibold"
                        as="h4"
                        lineHeight="tight"
                        isTruncated>
                        {props.name}
                    </Box>
                </Flex>

                <Flex justifyContent="space-between" alignContent="center">
                    <Rating rating={props.rating} numReviews={props.numReviews} />
                </Flex>
            </Box>
        </Box>
    );
}

export default MovieCard;
