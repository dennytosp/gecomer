import React from 'react';
import {View, ScrollView, Pressable, Image} from 'react-native';
import styles from './styles';
import {Header} from '../../../../../components';
import {More, Search} from '../../../../../assets/svg';
import {getSize, width} from '../../../../../utils/reponsive';
import DetailsContent from '../../components/DetailsContent';
import {routes} from '../../../../../navigation/routes';
import {useNavigation} from '@react-navigation/core';

const Details = ({route}) => {
  const navigation = useNavigation();
  const {item: receive} = route.params;
  const _renderImageContent = () => {
    return (
      <View style={styles.wrapperImageContent}>
        <Pressable style={{marginBottom: getSize.m(16)}}>
          <Image source={receive.image} style={styles.imageProduct} />
        </Pressable>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header
        topline
        numberOfLines={1}
        widthHeader={getSize.m(width / 1.7)}
        paddingHorizontal={getSize.m(16)}
        title={receive.name}
        iconRight01={Search}
        iconRight02={More}
        handleOnpressRight01={() => navigation.navigate(routes.SEARCH_PAGE)}
        handleOnpressRight02={() => navigation.navigate(routes.ORDER)}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="on-drag">
        <_renderImageContent />
        <DetailsContent name={receive.name} price={receive.price} />
      </ScrollView>
    </View>
  );
};

export default Details;
