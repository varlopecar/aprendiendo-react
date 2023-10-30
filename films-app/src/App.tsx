import { MouseEvent, ChangeEvent } from 'react';
import { Movies } from './components/MovieList';
import useMovies from './hooks/useMovies';
import useSearch from './hooks/useSearch';

function App() {
  const { search, setSearch, error : searchError } = useSearch();
  const { movies, searchMovies, error, loading } = useMovies({ search });

  const handleSubmit = (event: MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchMovies();
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }
 
  return (
    <div>
      <header>
        <h1>Film searcher</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input name='query' type="text" className="input" placeholder="Spiderman, Ironman, etc" value={search} onChange={handleChange} />
          <button className="button">Search</button>
        </form>
        {searchError ? <p style={{ color: 'red' }}>{searchError}</p> : null}
      </header>
      <main>
        <Movies movies={movies} />
        {loading ? <p>Loading...</p> : null}
        {error ? <p style={{ color: 'red' }}>{error.message}</p> : null}
      </main>
    </div>
  )
}

export default App
