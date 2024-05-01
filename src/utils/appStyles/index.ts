import { StyleSheet } from 'react-native'
import { getSize } from '../responsive'

export type ColAlign =
  | 'column'
  | 'columnCenter'
  | 'columnCenterTop'
  | 'columnCenterBottom'
  | 'columnCenterLeft'
  | 'columnCenterRight'
  | 'columnCenterVertical'

export const AppStyles = StyleSheet.create({
  // column
  column: {
    flexDirection: 'column',
  },
  columnCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  columnCenterTop: {
    alignItems: 'center',
  },
  columnCenterBottom: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  columnCenterLeft: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  columnCenterRight: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  columnCenterVertical: {
    justifyContent: 'center',
  },
  // row
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowVCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowCenterTop: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rowCenterBottom: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  rowCenterLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowCenterRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  rowCenterBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowTopBetween: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  rowBottomBetween: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  viewShadow: {
    borderColor: 'white',
    shadowOpacity: 0.4,
    shadowRadius: 2,
    shadowOffset: { height: 2, width: 0 },
    elevation: 5,
  },
  viewShadowAbsolute: {
    borderColor: 'white',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: { height: 2, width: 0 },
    // elevation: 5,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  viewAbsolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  iconSize: {
    width: getSize.m(24),
    aspectRatio: 1,
  },
  underline: {
    borderBottomWidth: 1,
    alignSelf: 'flex-start',
  },
})

export const columnAlignHandler = (type: ColAlign = 'column') => {
  switch (type) {
    case 'columnCenter':
      return AppStyles.columnCenter
    case 'columnCenterBottom':
      return AppStyles.columnCenterBottom
    case 'columnCenterLeft':
      return AppStyles.columnCenterLeft
    case 'columnCenterRight':
      return AppStyles.columnCenterRight
    case 'columnCenterTop':
      return AppStyles.columnCenterTop
    case 'columnCenterVertical':
      return AppStyles.columnCenterVertical
    default:
      return AppStyles.column
  }
}
