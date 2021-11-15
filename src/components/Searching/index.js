import React from 'react';
import {View, Pressable, TextInput} from 'react-native';
import styles from './styles';
import {COLORS} from '../../constants/theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SearchPrimary} from '../../assets/svg';

const Searching = ({
  style,
  placeholder,
  value,
  onChangeText,
  editable,
  iconRightInput,
  iconRight,
  iconRight01,
  handleOnpressInput,
  handleOnpressRight,
  handleOnpressRightInput,
  handleOnpressRight01,
}) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{...style}}>
      <View style={{marginTop: insets.top + 20, ...styles.wrapperHeader}}>
        <Pressable onPressIn={handleOnpressInput} style={styles.wrapperSearch}>
          <SearchPrimary />
          <TextInput
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value}
            placeholderTextColor={COLORS.grey}
            editable={!editable ? false : true}
            style={styles.input}
          />
          <Pressable onPress={handleOnpressRightInput}>
            {iconRightInput}
          </Pressable>
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
      <View style={{...styles.wrapperLines}}></View>
    </View>
  );
};

export default Searching;
