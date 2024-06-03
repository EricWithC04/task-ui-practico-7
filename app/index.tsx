import { Text, View } from "react-native";
import { Link } from "expo-router";
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
        <Button>
          <Link href="/login" style={{ color: 'white' }}>
            LOGIN
          </Link>
        </Button>
        <Button>
          <Link href="/register" style={{ color: 'white' }}>
            REGISTER
          </Link>
        </Button>
      </Box>
    </View>
  );
}
