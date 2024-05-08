






import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View, Text, Image } from 'react-native'
import React from 'react'
import Home from './Home'
import Category from './Category'
import Search from './Search'
import WishList from './WishList'
import MyProfile from '../Drawer/MyProfile'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon1 from 'react-native-vector-icons/SimpleLineIcons'

const BottomTab = createBottomTabNavigator()

const BottomNavigator = () => {
    return (
        <BottomTab.Navigator
            screenOptions={{

                tabBarLabelStyle: {
                    color: '#000',
                    fontSize: 13,
                    marginBottom: 5,
                },
                tabBarStyle: {
                    backgroundColor: 'white',
                    height: 60
                },
                tabBarActiveTintColor: '#762264',


            }}
        >
            <BottomTab.Screen
                name='Home'
                component={Home}
                options={{
                    headerShown: false,


                    tabBarIcon: ({ color, focused }) => (
                        <Icon
                            name='home-outline'
                            size={focused ? 28 : 22} // Change icon size if tab is active
                            color={focused ? '#762264' : '#000'}
                        />
                    ),
                }} />

            <BottomTab.Screen
                name='Category'
                component={Category}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <Icon
                            name='grid-outline'
                            size={focused ? 28 : 22}
                            color={focused ? '#762264' : '#000'}
                        />
                    ),
                }} />
            <BottomTab.Screen
                name='Search'
                component={Search}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <Icon
                            name='search'
                            size={focused ? 28 : 22}
                            color={focused ? '#762264' : '#000'}
                        />
                    ),
                }} />
            <BottomTab.Screen
                name='Wishlist'
                component={WishList}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <Icon
                            name='heart-outline'
                            size={focused ? 29 : 23}
                            color={focused ? '#762264' : '#000'}
                        />
                    ),

                }}

            />
            <BottomTab.Screen
                name='My Profile'
                component={MyProfile}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <Icon1
                            name='user'
                            size={focused ? 24 : 20}
                            color={'#000'}


                        />
                    ),
                }}

            />
        </BottomTab.Navigator >
    )
}

export default BottomNavigator
