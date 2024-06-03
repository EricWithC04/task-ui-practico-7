import React, { useState } from "react";
import { FormControl, Input, Button } from "native-base";
import { task } from "../types/task";

export default function EditTaskForm({ setEditTaskModal, setTasks, data, taskToEdit }: { setEditTaskModal: any, setTasks: any, data: Array<task>, taskToEdit: task }) {

    const [title, setTitle] = useState(taskToEdit.title)

    const handleEditTask = () => {
        const newTaskList = data.map((task: task) => task.id === taskToEdit.id ? { ...task, title: title } : task)
        setTasks(newTaskList)
        setEditTaskModal(false)
    }

    return (
        <FormControl>
            <Input onChangeText={setTitle} value={title} />
            <Button mt="2" onPress={handleEditTask}>
                Edit
            </Button>
        </FormControl>
    )
}