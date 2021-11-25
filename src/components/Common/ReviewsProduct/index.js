import React from 'react';
import {View, Pressable, Image} from 'react-native';
import {StarRating, Texting} from '../..';
import styles from './styles';
import {COLORS, FONTS} from '../../../constants';
import {getSize} from '../../../utils/reponsive';
import {photos} from '../../../assets';

const ReviewsProduct = ({
  name,
  star,
  description,
  time,
  avatar,
  imageReviews,
  marginBottom,
  style,
}) => {
  return (
    <View
      style={{
        ...style,
        marginBottom: marginBottom ? marginBottom : getSize.m(0),
      }}>
      <Pressable style={styles.wrapperInfor}>
        <Pressable style={styles.wrapperImagePersonReviews}>
          <Image source={avatar} style={styles.imagePersonReviews} />
        </Pressable>

        <View style={styles.rating0}>
          <Texting
            title={name}
            marginBottom={getSize.m(0)}
            fontFamily={FONTS.bold}
            fontSize={getSize.m(14)}
            color={COLORS.secondary}
          />
          <StarRating startingValue={star} imageSize={12} type="custom" />
        </View>
      </Pressable>

      <Texting
        textAlign="justify"
        marginBottom={getSize.m(8)}
        title={description}
      />

      {imageReviews && (
        <View style={styles.wrapperImageReviews}>
          <Image
            source={photos.product_reviews01}
            style={styles.imageProductReviews}
          />
          <Image
            source={photos.product_reviews02}
            style={{
              marginHorizontal: getSize.m(12),
              ...styles.imageProductReviews,
            }}
          />
          <Image
            source={photos.product_reviews03}
            style={styles.imageProductReviews}
          />
        </View>
      )}

      <Texting title={time} fontSize={getSize.m(10)} />
    </View>
  );
};

export default ReviewsProduct;
