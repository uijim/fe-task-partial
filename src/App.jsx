import { useMemo } from 'react';

import { Header, Movie } from './components';
import { useGenres, useMovies } from './hooks';
import { decorateMoviesWithGenres } from './helpers';

import './styles.css'; // have a look at this file and feel free to use the classes

export default function App() {
  const { data: movies, loading: moviesLoading } = useMovies();
  const { data: genres, loading: genresLoading } = useGenres();

  const isLoading = moviesLoading || genresLoading;
  const moviesDecorated = useMemo(() =>
    decorateMoviesWithGenres(movies, genres), [movies, genres]);

  return (
    <div className="container">
      <Header text="Now playing" icon />
      {isLoading && <p>Loading...</p>}

      {!isLoading && (
        <div className="movies">
          <div>Showing {movies.length} movie{movies.length === 1 ? '' : 's'}</div>
          {!!moviesDecorated.length && moviesDecorated.map(movie => (
            <Movie
              key={movie.id}
              title={movie.title}
              imagePath={movie.poster_path}
              description={movie.overview}
              rating={movie.vote_average}
              popularity={movie.popularity}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}
