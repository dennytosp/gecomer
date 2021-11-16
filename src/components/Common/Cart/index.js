import React from 'react';
import {View, Pressable, Image} from 'react-native';
import {Texting} from '../..';
import styles from './styles';
import {getSize, width} from '../../../utils/reponsive';
import {COLORS, FONTS} from '../../../constants';
import {
  CancelFavorite,
  Delete,
  Favorited,
  Less_Cart,
  Plus_Cart,
} from '../../../assets/svg';

const Cart = ({
  image,
  title,
  price,
  favorited,
  quantity,
  handleDelete,
  handleFavorite,
  handleLess,
  hanldePlus,
  style,
}) => {
  return (
    <View style={{...styles.wrapperHeader, ...style}}>
      <Image source={image} style={styles.product} />
      <View style={styles.wrapperContentCard}>
        <View style={styles.rowColumn01}>
          <View style={{}}>
            <Texting
              title={title}
              marginRight={getSize.m(4)}
              color={COLORS.secondary}
              fontFamily={FONTS.bold}
              fontSize={getSize.m(12)}
              width={(width - 56) / 2}
            />
          </View>
          <View style={styles.rowRight01}>
            <Pressable onPress={handleFavorite} style={styles.iconFavorited}>
              {favorited ? Favorited : CancelFavorite}
            </Pressable>
            <Pressable onPress={handleDelete} style={styles.iconDelete}>
              <Delete />
            </Pressable>
          </View>
        </View>

        <View style={styles.rowColumn02}>
          <Texting
            title={price}
            color={COLORS.primary}
            fontFamily={FONTS.bold}
            fontSize={getSize.m(12)}
          />
          <View style={styles.rowRight02}>
            <Pressable onPress={handleLess} style={styles.iconLess}>
              <Less_Cart />
            </Pressable>
            <Texting
              title={quantity}
              width={getSize.m(40)}
              textAlign="center"
              color={COLORS.secondary}
              backgroundColor={COLORS.border}
            />
            <Pressable onPress={hanldePlus} style={styles.iconPlus}>
              <Plus_Cart />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Cart;
