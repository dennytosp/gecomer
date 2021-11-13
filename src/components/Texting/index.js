import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

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
  lineHeight,
  flex,
  handleOnpress,
  width,
  height,
  textDecorationLine,
  textDecorationStyle,
  zIndex,
  flexWrap,
  style,
}) => {
  return (
    <View style={{...style, ...styles.container}}>
      <Text
        onPress={handleOnpress}
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
          lineHeight,
          flex,
          width,
          height,
          textDecorationLine,
          textDecorationStyle,
          zIndex,
          flexWrap,
        )}>
        {title}
      </Text>
    </View>
  );
};

export default Texting;
