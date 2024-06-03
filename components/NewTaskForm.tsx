import React, { useState } from "react";
import { FormControl, Input, Button } from "native-base";
import { task } from "../types/task";

export default function NewTaskForm({ setAddTaskModal, setTasks }: { setAddTaskModal: any, setTasks: any }) {

    const [title, setTitle] = useState('')

    const handleAddTask = () => {
        setTasks((prev: Array<task>) => [
            ...prev,
            {
                id: Date.now(),
                title: title,
                done: false
            }
        ])
        setAddTaskModal(false)
    }

    return (
        <FormControl>
            <Input placeholder="Titulo..." onChangeText={setTitle} value={title} />
            <Button mt="2" onPress={handleAddTask}>
                Add
            </Button>
        </FormControl>
    )
}