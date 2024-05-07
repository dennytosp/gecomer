import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { common } from '@/screens'
import { RoutesExploreStack } from '../routes'
import { ExploreStackParamsList } from '../types'

const Explore = createNativeStackNavigator<ExploreStackParamsList>()

const ExploreStack = () => {
  return (
    <Explore.Navigator screenOptions={{ headerShown: false }}>
      <Explore.Screen
        name={RoutesExploreStack.EXPLORE}
        component={common.Explore}
      />
    </Explore.Navigator>
  )
}

export default ExploreStack
