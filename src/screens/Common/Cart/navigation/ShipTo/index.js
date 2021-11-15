import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './styles';
import {Addressing, ButtonPrimary} from '../../../../../components';
import {DATA_ADDRESS} from '../../../../../assets/data';
import {getSize} from '../../../../../utils/reponsive';
import {Header} from '../../../../../components';
import {Add_Ship} from '../../../../../assets/svg';
import {routes} from '../../../../../navigation/routes';
import {useNavigation} from '@react-navigation/core';

const ShipTo = () => {
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
      <Header
        title="Ship To"
        iconRight02={Add_Ship}
        topline
        handleOnpressRight02={() =>
          navigation.navigate(routes.ADD_ADDRESS, {add_address: 'Add Address'})
        }
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA_ADDRESS}
        renderItem={_renderAddress}
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
