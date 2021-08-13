import { Header, Movie } from './components';
import { useMovies } from './hooks';

import './styles.css'; // have a look at this file and feel free to use the classes

export default function App() {
  const { data, loading } = useMovies();

  return (
    <div className="container">
      <Header text="Now playing" icon />
      {loading && <p>Loading...</p>}

      {!loading && (
        <div className="movies">
          <div>Showing {data.length} movie{data.length === 1 ? '' : 's'}</div>
          {!!data.length && data.map(movie => (
            <Movie
              key={movie.id}
              title={movie.title}
              description={movie.overview}
              rating={movie.vote_average}
              popularity={movie.popularity}
            />
          ))}
        </div>
      )}
    </div>
  );
}
