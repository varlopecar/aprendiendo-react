import response from './mocks/with-results.json';
import { Movies } from './components/MovieList';
import useMovies from './hooks/useMovies';

function App() {
  const { movies : mappedMovies } = useMovies(response);

  return (
    <div>
      <header>
        <h1>Film searcher</h1>
        <form className="form">
          <input type="text" className="input" placeholder="Spiderman, Ironman, etc" />
          <button className="button">Search</button>
        </form>
      </header>
      <main>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  )
}

export default App
