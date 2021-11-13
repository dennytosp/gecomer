import {StyleSheet} from 'react-native';
import {getSize} from '../../../../../../../utils/reponsive';
import {COLORS} from '../../../../../../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: getSize.m(16),
  },
  wrapperCenter: {
    flexDirection: 'row',
    marginBottom: getSize.m(32),
  },
  imageProduct: {
    width: getSize.s(48),
    height: getSize.v(48),
    borderRadius: getSize.s(5),
  },
  wrapperContentCenter: {
    marginLeft: getSize.m(12),
    flex: 1,
  },
});
export default styles;
