import React from 'react';
import {View} from 'react-native';
import {Texting} from '../..';
import styles from './styles';
import {width} from '../../../utils/reponsive';
import {COLORS, FONTS} from '../../../constants';
const Iteming = ({
  left01,
  left02,
  left03,
  left04,
  right01,
  right02,
  right03,
  right04,
  fontBold,
  style,
}) => {
  return (
    <View style={{...styles.wrapperFooter, ...style}}>
      <View style={styles.rowFooter}>
        <Texting title={left01} />
        <Texting title={right01} color={COLORS.secondary} />
      </View>
      <View style={styles.rowFooter}>
        <Texting title={left02} />
        <Texting title={right02} color={COLORS.secondary} />
      </View>
      <View style={styles.rowFooter}>
        <Texting title={left03} />
        <Texting title={right03} color={COLORS.secondary} />
      </View>
      <View style={{...styles.rowFooter}}>
        <Texting
          color={fontBold && COLORS.secondary}
          fontFamily={fontBold && FONTS.bold}
          title={left04}
        />
        <Texting
          title={right04}
          color={fontBold ? COLORS.primary : COLORS.secondary}
          width={width / 3}
          textAlign="right"
          fontFamily={fontBold ? FONTS.bold : FONTS.regular}
        />
      </View>
    </View>
  );
};

export default Iteming;
