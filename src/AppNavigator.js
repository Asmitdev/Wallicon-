import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Splash from './screens/Splash';
import Login from './screens/Login';
import Register from './screens/Register';
import HomeScreen from './screens/HomeScreen';
import { StatusBar, View } from 'react-native';
import Fullview from './screens/Fullview';

const Stack = createStackNavigator();
const AppNavigator = () => {
    return (
        <NavigationContainer>
            <StatusBar
                backgroundColor="#762264" // Background color of the status bar
                barStyle="light-content" // Text color of the status bar (light or dark)
            />
            <Stack.Navigator initialRouteName='Splash'>
                <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
                <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
                <Stack.Screen name='Register' component={Register} options={{ headerShown: false }} />
                <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name='fullview' component={Fullview} options={{ headerShown: false }} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator