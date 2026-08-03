/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { useState } from 'react';
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';




function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();


  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      {/* <Text style={styles.welcome}> */}
      {/* Welcome to Sangli */}
      {/* Background Changed !! */}
      {/* </Text> */}
      {/* <View style={styles.card}>

        <Image source={require('./Images/id_photo.jpeg')}
          style={styles.image}
        />

        <View style={styles.details}>
          <Text style={styles.title}>Student ID Card</Text>
          <Text>
            <Text style={styles.label}>Name : </Text>
            Arya Bharat Patil
          </Text>

          <Text>
            <Text style={styles.label}>PRN : </Text>
            24UAM311
          </Text>

          <Text>
            <Text style={styles.label}>Branch : </Text>
            CSE-AIML
          </Text>

          <Text>
            <Text style={styles.label}>College :</Text>
            DKTE Society's Textile & Engineering Institute
          </Text>

        </View> */}



      {/* </View> */}
      <Text style={styles.heading}>Counter App</Text>

      <Text style={styles.count}>{count}</Text>

      <View style={styles.buttonContainer}>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setCount(count - 1)}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setCount(count + 1)}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    justifyContent: "center",
    alignItems: "center"
  },
  // title: {
  //   fontSize: 22,
  //   fontWeight: "bold",
  //   marginBottom: 10,
  //   color: "blue"



  // },
  // image: {
  //   width: 100,
  //   height: 120,
  //   borderWidth: 2,
  //   elevation: 20,
  //   marginRight: 10,
  //   borderRadius: 8
  // },
  // details: {
  //   flex: 1
  // },
  // card: {
  //   flexDirection: "row",
  //   marginInline: 20,
  //   width: 300,
  //   backgroundColor: "#fff",
  //   borderRadius: 10,
  //   padding: 15,
  //   elevation: 10,
  //   alignItems: "center"

  // },
  // label: {
  //   fontWeight: "bold"
  // }
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  count: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'blue',
    marginBottom: 30,
  },

  buttonContainer: {
    flexDirection: 'row',
  },

  button: {
    backgroundColor: '#1976D2',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 10,
  },

  buttonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default App;
