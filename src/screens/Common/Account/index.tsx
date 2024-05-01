import { DATA_ACCOUNT } from '@/assets'
import { EventList, Header } from '@/components'
import { getSize } from '@/utils'
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native'
import React from 'react'
import { FlatList, View } from 'react-native'
import { styles } from './styles'

const Account = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>()

  const renderEvent = ({ item }: { item: (typeof DATA_ACCOUNT)[0] }) => (
    <View style={[styles.wrapperEvent]}>
      <EventList
        icon={item.icon}
        title={item.name}
        onPress={() => navigation.navigate(item.navigation)}
        style={[
          {
            backgroundColor: item.backgroundColor,
            paddingHorizontal: getSize.m(16),
          },
        ]}
      />
    </View>
  )

  return (
    <View style={[styles.container]}>
      <Header
        title="Account"
        hideLeftIcon
        topLine
        paddingHorizontal={getSize.m(16)}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA_ACCOUNT}
        renderItem={renderEvent}
        keyExtractor={(item, index) => `account-management-${index}`}
      />
    </View>
  )
}

export default Account
