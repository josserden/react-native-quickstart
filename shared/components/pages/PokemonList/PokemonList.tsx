import React from 'react';

import { Link } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { FlashList, ListRenderItem } from '@shopify/flash-list';

import { PokemonProps } from '@/shared/api/pokeapi/types';
import { PokemonListProps } from '@/shared/components/pages/PokemonList/types';
import { theme } from '@/shared/utils/theme';

const PokemonList = ({ pokemon }: PokemonListProps) => {
  const renderItem: ListRenderItem<PokemonProps> = ({ item }) => (
    <Link asChild href={`/(pokemon)/${item.id}`} key={item.id}>
      <TouchableOpacity>
        <View style={styles.item}>
          <Image
            source={{
              uri: item.url,
            }}
            style={styles.preview}
          />

          <Text style={styles.itemText}>{item.name}</Text>
          <Ionicons color={theme.colors.dark} name={'chevron-forward'} size={24} />
        </View>
      </TouchableOpacity>
    </Link>
  );

  return (
    <View style={styles.container}>
      <FlashList
        data={pokemon}
        estimatedItemSize={100}
        ItemSeparatorComponent={() => (
          <View
            style={{
              backgroundColor: theme.colors.secondary,
              height: 1,
              width: '100%',
            }}
          />
        )}
        renderItem={renderItem}
      />
    </View>
  );
};

export default PokemonList;

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
