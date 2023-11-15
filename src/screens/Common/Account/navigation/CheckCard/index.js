import { Method01 } from '@/assets'
import { ButtonPrimary, CardATM, Header } from '@/components'
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { getSize } from '@/utils'
import { FormCarding } from '../../components'
import styles from './styles'

const CheckCard = () => {
  const navigation = useNavigation()
  const [cardNumber, setCardNumber] = useState()
  const [expirationDate, setExpirationDate] = useState()
  const [securityCode, setSecurityCode] = useState()
  const [cardHolder, setCardHolder] = useState()

  const _renderCard = () => {
    return (
      <CardATM
        style={styles.wrapperCard}
        method={Method01}
        code="6326    9124    8124    9875"
        holder="DINH TIEN PHONG"
        time="12/2028"
      />
    )
  }

  return (
    <View style={styles.container}>
      <Header title="Lailyfa Febrina Card" topLine />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <_renderCard />
        <FormCarding
          CardNumber={[cardNumber, setCardNumber]}
          ExpirationDate={[expirationDate, setExpirationDate]}
          SecurityCode={[securityCode, setSecurityCode]}
          CardHolder={[cardHolder, setCardHolder]}
        />
      </ScrollView>
      <ButtonPrimary
        title="Save"
        marginVertical={getSize.m(16)}
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}

export default CheckCard
