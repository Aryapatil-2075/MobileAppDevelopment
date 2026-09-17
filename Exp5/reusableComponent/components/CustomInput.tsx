
import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native"

function CustomInput({ label, value, onChangeText, placeholder }: any) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>

            <TextInput style={styles.input} value={value} onChangeText={onChangeText} placeholder={placeholder}></TextInput>

        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        marginBottom: 12,

    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5

    },
    input: {
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 5,
        padding: 10,
        fontSize: 14,
        backgroundColor: '#fff'

    }

})

export default CustomInput;