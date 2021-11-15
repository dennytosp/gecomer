import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {Remind} from '../../../../../components';
import {useNavigation} from '@react-navigation/core';
import {routes} from '../../../../../navigation/routes';
import {Confirmationion} from './../../../../../assets/svg';
import {COLORS} from '../../../../../constants';

const Confirmation = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Remind
        icon={Confirmationion}
        background={COLORS.pale_red}
        title="Confirmation"
        subtitle="Are you sure wanna delete address"
        onEvent="Delete"
        handleOnEvent={() => navigation.goBack()}
        handleOnCancel={() => navigation.goBack()}
        onCancel="Cancel"
        justAlign
      />
    </View>
  );
};

export default Confirmation;
