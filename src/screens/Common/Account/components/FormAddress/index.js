import React from 'react';
import {View} from 'react-native';
import {DownPress} from '../../../../../assets/svg';
import {FormInput, Titling} from '../../../../../components';
import {getSize} from '../../../../../utils/reponsive';
import styles from './styles';

const FormAddress = ({
  FirstName,
  LastName,
  Address,
  AddressBackup,
  ZipCode,
  PhoneNumber,
}) => {
  const [firstName, setFirstName] = FirstName;
  const [lastName, setLastName] = LastName;
  const [address, setAddress] = Address;
  const [addressBackup, setAddressBackup] = AddressBackup;
  const [zipCode, setZipCode] = ZipCode;
  const [phoneNumber, setPhoneNumber] = PhoneNumber;

  return (
    <View style={styles.wrapperContent}>
      <Titling title="Country or region" />
      <FormInput
        placeholder="Vietnam"
        marginBottom={getSize.m(24)}
        right={DownPress}
      />
      <Titling title="First Name" />
      <FormInput
        placeholder="Gin"
        marginBottom={getSize.m(24)}
        onChangeText={text => setFirstName(text)}
      />
      <Titling title="Last Name" />
      <FormInput
        placeholder="Phone"
        marginBottom={getSize.m(24)}
        onChangeText={text => setLastName(text)}
      />
      <Titling title="Street Address" />
      <FormInput
        placeholder="205 Davida"
        marginBottom={getSize.m(24)}
        onChangeText={text => setAddress(text)}
      />
      <Titling title="Street Address 2 (Optional)" />
      <FormInput
        placeholder="959 Serbia"
        marginBottom={getSize.m(24)}
        onChangeText={text => setAddressBackup(text)}
      />
      <Titling title="City" />
      <FormInput
        placeholder="Ho Chi Minh"
        marginBottom={getSize.m(24)}
        right={DownPress}
      />
      <Titling title="State/Province/Region" />
      <FormInput placeholder="Go Vap District" marginBottom={getSize.m(24)} />
      <Titling title="Zip Code" />
      <FormInput
        placeholder="57793"
        marginBottom={getSize.m(24)}
        keyboardType="numeric"
        onChangeText={text => setZipCode(text)}
      />
      <Titling title="Phone Number" />
      <FormInput
        placeholder="(316) 555-0116"
        marginBottom={getSize.m(24)}
        keyboardType="numeric"
        onChangeText={text => setPhoneNumber(text)}
      />
    </View>
  );
};

export default FormAddress;
