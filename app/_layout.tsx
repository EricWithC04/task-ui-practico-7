import { Stack } from "expo-router";
import { NativeBaseProvider } from "native-base";
import { AppProvider } from "@/context/AppContext";
import { storeData } from "@/utils/storage";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "@/redux/store/store";

export default function RootLayout() {

  useEffect(() => {
    storeData("theme", "light");
  }, []);

  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <AppProvider>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="login" />
            <Stack.Screen name="register" />
            <Stack.Screen name="tasks" />
            <Stack.Screen name="settings"/>
          </Stack>
        </AppProvider>
      </Provider>
    </NativeBaseProvider>
  );
}
