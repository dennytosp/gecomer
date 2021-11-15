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
    alignItems: 'center',
  },
  wrapperLogo: {
    marginBottom: 16,
  },

  wrapperCenter: {},
  wrapperFooter: {
    marginTop: 24,
  },
  wrapperTextFooter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
