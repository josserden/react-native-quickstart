import React from 'react';

import { Image, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';

import { Ionicons } from '@expo/vector-icons';

import { PokemonListProps } from '@/shared/components/pages/PokemonList/types';
import { generateStorageId } from '@/shared/helpers/generateStorageId';
import { asyncStorageService } from '@/shared/service/asyncStorageService';
import { theme } from '@/shared/utils/theme';

const Favorites = ({ pokemon = [] }: PokemonListProps) => {
  const removeFromFavorites = async (id: string) => {
    try {
      await asyncStorageService.removeItem(generateStorageId(id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {pokemon.map((item) => (
        <Animated.View key={item?.id} style={styles.item}>
          <Image
            source={{
              uri: item?.sprites?.front_default,
            }}
            style={styles.preview}
          />

          <Text style={styles.itemText}>{item?.name}</Text>

          <TouchableOpacity onPress={() => removeFromFavorites(item?.id.toString())}>
            <Ionicons color={theme.colors.primary} name="trash" size={20} />
          </TouchableOpacity>
        </Animated.View>
      ))}
    </ScrollView>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: theme.spacing(2.5),
  },
  itemText: {
    flex: 1,
    fontSize: theme.fontSizes.medium,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  loading: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  preview: {
    height: theme.spacing(25),
    width: theme.spacing(25),
  },
});
