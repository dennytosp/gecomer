import {StyleSheet} from 'react-native';
import {getSize} from '../../../utils/reponsive';
import {COLORS, FONTS} from '../../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: getSize.m(16),
  },
  wrapperCenter: {
    marginTop: getSize.m(32),
    marginBottom: getSize.m(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: COLORS.border,
    borderWidth: getSize.m(2 / 2),
    borderRadius: getSize.m(5),
  },
  input: {
    fontFamily: FONTS.regular,
    fontSize: getSize.m(12),
    flex: 1,
    paddingHorizontal: getSize.m(16),
    color: COLORS.secondary,
  },
  wrapperButtonApply: {
    backgroundColor: COLORS.primary,
    width: getSize.s(87),
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: getSize.m(5),
    borderBottomRightRadius: getSize.m(5),
  },
});
export default styles;
