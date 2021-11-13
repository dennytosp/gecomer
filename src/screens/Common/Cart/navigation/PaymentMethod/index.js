import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './styles';
import {Texting} from '../../../../../components';
import {DATA_SOFT_BY} from '../../../../../assets/data';
import {getSize} from '../../../../../utils/reponsive';
import {Header} from '../../../../../components';
import {COLORS, FONTS} from '../../../../../constants';

const PaymentMethod = () => {
  const _renderCenter = ({item, index}) => {
    return <View style={styles.wrapperCenter}></View>;
  };

  return (
    <View style={styles.container}>
      <Header title="Payment" />
    </View>
  );
};

export default PaymentMethod;
