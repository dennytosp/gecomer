import React from 'react'
import { View, ScrollView, FlatList } from 'react-native'
import styles from './styles'
import { ButtonPrimary, Cart, Header, Iteming, Titling } from '@/components'
import { useNavigation } from '@react-navigation/native'
import { routes } from '@/navigation/routes'
import { DATA_CART } from '@/assets'
import { getSize } from '@/utils'
import { COLORS, FONTS } from '@/constants'

const OrderDetails = () => {
  const navigation = useNavigation()

  const _renderProducts = ({ item, index }) => {
    return (
      <Cart
        handleDelete={() => navigation.navigate(routes.CONFIRMATION)}
        style={{ marginTop: index === 0 ? getSize.m(0) : getSize.m(8) }}
        image={item.image}
        quantity={item.quantity}
        title={item.title}
        price={item.price}
        favorited={item.favorite}
      />
    )
  }
  const _renderShippingDetails = () => {
    return (
      <Iteming
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
  }
  const _renderPaymentDetails = () => {
    return (
      <Iteming
        style={{ marginBottom: getSize.m(24) }}
        left01="Items (3)"
        left02="Shipping"
        left03="Import charges"
        left04="Total Price"
        right01="$598.86"
        right02="$40.00"
        right03="$128.00"
        right04="$766.86"
        colorLeft04={COLORS.secondary}
        fontLef04={FONTS.bold}
        colorRight04={COLORS.primary}
        fontRight04={FONTS.bold}
      />
    )
  }
  return (
    <View style={styles.container}>
      <Header title="Order Details" topLine />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <Titling title="Product" marginTop={getSize.m(16)} />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={DATA_CART}
          renderItem={_renderProducts}
          keyExtractor={item => item.id.toString()}
        />

        <Titling title="Shipping Details" marginTop={getSize.m(24)} />
        <_renderShippingDetails />
        <Titling title="Payment Details" marginTop={getSize.m(24)} />
        <_renderPaymentDetails />
        <ButtonPrimary
          title="Notify Me"
          marginBottom={getSize.m(16)}
          onPress={() => navigation.navigate(routes.COMMON)}
        />
      </ScrollView>
    </View>
  )
}

export default OrderDetails
