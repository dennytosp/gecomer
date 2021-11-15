import React from 'react';
import {View, Pressable} from 'react-native';
import styles from './styles';
import {FormInput, Texting, Titling} from '../../../../../components';

const PriceRange = ({style}) => {
  return (
    <View style={{...styles.wrapperPriceRange, ...style}}>
      <Titling title="Price Range" />
      <View style={styles.rowInput}>
        <FormInput placeholder="$1.245" style={styles.inputRowLeft} />
        <FormInput placeholder="$9.344" style={styles.inputRowRight} />
      </View>
    </View>
  );
};

export default PriceRange;
