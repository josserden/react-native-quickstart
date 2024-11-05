import React, { useCallback, useEffect, useState } from 'react';

import { useNavigation } from 'expo-router';
import { Text } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { capitalizeFirstLetter } from '@/shared/helpers/capitalizeFirstLetter';
import { generateStorageId } from '@/shared/helpers/generateStorageId';
import { asyncStorageService } from '@/shared/service/asyncStorageService';
import { theme } from '@/shared/utils/theme';

export const useFavoritePokemon = (id: string, name: string) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const navigation = useNavigation();

  const loadFavoriteStatus = useCallback(async () => {
    try {
      const favorite = await asyncStorageService.getItem(generateStorageId(id));
      setIsFavorite(favorite === 'true');
    } catch (error) {
      console.error(error);
    }
  }, [id]);

  useEffect(() => {
    navigation.setOptions({
      title: capitalizeFirstLetter(name),
    });

    loadFavoriteStatus();
  }, [id, loadFavoriteStatus, name, navigation]);

  const toggleFavorite = useCallback(async () => {
    try {
      if (isFavorite) {
        await asyncStorageService.removeItem(generateStorageId(id));
      } else {
        await asyncStorageService.setItem(generateStorageId(id), 'true');
      }
      setIsFavorite((prev) => !prev);
    } catch (error) {
      console.error(error);
    }
  }, [id, isFavorite]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Text
          onPress={toggleFavorite}
          style={{
            color: theme.colors.light,
            padding: theme.spacing(2.5),
          }}
        >
          <Ionicons
            color={isFavorite ? theme.colors.warning : theme.colors.light}
            name={isFavorite ? 'star' : 'star-outline'}
            size={theme.spacing(5.5)}
          />
        </Text>
      ),
    });
  }, [isFavorite, navigation, toggleFavorite]);
};
