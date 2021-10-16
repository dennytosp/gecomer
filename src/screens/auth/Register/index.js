import React from 'react';
import {Pressable, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';
import {Email, Fullname, LogoPrimary, Password} from './../../../assets/svg';
import {COLORS, FONTS} from '../../../constants/theme';
import {ButtonPrimary, FormInput, Texting} from '../../../components';
import {routes} from './../../../navigation/routes';

const Register = () => {
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
          title="Let’s Get Started"
          fontSize={16}
          fontFamily={FONTS.bold}
          color={COLORS.secondary}
        />
        <Texting title="Create an new account" marginBottom={28} />
      </View>
    );
  };

  const _renderCenter = () => {
    return (
      <View style={styles.wrapperCenter}>
        <FormInput icon={Fullname} placeholder="Full Name" />
        <FormInput
          icon={Email}
          placeholder="Your Email"
          keyboardType="email-address"
        />
        <FormInput icon={Password} placeholder="Password" secureTextEntry />
        <FormInput
          icon={Password}
          placeholder="Password Again"
          secureTextEntry
        />
        <ButtonPrimary
          handleOnpress={() => navigation.navigate(routes.LOGIN)}
          marginTop={8}
          title="Sign Up"
        />
      </View>
    );
  };

  const _renderFooter = () => {
    return (
      <View style={styles.wrapperFooter}>
        <View style={styles.wrapperTextFooter}>
          <Texting title="Have an account?" fontSize={12} />
          <Texting
            handleOnpress={() => navigation.goBack()}
            title="Sign In"
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
      <_renderHeader />
      <_renderCenter />
      <_renderFooter />
    </View>
  );
};

export default Register;
