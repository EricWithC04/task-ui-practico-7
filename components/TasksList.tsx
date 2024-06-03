import { useState } from "react"
import { AntDesign } from "@expo/vector-icons"
import { Box, Heading, FlatList, Text, Icon, Spacer, HStack, AddIcon, Modal } from "native-base"
import { task } from "@/types/task"
import NewTaskForm from "./NewTaskForm"

const TasksList = ({ data, setTasks }: { data: Array<task>, setTasks: any }) => {

    const [addTaskModal, setAddTaskModal] = useState(false)
    const [editTaskModal, setEditTaskModal] = useState(false)
    const [deleteTaskModal, setDeleteTaskModal] = useState(false)

    const addTask = () => {
        setAddTaskModal(true)
    }

    const editTask = () => { 

    }

    const deleteTask = (item: task) => { 
        const newTaskList = data.filter((task) => task.id !== item.id)
        setTasks(newTaskList)
    }

    const doneTask = (item: task) => {
        const newTask = { ...item, done: !item.done }
        const newTaskList = data.map((task) => task.id === item.id ? newTask : task)
        setTasks(newTaskList)
    }

    return (
        <Box alignItems={"center"} w={"80%"} mt={10}>
            <Heading fontSize="xl" p="4" pb="3">Tareas</Heading>
            {
                data.length === 0 ? (
                    <Text>Todavía no hay tareas</Text>
                ) : (
                    <FlatList
                        data={data}
                        width={"100%"}
                        renderItem={({ item }) => {
                            return (
                                <Box borderBottomWidth="1" width={"100%"} py="2">
                                    <HStack width={"100%"} alignItems={"center"} justifyContent="space-between">
                                        <Text fontSize="lg" bold>
                                            {`${item.title} - ${item.done ? 'Completada' : 'Pendiente'}`}
                                        </Text>
                                        <Spacer />
                                        <HStack w={'30%'} mt={2} justifyContent={'space-between'}>
                                            <Text mt={1} onPress={() => deleteTask(item)}>
                                                <Icon as={AntDesign} color={"#DD4442"} name="delete" size="lg" />
                                            </Text>
                                            <Text mt={1}>
                                                <Icon as={AntDesign} color={"#1D9BF0"} name="edit" size="lg" />
                                            </Text>
                                            <Text mt={1} onPress={() => doneTask(item)}>
                                                <Icon as={AntDesign} color={"#34aa12"} name={item.done ? "checkcircle" : "checkcircleo"} size="lg" />
                                            </Text>
                                        </HStack>
                                    </HStack>
                                </Box>
                            )
                        }}
                        keyExtractor={item => item.id.toString()} />
                )
            }
            <Modal isOpen={addTaskModal} onClose={() => setAddTaskModal(false)}>
                <Modal.Content>
                    <Modal.CloseButton />
                    <Modal.Header>Nueva Tarea</Modal.Header>
                    <Modal.Body>
                        <NewTaskForm 
                            setAddTaskModal={setAddTaskModal}
                            setTasks={setTasks}
                        />
                    </Modal.Body>
                </Modal.Content>
            </Modal>
            <Text mt={10} onPress={addTask}>
                <AddIcon />
            </Text>
        </Box >
    )
}

export default TasksList