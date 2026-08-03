/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { useState } from 'react';
import { Alert, Button, Pressable, StatusBar, StyleSheet, Text, TextInput, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
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
  const [name, setName] = useState("")
  const [PRN, setPRN] = useState("")
  const [email, setEmail] = useState("")
  const [pass, setPassword] = useState("")

  const [isSubmit, setIsSubmit] = useState(false);

  const checkInput = () => {
    if (name && PRN && email && pass) {
      setIsSubmit(true)
    }
    else {
      setIsSubmit(false)
      Alert.alert("Warning", "Please fill the all fields !!")
    }
  }

  if (isSubmit) {
    return (
      <>
        <View style={styles.container}>
          <SafeAreaView style={styles.prettyPage}>
            <Text style={{ fontSize: 18, color: "green", fontWeight: "700" }}>Data Registered Successfully !!</Text>
            <Text style={{ fontSize: 15 }}>Entered Name : {name}</Text>
            <Text style={{ fontSize: 15 }}>Entered PRN : {PRN}</Text>
            <Text style={{ fontSize: 15 }}>Entered Email : {email}</Text>
          </SafeAreaView>
        </View>
      </>
    )
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.card}>
          <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "500" }}>Registration Form</Text>
          <TextInput style={styles.textInput} placeholder='Enter Name' onChangeText={setName}></TextInput>
          <TextInput style={styles.textInput} placeholder='Enter PRN' onChangeText={setPRN}></TextInput>
          <TextInput style={styles.textInput} placeholder='Enter Email' onChangeText={setEmail}></TextInput>
          <TextInput style={styles.textInput} placeholder='Enter Password' onChangeText={setPassword} secureTextEntry ></TextInput>
          <Button title='Register' onPress={checkInput}></Button>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",

  },
  card: {
    padding: 10,
    marginInline: 15,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "black",

  },
  textInput: {
    margin: 10,
    padding: 5,
    borderWidth: 1,
    borderStyle: "dashed",
  },
  prettyPage: {
    margin: 40,
    borderWidth: 2,
    gap: 20,
    alignItems: "center",
  }

});

export default App;
