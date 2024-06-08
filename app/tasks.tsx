import { useState } from "react";
import { View } from "react-native";
import { Box } from "native-base";
import TasksList from "@/components/TasksList";
import { task } from "@/types/task";
import dataTasks from "@/assets/data/tasks.json";

export default function TasksPage() {

    const [ tasks, setTasks ] = useState<Array<task>>(dataTasks);

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