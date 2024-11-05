import { Link, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import 'react-native-reanimated';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { theme } from '@/shared/utils/theme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.accent,
          },
          headerTintColor: theme.colors.light,
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            headerRight: () => (
              <Link asChild href="/favorites">
                <TouchableOpacity>
                  <Ionicons color={theme.colors.light} name="heart-circle" size={26} />
                </TouchableOpacity>
              </Link>
            ),
            title: 'Pokemon',
          }}
        />
        <Stack.Screen
          name="(pokemon)/[id]"
          options={{
            title: '',
          }}
        />
        <Stack.Screen
          name="favorites"
          options={{
            presentation: 'modal',
            title: 'Favorites',
          }}
        />
        <Stack.Screen name="+not-found" />
      </Stack>
    </QueryClientProvider>
  );
}
