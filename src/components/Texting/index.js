import React from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import styles from './styles';
import {COLORS, FONTS} from '../../constants/theme';

const Texting = ({
  title,
  numberOfLines,
  marginHorizontal,
  marginVertical,
  paddingHorizontal,
  paddingVertical,
  color,
  backgroundColor,
  textAlign,
  fontSize,
  fontWeight,
  fontFamily,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
  borderRadius,
  borderColor,
  borderWidth,
  alignItems,
  justifyContent,
  style,
}) => {
  const navigation = useNavigation();

  return (
    <View style={{...style, ...styles.container}}>
      <Text
        numberOfLines={numberOfLines}
        style={styles.text(
          marginHorizontal,
          marginVertical,
          paddingHorizontal,
          paddingVertical,
          color,
          backgroundColor,
          textAlign,
          fontSize,
          fontWeight,
          fontFamily,
          marginLeft,
          marginRight,
          marginTop,
          marginBottom,
          paddingLeft,
          paddingRight,
          paddingTop,
          paddingBottom,
          borderRadius,
          borderColor,
          borderWidth,
          alignItems,
          justifyContent,
        )}>
        {title}
      </Text>
    </View>
  );
};

export default Texting;
