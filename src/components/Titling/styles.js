import {StyleSheet} from 'react-native';
import {getSize} from '../../utils/reponsive';

export const styles = StyleSheet.create({
  wrapperHeaderTitling: marginTop => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: getSize.m(12),
    marginTop: marginTop ? marginTop : 0,
  }),
});
export default styles;
