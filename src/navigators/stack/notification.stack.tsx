import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { home } from '@/screens'
import { RoutesNotificationStack } from '../routes'
import { NotificationStackParamsList } from '../types'

const Notification = createNativeStackNavigator<NotificationStackParamsList>()

const NotificationStack = () => {
  return (
    <Notification.Navigator screenOptions={{ headerShown: false }}>
      <Notification.Screen
        name={RoutesNotificationStack.NOTIFICATIONS}
        component={home.Notifications}
      />
      <Notification.Screen
        name={RoutesNotificationStack.OFFER_NOTIFICATION}
        component={home.OfferNotification}
      />
      <Notification.Screen
        name={RoutesNotificationStack.FEED_NOTIFICATION}
        component={home.FeedNotification}
      />
      <Notification.Screen
        name={RoutesNotificationStack.ACTIVITY_NOTIFICATION}
        component={home.ActivityNotification}
      />
    </Notification.Navigator>
  )
}

export default NotificationStack
