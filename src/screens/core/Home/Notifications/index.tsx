import { DATA_LIST_NOTIFICATIONS } from '@/assets'
import { EventList, Header } from '@/components'
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native'
import React from 'react'
import { FlatList, View } from 'react-native'
import { styles } from './styles'

const Notifications = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>()

  const renderCardTop = ({
    item,
  }: {
    item: (typeof DATA_LIST_NOTIFICATIONS)[0]
  }) => (
    <EventList
      icon={item.image}
      title={item.name}
      onPress={() => navigation.navigate(item.navigation)}
      numberOfNotification={String(item.number)}
    />
  )

  return (
    <View style={[styles.container]}>
      <Header title="Notifications" topLine />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA_LIST_NOTIFICATIONS}
        renderItem={renderCardTop}
        keyExtractor={(item, index) => `notifications--${index}`}
      />
    </View>
  )
}

export default Notifications
