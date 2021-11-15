import React from 'react';
import {FlatList, View} from 'react-native';
import styles from './styles';
import {Addressing, ButtonPrimary, Header} from '../../../../../components';
import {Add_Ship, Editing} from '../../../../../assets/svg';
import {useNavigation} from '@react-navigation/core';
import {routes} from '../../../../../navigation/routes';
import {DATA_ADDRESS} from '../../../../../assets/data';
import {getSize} from '../../../../../utils/reponsive';

const Address = ({route}) => {
  const navigation = useNavigation();
  const _renderAddress = ({item, index}) => {
    return (
      <Addressing
        style={{
          marginTop: index === 0 ? getSize.m(16) : getSize.m(0),
        }}
        name={item.name}
        address={item.address}
        phonenumber={item.phonenumber}
        titleEvent="Edit"
        handleDelete={() => navigation.navigate(routes.CONFIRMATION)}
        handleEventEdit={() =>
          navigation.navigate(routes.ADD_ADDRESS, {
            edit_address: 'Edit Address',
          })
        }
      />
    );
  };

  return (
    <View style={styles.container}>
      <Header title="Address" topline />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA_ADDRESS}
        renderItem={_renderAddress}
        keyExtractor={item => item.id.toString()}
      />
      <ButtonPrimary
        title="Add Address"
        marginBottom={getSize.m(16)}
        handleOnpress={() =>
          navigation.navigate(routes.ADD_ADDRESS, {add_address: 'Add Address'})
        }
      />
    </View>
  );
};

export default Address;
