import { ChangePassword } from '@/assets'
import { ButtonPrimary, FormInput, Header } from '@/components'
import { getSize } from '@/utils'
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native'
import React, { useRef } from 'react'
import { ScrollView, View } from 'react-native'
import styles from './change-password.style'

const ChangePasswordScreen = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>()

  const oldPasswordRef = useRef(null)
  const newPasswordRef = useRef(null)
  const confirmNewPasswordRef = useRef(null)

  const onChangePassword = () => {
    navigation.goBack()
  }

  return (
    <View style={[styles.container]}>
      <Header title="Change Password" topLine />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <FormInput
          ref={oldPasswordRef}
          title="Old Password"
          leftIcon={ChangePassword}
          isRequired={true}
          placeHolder={'•••••••••••••••••'}
          isPassword={true}
          inputProps={{ keyboardType: 'visible-password', maxLength: 50 }}
          containerStyle={[{ marginTop: getSize.m(16) }]}
        />
        <FormInput
          ref={newPasswordRef}
          title="New Password"
          leftIcon={ChangePassword}
          isRequired={true}
          placeHolder={'•••••••••••••••••'}
          isPassword={true}
          inputProps={{ keyboardType: 'visible-password', maxLength: 50 }}
        />
        <FormInput
          ref={confirmNewPasswordRef}
          title="New Password Again"
          leftIcon={ChangePassword}
          isRequired={true}
          placeHolder={'•••••••••••••••••'}
          isPassword={true}
          inputProps={{ keyboardType: 'visible-password', maxLength: 50 }}
        />
      </ScrollView>

      <ButtonPrimary
        title="Save"
        onPress={onChangePassword}
        style={[{ marginVertical: getSize.m(16) }]}
      />
    </View>
  )
}

export default ChangePasswordScreen
