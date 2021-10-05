import {StyleSheet} from 'react-native';
import {getSize} from '../../../utils/reponsive';
import {COLORS} from '../../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: getSize.m(12),
  },
  wrapperHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperCenter: {

  },
  wrapperContent: {

  },
});
export default styles;
