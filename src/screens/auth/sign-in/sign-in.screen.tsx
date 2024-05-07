import React, { useRef } from 'react'
import { Pressable, ScrollView, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { Email, Facebook, Google, LogoPrimary, Password } from '@/assets'
import { ButtonPrimary, ButtonSocial, FormInput, Text } from '@/components'
import {
  RoutesAuthStack,
  RoutesMainStack,
  RoutesTabStack,
} from '@/navigators/routes'
import { FONTS } from '@/theme'
import { getSize } from '@/utils'
import { styles } from './sign-in.style'

type NavigationProps =
  ReactNavigation.RootStackScreenProps<RoutesMainStack.AUTH_STACK>

const SignInScreen = () => {
  const { top } = useSafeAreaInsets()
  const navigation = useNavigation<NavigationProps['navigation']>()

  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const renderHeader = () => (
    <View style={[styles.wrapperHeader, { marginTop: top + 70 }]}>
      <Pressable style={[styles.wrapperLogo]}>
        <LogoPrimary />
      </Pressable>

      <Text
        title="Welcome to Gecomer"
        textStyle={[styles.textTitle]}
        style={[{ marginBottom: getSize.m(8) }]}
      />
      <Text
        title="Sign in to continue"
        style={[{ marginBottom: getSize.m(28) }]}
      />
    </View>
  )

  const renderCenter = () => (
    <View style={[styles.wrapperCenter]}>
      <ButtonPrimary
        title="Sign In"
        atBottom={false}
        onPress={() => {
          navigation.navigate(RoutesMainStack.TAB_STACK, {
            screen: RoutesTabStack.HOME_TAB,
          })
        }}
      />

      <View style={[styles.wrapperOr]}>
        <View style={[styles.line]} />
        <Text
          title="OR"
          textStyle={[{ fontFamily: FONTS.bold }]}
          style={[{ paddingHorizontal: getSize.m(24) }]}
        />
        <View style={[styles.line]} />
      </View>
    </View>
  )

  const renderInput = () => (
    <>
      <FormInput
        ref={emailRef}
        leftIcon={Email}
        isRequired={true}
        placeHolder={'Email'}
        inputProps={{ keyboardType: 'email-address', maxLength: 50 }}
        containerStyle={[{ marginTop: 0 }]}
      />

      <FormInput
        ref={passwordRef}
        leftIcon={Password}
        isRequired={true}
        isPassword={true}
        placeHolder={'Password'}
        inputProps={{ textContentType: 'oneTimeCode', maxLength: 30 }}
      />
    </>
  )

  const renderFooter = () => (
    <View style={[styles.wrapperFooter]}>
      <ButtonSocial
        icon={<Google />}
        title="Login with Google"
        style={[{ marginBottom: getSize.m(8) }]}
      />
      <ButtonSocial
        icon={<Facebook />}
        title="Login with Facebook"
        style={[{ marginBottom: getSize.m(16) }]}
      />
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(RoutesMainStack.AUTH_STACK, {
            screen: RoutesAuthStack.FORGOT_PASSWORD,
          })
        }
      >
        <Text
          title="Forgot Password?"
          textStyle={[styles.textBase, { textAlign: 'center' }]}
          style={[{ marginBottom: getSize.m(8) }]}
        />
      </TouchableOpacity>

      <View style={[styles.wrapperTextFooter]}>
        <Text title="Don’t have an account?" />

        <TouchableOpacity
          onPress={() =>
            navigation.navigate(RoutesMainStack.AUTH_STACK, {
              screen: RoutesAuthStack.SIGN_UP,
            })
          }
        >
          <Text
            title="Register?"
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
        keyboardShouldPersistTaps="handled"
      >
        {renderHeader()}
        {renderInput()}
        {renderCenter()}
        {renderFooter()}
      </ScrollView>
    </View>
  )
}

export default SignInScreen
