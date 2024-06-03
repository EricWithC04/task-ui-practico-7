import { View } from "react-native";
import { router } from "expo-router";
import { Image, Box, Button } from "native-base";
import bg from "@/assets/images/background.jpg";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <Image source={bg} style={{ width: '100%', maxHeight: '45%' }} alt="background"></Image>
      <Box style={{ flex: 1, alignItems: "center", width: "80%" }}>
        <Button onPress={() => router.push("/login")}>
          LOGIN
        </Button>
        <Button onPress={() => router.push("/register")}>
            REGISTER
        </Button>
      </Box>
    </View>
  );
}
