// Hmm... looks like an inexperienced teammate has made some mistakes here.
// Please explain - as though to your teammate - _what_ is wrong with this function and implement a working solution

let filteredMovies = [];

export const useFilteredMovies = (movies, genres, rating) => {
  for (let movie in movies) {
    if (genres.indexOf(movie.genre_id) > 0 && movie.vote_average > rating) {
      filteredMovies.push(movie);
    }
  }

  return filteredMovies;
};
