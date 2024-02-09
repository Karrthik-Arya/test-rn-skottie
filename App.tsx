/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
  StyleSheet,
  View,
  useColorScheme,
} from 'react-native';
import {AnimationObject, Skottie} from 'react-native-skottie';
import SPLASHSCREEN from './assets/splashscreen.json';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View>
        <Text style={styles.title}>Test Skottie</Text>
        <Skottie
          style={styles.flex}
          source={SPLASHSCREEN as AnimationObject}
          autoPlay={true}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: {
    width: '80%',
    height: '60%',
    alignSelf: 'center',
    backgroundColor: 'blue',
  },
  title: {
    color: 'black',
    fontSize: 25,
    alignSelf: 'center',
    textAlign: 'center',
  },
});

export default App;
