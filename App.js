import React from 'react';
import { StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux'; //Provider is a wrapper that injects or levels our app to have Redux in it.
import HomeScreen from './screens/HomeScreen';
import { store } from './store';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './screens/MapScreen';
import tw from 'tailwind-react-native-classnames';


// 1. Setup Redux

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider> 
          <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"} 
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
            style={tw `flex-1`}>
            <Stack.Navigator>
              <Stack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown: false,}} />
              <Stack.Screen name='MapScreen' component={MapScreen} options={{headerShown: false,}} />
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}