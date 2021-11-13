import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';
import {getSize} from '../../../utils/reponsive';

export const styles = StyleSheet.create({
  wrapperFooter: {
    borderColor: COLORS.border,
    borderWidth: getSize.m(2 / 2),
    borderRadius: getSize.m(5),
    padding: getSize.m(16),
  },
  rowFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: getSize.m(12),
  },
});
export default styles;
