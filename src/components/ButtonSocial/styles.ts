import { COLORS, FONTS } from '@/constants'
import { getSize } from '@/utils'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  wrapperSocial: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperIconSocial: {
    position: 'absolute',
    left: getSize.s(16),
    top: getSize.s(13),
  },
  textButton: {
    fontFamily: FONTS.bold,
    paddingVertical: getSize.m(16),
  },
})
export default styles
