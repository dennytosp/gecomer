import { Facebook, Google, LogoPrimary } from '@/assets'
import { ButtonPrimary, ButtonSocial, Texting } from '@/components'
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Pressable, ScrollView, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { COLORS, FONTS } from '@/constants'
import FormLogin from '../components/FormLogin'
import { routes } from '@/navigation/routes'
import styles from './styles'

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
        marginBottom={8}
        title="Welcome to Gecomer"
        fontSize={16}
        fontFamily={FONTS.bold}
        color={COLORS.secondary}
      />
      <Texting title="Sign in to continue" marginBottom={28} />
    </View>
  )

  const renderCenter = () => (
    <View style={styles.wrapperCenter}>
      <ButtonPrimary
        onPress={() => navigation.navigate(routes.COMMON)}
        marginTop={16}
        title="Sign In"
      />
      <View style={styles.wrapperOr}>
        <View style={styles.line} />
        <Texting title="OR" fontFamily={FONTS.bold} paddingHorizontal={25} />
        <View style={styles.line} />
      </View>
    </View>
  )

  const renderFooter = () => (
    <View style={styles.wrapperFooter}>
      <ButtonSocial icon={Google} title="Login with Google" marginBottom={8} />
      <ButtonSocial
        icon={Facebook}
        title="Login with Facebook"
        marginBottom={16}
      />
      <Texting
        onPress={() => navigation.navigate(routes.FORGOT_PASSWORD)}
        title="Forgot Password?"
        fontFamily={FONTS.bold}
        fontSize={12}
        color={COLORS.primary}
        textAlign="center"
        marginBottom={8}
      />
      <View style={styles.wrapperTextFooter}>
        <Texting title="Don’t have an account?" fontSize={12} />
        <Texting
          onPress={() =>
            navigation.navigate(routes.AUTHENTICATION, {
              screen: routes.REGISTER,
            })
          }
          title="Register?"
          fontFamily={FONTS.bold}
          fontSize={12}
          color={COLORS.primary}
          marginHorizontal={5}
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
