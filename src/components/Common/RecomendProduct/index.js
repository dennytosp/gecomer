import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import {Texting} from '../..';
import {getSize} from '../../../utils/reponsive';
import {COLORS, FONTS} from '../../../constants';

const RecommendProduct = ({image, title, subtitle, style}) => {
  return (
    <View style={{...styles.wrapperRecommendProduct, ...style}}>
      <Image source={image} style={styles.imageRecommend} />
      <View style={styles.wrapperTitle}>
        <Texting
          title={title}
          fontSize={getSize.m(24)}
          color={COLORS.white}
          lineHeight={36}
          fontFamily={FONTS.bold}
        />
      </View>
      <View style={styles.wrapperSubTitle}>
        <Texting title={subtitle} color={COLORS.white} />
      </View>
    </View>
  );
};

export default RecommendProduct;
