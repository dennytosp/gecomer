import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/theme';
import { getSize } from '../../utils/reponsive';

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
    borderRadius: 5,
    alignItems: 'center',
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: getSize.s(11),
      height: getSize.v(9),
    },
    shadowOpacity: 0.8,
    shadowRadius: 12.35,
    elevation: 12,
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
