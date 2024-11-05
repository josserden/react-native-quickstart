import { queryOptions, useQuery } from '@tanstack/react-query';

import { getAllPokemon } from '@/shared/api/pokeapi/api';
import { QUERY_KEYS } from '@/shared/constants/query-keys';

export const useGetAllPokemon = () => {
  const getPokemonQueryOptions = queryOptions({
    queryFn: async () => await getAllPokemon(),

    queryKey: QUERY_KEYS.GET_ALL_POKEMON,
  });

  return useQuery(getPokemonQueryOptions);
};
