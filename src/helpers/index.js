export const decorateMoviesWithGenres = (movies = [], genres = []) => {
  if (!genres.length) return movies;

  return movies.reduce((movies, movie) => {
    const { genre_ids = [] } = movie;
    const movieGenres = genre_ids.map(id =>
      genres.find(genre => genre.id === id)
    );

    return [
      ...movies,
      {
        ...movie,
        genres: movieGenres
      }
    ];
  }, []);
};