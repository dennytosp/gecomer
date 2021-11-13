import React from 'react';
import {View, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import styles from './styles';
import {COLORS} from '../../constants/theme';
import {Texting} from '..';
import {FONTS} from './../../constants/theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {getSize} from '../../utils/reponsive';
import {Forward} from '../../assets/svg';

const Header = ({
  style,
  title,
  iconLeft,
  disableIconLeft,
  iconRight01,
  iconRight02,
  handleOnpressBack,
  handleOnpressRight01,
  handleOnpressRight02,
  paddingHorizontal,
  topline,
}) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  return (
    <View style={{...styles.wrapperFullHeader, ...style}}>
      <View
        style={{
          marginTop: insets.top + 20,
          paddingHorizontal: paddingHorizontal,
          ...styles.wrapperHeader,
        }}>
        <Pressable style={styles.wrapperLeft}>
          {disableIconLeft ? null : (
            <Pressable onPress={() => navigation.goBack()}>
              {iconLeft ? iconLeft : <Forward />}
            </Pressable>
          )}
          <Texting
            title={title}
            fontFamily={FONTS.bold}
            fontSize={16}
            color={COLORS.secondary}
            marginHorizontal={disableIconLeft ? getSize.m(0) : getSize.m(16)}
            marginTop={getSize.m(7 / 2)}
          />
        </Pressable>
        <View style={styles.wrapperRight}>
          <Pressable
            onPress={handleOnpressRight01}
            style={{paddingHorizontal: getSize.m(16)}}>
            {iconRight01}
          </Pressable>
          <Pressable onPress={handleOnpressRight02}>{iconRight02}</Pressable>
        </View>
      </View>
      <View
        style={{
          marginBottom: topline ? 0 : getSize.m(16),
          ...styles.wrapperLines,
        }}></View>
    </View>
  );
};

export default Header;
