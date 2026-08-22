/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import Login from './Components/Login';
import Registration from './Components/Registration';
import { useState } from 'react';

const App = () => {
  const [screen, setScreen] = useState('login');
  return (
    <View style={styles.container}>
      {screen === 'login' ? (<Login onRegister={() => setScreen('register')} />) :
        <Registration onLogin={() => setScreen('login')} />}
    </View>
  )

}


const styles = StyleSheet.create({
  container: {
    flex: 1

  },



})
export default App;
