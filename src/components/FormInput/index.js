import React from 'react';
import {View, Pressable, TextInput} from 'react-native';
import styles from './styles';
import {COLORS} from '../../constants/theme';

const FormInput = ({
  icon,
  placeholder,
  keyboardType,
  secureTextEntry,
  onFocus,
  onChangeText,
  autoFocus,
  onEndEditing,
  value,
  defaultValue,
  right,
  marginBottom,
  editable,
  style,
}) => {
  return (
    <View
      style={{
        ...styles.wrapperFormInput,
        marginBottom: marginBottom,
        ...style,
      }}>
      <View style={styles.wrapperContentInput}>
        {icon && <Pressable style={styles.wrapperIconInput}>{icon}</Pressable>}
        <TextInput
          placeholder={placeholder}
          onChangeText={onChangeText}
          placeholderTextColor={COLORS.grey}
          keyboardType={keyboardType}
          onFocus={onFocus}
          secureTextEntry={secureTextEntry}
          autoFocus={autoFocus ? true : false}
          onEndEditing={onEndEditing}
          value={value}
          defaultValue={defaultValue}
          editable={!editable ? true : false}
          style={styles.txtInput}
        />
        {right && (
          <Pressable style={styles.wrapperRightInput}>{right}</Pressable>
        )}
      </View>
    </View>
  );
};

export default FormInput;
