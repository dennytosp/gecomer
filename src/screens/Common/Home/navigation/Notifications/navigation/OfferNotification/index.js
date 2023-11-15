import { DATA_OFFER_NOTI, Offer } from '@/assets'
import { Header, NotifList } from '@/components'
import React from 'react'
import { FlatList, View } from 'react-native'
import styles from './styles'

const OfferNotification = () => {
  const _renderCenter = ({ item }) => {
    return (
      <NotifList
        image={Offer}
        title={item.title}
        content={item.content}
        time={item.time}
      />
    )
  }

  return (
    <View style={styles.container}>
      <Header title="Offer" />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA_OFFER_NOTI}
        renderItem={_renderCenter}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  )
}

export default OfferNotification
