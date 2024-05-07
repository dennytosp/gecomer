import { FlatList, Pressable, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { DATA_ORDER } from '@/assets'
import { Header, Text } from '@/components'
import { RoutesAccountStack, RoutesMainStack } from '@/navigators/routes'
import { COLORS } from '@/theme'
import { getSize } from '@/utils'
import React from 'react'
import { styles } from './order.style'

type NavigationProps =
  ReactNavigation.RootStackScreenProps<RoutesMainStack.ACCOUNT_STACK>

const Order = () => {
  const insets = useSafeAreaInsets()
  const navigation = useNavigation<NavigationProps['navigation']>()

  const renderOrder = ({
    item,
    index,
  }: {
    item: (typeof DATA_ORDER)[0]
    index: number
  }) => (
    <Pressable
      onPress={() =>
        navigation.navigate(RoutesMainStack.ACCOUNT_STACK, {
          screen: RoutesAccountStack.ORDER_DETAILS,
        })
      }
      style={[styles.wrapperOrder]}
    >
      <Text title={item.code} textStyle={[styles.textCode]} />
      <Text
        title={'Order at Gecomer: ' + item.time}
        style={[{ marginVertical: getSize.m(12) }]}
      />

      <View style={[styles.line]}></View>
      <View style={[styles.rowOrder]}>
        <Text title="Order Status" />
        <Text title={item.status} textStyle={[{ color: COLORS.secondary }]} />
      </View>

      <View style={[styles.rowOrder, { marginVertical: getSize.m(12) }]}>
        <Text title="Items" />
        <Text title={item.quantity} textStyle={[{ color: COLORS.secondary }]} />
      </View>

      <View style={[styles.rowOrder]}>
        <Text title="Price" />
        <Text title={item.price} textStyle={[styles.textPrice]} />
      </View>
    </Pressable>
  )

  return (
    <View style={[styles.container]}>
      <Header title="Order" topLine />
      <FlatList
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        data={DATA_ORDER}
        renderItem={renderOrder}
        ItemSeparatorComponent={() => (
          <View style={[{ marginTop: getSize.m(16) }]} />
        )}
        contentContainerStyle={[
          { paddingBottom: insets.bottom, paddingTop: getSize.m(16) },
        ]}
        keyExtractor={(item, index) => `order-item-${index}`}
      />
    </View>
  )
}

export default Order
