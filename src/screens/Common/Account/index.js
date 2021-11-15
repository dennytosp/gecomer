import React from 'react';
import {FlatList, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import styles from './styles';
import {Header, Eventlist} from '../../../components';
import {DATA_ACCOUNT} from './../../../assets/data';
import {getSize, width} from '../../../utils/reponsive';

const Account = () => {
  const navigation = useNavigation();
  const _renderEvent = ({item}) => {
    return (
      <View style={styles.wrapperEvent}>
        <Eventlist
          icon={item.icon}
          title={item.name}
          widthing={width}
          backgroundColor={item.backgroundColor}
          paddingHorizontal={getSize.m(16)}
          handleOnpress={() => navigation.navigate(item.navigation)}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header
        title="Account"
        disableIconLeft
        topline
        paddingHorizontal={getSize.m(16)}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA_ACCOUNT}
        renderItem={_renderEvent}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default Account;
