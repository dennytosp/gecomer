import { ButtonPrimary, Header } from '@/components'
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { getSize } from '@/utils'
import { FormPassword } from '../../components'
import styles from './styles'

const ChangePassword = () => {
  const navigation = useNavigation()
  const [oldPassword, setOldPassword] = useState()
  const [newPassword, setNewPassword] = useState()

  return (
    <View style={styles.container}>
      <Header title="Change Password" topLine />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <FormPassword
          OldPassword={[oldPassword, setOldPassword]}
          NewPassword={[newPassword, setNewPassword]}
        />
      </ScrollView>
      <ButtonPrimary
        title="Save"
        onPress={() => navigation.goBack()}
        style={[{ marginVertical: getSize.m(16) }]}
      />
    </View>
  )
}

export default ChangePassword
