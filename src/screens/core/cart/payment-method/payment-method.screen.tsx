import { DATA_PAYMENT } from '@/assets'
import { EventItem, Header } from '@/components'
import { getSize } from '@/utils'
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native'
import React from 'react'
import { FlatList, View } from 'react-native'
import { styles } from './payment-method.style'

const PaymentMethodScreen = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>()

  const renderCenter = ({ item }: { item: (typeof DATA_PAYMENT)[0] }) => (
    <View style={[styles.wrapperCenter]}>
      <EventItem
        icon={item.icon}
        title={item.name}
        style={[
          {
            backgroundColor: item.backgroundColor,
            paddingHorizontal: getSize.m(16),
          },
        ]}
        onPress={() => navigation.navigate(item.navigation)}
      />
    </View>
  )

  return (
    <View style={[styles.container]}>
      <Header title="Payment" topLine paddingHorizontal={getSize.m(16)} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA_PAYMENT}
        renderItem={renderCenter}
        keyExtractor={(item, index) => `payment-method-${index}`}
      />
    </View>
  )
}

export default PaymentMethodScreen
