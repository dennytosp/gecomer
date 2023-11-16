import { COLORS, FONTS } from '@/constants'
import { getSize, height, width } from '@/utils'
import { StyleSheet } from 'react-native'

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
  textTitle: {
    fontFamily: FONTS.bold,
    fontSize: getSize.m(24),
    color: COLORS.white,
    lineHeight: getSize.m(36),
  },
})
