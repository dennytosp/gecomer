import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {Remind} from '../../../../../components';
import {Tick} from '../../../../../assets/svg';

const PurchaseSuccess = () => {
  return (
    <View style={styles.container}>
      <Remind
        icon={Tick}
        title="Success"
        subtitle="Thank you for shopping using Sherwin"
        onEvent="Back To Order"
        handleOnEvent={() => {}}
        justAlign
      />
    </View>
  );
};

export default PurchaseSuccess;
