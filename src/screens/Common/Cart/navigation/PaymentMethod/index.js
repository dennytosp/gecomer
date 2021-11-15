import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './styles';
import {Eventlist} from '../../../../../components';
import {DATA_PAYMENT} from '../../../../../assets/data';
import {getSize, width} from '../../../../../utils/reponsive';
import {Header} from '../../../../../components';
import {useNavigation} from '@react-navigation/core';

const PaymentMethod = () => {
  const navigation = useNavigation();
  const _renderCenter = ({item}) => {
    return (
      <View style={styles.wrapperCenter}>
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
      <Header title="Payment" topline paddingHorizontal={getSize.m(16)} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA_PAYMENT}
        renderItem={_renderCenter}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default PaymentMethod;
