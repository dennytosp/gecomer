import React from 'react';
import {View, Pressable, Image} from 'react-native';
import {StarRating, Texting} from '../..';
import styles from './styles';
import {COLORS, FONTS} from '../../../constants';
import {getSize, width} from '../../../utils/reponsive';
import {Rating} from 'react-native-elements';
import {photos} from '../../../assets';

const ReviewsProduct = ({}) => {
  const _renderProducts = () => {
    return (
      <View style={styles.wrapperCardReviews}>
        <Pressable style={styles.wrapperInfor}>
          <Image source={photos.avatar} style={styles.imagePersonReviews} />

          <View style={styles.rating0}>
            <Texting
              title="Dinh Tien Phong"
              marginBottom={getSize.m(0)}
              fontFamily={FONTS.bold}
              fontSize={getSize.m(14)}
              color={COLORS.secondary}
            />
            <StarRating startingValue={5} imageSize={16} />
          </View>
        </Pressable>

        <Texting
          textAlign="justify"
          marginBottom={getSize.m(0)}
          title="Air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites."
        />

        <View style={{flexDirection: 'row', marginBottom: getSize.m(16)}}>
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

        <Texting title="December 10, 2020" fontSize={getSize.m(10)} />
      </View>
    );
  };
  return (
    <View>
      <_renderProducts />
    </View>
  );
};

export default ReviewsProduct;
