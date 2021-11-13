import {StyleSheet} from 'react-native';
import {getSize, height, width} from '../../../../../utils/reponsive';
import {COLORS, FONTS} from '../../../../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: getSize.m(16),
  },
  wrapperAllReview: {
    backgroundColor: '#E7F7FF',
    borderRadius: getSize.m(5),
    width: getSize.s(100),
    alignItems: 'center',
    marginRight: getSize.m(12),
    height: getSize.v(50),
  },
  wrapperTabReviews: {
    borderRadius: getSize.m(5),
    borderColor: COLORS.border,
    borderWidth: 1,
    width: getSize.s(62),
    height: getSize.v(50),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperCardTop: {
    flexDirection: 'row',
    marginBottom: getSize.m(24),
  },
});
export default styles;
