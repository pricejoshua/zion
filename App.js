import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './screens/ProfileScreen';
import Content from  './screens/Content';
import Chat from './screens/Chat';
import ContentList from './screens/ContentList';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginScreen from './screens/auth/LoginScreen';
import RegisterScreen from './screens/auth/RegisterScreen';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ContentScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Content" component={Content} options={({route}) => ({ title: route.params.item.title,
        tabBarIcon: ({size,focused,color}) => { return <Ionicons name="document" size={size} color={color} />; }
      })}/>
      <Tab.Screen name="Chat" component={Chat} options={{
        tabBarIcon: ({size,focused,color}) => { return <Ionicons name="chatbubble" size={size} color={color} />; }
      }}/>
    </Tab.Navigator>
  );
}

const MyStack = () => {
  return (
    <NavigationContainer>
        <Stack.Screen 
        name="LoginScreen"
        component={LoginScreen}
        options={{ title: 'Login' }}
        />

        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ title: 'Register' }}
        />

      <Stack.Navigator>
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ title: 'Register' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="ContentScreen" component={ContentScreen}  />
        {/* options={({route}) => ({ title: route.params.item.title })} */}
        <Stack.Screen name="ContentList" component={ContentList} options={{ title: "Devotionals" }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default function App() {
  return (
    MyStack()
  );
}


