import { StyleSheet } from 'react-native'
import { getSize, width } from '@/utils'
import { COLORS, FONTS } from '@/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: getSize.m(16),
  },
  wrapperHeader: {
    marginTop: getSize.m(24),
    marginBottom: getSize.m(32),
  },
  wrapperHeaderAvatar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  borderAvatar: {
    width: getSize.s(82),
    height: getSize.v(82),
    borderRadius: getSize.s(82),
    borderColor: COLORS.border,
    borderWidth: getSize.m(2),
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dashed',
  },
  avatar: {
    width: getSize.s(72),
    height: getSize.v(72),
    borderRadius: getSize.s(72),
  },
  rightAvatar: {
    marginHorizontal: getSize.m(16),
  },
  wrapperCenter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textPhone: {
    fontSize: getSize.m(14),
    fontFamily: FONTS.bold,
    color: COLORS.secondary,
  },
  wrapTextTitle: {
    marginLeft: getSize.m(12),
    paddingVertical: getSize.m(16),
    width: width / 2 - getSize.m(60),
  },
  textTitle: {
    fontSize: getSize.m(12),
    fontFamily: FONTS.bold,
    color: COLORS.secondary,
  },
  wrapTextContent: {
    width: width / 2 - getSize.m(48),
    marginRight: getSize.m(12),
  },
  textContent: {
    textAlign: 'right',
  },
})
