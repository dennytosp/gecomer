import { COLORS } from '@/constants'
import { getSize } from '@/utils'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  wrapperCardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inSideLeftCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inSideRightCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.pale_red,
    width: getSize.s(20),
    height: getSize.v(20),
    borderRadius: getSize.s(20 / 2),
    alignItems: 'center',
    justifyContent: 'center',
  },
})
export default styles
