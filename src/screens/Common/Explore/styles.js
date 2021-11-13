import {StyleSheet} from 'react-native';
import {getSize} from '../../../utils/reponsive';
import {COLORS} from '../../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: getSize.m(16),
  },
  wrapperCenter: {
    flex: 1,
    justifyContent: 'center',
  },
  wrapperContent: {},
  onScroll: {
    marginTop: getSize.m(16),
  },
});
export default styles;
