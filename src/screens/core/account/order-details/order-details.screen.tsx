import { DATA_CART } from '@/assets'
import {
  ButtonPrimary,
  CartItem,
  Header,
  BillTextItem,
  Title,
} from '@/components'
import { COLORS, FONTS } from '@/theme'
import { routes } from '@/navigators/routes'
import { getSize } from '@/utils'
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native'
import React from 'react'
import { FlatList, ScrollView, View } from 'react-native'
import { styles } from './order-details.style'

const OrderDetails = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>()

  const renderShippingDetails = () => (
    <BillTextItem
      left01="Date Shipping"
      left02="Shipping"
      left03="No. Resi"
      left04="Address"
      right01="January 16, 2020"
      right02="POS Reggular"
      right03="000192848573"
      right04="2727 New  Owerri, Owerri, Imo State 78410"
    />
  )

  const renderPaymentDetails = () => (
    <BillTextItem
      style={{ marginBottom: getSize.m(24) }}
      left01="Items (3)"
      left02="Shipping"
      left03="Import charges"
      left04="Total Price"
      right01="$598.86"
      right02="$40.00"
      right03="$128.00"
      right04="$766.86"
      textLeftStyle={[{ color: COLORS.secondary, fontFamily: FONTS.bold }]}
      textRightStyle={[{ color: COLORS.primary, fontFamily: FONTS.bold }]}
    />
  )

  return (
    <View style={[styles.container]}>
      <Header title="Order Details" topLine />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <Title title="Product" style={[{ marginTop: getSize.m(16) }]} />
        <FlatList
          nestedScrollEnabled
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          data={DATA_CART}
          renderItem={({ item, index }) => (
            <CartItem item={item} index={index} />
          )}
          ItemSeparatorComponent={() => (
            <View style={[{ marginTop: getSize.m(8) }]} />
          )}
          keyExtractor={(item, index) => `order-details-${index}`}
        />

        <Title
          title="Shipping Details"
          style={[{ marginTop: getSize.m(24) }]}
        />

        {renderShippingDetails()}

        <Title title="Payment Details" style={[{ marginTop: getSize.m(24) }]} />

        {renderPaymentDetails()}

        <ButtonPrimary
          title="Notify Me"
          onPress={() => navigation.navigate(routes.COMMON)}
          style={[{ marginTop: getSize.m(16) }]}
        />
      </ScrollView>
    </View>
  )
}

export default OrderDetails
