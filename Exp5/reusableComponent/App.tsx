import { useState } from "react";

import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import CustomHeader from "./components/CustomHeader";
import CustomInput from "./components/CustomInput";
import CustomButton from "./components/CustomButton";
import CustomCard from "./components/CustomCard";

function App() {
    const [name, setName] = useState('');
    const [feedback, setFeedback] = useState('');
    const [rating, setRating] = useState(0);

    const submitFeedback = () => {
        if (name.trim() === '') {
            Alert.alert('Error', "Please enter name")
            return;
        }
        if (feedback.trim() === '') {
            Alert.alert('Error', "Please enter feedback")
            return;
        }
        if (rating === 0) {
            Alert.alert('Error', "Please enter rating")
            return;
        }
        Alert.alert('Success', 'Feedback Submitted Successfuly')

    }
    const resetForm = () => {
        setName('')
        setFeedback('')
        setRating(0)
    }

    return (
        <View style={styles.container}>
            <CustomHeader title="Feedback Box" />
            <ScrollView style={styles.scrollView}
                contentContainerStyle={styles.content}>
                {/* <View style={styles.content}> */}

                <CustomInput
                    label='Name'
                    value={name}
                    onChangeText={setName}
                    placeholder="Enter your name"
                />

                <CustomInput
                    label='Feedback'
                    value={feedback}
                    onChangeText={setFeedback}
                    placeholder="Enter you feedback"
                />



                <Text style={styles.ratingTitle}>Select Rating</Text>
                <View style={styles.ratingContainer}>
                    {[1, 2, 3, 4, 5].map((item) => (
                        <CustomButton
                            key={item}
                            title={`${item}`}
                            onPress={() => setRating(item)}
                            style={
                                rating === item ? styles.selectedButton : styles.ratingButton
                            }
                        />

                    ))}



                </View>

                <CustomCard>
                    <Text style={styles.cardTitle}>Your Feedback</Text>

                    <Text style={styles.cardName}>{name || 'your name'}</Text>

                    <Text style={styles.feedbackTitle}>"{feedback || 'Your feedback will appear'}"</Text>

                    <Text style={styles.stars}>
                        {rating > 0
                            ? '★'.repeat(rating) + '☆'.repeat(5 - rating) : '☆☆☆☆☆'}
                    </Text>

                    <Text style={styles.ratingText}>
                        {rating}/5
                    </Text>
                </CustomCard>

                <CustomButton
                    title='Submit feedback'
                    onPress={submitFeedback}
                />

                <CustomButton
                    title="Reset"
                    onPress={resetForm}
                    style={styles.resetButton}
                />



            </ScrollView>

        </View >
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5'

    },

    content: {
        padding: 20


    },
    scrollView: {
        flex: 1

    },
    ratingTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 5


    },
    ratingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5

    },
    selectedButton: {
        width: 48,
        backgroundColor: "#2563eb"

    },
    ratingButton: {
        width: 48,
        backgroundColor: '#777777'

    },
    cardTitle: {
        fontSize: 18,
        color: "#555555",
        marginBottom: 10

    },
    cardName: {
        fontSize: 15,
        color: '#555555',
        marginBottom: 10

    },
    feedbackTitle: {
        fontSize: 15,
        color: '#555555',
        marginBottom: 10

    },
    stars: {
        fontSize: 22,
        letterSpacing: 3

    },
    ratingText: {
        fontSize: 14,
        color: '#555555',
        marginTop: 5

    },
    resetButton: {
        backgroundColor: '#777777'
    }


})
export default App;