import { useRef, useState, useMemo } from "react";
import { getMovies } from "../services/getMovies";
import { Movie } from "../models/Movie";

interface useMoviesProps {
  search: string;
  sort: boolean;
}

const useMovies = ({ search, sort }: useMoviesProps) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const previousSearch = useRef<string>(search);

  const searchMovies = useMemo(() => {
    return async ({ search }: { search: string }) => {
      if (search === previousSearch.current) return;
      try {
        setLoading(true);
        const movies = await getMovies(search);
        previousSearch.current = search;
        setMovies(movies);
        setLoading(false);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error);
        }
        setLoading(false);
      }
    };
  }, []);

  const sortedMovies = useMemo(() => {
    console.log("sort");
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
  }, [movies, sort]);

  return {
    movies: sortedMovies,
    searchMovies,
    error,
    loading,
  };
};

export default useMovies;
