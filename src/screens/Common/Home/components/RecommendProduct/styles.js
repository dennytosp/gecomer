import {StyleSheet} from 'react-native';
import {getSize, height, width} from '../../../../../utils/reponsive';

export const styles = StyleSheet.create({
  wrapperRecommendProduct: {
    marginBottom: 24,
  },
  wrapperTitle: {
    position: 'absolute',
    left: getSize.m(24),
    top: getSize.m(48),
  },
  imageRecommend: {
    width: width - 32,
    height: height / 4,
    borderRadius: 5,
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
