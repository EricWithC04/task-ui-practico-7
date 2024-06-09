import { 
    Box, 
    Button, 
    Divider, 
    HStack, 
    Input, 
    Select, 
    Switch, 
    Text, 
    VStack, 
    View,
    useColorMode,
    useColorModeValue
} from "native-base";

export default function Settings() {


    const { toggleColorMode } = useColorMode();

    const bg = useColorModeValue("#fff", "#151718");

    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
            }}
            backgroundColor={bg}
        >
            <Box width={"80%"} alignItems={"center"} my={5}>
                <HStack width={"100%"} my={2} alignItems={"center"} justifyContent={"space-between"}>
                    <Text>Modo Oscuro</Text>
                    <Switch size={"lg"} onChange={toggleColorMode}></Switch>
                </HStack>
                <Divider my={3}></Divider>
                <VStack width={"100%"} my={2} alignItems={"start"}>
                    <Text>Formato de Fecha</Text>
                    <Select defaultValue="1" mt={4}>
                        <Select.Item label="2024-06-08T18:11:20.427Z" value="1"></Select.Item>
                        <Select.Item label="08/06/2024" value="2"></Select.Item>
                    </Select>
                </VStack>
                <Divider my={3}></Divider>
                <VStack width={"100%"} my={2} alignItems={"start"}>
                    <Text>Cambiar Idioma</Text>
                    <Select defaultValue="Spanish" selectedValue="Spanish" mt={4}>
                        <Select.Item label="Español" value="Spanish"></Select.Item>
                        <Select.Item label="English" value="English"></Select.Item>
                        <Select.Item label="Français" value="French"></Select.Item>
                        <Select.Item label="Deutsch" value="German"></Select.Item>
                        <Select.Item label="Italiano" value="Italian"></Select.Item>
                        <Select.Item label="Português" value="Portuguese"></Select.Item>
                    </Select>                    
                </VStack>
                {/* <Divider my={3}></Divider>
                <HStack width={"100%"} my={2} alignItems={"center"} justifyContent={"space-between"}>
                    <Text>Cambiar Fondo</Text>
                    <Input ></Input>
                </HStack>
                <Divider my={3}></Divider> */}
                <Button width={"100%"}>Back</Button>
            </Box>
        </View>
    );
}