import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../constants';

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  image: {
    marginBottom: 40,
  },
  title: {
    fontFamily: FONTS.gelasioSemiBold,
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.black,
    lineHeight: 36,
    textAlign: 'center',
    marginHorizontal: 40,
    marginBottom: 25,
  },
  text: {
    fontFamily: FONTS.regular,
    fontSize: 14,
    color: COLORS.black,
    textAlign: 'center',
    marginHorizontal: 60,
    lineHeight: 16.41,
  },
  dotStyle: {
    backgroundColor: COLORS.gray05,
  },
  activeDotStyle: {
    backgroundColor: COLORS.black,
  },
  rightTextWrapper: {
    width: 40,
    height: 40,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  rightText: {
    color: COLORS.black,
    fontSize: 14,
    fontFamily: FONTS.semiBold,
  },
  leftTextWrapper: {
    width: 40,
    height: 40,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  leftText: {
    color: COLORS.black,
    fontSize: 14,
    fontFamily: FONTS.semiBold,
  },
  doneButtonWrapper: {
    flex: 1,
    paddingLeft: 35,
    paddingRight: 40,
    paddingVertical: 10,
    borderRadius: 25,
    marginRight: -0,
  },
  doneButtonText: {
    fontFamily: FONTS.semiBold,
    fontSize: 14,
    textAlign: 'center',
    color: COLORS.black01,
  },
});

export default styles;
