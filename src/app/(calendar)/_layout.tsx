import { Stack } from 'expo-router';

export default function CalendarLayout(): import('react').JSX.Element | null {
  return (
    <Stack initialRouteName="index">
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
