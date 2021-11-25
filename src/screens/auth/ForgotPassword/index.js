import React, {useState} from 'react';
import {Pressable, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';
import {Email, LogoPrimary} from '../../../assets/svg';
import {COLORS, FONTS} from '../../../constants/theme';
import {ButtonPrimary, FormInput, Texting} from '../../../components';
import {routes} from '../../../navigation/routes';
import {getSize} from '../../../utils/reponsive';

const ForgotPassword = () => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();
  const [email, setEmail] = useState();

  const _renderHeader = () => {
    return (
      <View style={{marginTop: top + 70, ...styles.wrapperHeader}}>
        <Pressable style={styles.wrapperLogo}>
          <LogoPrimary />
        </Pressable>
        <Texting
          marginBottom={8}
          title="Password recovery"
          fontSize={16}
          fontFamily={FONTS.bold}
          color={COLORS.secondary}
        />
        <Texting title="Retrieve password to login" marginBottom={28} />
      </View>
    );
  };

  const _renderCenter = () => {
    return (
      <View style={styles.wrapperCenter}>
        <ButtonPrimary
          handleOnpress={() => navigation.navigate(routes.LOGIN)}
          marginTop={16}
          title="Send"
        />
      </View>
    );
  };

  const _renderFooter = () => {
    return (
      <View style={styles.wrapperFooter}>
        <View style={styles.wrapperTextFooter}>
          <Texting title="Did you remember the password?" fontSize={12} />
          <Texting
            handleOnpress={() => navigation.navigate(routes.LOGIN)}
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
      <FormInput
        icon={Email}
        placeholder="Your Email"
        keyboardType="email-address"
        marginBottom={getSize.m(8)}
        onChangeText={email => setEmail(email)}
        defaultValue={email}
      />
      <_renderCenter />
      <_renderFooter />
    </View>
  );
};

export default ForgotPassword;
