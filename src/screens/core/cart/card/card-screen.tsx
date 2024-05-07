import React from 'react'
import { ScrollView, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { AddShip, Method01 } from '@/assets'
import { ButtonPrimary, CreditCardItem, Header } from '@/components'
import { RoutesMainStack, RoutesPaymentStack } from '@/navigators/routes'
import { getSize } from '@/utils'
import styles from './card.style'

type NavigationProps =
  ReactNavigation.RootStackScreenProps<RoutesMainStack.PAYMENT_STACK>

const CardScreen = () => {
  const navigation = useNavigation<NavigationProps['navigation']>()

  return (
    <View style={[styles.container]}>
      <Header
        title="Choose Card"
        rightIconEnd={AddShip}
        onPressRightEnd={() =>
          navigation.navigate(RoutesMainStack.PAYMENT_STACK, {
            screen: RoutesPaymentStack.ADD_CARD,
          })
        }
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <CreditCardItem
          method={Method01}
          code="6326912481249875"
          holder="DINH TIEN PHONG"
          time="12/2028"
        />
      </ScrollView>

      <ButtonPrimary
        title="Pay $766.86"
        onPress={() =>
          navigation.navigate(RoutesMainStack.PAYMENT_STACK, {
            screen: RoutesPaymentStack.PURCHASE_SUCCESS,
          })
        }
        style={[{ marginTop: getSize.m(16) }]}
      />
    </View>
  )
}

export default CardScreen
