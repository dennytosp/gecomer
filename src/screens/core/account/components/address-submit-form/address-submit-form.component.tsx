import { DownPress } from '@/assets'
import { ButtonPrimary, FormInput } from '@/components'
import { getSize } from '@/utils'
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native'
import React, { useRef } from 'react'
import { View } from 'react-native'
import { styles } from './address-submit-form.style'

type Props = {
  buttonTitle: string
}

const AddressSubmitForm = ({ buttonTitle }: Props) => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>()
  const countryRef = useRef(null)
  const firstNameRef = useRef(null)
  const lastNameRef = useRef(null)
  const addressRef = useRef(null)
  const addressBackupRef = useRef(null)
  const cityRef = useRef(null)
  const regionRef = useRef(null)
  const zipCodeRef = useRef(null)
  const phoneNumberRef = useRef(null)

  const onSaveAddress = () => {
    navigation.goBack()
  }

  return (
    <View style={[styles.wrapperContent]}>
      <FormInput
        ref={countryRef}
        title="Country or region"
        rightIcon={DownPress}
        isRequired={true}
        placeHolder={'Vietnam'}
        inputProps={{ maxLength: 50 }}
        containerStyle={[{ marginTop: getSize.m(16) }]}
      />

      <FormInput
        ref={firstNameRef}
        title="First Name"
        isRequired={true}
        placeHolder={'Mad'}
        inputProps={{ maxLength: 50 }}
      />

      <FormInput
        ref={lastNameRef}
        title="Last Name"
        isRequired={true}
        placeHolder={'Dinh'}
        inputProps={{ maxLength: 50 }}
      />

      <FormInput
        ref={addressRef}
        title="Street Address"
        isRequired={true}
        placeHolder={'205 Davida'}
        inputProps={{ maxLength: 150 }}
      />

      <FormInput
        ref={addressBackupRef}
        title="Street Address 2 (Optional)"
        isRequired={true}
        placeHolder={'959 Serbia'}
        inputProps={{ maxLength: 150 }}
      />

      <FormInput
        ref={cityRef}
        title="City"
        rightIcon={DownPress}
        isRequired={true}
        placeHolder={'Ho Chi Minh'}
        inputProps={{ maxLength: 50 }}
      />

      <FormInput
        ref={regionRef}
        title="State/Province/Region"
        isRequired={true}
        placeHolder={'Go Vap District'}
        inputProps={{ maxLength: 50 }}
      />

      <FormInput
        ref={zipCodeRef}
        title="Zip Code"
        isRequired={true}
        placeHolder={'57793'}
        inputProps={{ keyboardType: 'numeric', maxLength: 50 }}
      />

      <FormInput
        ref={phoneNumberRef}
        title="Phone Number"
        isRequired={true}
        placeHolder={'(316) 555-0116'}
        inputProps={{ keyboardType: 'numeric', maxLength: 11 }}
      />

      <ButtonPrimary title={buttonTitle} onPress={onSaveAddress} />
    </View>
  )
}

export default AddressSubmitForm
