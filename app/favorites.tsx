import React from 'react';

import { useGetFavoritePokemon } from '@/shared/api/pokeapi/hooks/useGetFavoritePokemon';
import Favorites from '@/shared/components/pages/Favorites';
import ErrorMessage from '@/shared/components/ui/ErrorMessage';
import Loader from '@/shared/components/ui/Loader';
import { useAsyncStorageKeys } from '@/shared/hooks/useAsyncStorageKeys';

const Page = () => {
  const { keys } = useAsyncStorageKeys();
  const { data = [], isError, isLoading } = useGetFavoritePokemon(keys);

  if (isError) return <ErrorMessage message="An error occurred" />;

  if (isLoading) return <Loader />;

  return <Favorites pokemon={data} />;
};

export default Page;
