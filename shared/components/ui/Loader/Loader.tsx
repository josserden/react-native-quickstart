import React from 'react';

import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { theme } from '@/shared/utils/theme';

const Loader = () => {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator color={theme.colors.primary} size="large" style={styles.loading} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  loading: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  wrapper: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
