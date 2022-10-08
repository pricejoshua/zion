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
import BasicDataScreen from './screens/register/BasicDataScreen';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// const prevGetStateForAction = Navigator.router.getStateForAction;

// Navigator.router.getStateForAction = (action, state) => {
//   // Do not allow to go back from Home
//   if (action.type === 'Navigation/BACK' && state && state.routes[state.index].routeName === 'Home') {
//     return null;
//   }

//   // Do not allow to go back to Login
//   if (action.type === 'Navigation/BACK' && state) {
//     const newRoutes = state.routes.filter(r => r.routeName !== 'Login');
//     const newIndex = newRoutes.length - 1;
//     return prevGetStateForAction(action, { index: newIndex, routes: newRoutes });
//   }
//   return prevGetStateForAction(action, state);
// };


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
      <Stack.Navigator>
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
        <Stack.Screen
          name="BasicDataScreen"
          component={BasicDataScreen}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="ContentScreen" component={ContentScreen}  />
        <Stack.Screen name="ContentList" component={ContentList} options={{ title: "Devotionals", gestureEnabled: false, headerLeft: () => <></> }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default function App() {
  return (
    MyStack()
  );
}


