import { useState } from "react"
import { Box, Button, Input, Text, FormControl } from "native-base"

type RegisterErrors = {
    name?: string
    password?: string
    password2?: string
}

const RegisterForm = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    const [errors, setErrors] = useState<RegisterErrors>({})

    const validate = () => {
        const newErrors: RegisterErrors = {};
        const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/
        if (!username.length) newErrors.name = 'El nombre de usuario es requerido';
        if (username.length < 5) newErrors.name = 'El nombre de usuario debe tener por lo menos 5 caracteres';
        if (username.length > 10) newErrors.name = 'El nombre de usuario debe tener como maximo 10 caracteres';
        if (!password.length) newErrors.password = 'La contraseña es requerida';
        if (password.length < 5) newErrors.password = 'La contraseña debe tener al menos 5 caracteres';
        if (password === password.toUpperCase()) newErrors.password = 'La contraseña debe tener al menos 1 letra minúscula';
        if (password === password.toLowerCase()) newErrors.password = 'La contraseña debe tener al menos 1 letra mayuscula';
        if (!symbolRegex.test(password)) newErrors.password = 'La contraseña debe tener al menos 1 simbolo';
        if (password !== password2) newErrors.password2 = 'Las contraseñas deben coincidir';
        return newErrors;
    }

    const handleRegister = () => {
        const validatedErrors: RegisterErrors = validate()
        if (Object.keys(validatedErrors).length) {
            setErrors(validatedErrors)
        } else {
            setErrors({})
        }
    }

    return (
        <Box alignItems={"center"} w={"80%"} mt={10}>
            <Text>Registro</Text>
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
            <FormControl isInvalid={errors.hasOwnProperty('password2')} >
                <Input 
                    variant="underlined" 
                    size="lg" 
                    mt={5} 
                    placeholder="Repeat Password" 
                    type="password" 
                    onChangeText={value => setPassword2(value)}
                    value={password2}
                />
                {
                    errors.hasOwnProperty('password2') ? 
                        <Text color={"red.500"}>{errors.password2}</Text> : null
                }
            </FormControl>
            <Button w={"100%"} mt={5} onPress={handleRegister}>Enviar</Button>
        </Box>
    )
}

export default RegisterForm