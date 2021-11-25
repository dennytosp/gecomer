import React from 'react';
import {View} from 'react-native';
import {Email, Fullname, Password} from '../../../../assets/svg';
import {FormInput} from '../../../../components';
import {getSize} from '../../../../utils/reponsive';

const FormRegister = ({Fullnamemd, Emailing, Passworde}) => {
  const [fullName, setFulName] = Fullnamemd;
  const [emai, setEmail] = Emailing;
  const [password, setPassword] = Passworde;

  return (
    <View>
      <FormInput
        onChangeText={text => setFulName(text)}
        icon={Fullname}
        placeholder="Full Name"
        marginBottom={getSize.m(8)}
      />
      <FormInput
        onChangeText={text => setEmail(text)}
        icon={Email}
        placeholder="Your Email"
        keyboardType="email-address"
        marginBottom={getSize.m(8)}
      />
      <FormInput
        onChangeText={text => setPassword(text)}
        icon={Password}
        placeholder="Password"
        secureTextEntry
        marginBottom={getSize.m(8)}
      />
      <FormInput icon={Password} placeholder="Password Again" secureTextEntry />
    </View>
  );
};

export default FormRegister;
