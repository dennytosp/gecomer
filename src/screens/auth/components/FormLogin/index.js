import React from 'react'
import { View } from 'react-native'
import { Email, Password } from '@/assets'
import { FormInput } from '@/components'
import { getSize } from '@/utils'

const FormLogin = ({ Emailing, Passworde }) => {
  const [emai, setEmail] = Emailing
  const [password, setPassword] = Passworde

  return (
    <View>
      <FormInput
        onChangeText={value => setEmail(value)}
        icon={Email}
        placeholder="Your Email"
        keyboardType="email-address"
        marginBottom={getSize.m(8)}
        value={emai}
      />
      <FormInput
        onChangeText={value => setPassword(value)}
        icon={Password}
        placeholder="Password"
        value={password}
        secureTextEntry
      />
    </View>
  )
}

export default FormLogin
