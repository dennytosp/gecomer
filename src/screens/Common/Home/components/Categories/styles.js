import {StyleSheet} from 'react-native';
import {getSize} from '../../../../../utils/reponsive';
import {COLORS} from '../../../../../constants';

export const styles = StyleSheet.create({
  wrapperCategories: {
    marginBottom: getSize.m(24),
  },
  wrapperHeaderCategories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: getSize.m(12),
  },
  wrapperEventCategories: {
    justifyContent: 'center',
  },
  wrapperImageEvent: {
    width: getSize.s(70),
    height: getSize.v(70),
    borderRadius: getSize.s(70 / 2),
    borderColor: COLORS.border,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: getSize.m(8),
  },
  imageEvent: {},
});
export default styles;
