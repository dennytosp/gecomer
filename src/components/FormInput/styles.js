import {StyleSheet} from 'react-native';
import {getSize} from '../../utils/reponsive';
import {COLORS, FONTS} from '../../constants/theme';

export const styles = StyleSheet.create({
  wrapperFormInput: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: getSize.m(8),
  },
  wrapperContentInput: {
    flexDirection: 'row',
    paddingVertical: getSize.m(0),
    alignItems: 'center',
  },
  wrapperIconInput: {
    paddingLeft: getSize.m(16),
  },
  txtInput: {
    marginHorizontal: getSize.m(10),
    fontFamily: FONTS.regular,
    fontSize: getSize.m(12),
    marginTop: getSize.m(4),
    color: COLORS.secondary,
    flex: 1,
  },

});
export default styles;
