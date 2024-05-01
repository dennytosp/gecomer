import { COLORS } from '@/constants'
import { height, width } from '@/utils'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  wrapperImageContent: {},
  imageProduct: {
    width: width,
    height: height / 3.35,
  },
})
