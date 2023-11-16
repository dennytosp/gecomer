import { COLORS } from '@/constants'
import { getSize } from '@/utils'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: getSize.m(16),
  },
  wrapperTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: getSize.m(16),
    marginBottom: getSize.m(32),
  },
  wrapperEventAddReviews: {
    width: getSize.s(40),
    height: getSize.v(40),
    backgroundColor: COLORS.black,
    borderRadius: getSize.s(40 / 2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperCardReviews: {
    backgroundColor: COLORS.white,
    borderRadius: getSize.m(8),
    paddingTop: getSize.m(24),
    shadowColor: COLORS.black,
    elevation: getSize.m(4),
    shadowOffset: { width: getSize.m(0), height: getSize.m(4) },
    shadowOpacity: getSize.m(0.2),
    shadowRadius: getSize.m(8),
    paddingHorizontal: getSize.m(16),
    paddingBottom: getSize.m(16),
    marginBottom: getSize.m(32),
  },
  wrapperInforInsideCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapperRowLeftInfor: {
    flexDirection: 'row',
  },
  wrapperAvatarInsideCard: {},
  imageAvatar: {
    width: getSize.s(40),
    height: getSize.v(40),
    borderRadius: getSize.s(40 / 2),
  },
  wrapperRowRightInfo: {
    justifyContent: 'flex-end',
  },
  wrapLike: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  wrapperImage: {},
  textDescription: {
    fontSize: getSize.m(12),
    color: COLORS.secondary,
    textAlign: 'justify',
  },
  wrapTextDescription: {
    marginVertical: getSize.m(10),
  },
})
