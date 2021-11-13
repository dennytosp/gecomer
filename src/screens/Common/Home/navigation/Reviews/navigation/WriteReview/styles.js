import {StyleSheet} from 'react-native';
import {getSize, height, width} from '../../../../../../../utils/reponsive';
import {COLORS, FONTS} from '../../../../../../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: getSize.m(16),
  },
  wrapperCenter: {},
  wrapperStar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: getSize.m(24),
  },
  wrapperInputWrite: {
    borderRadius: getSize.m(5),
    borderWidth: getSize.s(1),
    borderColor: COLORS.border,
    marginBottom: getSize.m(24),
  },
  inputWrite: {
    color: COLORS.secondary,
    fontFamily: FONTS.regular,
    fontSize: getSize.m(12),
    paddingHorizontal: getSize.m(16),
    paddingTop: getSize.m(10),
    textAlignVertical: 'top',
    flex: 1,
    height: getSize.m(320 / 2),
  },
  wrapperPlus: {
    width: getSize.s(72),
    height: getSize.v(72),
    borderRadius: 5,
    borderWidth: getSize.s(1),
    borderColor: COLORS.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperPhotos: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  wrapperPhotoReviews: {
    flexDirection: 'row',
  },
  photoReviews: {
    width: getSize.s(72),
    height: getSize.v(72),
    borderRadius: getSize.s(5),
    marginLeft: getSize.m(12),
  },
});
export default styles;
