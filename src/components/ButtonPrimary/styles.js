import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/theme';
import {getSize} from '../../utils/reponsive';

export const styles = StyleSheet.create({
  wrapperButton: (
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
  ) => ({
    backgroundColor: COLORS.primary,
    borderRadius: getSize.s(5),
    alignItems: 'center',
    shadowColor: COLORS.secondary,
    shadowOffset: {
      width: getSize.s(12),
      height: getSize.v(8),
    },
    shadowOpacity: 0.8,
    shadowRadius: 12.35,
    elevation: getSize.m(0),
    marginVertical: marginVertical,
    paddingHorizontal: paddingHorizontal,
    paddingVertical: paddingVertical,
    marginLeft: marginLeft,
    marginRight: marginRight,
    marginTop: marginTop,
    marginBottom: marginBottom,
    paddingLeft: paddingLeft,
    paddingRight: paddingRight,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
  }),
});
export default styles;
