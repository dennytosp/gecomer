import {StyleSheet} from 'react-native';
import {getSize} from '../../../../../utils/reponsive';
import {COLORS,} from '../../../../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: getSize.m(16),
  },
  wrapperCenter: {
    borderColor: COLORS.border,
    borderWidth: getSize.m(1),
    borderRadius: getSize.s(5),
    padding: getSize.m(24),
    marginBottom: getSize.m(16),
  },
  wrapperOnEvent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  onEdit: {
    width: getSize.s(80),
    height: getSize.v(55),
    backgroundColor: COLORS.primary,
    borderRadius: getSize.s(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  onRemove: {
    marginHorizontal: getSize.m(24),
  },
});
export default styles;
