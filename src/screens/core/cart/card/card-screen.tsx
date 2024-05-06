import { AddShip, Method01 } from '@/assets/index'
import { ButtonPrimary, CreditCardItem, Header } from '@/components'
import { routes } from '@/navigators/routes'
import { getSize } from '@/utils'
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native'
import React from 'react'
import { ScrollView, View } from 'react-native'
import styles from './card.style'

const Card = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>()

  return (
    <View style={[styles.container]}>
      <Header
        title="Choose Card"
        rightIconEnd={AddShip}
        onPressRightEnd={() => navigation.navigate(routes.ADD_CARD)}
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
        onPress={() => navigation.navigate(routes.PURCHASE_SUCCESS)}
        style={[{ marginTop: getSize.m(16) }]}
      />
    </View>
  )
}

export default Card
