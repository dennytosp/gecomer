import { DATA_LIST_NOTI } from '@/assets'
import { EventList, Header } from '@/components'
import { width } from '@/utils'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, View } from 'react-native'
import styles from './styles'

const Notifications = () => {
  const navigation = useNavigation()
  const _renderCardTop = ({ item }) => {
    return (
      <EventList
        onPress={() => navigation.navigate(item.navigation)}
        icon={item.image}
        title={item.name}
        notifNumber={item.number}
        widthing={width / 1.5}
        warning
      />
    )
  }

  return (
    <View style={styles.container}>
      <Header title="Notifications" topLine />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA_LIST_NOTI}
        renderItem={_renderCardTop}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  )
}

export default Notifications
