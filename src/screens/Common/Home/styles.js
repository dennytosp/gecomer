import {StyleSheet} from 'react-native';
import {getSize, height, width} from '../../../utils/reponsive';
import {COLORS, FONTS} from '../../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: getSize.m(16),
  },
  wrapperLines: {
    borderWidth: getSize.s(1),
    borderColor: COLORS.border,
    marginVertical: getSize.m(16),
    marginHorizontal: getSize.m(-16),
  },
});
export default styles;
