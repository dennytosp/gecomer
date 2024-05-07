import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TAB_SCREEN } from '@/screens'
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
        component={TAB_SCREEN.Home}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name={RoutesTabStack.EXPLORE_TAB}
        component={TAB_SCREEN.Explore}
        options={{
          tabBarLabel: 'Explore',
        }}
      />
      <Tab.Screen
        name={RoutesTabStack.CART_TAB}
        component={TAB_SCREEN.Cart}
        options={{
          tabBarLabel: 'Cart',
        }}
      />
      <Tab.Screen
        name={RoutesTabStack.OFFER_TAB}
        component={TAB_SCREEN.Offer}
        options={{
          tabBarLabel: 'Offer',
        }}
      />
      <Tab.Screen
        name={RoutesTabStack.ACCOUNT_TAB}
        component={TAB_SCREEN.Account}
        options={{
          tabBarLabel: 'Account',
        }}
      />
    </Tab.Navigator>
  )
}

export default TabStack
