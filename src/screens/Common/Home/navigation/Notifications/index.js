import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './styles';
import {Eventlist, Header} from '../../../../../components';
import {DATA_LIST_NOTI} from '../../../../../assets/data';
import {width} from '../../../../../utils/reponsive';
import {useNavigation} from '@react-navigation/core';

const Notifications = () => {
  const navigation = useNavigation();
  const _renderCardTop = ({item}) => {
    return (
      <Eventlist
        handleOnpress={() => navigation.navigate(item.navigation)}
        icon={item.image}
        title={item.name}
        notifNumber={item.number}
        widthing={width / 1.5}
        warning
      />
    );
  };

  return (
    <View style={styles.container}>
      <Header title="Notifications" topline />
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
