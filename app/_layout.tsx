import { Stack } from "expo-router";
import { NativeBaseProvider } from "native-base";
import { storeData } from "@/utils/storage";
import { useEffect } from "react";

export default function RootLayout() {

  useEffect(() => {
    storeData("theme", "light");
  }, []);

  return (
    <NativeBaseProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="login" />
        <Stack.Screen name="register" />
        <Stack.Screen name="tasks" />
        <Stack.Screen name="settings"/>
      </Stack>
    </NativeBaseProvider>
  );
}
