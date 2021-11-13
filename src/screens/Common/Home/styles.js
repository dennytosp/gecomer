import {StyleSheet} from 'react-native';
import {getSize, height, width} from '../../../utils/reponsive';
import {COLORS, FONTS} from '../../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: getSize.m(16),
  },
  onScroll: {
    marginTop: getSize.m(16)
  }
});
export default styles;
