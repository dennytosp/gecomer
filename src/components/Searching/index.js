import React from 'react';
import {View, Pressable, TextInput} from 'react-native';
import styles from './styles';
import {COLORS} from '../../constants/theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SearchPrimary} from '../../assets/svg';

const Searching = ({
  style,
  placeholder,
  iconLeft,
  iconRight,
  iconRight01,
  handleOnpressLeft,
  handleOnpressRight,
  handleOnpressRight01,
}) => {
  const {top} = useSafeAreaInsets();

  return (
    <View style={{marginTop: top, ...styles.wrapperHeader}}>
      <Pressable onPress={handleOnpressLeft} style={styles.wrapperSearch}>
        {/* {!iconLeft ? SearchPrimary : iconLeft} */}
        <SearchPrimary />
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={COLORS.grey}
          style={styles.input}
        />
      </Pressable>
      <Pressable onPress={handleOnpressRight} style={styles.wrapperFavorite}>
        {iconRight}
      </Pressable>
      <Pressable
        onPress={handleOnpressRight01}
        style={styles.wrapperNotification}>
        {iconRight01}
      </Pressable>
    </View>
  );
};

export default Searching;
