import React from 'react';
import {View, Pressable} from 'react-native';
import {Texting, Titling} from '../..';
import styles from './styles';
import {getSize} from '../../../utils/reponsive';
import {COLORS} from '../../../constants';

const NotifList = ({image, title, content, time}) => {
  return (
    <View style={styles.wrapperCenter}>
      <Pressable>{image}</Pressable>
      <View style={styles.wrapperContentCenter}>
        <Titling title={title} marginBottom={getSize.m(8)} />
        <Texting
          title={content}
          textAlign="justify"
          marginBottom={getSize.m(8)}
        />
        <Texting
          title={time}
          fontSize={getSize.m(10)}
          color={COLORS.secondary}
        />
      </View>
    </View>
  );
};

export default NotifList;
