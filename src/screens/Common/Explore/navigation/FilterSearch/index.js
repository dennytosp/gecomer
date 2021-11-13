import React from 'react';
import {View, FlatList, ScrollView, Pressable, Keyboard} from 'react-native';
import styles from './styles';
import {Searching, Texting} from '../../../../../components';
import {DATA_SEARCH} from '../../../../../assets/data';
import {Forward, Mic, Remove} from '../../../../../assets/svg';
import {getSize} from '../../../../../utils/reponsive';
import {useNavigation} from '@react-navigation/core';
import {Header} from '../../../../../components';

const FilterSearch = () => {
  const navigation = useNavigation();
  const _renderCenter = ({item, index}) => {
    return <View></View>;
  };

  return (
    <View style={styles.container}>
      <Header title="Filter Search" iconLeft={Remove} />
      {/* <FlatList
          showsVerticalScrollIndicator={false}
          data={DATA_SEARCH}
          renderItem={_renderCenter}
          keyExtractor={item => item.id.toString()}
        /> */}
    </View>
  );
};

export default FilterSearch;
