import {StyleSheet} from 'react-native';
import {getSize} from '../../utils/reponsive';
import {COLORS, FONTS} from '../../constants/theme';

export const styles = StyleSheet.create({
  wrapperHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wrapperLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapperRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapperLines: {
    borderWidth: getSize.s(1),
    borderColor: COLORS.border,
    marginTop: getSize.m(20),
    marginHorizontal: getSize.m(-16),
  },
});
export default styles;
