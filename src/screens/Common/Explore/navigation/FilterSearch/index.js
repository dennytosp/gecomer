import React from 'react';
import {View, ScrollView} from 'react-native';
import styles from './styles';
import {Remove} from '../../../../../assets/svg';
import {useNavigation} from '@react-navigation/core';
import {Header} from '../../../../../components';
import {PriceRange, Condition} from '../../components';

const FilterSearch = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header topline title="Filter Search" iconLeft={Remove} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="on-drag">
        <PriceRange />
        <Condition />
      </ScrollView>
    </View>
  );
};

export default FilterSearch;
