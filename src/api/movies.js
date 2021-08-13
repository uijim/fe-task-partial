export const fetchMovies = () => fetch('./movies.json').then(response => response.json());
