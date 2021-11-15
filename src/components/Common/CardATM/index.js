import React from 'react';
import {Pressable, View} from 'react-native';
import {Texting} from '../..';
import {getSize} from '../../../utils/reponsive';
import {COLORS, FONTS} from '../../../constants';
import styles from './styles';

const CardATM = ({backgroundColor, method, code, holder, time, style}) => {
  return (
    <View
      style={{
        ...styles.wrapperCard,
        backgroundColor: backgroundColor ? backgroundColor : COLORS.primary,
        ...style,
      }}>
      <Pressable>{method}</Pressable>
      <Texting
        title={code}
        color={COLORS.white}
        fontFamily={FONTS.bold}
        marginTop={getSize.m(32)}
        marginBottom={getSize.m(16)}
        fontSize={getSize.m(24)}
      />
      <View style={styles.wrapperRow}>
        <View style={styles.row01}>
          <Texting
            title="CARD HOLDER"
            fontSize={getSize.m(10)}
            color={COLORS.white}
          />
          <Texting
            title={holder}
            fontSize={getSize.m(10)}
            fontFamily={FONTS.bold}
            color={COLORS.white}
          />
        </View>
        <View style={styles.row02}>
          <Texting
            title="CARD SAVE"
            fontSize={getSize.m(10)}
            color={COLORS.white}
          />
          <Texting
            title={time}
            fontSize={getSize.m(10)}
            fontFamily={FONTS.bold}
            color={COLORS.white}
          />
        </View>
      </View>
    </View>
  );
};

export default CardATM;
