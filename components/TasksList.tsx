import { AntDesign } from "@expo/vector-icons"
import { Box, Heading, FlatList, Text, Icon, Spacer, HStack, AddIcon } from "native-base"

const TasksList = ({ data, setTasks }: { data: Array<any>, setTasks: any }) => {
    return (
        <Box alignItems={"center"} w={"80%"} mt={10}>
            <Heading fontSize="xl" p="4" pb="3">Tareas</Heading>
            <FlatList
                data={data}
                width={"100%"}
                renderItem={({ item }) => {
                    return (
                    <Box borderBottomWidth="1" width={"100%"} py="2">
                        <HStack width={"100%"} alignItems={"center"} justifyContent="space-between">
                            <Text fontSize="lg" bold>
                                {`${item.title} - ${item.done ? 'Pendiente' : 'Completada'}`}
                            </Text>
                            <Spacer />
                            <HStack w={'30%'} mt={2} justifyContent={'space-between'}>
                                <Text mt={1}>
                                    <Icon as={AntDesign} color={"#DD4442"} name="delete" size="lg" />
                                </Text>
                                <Text mt={1}>
                                    <Icon as={AntDesign} color={"#1D9BF0"} name="edit" size="lg" />
                                </Text>
                                <Text mt={1}>
                                    <Icon as={AntDesign} color={"#34aa12"} name={item.done ? "checkcircle" : "checkcircleo"} size="lg" />
                                </Text>
                            </HStack>
                        </HStack>
                    </Box>
                    )}} 
                keyExtractor={item => item.id} />
            <Text mt={10}>
                <AddIcon />
            </Text>
        </Box >
    )
}

export default TasksList