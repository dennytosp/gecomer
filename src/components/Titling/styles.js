import {StyleSheet} from 'react-native';
import {getSize} from '../../utils/reponsive';

export const styles = StyleSheet.create({
  wrapperHeaderTitling: (
    marginLeft,
    marginRight,
    marginTop,
    marginBottom,
    paddingHorizontal,
    paddingVertical,
  ) => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: marginLeft,
    marginRight: marginRight,
    marginBottom: marginBottom ? marginBottom : getSize.m(12),
    marginTop: marginTop,
    paddingHorizontal: paddingHorizontal,
    paddingVertical: paddingVertical,
  }),
});
export default styles;
