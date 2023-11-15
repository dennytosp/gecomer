import React from 'react'
import { View } from 'react-native'
import { FormInput, Titling } from '@/components'
import { getSize } from '@/utils'
import styles from './styles'

const FormCarding = ({
  CardNumber,
  ExpirationDate,
  SecurityCode,
  CardHolder,
}) => {
  const [cardNumber, setCardNumber] = CardNumber
  const [expirationDate, setExpirationDate] = ExpirationDate
  const [securityCode, setSecurityCode] = SecurityCode
  const [cardHolder, setCardHolder] = CardHolder

  return (
    <View style={styles.wrapperContent}>
      <Titling title="Card Number" />
      <FormInput
        placeholder="Enter Card Number"
        keyboardType="number-pad"
        onChangeText={text => setCardNumber(text)}
      />
      <View style={styles.rowInput}>
        <View>
          <Titling title="Expiration Date" />
          <FormInput
            placeholder="Expiration Date"
            keyboardType="numeric"
            style={styles.inputRowLeft}
            onChangeText={text => setExpirationDate(text)}
          />
        </View>

        <View>
          <Titling title="Security Code" textAlign="left" />
          <FormInput
            placeholder="Security Code"
            style={styles.inputRowRight}
            keyboardType="number-pad"
            onChangeText={text => setSecurityCode(text)}
          />
        </View>
      </View>

      <Titling title="Card Holder" marginTop={getSize.m(24)} />
      <FormInput
        placeholder="Enter Card Number"
        onChangeText={text => setCardHolder(text)}
      />
    </View>
  )
}

export default FormCarding
