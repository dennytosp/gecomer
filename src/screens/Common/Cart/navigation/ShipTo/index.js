import React from 'react';
import {View, FlatList, Pressable} from 'react-native';
import styles from './styles';
import {ButtonPrimary, Texting, Titling} from '../../../../../components';
import {DATA_ADDRESS} from '../../../../../assets/data';
import {getSize} from '../../../../../utils/reponsive';
import {Header} from '../../../../../components';
import {COLORS, FONTS} from '../../../../../constants';
import {Add_Ship, Delete} from '../../../../../assets/svg';
import {routes} from '../../../../../navigation/routes';
import {useNavigation} from '@react-navigation/core';

const ShipTo = () => {
  const navigation = useNavigation();
  const _renderCenter = ({item, index}) => {
    return (
      <View
        style={{
          ...styles.wrapperCenter,
          marginTop: index === 0 ? getSize.m(16) : 0,
        }}>
        <Texting
          title={item.name}
          color={COLORS.secondary}
          fontFamily={FONTS.bold}
          fontSize={getSize.m(14)}
        />
        <Texting title={item.address} marginVertical={getSize.m(16)} />
        <Texting title={item.phonenumber} marginBottom={getSize.m(16)} />
        <View style={styles.wrapperOnEvent}>
          <Pressable style={styles.onEdit}>
            <Titling title="Edit" color={COLORS.white} />
          </Pressable>
          <Pressable style={styles.onRemove}>
            <Delete />
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header title="Ship To" iconRight02={Add_Ship} topline />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA_ADDRESS}
        renderItem={_renderCenter}
        keyExtractor={item => item.id.toString()}
      />
      <ButtonPrimary
        title="Next"
        marginBottom={getSize.m(16)}
        handleOnpress={() => navigation.navigate(routes.PAYMENT_METHOD)}
      />
    </View>
  );
};

export default ShipTo;
