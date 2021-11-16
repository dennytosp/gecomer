import React from 'react';
import {FlatList, Pressable, View} from 'react-native';
import styles from './styles';
import {Header, Texting} from '../../../../../components';
import {useNavigation} from '@react-navigation/core';
import {routes} from '../../../../../navigation/routes';
import {getSize} from '../../../../../utils/reponsive';
import {COLORS, FONTS} from '../../../../../constants';
import {DATA_ORDER} from './../../../../../assets/data/sources';

const Order = () => {
  const navigation = useNavigation();

  const _renderOrder = ({item, index}) => {
    return (
      <Pressable
        onPress={() => navigation.navigate(routes.ORDER_DETAILS)}
        style={{
          ...styles.wrapperOrder,
          marginTop: index === 0 ? getSize.m(16) : 0,
        }}>
        <Texting
          title={item.code}
          fontSize={getSize.m(14)}
          fontFamily={FONTS.bold}
          color={COLORS.secondary}
        />
        <Texting
          title={'Order at Gecomer: ' + item.time}
          marginVertical={getSize.m(12)}
        />
        <View style={styles.line}></View>
        <View style={{...styles.rowOrder}}>
          <Texting title="Order Status" />
          <Texting title={item.status} color={COLORS.secondary} />
        </View>
        <View style={{...styles.rowOrder, marginVertical: getSize.m(12)}}>
          <Texting title="Items" />
          <Texting title={item.quantity} color={COLORS.secondary} />
        </View>
        <View style={{...styles.rowOrder}}>
          <Texting title="Price" />
          <Texting
            title={item.price}
            fontFamily={FONTS.bold}
            color={COLORS.primary}
          />
        </View>
      </Pressable>
    );
  };
  return (
    <View style={styles.container}>
      <Header title="Order" topline />
      <FlatList
        // style={{marginTop: getSize.m(16)}}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        data={DATA_ORDER}
        renderItem={_renderOrder}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default Order;
