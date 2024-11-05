// https://docs.expo.dev/guides/using-eslint/

module.exports = {
  extends: ['expo', 'prettier', 'plugin:perfectionist/recommended-alphabetical-legacy'],
  plugins: ['prettier', 'perfectionist'],
  rules: {
    '@typescript-eslint/ban-types': 'off',

    'perfectionist/sort-imports': [
      'error',
      {
        customGroups: {
          type: {
            react: ['react'],
            'react-native': ['react-*', 'expo', 'expo-*'],
          },
          value: {
            react: ['react'],
            'react-native': ['react-*', 'expo', 'expo-*'],
          },
        },
        groups: [
          'react',
          'react-native',
          ['builtin', 'external'],
          'internal',
          ['parent', 'sibling', 'index'],
          'type',
          'internal-type',
          ['parent-type', 'sibling-type', 'index-type'],
          'object',
          'unknown',
        ],
        ignoreCase: false,
        internalPattern: ['@/**'],
        order: 'asc',
        type: 'alphabetical',
      },
    ],

    'perfectionist/sort-interfaces': [
      'error',
      {
        order: 'asc',
        type: 'alphabetical',
      },
    ],

    'perfectionist/sort-jsx-props': [
      'error',
      {
        order: 'asc',
        type: 'alphabetical',
      },
    ],

    'perfectionist/sort-named-exports': [
      'error',
      {
        order: 'asc',
        type: 'alphabetical',
      },
    ],

    'perfectionist/sort-named-imports': [
      'error',
      {
        order: 'asc',
        type: 'alphabetical',
      },
    ],

    'perfectionist/sort-objects': [
      'error',
      {
        order: 'asc',
        type: 'alphabetical',
      },
    ],

    'prettier/prettier': 'error',

    'react-hooks/exhaustive-deps': 'error',
  },
  settings: {
    perfectionist: {
      partitionByComment: true,
      type: 'alphabetical',
    },
  },
};
