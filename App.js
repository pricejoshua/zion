import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import ProfileScreen from './screens/ProfileScreen';
import Content from  './screens/Content';
import AuthScreen from './screens/AuthScreen';
import Chat from './components/Chat';
import ContentList from './screens/ContentList';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Auth"
          component={AuthScreen}
          options={{ title: 'Login' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Content" component={Content} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="ContentList" component={ContentList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default function App() {
  return (
    MyStack()
  );
}


