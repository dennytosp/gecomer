import React from 'react';
import {View, Pressable, Image} from 'react-native';
import {StarRating, Texting} from '../..';
import styles from './styles';
import {COLORS, FONTS} from '../../../constants';
import {getSize, width} from '../../../utils/reponsive';

const ProductsHorizontal = ({
  image,
  name,
  discounted,
  price,
  index,
  columns,
  promotion,
  marginBottom,
  handleOnpress,
}) => {
  const paddingHorizonReponsive = 16 * 2 + 14;
  const widthReponsive = (width - paddingHorizonReponsive) / 2;
  return (
    <View
      style={{
        marginLeft: index,
        marginRight: columns && getSize.m(10),
        width: columns && widthReponsive,
        zIndex: 100,
        ...styles.wrapperProducsing(marginBottom),
      }}>
      <Pressable
        onPress={handleOnpress}
        style={{alignItems: !columns ? 'center' : null}}>
        <Image source={image} style={styles.imageProducts(columns)} />
      </Pressable>
      <Texting
        title={name}
        numberOfLines={2}
        color={COLORS.secondary}
        width={getSize.s(100)}
        lineHeight={getSize.m(18)}
        fontFamily={FONTS.bold}
        marginBottom={getSize.m(4)}
      />
      {columns ? <StarRating startingValue={4} imageSize={12} /> : null}
      <Texting
        title={discounted}
        color={COLORS.primary}
        marginTop={columns ? 12 : 8}
        marginBottom={columns ? 4 : 8}
        fontFamily={FONTS.bold}
      />
      <View style={styles.wrapperRowPrice}>
        <Texting
          title={price}
          fontSize={getSize.m(10)}
          textDecorationLine="line-through"
        />
        <Texting
          title={promotion}
          marginHorizontal={8}
          color={COLORS.pale_red}
          fontSize={getSize.m(10)}
          fontFamily={FONTS.bold}
        />
      </View>
    </View>
  );
};

export default ProductsHorizontal;
