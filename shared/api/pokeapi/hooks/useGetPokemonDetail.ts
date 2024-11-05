import { queryOptions, useQuery } from '@tanstack/react-query';

import { getPokemon } from '@/shared/api/pokeapi/api';
import { QUERY_KEYS } from '@/shared/constants/query-keys';

export const useGetPokemonDetail = (id: string) => {
  const getPokemonQueryOptions = queryOptions({
    enabled: !!id,

    queryFn: async () => await getPokemon(id),

    queryKey: [...QUERY_KEYS.GET_POKEMON_DETAIL, id],
  });

  return useQuery(getPokemonQueryOptions);
};
