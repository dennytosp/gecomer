import { common } from '@/screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import TabBar from '../tab-bar'

const Tab = createBottomTabNavigator()

const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={props => <TabBar {...props} />}
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

export default TabStack