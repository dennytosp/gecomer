import { COLORS } from '@/constants'
import { getSize } from '@/utils'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: getSize.m(16),
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
    flex: 1,
  },
  wrapperMegaSale: index => ({
    marginTop: index <= 1 ? getSize.m(16) : getSize.m(0),
  }),
})
export default styles
