import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NOTIFICATION_SCREEN } from '@/screens'
import { RoutesNotificationStack } from '../routes'
import { NotificationStackParamsList } from '../types'

const Notification = createNativeStackNavigator<NotificationStackParamsList>()

const NotificationStack = () => {
  return (
    <Notification.Navigator screenOptions={{ headerShown: false }}>
      <Notification.Screen
        name={RoutesNotificationStack.NOTIFICATIONS}
        component={NOTIFICATION_SCREEN.Notification}
      />
      <Notification.Screen
        name={RoutesNotificationStack.OFFER_NOTIFICATION}
        component={NOTIFICATION_SCREEN.OfferNotification}
      />
      <Notification.Screen
        name={RoutesNotificationStack.FEED_NOTIFICATION}
        component={NOTIFICATION_SCREEN.FeedNotification}
      />
      <Notification.Screen
        name={RoutesNotificationStack.ACTIVITY_NOTIFICATION}
        component={NOTIFICATION_SCREEN.ActivityNotification}
      />
    </Notification.Navigator>
  )
}

export default NotificationStack
