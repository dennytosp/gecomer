import React from 'react';
import {View} from 'react-native';
import {ChangePasswording} from '../../../../../assets/svg';
import {FormInput, Titling} from '../../../../../components';
import {getSize} from '../../../../../utils/reponsive';
import styles from './styles';

const FormPassword = ({OldPassword, NewPassword}) => {
  const [oldPassword, setOldPassword] = OldPassword;
  const [newPassword, setNewPassword] = NewPassword;

  return (
    <View style={styles.wrapperContent}>
      <Titling title="Old Password" />
      <FormInput
        placeholder="•••••••••••••••••"
        onChangeText={text => setOldPassword(text)}
        marginBottom={getSize.m(24)}
        icon={ChangePasswording}
        secureTextEntry
      />
      <Titling title="New Password" />
      <FormInput
        placeholder="•••••••••••••••••"
        onChangeText={text => setNewPassword(text)}
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
  );
};

export default FormPassword;
