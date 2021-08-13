import { useQuery } from 'react-query';

import { fetchGenres } from '../../api';

export const useGenres = () => {
  const { data = [], loading, error } = useQuery('genres', fetchGenres);

  return {
    data,
    loading
  }
};