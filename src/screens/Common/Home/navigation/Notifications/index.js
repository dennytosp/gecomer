import React from 'react';
import {View, FlatList, Pressable} from 'react-native';
import styles from './styles';
import {Header, Texting} from '../../../../../components';
import {DATA_LIST_NOTI} from '../../../../../assets/data';
import {COLORS, FONTS} from '../../../../../constants';
import {getSize} from '../../../../../utils/reponsive';
import {useNavigation} from '@react-navigation/core';

const Notifications = () => {
  const navigation = useNavigation();

  const _renderCardTop = ({item}) => {
    return (
      <View style={styles.wrapperCardTop}>
        <Pressable
          onPress={() => navigation.navigate(item.navigation)}
          style={styles.inSideLeftCard}>
          <Pressable>{item.image}</Pressable>
          <Texting
            title={item.name}
            fontFamily={FONTS.bold}
            fontSize={getSize.m(12)}
            paddingHorizontal={getSize.m(16)}
            color={COLORS.secondary}
          />
        </Pressable>
        <Pressable style={styles.inSideRightCard}>
          <Texting
            title={item.number}
            fontFamily={FONTS.bold}
            fontSize={getSize.m(10)}
            color={COLORS.white}
          />
        </Pressable>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header title="Notifications" />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA_LIST_NOTI}
        renderItem={_renderCardTop}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default Notifications;
