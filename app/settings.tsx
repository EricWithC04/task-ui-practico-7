import { Button, Text, View } from "native-base";
import { router } from "expo-router";

export default function Settings() {
    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
            }}
        >
            <Text>Settings</Text>
            <Button onPress={() => router.back()}>Regresar</Button>
        </View>
    );
}