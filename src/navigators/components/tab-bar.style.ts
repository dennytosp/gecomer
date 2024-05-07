import { StyleSheet } from 'react-native'
import { COLORS, FONTS } from '@/theme'
import { getSize } from '@/utils'

export const styles = StyleSheet.create({
  btn: { flex: 1, alignItems: 'center' },
  textLabel: {
    marginTop: 12.6 / 2,
    fontSize: 10,
    fontFamily: FONTS.regular,
  },
  iconStyle: {
    width: getSize.s(20),
    height: getSize.s(20),
    resizeMode: 'contain',
  },
  containerStyle: {
    position: 'absolute',
    zIndex: 10,
    top: getSize.s(-7),
    right: getSize.s(21),
  },
  wrapTabBar: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    paddingTop: 10,
  },
  badgeStyle: { borderColor: COLORS.white, borderWidth: 1 },
})
