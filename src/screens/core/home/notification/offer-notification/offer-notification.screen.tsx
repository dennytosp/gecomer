import { DATA_OFFER_NOTIFICATIONS, Offer } from '@/assets'
import { Header, NotificationItem } from '@/components'
import React from 'react'
import { FlatList, View } from 'react-native'
import { styles } from './offer-notification.style'

const OfferNotification = () => {
  return (
    <View style={[styles.container]}>
      <Header title="Offer" />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA_OFFER_NOTIFICATIONS}
        renderItem={({ item }) => (
          <NotificationItem
            image={Offer}
            title={item.title}
            content={item.content}
            time={item.time}
          />
        )}
        keyExtractor={(item, index) => `offer-notifications--${index}`}
      />
    </View>
  )
}

export default OfferNotification
