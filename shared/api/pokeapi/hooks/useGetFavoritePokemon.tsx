import { useQueries } from '@tanstack/react-query';

import { getPokemon } from '@/shared/api/pokeapi/api';
import { PokemonProps } from '@/shared/api/pokeapi/types';
import { QUERY_KEYS } from '@/shared/constants/query-keys';

export const useGetFavoritePokemon = (favorites: string[]) => {
  return useQueries({
    combine: (
      data,
    ): {
      data: PokemonProps[];
      isError: boolean;
      isLoading: boolean;
    } => ({
      data: data.map((item) => item.data) as PokemonProps[],
      isError: data.some((item) => item.isError),
      isLoading: data.some((item) => item.isLoading),
    }),
    queries: favorites.map((id) => ({
      enabled: favorites.length > 0,
      queryFn: async () => await getPokemon(id),
      queryKey: [QUERY_KEYS.GET_FAVORITE_POKEMON, id],
    })),
  });
};
