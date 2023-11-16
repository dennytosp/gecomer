import { LogoPrimary } from '@/assets'
import { ButtonPrimary, Texting } from '@/components'
import { routes } from '@/navigation/routes'
import { getSize } from '@/utils'
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Pressable, ScrollView, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { FormRegister } from '../components'
import { styles } from './styles'

const Register = () => {
  const { top } = useSafeAreaInsets()
  const navigation = useNavigation()
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const renderHeader = () => (
    <View style={{ marginTop: top + 70, ...styles.wrapperHeader }}>
      <Pressable style={styles.wrapperLogo}>
        <LogoPrimary />
      </Pressable>

      <Texting
        title="Let’s Get Started"
        textStyle={[styles.textTitle]}
        style={[{ marginBottom: getSize.m(8) }]}
      />
      <Texting
        title="Create an new account"
        style={[{ marginBottom: getSize.m(28) }]}
      />
    </View>
  )

  const renderCenter = () => (
    <View style={styles.wrapperCenter}>
      <ButtonPrimary
        onPress={() =>
          navigation.navigate(routes.AUTHENTICATION, {
            screen: routes.LOGIN,
          })
        }
        title="Sign Up"
      />
    </View>
  )

  const renderFooter = () => (
    <View style={styles.wrapperFooter}>
      <View style={styles.wrapperTextFooter}>
        <Texting title="Have an account?" />
        <Texting
          onPress={() =>
            navigation.navigate(routes.AUTHENTICATION, {
              screen: routes.LOGIN,
            })
          }
          title="Sign In"
          textStyle={[styles.textBase]}
          style={[{ marginHorizontal: getSize.m(4) }]}
        />
      </View>
    </View>
  )

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {renderHeader()}

        <FormRegister
          Fullnamemd={[name, setName]}
          Emailing={[email, setEmail]}
          Passworde={[password, setPassword]}
        />

        {renderCenter()}
        {renderFooter()}
      </ScrollView>
    </View>
  )
}

export default Register
