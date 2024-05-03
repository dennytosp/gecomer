import { Method01, Method02 } from '@/assets'
import { ButtonPrimary, CreditCardItem, Header } from '@/components'
import { COLORS } from '@/constants'
import { routes } from '@/navigation/routes'
import { getSize } from '@/utils'
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native'
import React from 'react'
import { ScrollView, View } from 'react-native'
import styles from './styles'

const CreditCard = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>()

  const renderCreditCard = () => (
    <ScrollView
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      <View style={[styles.wrapperCard]}>
        <CreditCardItem
          style={{ marginBottom: getSize.m(16) }}
          method={Method01}
          code="6326912481249875"
          holder="DINH TIEN PHONG"
          time="12/2028"
        />
        <CreditCardItem
          backgroundColor={COLORS.secondary}
          method={Method02}
          code="5578475847156327"
          holder="HOANG QUOC VIET"
          time="05/2029"
        />
      </View>
    </ScrollView>
  )

  return (
    <View style={[styles.container]}>
      <Header title="Credit Card And Debit" topLine />
      {renderCreditCard()}

      <ButtonPrimary
        title="Add Card"
        onPress={() => navigation.navigate(routes.ADD_CARD)}
        style={[{ marginVertical: getSize.m(16) }]}
      />
    </View>
  )
}

export default CreditCard
