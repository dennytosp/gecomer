import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../constants';
import {getSize, width, height} from '../../../utils/reponsive';

export const styles = StyleSheet.create({
  wrapperHeaderTitling: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: getSize.m(12),
  },
  wrapperProducsing: marginBottom => ({
    marginBottom: !marginBottom ? getSize.m(12) : marginBottom,
    borderRadius: getSize.m(5),
    borderColor: COLORS.border,
    borderWidth: 1,
    padding: getSize.m(16),
  }),
  imageProducts: columns => ({
    width: columns ? getSize.s(140) : getSize.s(110),
    height: columns ? getSize.v(140) : getSize.v(110),
    marginBottom: getSize.m(8),
  }),
  wrapperRowPrice: {
    flexDirection: 'row',
  },
});
export default styles;
