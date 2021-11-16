import React from 'react';
import {ScrollView, View} from 'react-native';
import styles from './styles';
import {
  ButtonPrimary,
  FormInput,
  Header,
  Titling,
} from '../../../../../components';
import {DownPress} from '../../../../../assets/svg';
import {useNavigation} from '@react-navigation/core';
import {getSize} from '../../../../../utils/reponsive';

const AddAddress = ({route}) => {
  const navigation = useNavigation();
  const {add_address, edit_address} = route.params;

  const _renderContent = () => {
    return (
      <View style={styles.wrapperContent}>
        <Titling title="Country or region" />
        <FormInput
          placeholder="Vietnam"
          marginBottom={getSize.m(24)}
          right={DownPress}
        />
        <Titling title="First Name" />
        <FormInput placeholder="Gin" marginBottom={getSize.m(24)} />
        <Titling title="Last Name" />
        <FormInput placeholder="Phone" marginBottom={getSize.m(24)} />
        <Titling title="Street Address" />
        <FormInput placeholder="205 Davida" marginBottom={getSize.m(24)} />
        <Titling title="Street Address 2 (Optional)" />
        <FormInput placeholder="959 Serbia" marginBottom={getSize.m(24)} />
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
        />
        <Titling title="Phone Number" />
        <FormInput
          placeholder="(316) 555-0116"
          marginBottom={getSize.m(24)}
          keyboardType="numeric"
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Header title={add_address ? add_address : edit_address} topline />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <_renderContent />
        <ButtonPrimary
          title="Save Address"
          marginBottom={getSize.m(16)}
          handleOnpress={() => navigation.goBack()}
        />
      </ScrollView>
    </View>
  );
};

export default AddAddress;
