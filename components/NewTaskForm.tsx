import React, { useState } from "react";
import { FormControl, Input, Button, TextArea } from "native-base";
import { task } from "../types/task";
import { getData } from "@/utils/storage";

export default function NewTaskForm({ setAddTaskModal, setTasks }: { setAddTaskModal: any, setTasks: any }) {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleAddTask = async () => {
        const userData = await getData('user')

        if (!userData) {
            throw new Error('Error: no se han encontrado los datos del usuario.')
        }

        setTasks((prev: Array<task>) => [
            ...prev,
            {
                id: Date.now(),
                title: title,
                description: description,
                date: `${new Date()}`,
                user_id: JSON.parse(userData).id,
                done: false
            }
        ])
        setAddTaskModal(false)
    }

    return (
        <FormControl>
            <Input placeholder="Titulo..." onChangeText={setTitle} value={title} />
            <TextArea placeholder="Descripción..." autoCompleteType={"off"} onChangeText={(text) => setDescription(text)} value={description} mt={2} />
            <Button mt="2" onPress={handleAddTask}>
                Crear Tarea
            </Button>
        </FormControl>
    )
}