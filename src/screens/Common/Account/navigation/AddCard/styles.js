import {StyleSheet} from 'react-native';
import {getSize, width} from '../../../../../utils/reponsive';
import {COLORS} from '../../../../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: getSize.m(16),
  },
  wrapperContent: {
  },
  rowInput: {
    flexDirection: 'row',
    marginTop: getSize.m(24),
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
