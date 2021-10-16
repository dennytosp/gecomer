import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import {Texting} from '../../../../../components';
import {photos} from '../../../../../assets';
import {COLORS, FONTS} from '../../../../../constants';
import {getSize} from '../../../../../utils/reponsive';

const RecommendProduct = () => {
  return (
    <View style={styles.wrapperRecommendProduct}>
      <Image source={photos.promotion02} style={styles.imageRecommend} />
      <View style={styles.wrapperTitle}>
        <Texting
          title={'Recommend \nProduct'}
          fontSize={getSize.m(24)}
          color={COLORS.white}
          lineHeight={36}
          fontFamily={FONTS.bold}
        />
      </View>
      <View style={styles.wrapperSubTitle}>
        <Texting title="We recommend the best for you" color={COLORS.white} />
      </View>
    </View>
  );
};

export default RecommendProduct;
