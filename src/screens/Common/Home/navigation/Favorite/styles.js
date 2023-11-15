import { COLORS } from '@/constants'
import { getSize } from '@/utils'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: getSize.m(16),
  },
  wrapperProducts: {},
  columnWrapperStyle: {
    justifyContent: 'space-between',
    flex: 1,
  },
  wrapperFavoriteProducts: index => ({
    marginTop: index <= 1 ? getSize.m(16) : getSize.m(0),
  }),
})
export default styles
