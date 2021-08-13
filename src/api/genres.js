export const fetchGenres = () => fetch('./genres.json').then(response => response.json());
