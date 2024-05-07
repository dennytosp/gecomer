import React, { useState } from 'react'
import {
  FlatList,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { DATA_CART } from '@/assets'
import {
  BillTextItem,
  ButtonPrimary,
  CartItem,
  Header,
  Text,
} from '@/components'
import { COLORS, FONTS } from '@/theme'
import { getSize } from '@/utils'
import { RoutesCommonStack, RoutesMainStack } from '@/navigators/routes'
import { styles } from './style'

type NavigationProps =
  ReactNavigation.RootStackScreenProps<RoutesMainStack.TAB_STACK>

const Offer = () => {
  const navigation = useNavigation<NavigationProps['navigation']>()
  const [code, setCode] = useState<string>()

  const renderFooter = () => (
    <BillTextItem
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
            <CartItem
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
            <Text title="Apply" textStyle={[styles.textApply]} />
          </TouchableOpacity>
        </View>

        {renderFooter()}

        <ButtonPrimary
          title="Check Out"
          onPress={() =>
            navigation.navigate(RoutesMainStack.COMMON_STACK, {
              screen: RoutesCommonStack.ADDRESS,
              params: {
                type: 'address-on-cart',
                headerTitle: 'Ship To',
              },
            })
          }
          style={[{ marginTop: getSize.m(16) }]}
        />
      </ScrollView>
    </View>
  )
}

export default Offer
