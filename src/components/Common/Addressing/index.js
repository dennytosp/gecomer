import React from 'react';
import {View, Pressable} from 'react-native';
import {Texting} from '../..';
import styles from './styles';
import {getSize} from '../../../utils/reponsive';
import {COLORS, FONTS} from '../../../constants';
import {Delete} from '../../../assets/svg';

const Addressing = ({
  style,
  name,
  address,
  phonenumber,
  titleEvent,
  handleDelete,
  handleEventEdit,
}) => {
  return (
    <View
      style={{
        ...styles.wrapperCenter,
        ...style,
      }}>
      <Texting
        title={name}
        color={COLORS.secondary}
        fontFamily={FONTS.bold}
        fontSize={getSize.m(14)}
      />
      <Texting title={address} marginVertical={getSize.m(16)} />
      <Texting title={phonenumber} marginBottom={getSize.m(16)} />
      <View style={styles.wrapperOnEvent}>
        <Pressable style={styles.onEdit} onPress={handleEventEdit}>
          <Texting
            title={titleEvent}
            color={COLORS.white}
            fontFamily={FONTS.bold}
            fontSize={getSize.m(14)}
          />
        </Pressable>
        <Pressable onPress={handleDelete} style={styles.onRemove}>
          <Delete />
        </Pressable>
      </View>
    </View>
  );
};

export default Addressing;
