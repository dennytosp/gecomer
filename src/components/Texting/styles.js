import {StyleSheet} from 'react-native';
import {getSize} from '../../utils/reponsive';
import {COLORS, FONTS} from '../../constants/theme';

export const styles = StyleSheet.create({
  text: (
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
  ) => ({
    marginHorizontal: marginHorizontal,
    marginVertical: marginVertical,
    paddingHorizontal: paddingHorizontal,
    paddingVertical: paddingVertical,
    color: color ? color : COLORS.grey,
    backgroundColor: backgroundColor,
    textAlign: textAlign,
    fontSize: fontSize ? fontSize : getSize.m(12),
    fontWeight: fontWeight,
    fontFamily: fontFamily ? fontFamily : FONTS.regular,
    marginLeft: marginLeft,
    marginRight: marginRight,
    marginTop: marginTop,
    marginBottom: marginBottom,
    paddingLeft: paddingLeft,
    paddingRight: paddingRight,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
    borderRadius: borderRadius,
    borderColor: borderColor,
    borderWidth: borderWidth,
    alignItems: alignItems,
    justifyContent: justifyContent,
    lineHeight: lineHeight,
    flex: flex,
    width: width,
    height: height,
    textDecorationLine: textDecorationLine,
    textDecorationStyle: textDecorationStyle,
    zIndex: zIndex,
    flexWrap: flexWrap,
  }),
});
export default styles;
