import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';
import {getSize} from '../../../utils/reponsive';

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
    alignItems: 'center',
  },
  wrapperImageEvent: {
    width: getSize.s(70),
    height: getSize.v(70),
    borderRadius: getSize.s(100 / 2),
    borderColor: COLORS.border,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: getSize.m(8),
  },
  imageEvent: {},
});
export default styles;
