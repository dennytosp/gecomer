import { Email, LogoPrimary } from '@/assets'
import { ButtonPrimary, FormInput, Texting } from '@/components'
import { routes } from '@/navigation/routes'
import { getSize } from '@/utils'
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from './styles'

const ForgotPassword = () => {
  const { top } = useSafeAreaInsets()
  const navigation = useNavigation()
  const [email, setEmail] = useState()

  const renderHeader = () => (
    <View style={{ marginTop: top + 70, ...styles.wrapperHeader }}>
      <View style={styles.wrapperLogo}>
        <LogoPrimary />
      </View>

      <Texting
        title="Password recovery"
        textStyle={[styles.textPasswordRecovery]}
        style={[{ marginBottom: getSize.m(8) }]}
      />
      <Texting
        title="Retrieve password to login"
        textStyle={[{ marginBottom: getSize.m(28) }]}
      />
    </View>
  )

  const renderCenter = () => (
    <View style={styles.wrapperCenter}>
      <ButtonPrimary
        title="Send"
        onPress={() =>
          navigation.navigate(routes.AUTHENTICATION, {
            screen: routes.LOGIN,
          })
        }
      />
    </View>
  )

  const renderFooter = () => (
    <View style={styles.wrapperFooter}>
      <View style={styles.wrapperTextFooter}>
        <Texting
          title="Did you remember the password?"
          textStyle={[{ fontSize: getSize.m(12) }]}
        />
        <Texting
          title="Sign In"
          onPress={() =>
            navigation.navigate(routes.AUTHENTICATION, {
              screen: routes.LOGIN,
            })
          }
          textStyle={[styles.textSignIn]}
          style={[{ marginHorizontal: getSize.m(5) }]}
        />
      </View>
    </View>
  )

  return (
    <View style={styles.container}>
      {renderHeader()}
      <FormInput
        icon={Email}
        placeholder="Your Email"
        keyboardType="email-address"
        marginBottom={getSize.m(8)}
        onChangeText={email => setEmail(email)}
        defaultValue={email}
      />
      {renderCenter()}
      {renderFooter()}
    </View>
  )
}

export default ForgotPassword
