import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {COLORS, FONTS} from '../../constants/theme';
import {Texting} from '..';
import {getSize} from '../../utils/reponsive';

const Titling = ({
  style,
  title,
  more,
  fontSize,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
  paddingHorizontal,
  paddingVertical,
  textAlign,
  color,
  handleOnpress,
}) => {
  return (
    <View
      style={{
        ...styles.wrapperHeaderTitling(
          marginLeft,
          marginRight,
          marginTop,
          marginBottom,
          paddingHorizontal,
          paddingVertical,
        ),
        ...style,
      }}>
      <Texting
        title={title}
        color={color ? color : COLORS.secondary}
        textAlign={textAlign}
        fontSize={fontSize ? fontSize : getSize.m(14)}
        fontFamily={FONTS.bold}
      />
      {more ? (
        <Texting
          title={more}
          handleOnpress={handleOnpress}
          color={COLORS.primary}
          fontSize={fontSize ? fontSize : getSize.m(14)}
          fontFamily={FONTS.bold}
        />
      ) : null}
    </View>
  );
};

export default Titling;
