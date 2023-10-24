import React from 'react'
import { Movie } from '../models/Movie'

interface MovieListProps {
    movies: Movie[]
}

const MovieList = ({ movies }: MovieListProps) => {
    return (
        <div>
            {
                movies.map((movie: Movie) => (
                    <li key={movie.id}>
                        <h3>{movie.title}</h3>
                        <p>{movie.year}</p>
                        <img src={movie.poster} alt={movie.title} />
                    </li>
                ))
            }
        </div>
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