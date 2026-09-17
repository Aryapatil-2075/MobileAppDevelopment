import React from "react";
import { StyleSheet, Text, View } from "react-native"

function CustomHeader({ title }: any) {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    title: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold'

    },
    header: {
        backgroundColor: "#555555",
        padding: 16,
        alignItems: 'center'

    }

})
export default CustomHeader;