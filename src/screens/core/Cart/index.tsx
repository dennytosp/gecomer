import { DATA_CART } from '@/assets'
import { ButtonPrimary, Cart, Header, Iteming } from '@/components'
import Texting from '@/components/Texting'
import { COLORS, FONTS } from '@/constants'
import { routes } from '@/navigation/routes'
import { getSize } from '@/utils'
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native'
import React, { useState } from 'react'
import {
  FlatList,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { styles } from './styles'

const Offer = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>()
  const [code, setCode] = useState<string>()

  const renderFooter = () => (
    <Iteming
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
      <Header title="Your Cart" hideLeftIcon topLine />
      <ScrollView
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
      >
        <FlatList
          nestedScrollEnabled={true}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          data={DATA_CART}
          renderItem={({ item, index }) => (
            <Cart
              item={item}
              index={index}
              style={{ marginTop: getSize.m(16) }}
            />
          )}
          keyExtractor={(item, index) => `cart-${index}`}
        />

        <View style={[styles.wrapperCenter]}>
          <TextInput
            style={[styles.input]}
            placeholder="Enter Coupon Code"
            placeholderTextColor={COLORS.grey}
            onChangeText={text => setCode(text)}
          />
          <TouchableOpacity style={[styles.wrapperButtonApply]}>
            <Texting title="Apply" textStyle={[styles.textApply]} />
          </TouchableOpacity>
        </View>

        {renderFooter()}

        <ButtonPrimary
          title="Check Out"
          onPress={() =>
            navigation.navigate(routes.ADDRESS, {
              type: 'address-on-cart',
              headerTitle: 'Ship To',
            })
          }
          style={[{ marginTop: getSize.m(16) }]}
        />
      </ScrollView>
    </View>
  )
}

export default Offer
