import { ButtonPrimary, FormInput } from '@/components'
import React, { FC, useRef } from 'react'
import { ScrollView, View } from 'react-native'
import { styles } from './styles'
import { getSize } from '@/utils'
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native'

type FormCardProps = {
  titleButton: string
  type: 'add' | 'edit'
}

const FormCard: FC<FormCardProps> = ({ type, titleButton }) => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>()

  const cardNumberRef = useRef(null)
  const expirationDateRef = useRef(null)
  const securityCodeRef = useRef(null)
  const cardHolderRef = useRef(null)

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <FormInput
          ref={cardNumberRef}
          title="Card Number"
          isRequired={true}
          placeHolder={'Enter Card Number'}
          inputProps={{ keyboardType: 'number-pad', maxLength: 20 }}
        />

        <View style={[styles.rowInput]}>
          <View style={[styles.widthRow]}>
            <FormInput
              ref={expirationDateRef}
              title="Expiration Date"
              isRequired={true}
              placeHolder={'Expiration Date'}
              inputProps={{ keyboardType: 'numeric', maxLength: 10 }}
            />
          </View>

          <View style={[styles.widthRow]}>
            <FormInput
              ref={securityCodeRef}
              title="Security Code"
              isRequired={true}
              placeHolder={'Security Code'}
              inputProps={{ keyboardType: 'number-pad', maxLength: 10 }}
            />
          </View>
        </View>

        <FormInput
          ref={cardHolderRef}
          title="Card Holder"
          isRequired={true}
          placeHolder={'Enter Card Number'}
          inputProps={{ maxLength: 50 }}
        />
      </ScrollView>

      <ButtonPrimary
        title={titleButton}
        atBottom={true}
        onPress={() => navigation.goBack()}
        style={[{ marginVertical: getSize.m(16) }]}
      />
    </>
  )
}

export default FormCard
