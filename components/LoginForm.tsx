import { useState } from "react"
import { Box, Button, Input, Text, FormControl } from "native-base"
import { LoginErrors } from "@/types/validationError"
import { router } from "expo-router"

const LoginForm = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState<LoginErrors>({})

    const validate = () => {
        const newErrors: LoginErrors = {};
        const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/
        if (!username.length) newErrors.name = 'El nombre de usuario es requerido';
        if (username.length < 5) newErrors.name = 'El nombre de usuario debe tener por lo menos 5 caracteres';
        if (username.length > 10) newErrors.name = 'El nombre de usuario debe tener como maximo 10 caracteres';
        if (!password.length) newErrors.password = 'La contraseña es requerida';
        if (password.length < 5) newErrors.password = 'La contraseña debe tener al menos 5 caracteres';
        if (password === password.toUpperCase()) newErrors.password = 'La contraseña debe tener al menos 1 letra minúscula';
        if (password === password.toLowerCase()) newErrors.password = 'La contraseña debe tener al menos 1 letra mayuscula';
        if (!symbolRegex.test(password)) newErrors.password = 'La contraseña debe tener al menos 1 simbolo';
        return newErrors;
    }

    const handleLogin = () => {
        const validatedErrors: LoginErrors = validate()
        if (Object.keys(validatedErrors).length) {
            setErrors(validatedErrors)
        } else {
            setErrors({})
            return router.replace("/tasks")
        }
    }

    return (
        <Box alignItems={"center"} w={"80%"} mt={10}>
            <Text>Iniciar Sesión</Text>
            <FormControl isInvalid={errors.hasOwnProperty('name')}>
                <Input 
                    variant="underlined" 
                    size="lg" 
                    mt={5} 
                    placeholder="Username" 
                    onChangeText={value => setUsername(value)}
                    value={username}
                />
                {
                    errors.hasOwnProperty('name') ? 
                        <Text color={"red.500"}>{errors.name}</Text> : null
                }
            </FormControl>
            <FormControl isInvalid={errors.hasOwnProperty('password')} >
                <Input 
                    variant="underlined" 
                    size="lg" 
                    mt={5} 
                    placeholder="Password" 
                    type="password" 
                    onChangeText={value => setPassword(value)}
                    value={password}
                />
                {
                    errors.hasOwnProperty('password') ? 
                        <Text color={"red.500"}>{errors.password}</Text> : null
                }
            </FormControl>
            <Button w={"100%"} mt={5} onPress={handleLogin}>Iniciar Sesión</Button>
        </Box>
    )
}

export default LoginForm