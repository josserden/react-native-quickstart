import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

import { theme } from '@/shared/utils/theme';

const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

export default ErrorMessage;

const styles = StyleSheet.create({
  text: {
    color: theme.colors.secondary,
    fontSize: theme.fontSizes.large,
    fontWeight: theme.fontWeights.bold as 'bold',
  },
  wrapper: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
