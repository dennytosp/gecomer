import React, { useRef } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { Email, LogoPrimary } from '@/assets'
import { ButtonPrimary, FormInput, Text } from '@/components'
import { RoutesAuthStack, RoutesMainStack } from '@/navigators/routes'
import { getSize } from '@/utils'
import { styles } from './forgot-password.style'

type NavigationProps =
  ReactNavigation.RootStackScreenProps<RoutesMainStack.AUTH_STACK>

const ForgotPasswordScreen = () => {
  const { top } = useSafeAreaInsets()
  const navigation = useNavigation<NavigationProps['navigation']>()
  const emailRef = useRef(null)

  const renderHeader = () => (
    <View style={[styles.wrapperHeader, { marginTop: top + 70 }]}>
      <View style={[styles.wrapperLogo]}>
        <LogoPrimary />
      </View>

      <Text
        title="Password recovery"
        textStyle={[styles.textPasswordRecovery]}
        style={[{ marginBottom: getSize.m(8) }]}
      />
      <Text
        title="Retrieve password to login"
        textStyle={[{ marginBottom: getSize.m(28) }]}
      />
    </View>
  )

  const renderCenter = () => (
    <View style={[styles.wrapperCenter]}>
      <ButtonPrimary
        title="Send"
        atBottom={false}
        onPress={() =>
          navigation.navigate(RoutesMainStack.AUTH_STACK, {
            screen: RoutesAuthStack.SIGN_IN,
          })
        }
      />
    </View>
  )

  const renderInput = () => (
    <FormInput
      ref={emailRef}
      leftIcon={Email}
      isRequired={true}
      placeHolder={'Your Email'}
      inputProps={{ keyboardType: 'email-address', maxLength: 50 }}
    />
  )

  const renderFooter = () => (
    <View style={[styles.wrapperFooter]}>
      <View style={[styles.wrapperTextFooter]}>
        <Text
          title="Did you remember the password?"
          textStyle={[{ fontSize: getSize.m(12) }]}
        />

        <TouchableOpacity
          onPress={() =>
            navigation.navigate(RoutesMainStack.AUTH_STACK, {
              screen: RoutesAuthStack.SIGN_IN,
            })
          }
        >
          <Text
            title="Sign In"
            textStyle={[styles.textSignIn]}
            style={[{ marginHorizontal: getSize.m(5) }]}
          />
        </TouchableOpacity>
      </View>
    </View>
  )

  return (
    <View style={[styles.container]}>
      {renderHeader()}
      {renderInput()}
      {renderCenter()}
      {renderFooter()}
    </View>
  )
}

export default ForgotPasswordScreen
