import React from "react";
import { StyleSheet, View } from "react-native";

function CustomCard({ children }: any) {
    return (
        <View style={styles.card}>{children}</View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 18,
        elevation: 4,
        marginTop: 12
    }
})
export default CustomCard;