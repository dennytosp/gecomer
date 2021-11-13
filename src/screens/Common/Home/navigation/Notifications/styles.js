import {StyleSheet} from 'react-native';
import {getSize, height, width} from '../../../../../utils/reponsive';
import {COLORS, FONTS} from '../../../../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: getSize.m(16),
  },
  wrapperCardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: getSize.m(28),
  },
  inSideLeftCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inSideRightCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.pale_red,
    width: getSize.s(20),
    height: getSize.v(20),
    borderRadius: getSize.s(20 / 2),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default styles;
