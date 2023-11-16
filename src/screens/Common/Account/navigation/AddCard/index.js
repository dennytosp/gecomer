import { ButtonPrimary, Header } from '@/components'
import { getSize } from '@/utils'
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { FormCard } from '../../components'
import styles from './styles'

const AddCard = () => {
  const navigation = useNavigation()
  const [cardNumber, setCardNumber] = useState()
  const [expirationDate, setExpirationDate] = useState()
  const [securityCode, setSecurityCode] = useState()
  const [cardHolder, setCardHolder] = useState()

  return (
    <View style={styles.container}>
      <Header title="Add Card" topLine />

      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <FormCard
          CardNumber={[cardNumber, setCardNumber]}
          ExpirationDate={[expirationDate, setExpirationDate]}
          SecurityCode={[securityCode, setSecurityCode]}
          CardHolder={[cardHolder, setCardHolder]}
        />
      </ScrollView>

      <ButtonPrimary
        title="Add Card"
        onPress={() => navigation.goBack()}
        style={[{ marginVertical: getSize.m(16) }]}
      />
    </View>
  )
}

export default AddCard
