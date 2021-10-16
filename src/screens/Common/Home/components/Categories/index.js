import React from 'react';
import {View, Pressable, FlatList} from 'react-native';
import styles from './styles';
import {Texting, Titling} from '../../../../../components';
import {getSize, width} from '../../../../../utils/reponsive';
import {CATEGORIES_DATA} from '../../../../../assets/data';

const Categories = () => {
  const _renderCategories = ({item, index}) => {
    return (
      <View
        style={{
          marginLeft: index === 0 ? getSize.m(0) : getSize.m(12),
          ...styles.wrapperCategories,
        }}>
        <Pressable style={{width: width / 5.4}}>
          <Pressable style={styles.wrapperEventCategories}>
            <Pressable style={styles.wrapperImageEvent}>{item.image}</Pressable>
            <Texting
              title={item.title}
              fontSize={getSize.m(10)}
              textAlign="center"
              marginLeft={getSize.m(-12 / 2)}
            />
          </Pressable>
        </Pressable>
      </View>
    );
  };
  return (
    <View>
      <Titling title="Category" more="More Category" />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={CATEGORIES_DATA}
        renderItem={_renderCategories}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default Categories;
