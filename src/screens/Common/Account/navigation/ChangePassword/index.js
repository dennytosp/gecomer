import React, {useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import {ButtonPrimary, Header} from '../../../../../components';
import {getSize} from '../../../../../utils/reponsive';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import FormPassword from '../../components/FormPassword';

const ChangePassword = () => {
  const navigation = useNavigation();
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();

  return (
    <View style={styles.container}>
      <Header title="Change Password" topline />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <FormPassword
          OldPassword={[oldPassword, setOldPassword]}
          NewPassword={[newPassword, setNewPassword]}
        />
      </ScrollView>
      <ButtonPrimary
        title="Save"
        marginVertical={getSize.m(16)}
        handleOnpress={() => navigation.goBack()}
      />
    </View>
  );
};

export default ChangePassword;
