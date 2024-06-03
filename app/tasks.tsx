import { useState } from "react";
import { View } from "react-native";
import { Box } from "native-base";
import TasksList from "@/components/TasksList";
import { task } from "@/types/task";

export default function TasksPage() {

    const [ tasks, setTasks ] = useState<Array<task>>([{id:1, title: "Task 1", done: false}, {id:2, title: "Task 2", done: true}]);

    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
            }}
        >
            <Box
                style={{
                    flex: 1,
                    alignItems: "center",
                    width: "100%",
                }}
            >
                <TasksList
                    data={tasks}
                    setTasks={setTasks}
                />
            </Box>
        </View>
    );
}