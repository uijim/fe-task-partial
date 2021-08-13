import { useQuery } from 'react-query';

import { fetchMovies } from '../../api';

export const useMovies = () => {
  const { data = [], loading, error} = useQuery('movies', fetchMovies);

  console.log(data);

  return {
    data,
    error,
    loading
  }
}