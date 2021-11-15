import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';
import {getSize} from '../../../utils/reponsive';

export const styles = StyleSheet.create({
  wrapperCard: {
    borderRadius: getSize.m(5),
    padding: getSize.m(24),
  },
  wrapperRow: {
    flexDirection: 'row',
  },
  row01: {},
  row02: {
    marginHorizontal: getSize.m(32),
  },
});
export default styles;
