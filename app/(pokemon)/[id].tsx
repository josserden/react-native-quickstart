import React from 'react';

import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { useGetPokemonDetail } from '@/shared/api/pokeapi/hooks/useGetPokemonDetail';
import ErrorMessage from '@/shared/components/ui/ErrorMessage';
import Loader from '@/shared/components/ui/Loader';
import { useFavoritePokemon } from '@/shared/hooks/useFavoritePokemon';
import { theme } from '@/shared/utils/theme';

import Pokemon from '../../shared/components/pages/Pokemon';

const Page = () => {
  const { id } = useLocalSearchParams<Record<string, string>>();

  const { data: pokemon, error, isError, isLoading } = useGetPokemonDetail(id);
  useFavoritePokemon(id, pokemon?.name ?? '');

  if (isError) return <ErrorMessage message={error instanceof Error ? error.message : 'An error occurred'} />;

  if (isLoading) return <Loader />;

  return <View style={styles.wrapper}>{pokemon && <Pokemon {...pokemon} />}</View>;
};

export default Page;

const styles = StyleSheet.create({
  loading: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  wrapper: {
    padding: theme.spacing(2.5),
  },
});
