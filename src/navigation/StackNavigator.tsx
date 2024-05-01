import { account, authentication, cart, common, explore, home } from '@/screens'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'react-native'
import { TabNavigation } from '.'
import { routes } from './routes'
import AuthStack from './stack/AuthStack'

const Stack = createNativeStackNavigator()

const ONBOARDING_ASYNC_KEY = 'ONBOARDING_ASNYC_KEY'

const MainStackNavigator = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null)

  let routeName

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
    routeName = routes.ONBOARD
  } else {
    routeName = routes.AUTHENTICATION
  }

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor="transparent"
      />
      <Stack.Navigator
        initialRouteName={routeName}
        screenOptions={{ headerShown: false }}>
        <>
          <Stack.Screen
            name={routes.ONBOARD}
            component={authentication.Onboard}
          />

          <Stack.Screen name={routes.AUTHENTICATION} component={AuthStack} />
          <Stack.Screen name={routes.COMMON} component={TabNavigation} />
          <Stack.Screen name={routes.HOME} component={common.Home} />
          <Stack.Screen name={routes.EXPLORE} component={common.Explore} />
          <Stack.Screen name={routes.CART} component={common.Cart} />
          <Stack.Screen name={routes.OFFER} component={common.Offer} />
          <Stack.Screen name={routes.ACCOUNT} component={common.Account} />
          <Stack.Screen
            name={routes.SUPER_FLASH_SALE}
            component={home.SuperFlashSale}
          />
          <Stack.Screen
            name={routes.PRODUCT_SEE_MORE}
            component={home.ProductSeeMore}
          />
          <Stack.Screen name={routes.DETAILS} component={home.Details} />
          <Stack.Screen name={routes.REVIEWS} component={home.Reviews} />
          <Stack.Screen
            name={routes.WRITE_REVIEW}
            component={home.WriteReview}
          />
          <Stack.Screen
            name={routes.NOTIFICATIONS}
            component={home.Notifications}
          />
          <Stack.Screen
            name={routes.OFFER_NOTIFICATION}
            component={home.OfferNotification}
          />
          <Stack.Screen
            name={routes.FEED_NOTIFICATION}
            component={home.FeedNotification}
          />
          <Stack.Screen
            name={routes.ACTIVITY_NOTIFICATION}
            component={home.ActivityNotification}
          />
          {/* Dự án từ Ants - Reviews */}
          <Stack.Screen
            name={routes.ANTS_REVIEWS}
            component={home.AntsReview}
          />

          <Stack.Screen
            name={routes.SEARCH_PAGE}
            component={explore.SearchPage}
          />
          <Stack.Screen
            name={routes.SEARCH_RESULT}
            component={explore.SearchResults}
          />
          <Stack.Screen name={routes.CATEGORY} component={explore.Category} />
          <Stack.Screen name={routes.SOFT_BY} component={explore.SoftBy} />
          <Stack.Screen
            name={routes.FILTER_SEARCH}
            component={explore.FilterSearch}
          />
          <Stack.Screen
            name={routes.PAYMENT_METHOD}
            component={cart.PaymentMethod}
          />
          <Stack.Screen name={routes.CARD} component={cart.Card} />
          <Stack.Screen
            name={routes.PURCHASE_SUCCESS}
            component={cart.PurchaseSuccess}
          />
          {/* Dự án từ Ants - Reviews */}
          <Stack.Screen
            name={routes.ADD_ADDRESS}
            component={account.AddAddress}
          />
          <Stack.Screen name={routes.ADD_CARD} component={account.AddCard} />
          <Stack.Screen name={routes.ADDRESS} component={account.Address} />
          <Stack.Screen
            name={routes.CONFIRMATION}
            component={account.Confirmation}
          />
          <Stack.Screen
            name={routes.COMPLETED_CARD}
            component={account.CompletedCard}
          />
          <Stack.Screen
            name={routes.CREDIT_CARD}
            component={account.CreditCard}
          />
          <Stack.Screen
            name={routes.CHECK_CARD}
            component={account.CheckCard}
          />
          <Stack.Screen
            name={routes.EDIT_USER_INFORMATION}
            component={account.EditUserInformation}
          />
          <Stack.Screen
            name={routes.CHANGE_PASSWORD}
            component={account.ChangePassword}
          />
          <Stack.Screen name={routes.ORDER} component={account.Order} />
          <Stack.Screen
            name={routes.ORDER_DETAILS}
            component={account.OrderDetails}
          />
          <Stack.Screen name={routes.PROFILE} component={account.Profile} />
        </>
      </Stack.Navigator>
    </>
  )
}
export default MainStackNavigator
