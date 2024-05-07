import React from 'react'
import { FlatList, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { DATA_ACCOUNT } from '@/assets'
import { EventItem, Header } from '@/components'
import { RoutesMainStack } from '@/navigators/routes'
import { getSize } from '@/utils'
import { styles } from './style'

type NavigationProps = ReactNavigation.RootStackNavigationProps

const Account = () => {
  const navigation = useNavigation<NavigationProps['navigation']>()

  const renderEvent = ({ item }: { item: (typeof DATA_ACCOUNT)[0] }) => (
    <View style={[styles.wrapperEvent]}>
      <EventItem
        icon={item.icon}
        title={item.name}
        onPress={item.onPress}
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
