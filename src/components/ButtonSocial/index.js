import React from 'react';
import {Pressable} from 'react-native';
import styles from './styles';
import {FONTS} from '../../constants/theme';
import Texting from '../Texting';
import {getSize} from '../../utils/reponsive';

const ButtonSocial = ({
  icon,
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
        ...styles.wrapperSocial(
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
      <Pressable style={styles.wrapperIconSocial}>{icon}</Pressable>
      <Texting
        title={title}
        fontFamily={FONTS.bold}
        paddingVertical={getSize.m(14)}
      />
    </Pressable>
  );
};

export default ButtonSocial;
