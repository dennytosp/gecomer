import React from 'react';
import {View, FlatList, Pressable} from 'react-native';
import styles from './styles';
import {Titling} from '../../../../../components';
import {DATA_CATEGORY_SOFT} from '../../../../../assets/data';
import {getSize} from '../../../../../utils/reponsive';
import {Header} from './../../../../../components';

const Category = () => {
  const _renderCenter = ({item}) => {
    return (
      <View style={styles.wrapperCenter}>
        <Pressable>{item.image}</Pressable>
        <Titling
          title={item.title}
          paddingHorizontal={getSize.m(16)}
          fontSize={getSize.m(12)}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header title="Category" topline />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA_CATEGORY_SOFT}
        renderItem={_renderCenter}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default Category;
