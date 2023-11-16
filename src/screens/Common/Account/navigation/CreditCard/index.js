import { Method01, Method02 } from '@/assets'
import { ButtonPrimary, CardATM, Header } from '@/components'
import { COLORS } from '@/constants'
import { routes } from '@/navigation/routes'
import { getSize } from '@/utils'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { ScrollView, View } from 'react-native'
import styles from './styles'

const CreditCard = () => {
  const navigation = useNavigation()

  const _renderCreditCard = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.wrapperCard}>
          <CardATM
            style={{ marginBottom: getSize.m(16) }}
            method={Method01}
            code="6326    9124    8124    9875"
            holder="DINH TIEN PHONG"
            time="12/2028"
          />
          <CardATM
            backgroundColor={COLORS.secondary}
            method={Method02}
            code="5578    4758    4715    6327"
            holder="HOANG QUOC VIET"
            time="05/2029"
          />
        </View>
      </ScrollView>
    )
  }
  return (
    <View style={styles.container}>
      <Header title="Credit Card And Debit" topLine />
      <_renderCreditCard />
      <ButtonPrimary
        title="Add Card"
        onPress={() => navigation.navigate(routes.ADD_CARD)}
        style={[{ marginVertical: getSize.m(16) }]}
      />
    </View>
  )
}

export default CreditCard
