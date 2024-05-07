import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { common } from '@/screens'
import TabBar from '../components/tab-bar.component'
import { RoutesTabStack } from '../routes'
import { TabStackParamsList } from '../types'

const Tab = createBottomTabNavigator<TabStackParamsList>()

const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={props => <TabBar {...props} />}
    >
      <Tab.Screen
        name={RoutesTabStack.HOME_TAB}
        component={common.Home}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name={RoutesTabStack.EXPLORE_TAB}
        component={common.Explore}
        options={{
          tabBarLabel: 'Explore',
        }}
      />
      <Tab.Screen
        name={RoutesTabStack.CART_TAB}
        component={common.Cart}
        options={{
          tabBarLabel: 'Cart',
        }}
      />
      <Tab.Screen
        name={RoutesTabStack.OFFER_TAB}
        component={common.Offer}
        options={{
          tabBarLabel: 'Offer',
        }}
      />
      <Tab.Screen
        name={RoutesTabStack.ACCOUNT_TAB}
        component={common.Account}
        options={{
          tabBarLabel: 'Account',
        }}
      />
    </Tab.Navigator>
  )
}

export default TabStack
