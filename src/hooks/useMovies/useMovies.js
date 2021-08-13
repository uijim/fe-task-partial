import { useMemo } from 'react';
import { useQuery } from 'react-query';

import { fetchMovies } from '../../api';

export const useMovies = () => {
  const { data = [], loading, error} = useQuery('movies', fetchMovies);

  const sortedData = useMemo(() => {
    if (!data.length) return [];

    return data.sort((a, b) => {
      // we could just use lodash sorting but that could be seen as cheating ;)
      const popularityA = Number.parseFloat(a.popularity);
      const popularityB = Number.parseFloat(b.popularity);

      if (popularityA > popularityB) return -1;
      if (popularityA < popularityB) return 1;

      return 0;
    })
  }, [data]);

  return {
    data: sortedData,
    error,
    loading
  }
}