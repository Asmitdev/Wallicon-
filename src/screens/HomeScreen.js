
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import AllCategories from '../Drawer/AllCategories'
import MyProfile from '../Drawer/MyProfile'
import Customer from '../Drawer/Customer'
import AllBrands from '../Drawer/AllBrands'
import MyOrders from '../Drawer/MyOrders'
import MyWallet from '../Drawer/MyWallet'
import SavedAddress from '../Drawer/SavedAddress'
import ReferAndEarn from '../Drawer/ReferAndEarn'
import More from '../Drawer/More'
import BottomNavigator from '../Bottom/BottomNavigator'
import CustomDrawer from '../Drawer/CustomDrawer'

const Drawer = createDrawerNavigator()
const HomeScreen = () => {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer{...props} />}>
            <Drawer.Screen name="BottomTab" component={BottomNavigator} options={{ headerShown: false }} />
            <Drawer.Screen name='My Profile' component={MyProfile} options={{ headerShown: false }} />
            <Drawer.Screen name='All Categories' component={AllCategories} options={{ headerShown: false }} />
            <Drawer.Screen name='All Brands' component={AllBrands} options={{ headerShown: false }} />
            <Drawer.Screen name='My Orders' component={MyOrders} options={{ headerShown: false }} />
            <Drawer.Screen name='My Wallet' component={MyWallet} options={{ headerShown: false }} />
            <Drawer.Screen name='Save Address' component={SavedAddress} options={{ headerShown: false }} />
            <Drawer.Screen name='Refer And Earn' component={ReferAndEarn} options={{ headerShown: false }} />
            <Drawer.Screen name='Customer' component={Customer} options={{ headerShown: false }} />
            <Drawer.Screen name='More' component={More} options={{ headerShown: false }} />

        </Drawer.Navigator>
    )
}

export default HomeScreen