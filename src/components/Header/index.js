import React from 'react';
import {View, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import styles from './styles';
import {COLORS} from '../../constants/theme';
import {Texting} from '..';
import {FONTS} from './../../constants/theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {getSize} from '../../utils/reponsive';

const Header = ({
  style,
  title,
  iconBack,
  iconRight01,
  iconRight02,
  handleOnpressBack,
  handleOnpressRight01,
  handleOnpressRight02,
  paddingHorizontal,
  topline,
}) => {
  const navigation = useNavigation();
  const {top} = useSafeAreaInsets();

  return (
    <View style={styles.wrapperFullHeader}>
      <View
        style={{
          marginTop: top,
          paddingHorizontal: paddingHorizontal,
          ...styles.wrapperHeader,
          ...style,
        }}>
        <Pressable style={styles.wrapperLeft}>
          <Pressable onPress={() => navigation.goBack()}>{iconBack}</Pressable>
          <Texting
            title={title}
            fontFamily={FONTS.bold}
            fontSize={16}
            color={COLORS.secondary}
            marginHorizontal={getSize.m(16)}
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
