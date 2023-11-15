import { COLORS } from '@/constants'
import { getSize } from '@/utils'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  wrapperFullHeader: {},
  wrapperHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wrapperLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapperRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapperLines: {
    borderWidth: getSize.s(1),
    borderColor: COLORS.border,
    marginTop: getSize.m(20),
    marginHorizontal: getSize.m(-16),
  },
})
export default styles
