import React from 'react';
import {Pressable} from 'react-native';
import styles from './styles';
import {COLORS, FONTS} from '../../constants/theme';
import Texting from '../Texting';
import { getSize } from '../../utils/reponsive';

const ButtonPrimary = ({
  title,
  marginVertical,
  paddingHorizontal,
  paddingVertical,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
  handleOnpress,
  style,
}) => {
  return (
    <Pressable
      onPress={handleOnpress}
      style={{
        ...style,
        ...styles.wrapperButton(
          marginVertical,
          paddingHorizontal,
          paddingVertical,
          marginLeft,
          marginRight,
          marginTop,
          marginBottom,
          paddingLeft,
          paddingRight,
          paddingTop,
          paddingBottom,
        ),
      }}>
      <Texting
        title={title}
        fontFamily={FONTS.bold}
        fontSize={getSize.m(14)}
        color={COLORS.white}
        paddingVertical={getSize.m(16)}
      />
    </Pressable>
  );
};

export default ButtonPrimary;
