import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";



function CustomButton({ title, onPress, style }: any) {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#666666',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 5

    },
    buttonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'

    }
})
export default CustomButton;