import {StyleSheet} from 'react-native';
import {getSize, width} from '../../../../../utils/reponsive';

export const styles = StyleSheet.create({
  wrapperPriceRange: {
    marginTop: getSize.m(16),
  },
  rowInput: {
    flexDirection: 'row',
    marginBottom: getSize.m(24),
  },
  inputRowLeft: {
    width: width / 2 - getSize.m(22),
    marginRight: getSize.m(12),
  },
  inputRowRight: {
    width: width / 2 - getSize.m(22),
  },
});
export default styles;
