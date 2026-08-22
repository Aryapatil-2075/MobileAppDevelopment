import { useState } from "react"
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const Login = ({ onRegister }: { onRegister: () => void }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const validateLogin = () => {
        let valid = true;

        setEmailError('');
        setPasswordError('');

        if (email.trim() === '') {
            setEmailError('Email is required !');
            valid = false;
        }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setEmailError('Enter valid Email !');
            valid = false;
        }
        if (password.trim() === '') {
            setPasswordError('password is required !');
            valid = false;
        }
        if (valid) {
            Alert.alert('Success', 'Login Successful !');
        }
    };
    return (
        <View style={styles.containter}>
            <View style={styles.card}>
                <Text style={styles.title}>Welcome back! Please login</Text>

                <Text style={styles.label}>Email</Text>

                <TextInput style={styles.input} placeholder="Enter Email"
                    keyboardType="email-address" value={email} onChangeText={setEmail}></TextInput>

                {email ? <Text style={styles.error}>{emailError}</Text> : null}

                <Text style={styles.label}>Password</Text>

                <TextInput style={styles.input} placeholder="Enter Password" secureTextEntry
                    value={password} onChangeText={setPassword}></TextInput>

                {password ? <Text style={styles.error}>{passwordError}</Text> : null}

                <TouchableOpacity style={styles.button} onPress={validateLogin}>
                    <Text style={styles.buttonText}>Login</Text></TouchableOpacity>

                <Text style={styles.bottomText}>Don't have an account?{''}
                    <Text style={styles.register} onPress={onRegister}>Register</Text>
                </Text>
            </View>
        </View>
    );

};
const styles = StyleSheet.create({
    containter: {
        flex: 1,
        padding: 25,
        justifyContent: "center"

    },
    card: {
        backgroundColor: 'white',
        padding: 25,
        borderRadius: 15,
        elevation: 6,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 6,
        marginTop: 10,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 30

    },
    input: {
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 8,
        padding: 12,
        marginTop: 10

    },
    error: {
        color: "red",
        marginTop: 5

    },
    button: {
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 8,
        marginTop: 25

    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'

    },
    bottomText: {
        color: '#2878f0',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 8
    },
    register: {
        color: '#2878f0',
        fontWeight: 'bold'
    }



}

)
export default Login;

