import {StyleSheet} from 'react-native';
import {getSize, height, width} from '../../../../../utils/reponsive';
import {COLORS, FONTS} from '../../../../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  wrapperImageContent: {},
  imageProduct: {
    width: width,
    height: height / 3.35,
  },
});
export default styles;
