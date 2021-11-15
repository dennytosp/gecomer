import {StyleSheet} from 'react-native';
import {getSize} from '../../../../../utils/reponsive';
import {COLORS} from '../../../../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: getSize.m(16),
  },
  wrapperOrder: {
    marginTop: getSize.m(16),
    borderRadius: getSize.m(5),
    borderWidth: getSize.m(1),
    borderColor: COLORS.border,
    padding: getSize.m(16),
  },
  line: {
    backgroundColor: COLORS.border,
    height: getSize.m(1),
    marginBottom: getSize.m(12),
  },
  rowOrder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default styles;
