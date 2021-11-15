import {StyleSheet} from 'react-native';
import {getSize} from '../../../utils/reponsive';
import {COLORS} from '../../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: getSize.m(16),
  },
  wrapperHeader: {
    backgroundColor: COLORS.primary,
    padding: getSize.m(16),
    borderRadius: getSize.m(5),
    marginTop: getSize.m(16),
  },
  wrapperCenter: {
    marginVertical: getSize.m(16),

  },
  wrapperContent: {

  },
});
export default styles;
