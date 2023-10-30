const API_KEY = "a88edc9b";
const BASE_URL = "http://www.omdbapi.com/?apikey=";

export const getMovies = async (search: string) => {
  if (search === "") return null;
  try {
    const response = await fetch(`${BASE_URL}${API_KEY}&s=${search}`);
    const data = await response.json();

    const movies = data.Search;

    return movies.map((movie: any) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    }));
  } catch (error) {
    throw new Error('Error fetching movies')
  }
};
