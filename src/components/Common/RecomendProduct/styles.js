import {StyleSheet} from 'react-native';
import {getSize, height, width} from '../../../utils/reponsive';

export const styles = StyleSheet.create({
  wrapperRecommendProduct: {
    marginBottom: getSize.m(18),
  },
  wrapperTitle: {
    position: 'absolute',
    left: getSize.m(24),
    top: getSize.m(48),
  },
  imageRecommend: {
    width: width - getSize.m(32),
    height: height / getSize.m(4),
    borderRadius: getSize.m(5),
  },
  wrapperSubTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    left: getSize.m(24),
    bottom: getSize.m(48),
  },
});
export default styles;
