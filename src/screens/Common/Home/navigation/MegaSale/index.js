import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './styles';
import {ProductsHorizontal, Header} from '../../../../../components';
import {DATA_MEGA_SALE} from '../../../../../assets/data';
import {Search} from '../../../../../assets/svg';
import {useNavigation} from '@react-navigation/core';
import {routes} from '../../../../../navigation/routes';
import {getSize} from '../../../../../utils/reponsive';

const MegaSale = () => {
  const navigation = useNavigation();
  const _renderMegaSale = ({item, index}) => {
    return (
      <View style={styles.wrapperMegaSale(index)}>
        <ProductsHorizontal
          marginBottom={getSize.m(12)}
          image={item.image}
          name={item.name}
          discounted={item.discounted}
          price={item.price}
          promotion={item.promotion}
          columns
          handleOnpress={() => navigation.navigate(routes.DETAILS, {item})}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header
        topline
        title="Mega Sale"
        iconRight02={Search}
        handleOnpressRight02={() => navigation.navigate(routes.SEARCH_PAGE)}
      />
      <FlatList
        keyboardDismissMode="on-drag"
        columnWrapperStyle={styles.columnWrapperStyle}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={DATA_MEGA_SALE}
        renderItem={_renderMegaSale}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default MegaSale;
