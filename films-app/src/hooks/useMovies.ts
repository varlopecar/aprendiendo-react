import { useRef, useState } from "react";
import { getMovies } from "../services/getMovies";
import { Movie } from "../models/Movie";

interface useMoviesProps {
  search: string;
}

const useMovies = ({ search }: useMoviesProps) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const previousSearch = useRef<string>(search);

  const searchMovies = async () => {
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

  return {
    movies,
    searchMovies,
    error,
    loading,
  };
};

export default useMovies;
