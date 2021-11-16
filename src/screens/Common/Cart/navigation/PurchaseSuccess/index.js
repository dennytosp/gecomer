import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {Remind} from '../../../../../components';
import {Tick} from '../../../../../assets/svg';
import {useNavigation} from '@react-navigation/core';
import {routes} from '../../../../../navigation/routes';

const PurchaseSuccess = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Remind
        icon={Tick}
        title="Success"
        subtitle="Thank you for shopping using Gecomer"
        onEvent="Back To Order"
        handleOnEvent={() => navigation.navigate(routes.COMMON)}
        justAlign
      />
    </View>
  );
};

export default PurchaseSuccess;
