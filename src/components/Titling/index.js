import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {COLORS, FONTS} from '../../constants/theme';
import {Texting} from '..';
import {getSize} from '../../utils/reponsive';

const Titling = ({style, title, more, marginTop, handleOnpress}) => {
  return (
    <View style={styles.wrapperHeaderTitling(marginTop)}>
      <Texting
        title={title}
        color={COLORS.secondary}
        fontSize={getSize.m(14)}
        fontFamily={FONTS.bold}
      />
      <Texting
        title={more}
        handleOnpress={handleOnpress}
        color={COLORS.primary}
        fontSize={getSize.m(14)}
        fontFamily={FONTS.bold}
      />
    </View>
  );
};

export default Titling;
