import { useQuery } from "@tanstack/react-query";

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface MovieApiResponse {
  Search: Movie[];
  totalResults: number;
}

const fetchMovies = async ({ search, page }: {
  search: string;
  page: number;
}) => {
  const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=${search}&page=${page}`);
  return response.json() as Promise<MovieApiResponse>;
}

export const useMovies = ({
  search,
  page,
}: {
  search: string;
  page: number;
}) => {
  return useQuery(['movies', search, page], () => fetchMovies({ search, page }));
}
