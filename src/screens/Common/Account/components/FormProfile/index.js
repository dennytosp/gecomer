import { Birthday, DownPress, PhoneNumber } from '@/assets'
import { FormInput, Titling } from '@/components'
import { getSize } from '@/utils'
import React from 'react'
import { View } from 'react-native'
import { styles } from './styles'

const FormProfile = ({
  FirstName,
  LastName,
  Gender,
  Birthdayng,
  Email,
  PhoneNumbers,
}) => {
  const [firstName, setFirstName] = FirstName
  const [lastName, setLastName] = LastName
  const [gender, setGender] = Gender
  const [birthday, setBirthday] = Birthdayng
  const [email, setEmail] = Email
  const [phoneNumber, setPhoneNumber] = PhoneNumbers

  return (
    <View style={styles.wrapperContent}>
      <Titling title="First Name" />
      <FormInput
        placeholder="Gin"
        marginBottom={getSize.m(24)}
        onChangeText={text => setFirstName(text)}
      />

      <Titling title="Last Name" />
      <FormInput
        placeholder="Lonely"
        marginBottom={getSize.m(24)}
        onChangeText={text => setLastName(text)}
      />

      <Titling title="Choose Gender" />
      <FormInput
        placeholder="Male"
        marginBottom={getSize.m(24)}
        right={DownPress}
        onChangeText={text => setGender(text)}
      />

      <Titling title="Your Birhday" />
      <FormInput
        placeholder="21/08/2001"
        marginBottom={getSize.m(24)}
        right={Birthday}
        keyboardType="numeric"
        onChangeText={text => setBirthday(text)}
      />

      <Titling title="Email" />
      <FormInput
        placeholder="ginphone@gmail.com"
        marginBottom={getSize.m(24)}
        keyboardType="email-address"
        onChangeText={text => setEmail(text)}
      />

      <Titling title="Phone Number" />
      <FormInput
        placeholder="(307) 555-0133"
        marginBottom={getSize.m(24)}
        icon={PhoneNumber}
        keyboardType="numeric"
        onChangeText={text => setPhoneNumber(text)}
      />
    </View>
  )
}

export default FormProfile
