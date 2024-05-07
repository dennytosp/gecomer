import React, { useEffect, useState } from 'react'
import { StatusBar } from 'react-native'
import BootSplash from 'react-native-bootsplash'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RoutesMainStack } from '../routes'
import {
  AccountStack,
  AuthStack,
  CartStack,
  CommonStack,
  ExploreStack,
  NotificationStack,
  OfferStack,
  PaymentStack,
  ProductDetailStack,
  SearchStack,
  TabStack,
} from '../stack'

const Root = createNativeStackNavigator<ReactNavigation.RootParamList>()

const ONBOARDING_ASYNC_KEY = 'ONBOARDING_ASNYC_KEY'

const MainStackNavigator = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null)

  let routeName

  useEffect(() => {
    const onInitialized = async () => {}
    StatusBar.setBarStyle('light-content')

    onInitialized().finally(async () => {
      setTimeout(async () => {
        StatusBar.setBarStyle('dark-content')
        await BootSplash.hide({ fade: true })
      }, 500)
    })
  }, [])

  useEffect(() => {
    let isCancelled = false
    const runAsync = async () => {
      try {
        if (!isCancelled) {
          AsyncStorage.getItem(ONBOARDING_ASYNC_KEY).then(value => {
            if (value == null) {
              AsyncStorage.setItem(ONBOARDING_ASYNC_KEY, 'true')
              setIsFirstLaunch(true)
            } else {
              setIsFirstLaunch(false)
            }
          })
        }
      } catch (e) {
        if (!isCancelled) {
          throw e
        }
      }
    }

    runAsync()

    return () => {
      isCancelled = true
    }
  }, [])

  if (isFirstLaunch === null) {
    return null
  } else if (isFirstLaunch == true) {
    routeName = RoutesMainStack.COMMON_STACK
  } else {
    routeName = RoutesMainStack.AUTH_STACK
  }

  return (
    <>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <Root.Navigator
        initialRouteName={routeName}
        screenOptions={{ headerShown: false }}
      >
        <>
          <Root.Screen
            name={RoutesMainStack.ACCOUNT_STACK}
            component={AccountStack}
          />

          <Root.Screen
            name={RoutesMainStack.AUTH_STACK}
            component={AuthStack}
          />
          <Root.Screen
            name={RoutesMainStack.CART_STACK}
            component={CartStack}
          />
          <Root.Screen
            name={RoutesMainStack.COMMON_STACK}
            component={CommonStack}
          />
          <Root.Screen
            name={RoutesMainStack.EXPLORE_STACK}
            component={ExploreStack}
          />
          <Root.Screen
            name={RoutesMainStack.NOTIFICATION_STACK}
            component={NotificationStack}
          />
          <Root.Screen
            name={RoutesMainStack.OFFER_STACK}
            component={OfferStack}
          />
          <Root.Screen
            name={RoutesMainStack.PAYMENT_STACK}
            component={PaymentStack}
          />
          <Root.Screen
            name={RoutesMainStack.PRODUCT_DETAIL_STACK}
            component={ProductDetailStack}
          />
          <Root.Screen
            name={RoutesMainStack.SEARCH_STACK}
            component={SearchStack}
          />
          <Root.Screen name={RoutesMainStack.TAB_STACK} component={TabStack} />
        </>
      </Root.Navigator>
    </>
  )
}
export default MainStackNavigator
