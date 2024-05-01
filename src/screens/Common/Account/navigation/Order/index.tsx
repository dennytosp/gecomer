import { DATA_ORDER } from '@/assets'
import { Header, Texting } from '@/components'
import { COLORS } from '@/constants'
import { routes } from '@/navigation/routes'
import { getSize } from '@/utils'
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native'
import React from 'react'
import { FlatList, Pressable, View } from 'react-native'
import { styles } from './styles'

const Order = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>()

  const renderOrder = ({
    item,
    index,
  }: {
    item: (typeof DATA_ORDER)[0]
    index: number
  }) => (
    <Pressable
      onPress={() => navigation.navigate(routes.ORDER_DETAILS)}
      style={[
        styles.wrapperOrder,
        { marginTop: index === 0 ? getSize.m(16) : 0 },
      ]}
    >
      <Texting title={item.code} textStyle={[styles.textCode]} />
      <Texting
        title={'Order at Gecomer: ' + item.time}
        style={[{ marginVertical: getSize.m(12) }]}
      />

      <View style={[styles.line]}></View>
      <View style={[styles.rowOrder]}>
        <Texting title="Order Status" />
        <Texting
          title={item.status}
          textStyle={[{ color: COLORS.secondary }]}
        />
      </View>

      <View style={[styles.rowOrder, { marginVertical: getSize.m(12) }]}>
        <Texting title="Items" />
        <Texting
          title={item.quantity}
          textStyle={[{ color: COLORS.secondary }]}
        />
      </View>

      <View style={[styles.rowOrder]}>
        <Texting title="Price" />
        <Texting title={item.price} textStyle={[styles.textPrice]} />
      </View>
    </Pressable>
  )

  return (
    <View style={[styles.container]}>
      <Header title="Order" topLine />
      <FlatList
        // style={{marginTop: getSize.m(16)}}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        data={DATA_ORDER}
        renderItem={renderOrder}
        keyExtractor={(item, index) => `order-item-${index}`}
      />
    </View>
  )
}

export default Order
