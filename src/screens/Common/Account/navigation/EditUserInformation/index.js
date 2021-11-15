import React from 'react';
import {ScrollView, View} from 'react-native';
import styles from './styles';
import {
  ButtonPrimary,
  FormInput,
  Header,
  Titling,
} from '../../../../../components';
import {Birthday, DownPress, PhoneNumber} from '../../../../../assets/svg';
import {useNavigation} from '@react-navigation/core';
import {getSize} from '../../../../../utils/reponsive';

const EditUserInformation = () => {
  const navigation = useNavigation();

  const _renderContent = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <View style={styles.wrapperContent}>
          <Titling title="First Name" />
          <FormInput placeholder="Gin" marginBottom={getSize.m(24)} />
          <Titling title="Last Name" />
          <FormInput placeholder="Phone" marginBottom={getSize.m(24)} />
          <Titling title="Choose Gender" />
          <FormInput
            placeholder="Male"
            marginBottom={getSize.m(24)}
            right={DownPress}
          />
          <Titling title="Your Birhday" />
          <FormInput
            placeholder="21/08/2001"
            marginBottom={getSize.m(24)}
            right={Birthday}
          />
          <Titling title="Email" />
          <FormInput
            placeholder="ginphone@gmail.com"
            marginBottom={getSize.m(24)}
          />
          <Titling title="Phone Number" />
          <FormInput
            placeholder="(307) 555-0133"
            marginBottom={getSize.m(24)}
            icon={PhoneNumber}
            keyboardType="numeric"
          />
        </View>
        <ButtonPrimary
          title="Save"
          marginBottom={getSize.m(16)}
          handleOnpress={() => navigation.goBack()}
        />
      </ScrollView>
    );
  };
  return (
    <View style={styles.container}>
      <Header title="Edit Profile" topline />
      <_renderContent />
    </View>
  );
};

export default EditUserInformation;
