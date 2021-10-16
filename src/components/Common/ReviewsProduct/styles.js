import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../constants';
import {getSize, width, height} from '../../../utils/reponsive';

export const styles = StyleSheet.create({
  wrapperCardReviews: {},
  wrapperInfor: {
    flexDirection: 'row',
    marginBottom: getSize.m(16),
    alignItems: 'center',
  },
  imagePersonReviews: {
    width: getSize.s(60),
    height: getSize.v(60),
    borderRadius: getSize.s(60 / 2),
  },
  rating0: {
    marginHorizontal: getSize.m(16),
  },
  imageProductReviews: {
    width: getSize.s(72),
    height: getSize.v(72),
    borderRadius: getSize.s(8),
  },
});
export default styles;
