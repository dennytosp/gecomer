import React from 'react';
import {View, Pressable, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import styles from './styles';
import {COLORS} from '../../constants/theme';

const FormInput = ({
  icon,
  placeholder,
  keyboardType,
  secureTextEntry,
  onFocus,
  onChangeText,
  style,
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapperFormInput}>
      <View style={styles.wrapperContentInput}>
        {icon ? (
          <Pressable style={styles.wrapperIconInput}>{icon}</Pressable>
        ) : null}
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={COLORS.grey}
          keyboardType={keyboardType}
          onFocus={onFocus}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          style={styles.txtInput}
        />
      </View>
    </View>
  );
};

export default FormInput;
