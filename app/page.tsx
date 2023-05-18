import MovieCard from "@/components/Card/MovieCard";
import { SimpleGrid, Stack } from "@/components/CoreChakra/Structure";
import { Heading } from "@/components/CoreChakra/Typography";
import { GET } from "@/utils/ApiRequestProvider";

export default async function Home() {
  const data = await GET('/movie/popular');
  return (
    <Stack w={'full'} align={'center'}>
      <Heading>Popular Movies</Heading>
      <SimpleGrid
        py={6}
        w={'full'}
        spacing={10}
        alignItems={'center'}
        justifyContent={'center'}
        columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
      >
        {data.results.map((result: any, i: number) => (
          <MovieCard
            id={result.id}
            imageURL={result.poster_path}
            name={result.title}
            rating={result.vote_average}
            numReviews={result.vote_count}
            key={i}
          />
        ))}
      </SimpleGrid>
    </Stack>
  )
}
