import React, { useRef } from 'react'
import { Pressable, ScrollView, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { Email, Fullname, LogoPrimary, Password } from '@/assets'
import { ButtonPrimary, FormInput, Text } from '@/components'
import { RoutesAuthStack, RoutesMainStack } from '@/navigators/routes'
import { getSize } from '@/utils'
import { styles } from './sign-up.style'

type NavigationProps =
  ReactNavigation.RootStackScreenProps<RoutesMainStack.AUTH_STACK>

const SignUpScreen = () => {
  const { top } = useSafeAreaInsets()
  const navigation = useNavigation<NavigationProps['navigation']>()

  const fullNameRef = useRef(null)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const confirmPasswordRef = useRef(null)

  const renderHeader = () => (
    <View style={[styles.wrapperHeader, { marginTop: top + 70 }]}>
      <Pressable style={[styles.wrapperLogo]}>
        <LogoPrimary />
      </Pressable>

      <Text
        title="Let’s Get Started"
        textStyle={[styles.textTitle]}
        style={[{ marginBottom: getSize.m(8) }]}
      />
      <Text
        title="Create an new account"
        style={[{ marginBottom: getSize.m(28) }]}
      />
    </View>
  )

  const renderCenter = () => (
    <View style={[styles.wrapperCenter]}>
      <ButtonPrimary
        title="Sign Up"
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
    <>
      <FormInput
        ref={fullNameRef}
        leftIcon={Fullname}
        isRequired={true}
        placeHolder={'Full Name'}
        inputProps={{ maxLength: 50 }}
        containerStyle={[{ marginTop: 0 }]}
      />

      <FormInput
        ref={emailRef}
        leftIcon={Email}
        isRequired={true}
        placeHolder={'Email'}
        inputProps={{ keyboardType: 'email-address', maxLength: 50 }}
      />

      <FormInput
        ref={passwordRef}
        leftIcon={Password}
        isRequired={true}
        isPassword={true}
        placeHolder={'Password'}
        inputProps={{ textContentType: 'oneTimeCode', maxLength: 30 }}
      />

      <FormInput
        ref={confirmPasswordRef}
        leftIcon={Password}
        isRequired={true}
        isPassword={true}
        placeHolder={'Password Again'}
        inputProps={{ textContentType: 'oneTimeCode', maxLength: 30 }}
      />
    </>
  )

  const renderFooter = () => (
    <View style={[styles.wrapperFooter]}>
      <View style={[styles.wrapperTextFooter]}>
        <Text title="Have an account?" />
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(RoutesMainStack.AUTH_STACK, {
              screen: RoutesAuthStack.SIGN_IN,
            })
          }
        >
          <Text
            title="Sign In"
            textStyle={[styles.textBase]}
            style={[{ marginHorizontal: getSize.m(4) }]}
          />
        </TouchableOpacity>
      </View>
    </View>
  )

  return (
    <View style={[styles.container]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="never"
      >
        {renderHeader()}
        {renderInput()}
        {renderCenter()}
        {renderFooter()}
      </ScrollView>
    </View>
  )
}

export default SignUpScreen
