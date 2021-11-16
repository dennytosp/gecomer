import {StyleSheet} from 'react-native';
import {getSize} from '../../../../../utils/reponsive';
import {COLORS} from '../../../../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: getSize.m(16),
  },
  wrapperCenter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: getSize.m(12),
    alignItems: 'center',
    marginTop: getSize.m(16),
  },
  wrapperRightRows: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  columnWrapperStyle: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
export default styles;
