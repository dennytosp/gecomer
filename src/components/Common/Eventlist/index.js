import React from 'react';
import {Pressable, View} from 'react-native';
import {Texting} from '../..';
import {getSize} from '../../../utils/reponsive';
import {COLORS, FONTS} from '../../../constants';
import styles from './styles';

const Eventlist = ({
  icon,
  title,
  warning,
  notifNumber,
  maxWidth,
  widthing,
  backgroundColor,
  paddingHorizontal,
  handleOnpress,
  style,
}) => {
  return (
    <View style={{...styles.wrapperCardTop, ...style}}>
      <Pressable
        onPress={handleOnpress}
        style={{
          ...styles.inSideLeftCard,
          backgroundColor: backgroundColor,
          paddingHorizontal: paddingHorizontal,
        }}>
        <Pressable>{icon}</Pressable>
        <Texting
          title={title}
          fontFamily={FONTS.bold}
          fontSize={getSize.m(12)}
          marginHorizontal={getSize.m(16)}
          color={COLORS.secondary}
          paddingVertical={getSize.m(16)}
          maxWidth={maxWidth}
          width={widthing}
        />
      </Pressable>
      {warning && (
        <Pressable style={styles.inSideRightCard}>
          <Texting
            title={notifNumber}
            fontFamily={FONTS.bold}
            fontSize={getSize.m(10)}
            color={COLORS.white}
          />
        </Pressable>
      )}
    </View>
  );
};

export default Eventlist;
