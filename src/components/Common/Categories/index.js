import React from 'react';
import {View, Pressable} from 'react-native';
import {Texting} from '../..';
import styles from './styles';
import {getSize, width} from '../../../utils/reponsive';

const Categories = ({
  index,
  image,
  title,
  handleOnpress,
  vertiColumns,
  heightColumns,
  style,
}) => {
  const paddingHorizonReponsive = 16 * 2 + 6;
  const widthReponsive = (width - paddingHorizonReponsive) / 4;
  return (
    <View
      style={{
        marginLeft: index,
        width: vertiColumns && widthReponsive,
        height: heightColumns,
        marginRight: vertiColumns && getSize.m(11 / 2),
        ...styles.wrapperCategories,
        ...style,
      }}>
      <View style={{width: width / 5.4}}>
        <Pressable style={styles.wrapperEventCategories}>
          <Pressable style={styles.wrapperImageEvent} onPress={handleOnpress}>
            {image}
          </Pressable>
          <Texting
            title={title}
            fontSize={getSize.m(10)}
            textAlign="center"
            marginLeft={getSize.m(-12 / 2)}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Categories;
