import {StyleSheet} from 'react-native';
import {getSize} from '../../../../../utils/reponsive';
import {COLORS} from '../../../../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: getSize.m(16),
  },
  wrapperHeader: {
    marginTop: getSize.m(24),
    marginBottom: getSize.m(32),
  },
  wrapperHeaderAvatar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  borderAvatar: {
    width: getSize.s(82),
    height: getSize.v(82),
    borderRadius: getSize.s(82),
    borderColor: COLORS.border,
    borderWidth: getSize.m(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: getSize.s(72),
    height: getSize.v(72),
    borderRadius: getSize.s(72),
  },
  rightAvatar: {
    marginHorizontal: getSize.m(16),
  },
  wrapperCenter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default styles;
