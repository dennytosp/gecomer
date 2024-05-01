import { common } from '@/screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import CustomTabBar from './CustomTabBar'

const Tab = createBottomTabNavigator()

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={props => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name="Home"
        component={common.Home}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Explore"
        component={common.Explore}
        options={{
          tabBarLabel: 'Explore',
        }}
      />
      <Tab.Screen
        name="Cart"
        component={common.Cart}
        options={{
          tabBarLabel: 'Cart',
        }}
      />
      <Tab.Screen
        name="Offer"
        component={common.Offer}
        options={{
          tabBarLabel: 'Offer',
        }}
      />
      <Tab.Screen
        name="Account"
        component={common.Account}
        options={{
          tabBarLabel: 'Account',
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabNavigation
