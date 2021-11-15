import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';
import {getSize} from '../../../utils/reponsive';

export const styles = StyleSheet.create({
  wrapperProducsing: marginBottom => ({
    marginBottom: !marginBottom ? getSize.m(12) : marginBottom,
    borderRadius: getSize.s(5),
    borderColor: COLORS.border,
    borderWidth: 3 / 2,
    padding: getSize.m(16),
  }),
  imageProducts: columns => ({
    width: columns ? getSize.s(266 / 2) : getSize.s(110),
    height: columns ? getSize.v(266 / 2) : getSize.v(110),
    marginBottom: getSize.m(8),
  }),
  wrapperRowPrice: {
    flexDirection: 'row',
  },
});
export default styles;