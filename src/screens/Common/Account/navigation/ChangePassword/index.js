import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {
  ButtonPrimary,
  FormInput,
  Header,
  Titling,
} from '../../../../../components';
import {ChangePasswording} from '../../../../../assets/svg';
import {getSize} from '../../../../../utils/reponsive';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/core';

const ChangePassword = () => {
  const navigation = useNavigation();
  const _renderContent = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <View style={styles.wrapperContent}>
          <Titling title="Old Password" />
          <FormInput
            placeholder="•••••••••••••••••"
            marginBottom={getSize.m(24)}
            icon={ChangePasswording}
            secureTextEntry
          />
          <Titling title="New Password" />
          <FormInput
            placeholder="•••••••••••••••••"
            marginBottom={getSize.m(24)}
            icon={ChangePasswording}
            secureTextEntry
          />
          <Titling title="New Password Again" />
          <FormInput
            placeholder="•••••••••••••••••"
            marginBottom={getSize.m(24)}
            icon={ChangePasswording}
            secureTextEntry
          />
        </View>
      </ScrollView>
    );
  };
  return (
    <View style={styles.container}>
      <Header title="Change Password" topline />
      <_renderContent />
      <ButtonPrimary
        title="Save"
        marginVertical={getSize.m(16)}
        handleOnpress={() => navigation.goBack()}
      />
    </View>
  );
};

export default ChangePassword;
