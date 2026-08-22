import { cloneElement } from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"

function FruitsList() {
    const fruitList = [
        'Apple',
        'Mango',
        'Banana',
        'Pineapple',
        'Jackfruit',
        'Papaya',
        'Cherry',
        'Kiwi',
        'Chikoo',
        'Rasberry',
        'Strawberry',
        'Cherry',
        'Kiwi',
        'Jackfruit',
        'Guava',
        'BlueBerry',
        'pomogranate',
        'Papaya',
        'Watermelon',
        'Avacoda',
        'Lemon',
        'Orange',
        'Grapes',
        'coconot',
        'plum',
        'peach',
        'pear',
        'curtard apple',
        'Mulberry',
        'DragonFruit',
        'Fig',
        'Jambul',
        'Lychee',
        'Grapefruit',
        'Apricot'




    ]

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Fruit Lists</Text>
                <FlatList
                    data={fruitList}

                    keyExtractor={(item) => item}

                    renderItem={({ item }) => (
                        <View style={styles.row}>

                            <Text style={styles.cell}>{item}</Text>
                        </View>
                    )}

                />
            </View>
        </>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            padding: 20,
            backgroundColor: "#f2f2f2",


        },
        title: {

            fontSize: 30,
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 20,


        },
        row: {
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: '#ccc',
            padding: 15,
            marginBottom: 5,
        },
        cell: {
            fontSize: 18,
            textAlign: 'center',
        }

    }
)
export default FruitsList;
