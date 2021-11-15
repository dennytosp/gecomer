import React from 'react';
import {View, Pressable, FlatList} from 'react-native';
import styles from './styles';
import {
  ButtonPrimary,
  ProductsHorizontal,
  ReviewsProduct,
  StarRating,
  Texting,
  Titling,
} from '../../../../../components';
import {getSize, width} from '../../../../../utils/reponsive';
import {Favorite} from '../../../../../assets/svg';
import {COLORS, FONTS} from '../../../../../constants';
import {
  DATA_SIZES,
  DATA_COLORS,
  PRODUCTS_DATA,
} from '../../../../../assets/data';
import {photos} from '../../../../../assets';
import {useNavigation} from '@react-navigation/core';
import {routes} from '../../../../../navigation/routes';

const BuyingFormat = ({style}) => {
  return <View style={{...styles.wrapperBuyingFormat, ...style}}>
    
  </View>;
};

export default BuyingFormat;
