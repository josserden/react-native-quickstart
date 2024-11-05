import React from 'react';

import { useGetAllPokemon } from '@/shared/api/pokeapi/hooks/useGetAllPokemon';
import ErrorMessage from '@/shared/components/ui/ErrorMessage';
import Loader from '@/shared/components/ui/Loader';

import PokemonList from '../shared/components/pages/PokemonList';

const RootPage = () => {
  const { data: pokemon = [], error, isError, isLoading } = useGetAllPokemon();

  if (isError) return <ErrorMessage message={error instanceof Error ? error.message : 'An error occurred'} />;

  if (isLoading) return <Loader />;

  return <PokemonList pokemon={pokemon} />;
};

export default RootPage;
