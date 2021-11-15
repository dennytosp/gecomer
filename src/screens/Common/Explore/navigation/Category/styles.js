import {StyleSheet} from 'react-native';
import {getSize} from '../../../../../utils/reponsive';
import {COLORS} from '../../../../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  icon: {
    paddingVertical: getSize.m(16),
  },
  wrapperCenter: {
    flexDirection: 'row',
    paddingHorizontal: getSize.m(16),
  },
});
export default styles;
