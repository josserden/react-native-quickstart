import React from 'react';

import { Image, StyleSheet, Text } from 'react-native';
import Animated, { FadeIn, FadeInDown, FlipInEasyX } from 'react-native-reanimated';

import { PokemonProps, StatsProps } from '@/shared/api/pokeapi/types';
import { capitalizeFirstLetter } from '@/shared/helpers/capitalizeFirstLetter';
import { theme } from '@/shared/utils/theme';

const Pokemon = (props: PokemonProps) => {
  const { name, sprites, stats } = props;

  return (
    <>
      <Animated.View
        entering={FadeIn.delay(200)}
        style={[
          styles.card,
          {
            alignItems: 'center',
          },
        ]}
      >
        <Image source={{ uri: sprites?.front_default }} style={styles.image} />

        <Animated.Text entering={FlipInEasyX.delay(300)} style={styles.name}>
          # {name}
        </Animated.Text>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(350)} style={styles.card}>
        <Text style={styles.statTitle}>Stats: </Text>

        {stats?.map((stat: StatsProps) => (
          <Text key={stat.stat.name}>
            {capitalizeFirstLetter(stat.stat.name)}: {stat.base_stat}
          </Text>
        ))}
      </Animated.View>
    </>
  );
};

export default Pokemon;

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.light,
    borderRadius: theme.spacing(1.5),
    elevation: 1,
    gap: theme.spacing(2.5),
    margin: theme.spacing(2.5),
    padding: theme.spacing(2.5),
    shadowColor: theme.colors.secondary,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  image: {
    height: theme.spacing(50),
    objectFit: 'contain',
    width: theme.spacing(50),
  },
  name: {
    color: theme.colors.primary,
    fontSize: theme.fontSizes.large,
    fontWeight: theme.fontWeights.bold as 'bold',
    textTransform: 'capitalize',
  },
  statTitle: {
    color: theme.colors.dark,
    fontSize: theme.fontSizes.regular,
    fontWeight: theme.fontWeights.bold as 'bold',
  },
});
