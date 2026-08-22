import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const Registration = ({ onLogin }: { onLogin: () => void }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [error, setError] = useState('');

    const validateRegister = () => {
        setError('')

        if (
            name.trim() === '' ||
            email.trim() === '' ||
            password.trim() == '' ||
            confirmPassword.trim() === ''
        ) {
            setError("All field are required !");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError("Enter valid Email !");
            return;
        }
        if (password != confirmPassword) {
            setError("Password do not match !");
            return;
        }
        if (password.length < 6) {
            setError("Password must be at least 6 characters !");
            return;
        }
        Alert.alert("Success", "Registration Successfull!")
    };
    return (
        <View style={styles.container}>
            <View style={styles.card}>

                <Text style={styles.title}>Create Account</Text>

                <Text style={styles.subtitle}>
                    Register to get started
                </Text>

                <Text style={styles.label}>Name</Text>

                <TextInput style={styles.input} placeholder="Enter Name"
                    value={name} onChangeText={setName}></TextInput>

                <Text style={styles.label}>Email</Text>

                <TextInput style={styles.input} placeholder="Enter Email"
                    value={email} onChangeText={setEmail}></TextInput>

                <Text style={styles.label}>Password</Text>

                <TextInput style={styles.input} placeholder="Enter Password"
                    secureTextEntry value={password} onChangeText={setPassword}></TextInput>

                <Text style={styles.label}>Confirm Password</Text>

                <TextInput style={styles.input} placeholder="Confirm your Password" secureTextEntry
                    value={confirmPassword} onChangeText={setConfirmPassword}></TextInput>

                {error ? <Text style={styles.error}>{error}</Text> : null}

                <TouchableOpacity style={styles.button} onPress={validateRegister}>
                    <Text style={styles.buttonText}>Register</Text>

                </TouchableOpacity>

                <Text style={styles.bottomText}>
                    Already have an account?{''}
                    <Text style={styles.login} onPress={onLogin}>Login</Text>
                </Text>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        justifyContent: "center",
        backgroundColor: '#eef2ff'

    },
    card: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 15,
        elevation: 6

    },
    title: {
        fontSize: 27,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#222'
    },
    subtitle: {
        textAlign: 'center',
        color: '#777',
        marginTop: 5,
        marginBottom: 15

    },
    label: {
        fontSize: 15,
        fontWeight: "bold",
        marginTop: 8,
        marginBottom: 5

    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 11,
        fontSize: 15

    },
    error: {

        color: 'red',
        marginTop: 8

    },
    button: {
        backgroundColor: "#2878f0",
        padding: 14,
        borderRadius: 8,
        marginTop: 18


    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'

    },
    bottomText: {
        textAlign: "center",
        marginTop: 18,
        color: '#666'

    },
    login: {
        color: '#2878f0',
        fontWeight: 'bold',


    }

})
export default Registration;