import { Movie } from '../models/Movie'
import './movielist.css'

interface MovieListProps {
    movies: Movie[]
}

const MovieList = ({ movies }: MovieListProps) => {
    return (
        <ul className='movies-list'>
            {
                movies.map((movie: Movie) => {
                    return (
                        <li key={movie.id} className='movie'>
                            <img src={movie.poster} alt={movie.title} />
                            <div className='movie-info'>
                                <h3>{movie.title}</h3>
                                <span>{movie.year}</span>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}

const NoMovies = () => {
    return (
        <div>
            <p>No movies found</p>
        </div>
    )
}

export const Movies = ({ movies }: MovieListProps) => {
    const hasMovies = movies?.length > 0;

    return (
        <div>
            {
                hasMovies ? (
                    <MovieList movies={movies} />
                ) : (
                    <NoMovies />
                )
            }
        </div>
    )
}