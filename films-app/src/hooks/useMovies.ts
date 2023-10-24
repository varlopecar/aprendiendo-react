import response from '../mocks/with-results.json';
import noResults from '../mocks/noResults.json';

const useMovies = () => {
  const movies = response.Search;
  const mappedMovies = movies.map((movie: any) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
  }));

  return { movies: mappedMovies }
};

export default useMovies;
