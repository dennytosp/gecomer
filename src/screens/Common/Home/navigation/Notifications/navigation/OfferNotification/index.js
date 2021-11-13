import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './styles';
import {Header, NotifList} from '../../../../../../../components';
import {Offer} from '../../../../../../../assets/svg';
import {DATA_OFFER_NOTI} from './../../../../../../../assets/data';

const OfferNotification = () => {
  const _renderCenter = ({item}) => {
    return (
      <NotifList
        image={Offer}
        title={item.title}
        content={item.content}
        time={item.time}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Header title="Offer" />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA_OFFER_NOTI}
        renderItem={_renderCenter}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default OfferNotification;
