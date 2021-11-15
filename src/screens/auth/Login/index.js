import React from 'react';
import {Pressable, ScrollView, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';
import {
  Email,
  Facebook,
  Google,
  LogoPrimary,
  Password,
} from './../../../assets/svg';
import {COLORS, FONTS} from '../../../constants/theme';
import {
  ButtonPrimary,
  ButtonSocial,
  FormInput,
  Texting,
} from '../../../components';
import {routes} from './../../../navigation/routes';
import {getSize} from '../../../utils/reponsive';

const Login = () => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();

  const _renderHeader = () => {
    return (
      <View style={{marginTop: top + 70, ...styles.wrapperHeader}}>
        <Pressable style={styles.wrapperLogo}>
          <LogoPrimary />
        </Pressable>
        <Texting
          marginBottom={8}
          title="Welcome to E-com"
          fontSize={16}
          fontFamily={FONTS.bold}
          color={COLORS.secondary}
        />
        <Texting title="Sign in to continue" marginBottom={28} />
      </View>
    );
  };

  const _renderCenter = () => {
    return (
      <View style={styles.wrapperCenter}>
        <FormInput
          icon={Email}
          placeholder="Your Email"
          keyboardType="email-address"
          marginBottom={getSize.m(8)}
        />
        <FormInput icon={Password} placeholder="Password" secureTextEntry />
        <ButtonPrimary
          handleOnpress={() => navigation.navigate(routes.COMMON)}
          marginTop={16}
          title="Sign In"
        />
        <View style={styles.wrapperOr}>
          <View style={styles.line}></View>
          <Texting title="OR" fontFamily={FONTS.bold} paddingHorizontal={25} />
          <View style={styles.line}></View>
        </View>
      </View>
    );
  };

  const _renderFooter = () => {
    return (
      <View style={styles.wrapperFooter}>
        <ButtonSocial
          icon={Google}
          title="Login with Google"
          marginBottom={8}
        />
        <ButtonSocial
          icon={Facebook}
          title="Login with Facebook"
          marginBottom={16}
        />
        <Texting
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
            handleOnpress={() => navigation.navigate(routes.REGISTER)}
            title="Register?"
            fontFamily={FONTS.bold}
            fontSize={12}
            color={COLORS.primary}
            marginHorizontal={5}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <_renderHeader />
        <_renderCenter />
        <_renderFooter />
      </ScrollView>
    </View>
  );
};

export default Login;
