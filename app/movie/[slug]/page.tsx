import { Image, Tag } from '@/components/CoreChakra/Visual';
import { HStack, Stack } from '@/components/CoreChakra/Structure';
import { Heading, Text, Link } from '@/components/CoreChakra/Typography';
import { GET } from '@/utils/ApiRequestProvider';
import { notFound } from 'next/navigation';
import Rating from '@/components/Rating';
import Head from 'next/head';
import type { Metadata } from 'next';

// export const metadata: Metadata = {
//     title: 'The Movie Encyclopedia',
//     description: 'The Movie Encyclopedia - Your ultimate guide to all things movies! From classics to modern blockbusters, discover in-depth information, reviews, ratings, and more. Join our community of movie lovers today and explore the world of cinema like never before!',
// }

export async function generateMetadata({ params }: any) {
    const res = await getMovie(params.slug) //deduped!

    if (!res) {
        return {
            title: 'Movie Not Found'
        }
    }

    return {
        title: `${res.title} | The Movie Encyclopedia`,
        description: `The Movie Encyclopedia presents ${res.overview}`
    }
}

async function getMovie(slug: number) {
    const res = await GET(`/movie/${slug}`);
    return res;
}

export default async function SingleMoviePage({ params }: { params: any }) {
    const res = await getMovie(params.slug);

    if (!res) notFound();

    return (
        <Stack w={'full'} py={8} px={8} h={'70vh'} align={'center'} justify={'center'}>
            <Stack
                direction={'row'}
                spacing={6}
                justify={'center'}
                align={'center'}
            >
                <Image
                    width={1000}
                    height={1000}
                    src={`https://image.tmdb.org/t/p/original${res.poster_path}`}
                    alt={`Picture of ${res.title}`}
                    w={'sm'}
                    h={'lg'}
                    objectFit='cover'
                    rounded={'lg'}
                />
                <Stack
                    py={4}
                    spacing={6}
                >
                    <Stack spacing={2}>
                        <Heading>{res.title}</Heading>
                        <Text opacity={0.8}>{res.overview}</Text>
                        <Text>
                            <strong>Release Date: </strong> {res.release_date}
                        </Text>
                        <Text>
                            <strong>Runtime: </strong> {res.runtime}mins
                        </Text>
                        <Text>
                            <strong>Budget: </strong> ${Intl.NumberFormat("en-US").format(res.budget)}
                        </Text>
                        <Text>
                            <strong>Revenue: </strong> ${Intl.NumberFormat("en-US").format(res.revenue)}
                        </Text>
                        <HStack spacing={4} pb={4}>
                            <Text fontWeight={'bold'}>Genres: </Text>
                            {res.genres.map((genre: any, i: number) => (
                                <Tag size={'lg'} key={i} variant='solid' colorScheme='messenger'>
                                    {genre.name}
                                </Tag>
                            ))}
                        </HStack>
                    </Stack>
                    <Text>
                        <strong>Visit the official site: </strong> <Link href={res.homepage} color={'blue.400'} target='_blank'>{res.original_title}</Link>
                    </Text>
                    <HStack spacing={4} pb={4}>
                        <Text fontWeight={'bold'}>Rating: </Text>
                        <Rating rating={res.vote_average} numReviews={res.vote_count} />
                    </HStack>
                </Stack>
            </Stack>
        </Stack>
    )
}