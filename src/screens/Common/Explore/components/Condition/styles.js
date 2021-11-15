import {StyleSheet} from 'react-native';
import {getSize} from '../../../../../utils/reponsive';
import {COLORS} from '../../../../../constants';

export const styles = StyleSheet.create({
  wrapperCondition: {},
  wrapperRow: {
    flexDirection: 'row',
  },
  notClick: {
    borderColor: COLORS.border,
    borderWidth: getSize.m(1),
    borderRadius: getSize.s(5),
    padding: getSize.m(16),
  },
  clicked: {
    padding: getSize.m(16),
    backgroundColor: COLORS.border,
    borderRadius: getSize.s(5),
  },
});
export default styles;
