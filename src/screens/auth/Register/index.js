import React, {useState} from 'react';
import {Pressable, ScrollView, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';
import {LogoPrimary} from './../../../assets/svg';
import {COLORS, FONTS} from '../../../constants/theme';
import {ButtonPrimary, Texting} from '../../../components';
import {routes} from './../../../navigation/routes';
import FormRegister from '../components/FormRegister';

const Register = () => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

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
        <ButtonPrimary
          handleOnpress={() => navigation.navigate(routes.LOGIN)}
          marginTop={16}
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <_renderHeader />
        <FormRegister
          Fullnamemd={[name, setName]}
          Emailing={[email, setEmail]}
          Passworde={[password, setPassword]}
        />
        <_renderCenter />
        <_renderFooter />
      </ScrollView>
    </View>
  );
};

export default Register;
