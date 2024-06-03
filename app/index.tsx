import { View } from "react-native";
import { router } from "expo-router";
import { Image, Box, Button, HStack } from "native-base";
import bg from "@/assets/images/index-background.jpeg";

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
        <HStack>
          <Button onPress={() => router.push("/login")}>
            LOGIN
          </Button>
          <Button onPress={() => router.push("/register")}>
              REGISTER
          </Button>
        </HStack>
      </Box>
    </View>
  );
}
