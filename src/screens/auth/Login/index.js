import { Facebook, Google, LogoPrimary } from '@/assets'
import { ButtonPrimary, ButtonSocial, Texting } from '@/components'
import { COLORS, FONTS } from '@/constants'
import { routes } from '@/navigation/routes'
import { getSize } from '@/utils'
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Pressable, ScrollView, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import FormLogin from '../components/FormLogin'
import { styles } from './styles'

const Login = () => {
  const { top } = useSafeAreaInsets()
  const navigation = useNavigation()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const renderHeader = () => (
    <View style={{ marginTop: top + 70, ...styles.wrapperHeader }}>
      <Pressable style={styles.wrapperLogo}>
        <LogoPrimary />
      </Pressable>

      <Texting
        title="Welcome to Gecomer"
        textStyle={[styles.textTitle]}
        style={[{ marginBottom: getSize.m(8) }]}
      />
      <Texting
        title="Sign in to continue"
        style={[{ marginBottom: getSize.m(28) }]}
      />
    </View>
  )

  const renderCenter = () => (
    <View style={styles.wrapperCenter}>
      <ButtonPrimary
        title="Sign In"
        onPress={() => navigation.navigate(routes.COMMON)}
      />

      <View style={styles.wrapperOr}>
        <View style={styles.line} />
        <Texting
          title="OR"
          textStyle={[{ fontFamily: FONTS.bold }]}
          style={[{ paddingHorizontal: getSize.m(24) }]}
        />
        <View style={styles.line} />
      </View>
    </View>
  )

  const renderFooter = () => (
    <View style={styles.wrapperFooter}>
      <ButtonSocial
        icon={Google}
        title="Login with Google"
        style={[{ marginBottom: getSize.m(8) }]}
      />
      <ButtonSocial
        icon={Facebook}
        title="Login with Facebook"
        style={[{ marginBottom: getSize.m(16) }]}
      />
      <Texting
        onPress={() => navigation.navigate(routes.FORGOT_PASSWORD)}
        title="Forgot Password?"
        textStyle={[styles.textBase, { textAlign: 'center' }]}
        style={[{ marginBottom: getSize.m(8) }]}
      />

      <View style={styles.wrapperTextFooter}>
        <Texting title="Don’t have an account?" />
        <Texting
          onPress={() =>
            navigation.navigate(routes.AUTHENTICATION, {
              screen: routes.REGISTER,
            })
          }
          title="Register?"
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
        <FormLogin
          Emailing={[email, setEmail]}
          Passworde={[password, setPassword]}
        />
        {renderCenter()}
        {renderFooter()}
      </ScrollView>
    </View>
  )
}

export default Login
