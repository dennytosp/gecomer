import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import styles from './styles';
import {ButtonPrimary, Header} from '../../../../../components';
import {useNavigation} from '@react-navigation/core';
import {getSize} from '../../../../../utils/reponsive';
import FormProfile from '../../components/FormProfile';

const EditUserInformation = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [gender, setGender] = useState();
  const [birthday, setBirthday] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  return (
    <View style={styles.container}>
      <Header title="Edit Profile" topline />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <FormProfile
          FirstName={[firstName, setFirstName]}
          LastName={[lastName, setLastName]}
          Gender={[gender, setGender]}
          Birthdayng={[birthday, setBirthday]}
          Email={[email, setEmail]}
          PhoneNumbers={[phoneNumber, setPhoneNumber]}
        />
        <ButtonPrimary
          title="Save"
          marginBottom={getSize.m(16)}
          handleOnpress={() => navigation.goBack()}
        />
      </ScrollView>
    </View>
  );
};

export default EditUserInformation;
