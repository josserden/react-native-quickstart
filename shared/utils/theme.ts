export const theme = Object.freeze({
  colors: {
    accent: '#aa4b6b',
    dark: '#0f172a',
    light: '#f1f5f9',
    primary: '#4338ca',
    secondary: '#334155',
    warning: '#f9c74f',
  },
  fontSizes: {
    large: 24,
    medium: 20,
    regular: 16,
    small: 14,
  },
  fontWeights: {
    bold: 'bold',
    medium: 'medium',
    regular: 'regular',
  },
  spacing: (value: number): number => 4 * value,
});
