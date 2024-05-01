import { Birthday, Email } from '@/assets'
import { ButtonPrimary, FormInput, Header } from '@/components'
import { getSize } from '@/utils'
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native'
import React, { useRef } from 'react'
import { ScrollView, View } from 'react-native'
import styles from './styles'

const EditUserInformation = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>()

  const firstNameRef = useRef(null)
  const lastNameRef = useRef(null)
  const genderRef = useRef(null)
  const birthdayRef = useRef(null)
  const emailRef = useRef(null)
  const phoneNumberRef = useRef(null)

  const renderForm = () => (
    <ScrollView
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled">
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
        ref={genderRef}
        title="Choose Gender"
        isRequired={true}
        placeHolder={'Male'}
        inputProps={{ maxLength: 50 }}
      />

      <FormInput
        ref={birthdayRef}
        title="Your Birhday"
        isRequired={true}
        rightIcon={<Birthday />}
        placeHolder={'21/08/2001'}
        inputProps={{ keyboardType: 'numeric', maxLength: 10 }}
      />

      <FormInput
        ref={emailRef}
        leftIcon={<Email />}
        isRequired={true}
        placeHolder={'mad.dinh@gmail.com'}
        inputProps={{ keyboardType: 'email-address', maxLength: 50 }}
      />

      <FormInput
        ref={phoneNumberRef}
        title="Phone Number"
        isRequired={true}
        placeHolder={'(307) 555-0133'}
        inputProps={{ keyboardType: 'numeric', maxLength: 11 }}
      />
    </ScrollView>
  )

  return (
    <View style={[styles.container]}>
      <Header title="Edit Profile" topLine />
      {renderForm()}

      <ButtonPrimary
        title="Save"
        atBottom={true}
        onPress={() => navigation.goBack()}
        style={[{ marginVertical: getSize.m(16) }]}
      />
    </View>
  )
}

export default EditUserInformation
