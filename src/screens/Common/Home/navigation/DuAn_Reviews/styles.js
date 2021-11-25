import {StyleSheet} from 'react-native';
import {getSize} from '../../../../../utils/reponsive';
import {COLORS} from '../../../../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: getSize.m(16),
  },
  wrapperTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: getSize.m(16),
  },
  wrapperEventAddReviews: {
    width: getSize.s(40),
    height: getSize.v(40),
    backgroundColor: COLORS.black,
    borderRadius: getSize.s(40 / 2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperCardReviews: {
    backgroundColor: COLORS.white,
    borderRadius: getSize.m(8),
    paddingTop: getSize.m(24),
    shadowColor: COLORS.black,
    elevation: getSize.m(8),
    paddingHorizontal: getSize.m(16),
    marginHorizontal: getSize.m(-16),
    paddingBottom: getSize.m(16),
    marginBottom: getSize.m(32),
  },
  wrapperInforInsideCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapperRowLeftInfor: {
    flexDirection: 'row',
  },
  wrapperAvatarInsideCard: {},
  imageAvatar: {
    width: getSize.s(40),
    height: getSize.v(40),
    borderRadius: getSize.s(40 / 2),
  },
  wrapperRowRightInfor: {
    justifyContent: 'flex-end',
  },
  wrapperImage: {
  }
});
export default styles;
