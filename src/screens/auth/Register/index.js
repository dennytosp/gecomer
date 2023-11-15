import { LogoPrimary } from '@/assets'
import { ButtonPrimary, Texting } from '@/components'
import { COLORS, FONTS } from '@/constants'
import { routes } from '@/navigation/routes'
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Pressable, ScrollView, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { FormRegister } from '../components'
import styles from './styles'

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
        marginBottom={8}
        title="Let’s Get Started"
        fontSize={16}
        fontFamily={FONTS.bold}
        color={COLORS.secondary}
      />
      <Texting title="Create an new account" marginBottom={28} />
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
        marginTop={16}
        title="Sign Up"
      />
    </View>
  )

  const renderFooter = () => (
    <View style={styles.wrapperFooter}>
      <View style={styles.wrapperTextFooter}>
        <Texting title="Have an account?" fontSize={12} />
        <Texting
          onPress={() =>
            navigation.navigate(routes.AUTHENTICATION, {
              screen: routes.LOGIN,
            })
          }
          title="Sign In"
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
