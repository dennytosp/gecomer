import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './styles';
import {ProductsHorizontal, Header} from '../../../../../components';
import {PRODUCTS_DATA} from '../../../../../assets/data';
import {Search} from '../../../../../assets/svg';
import {useNavigation} from '@react-navigation/core';
import {routes} from '../../../../../navigation/routes';
import {getSize} from '../../../../../utils/reponsive';

const FlashSale = () => {
  const navigation = useNavigation();
  const _renderFlashSaleProducts = ({item, index}) => {
    return (
      <View style={styles.wrapperFlashSale(index)}>
        <ProductsHorizontal
          marginBottom={getSize.m(12)}
          image={item.image}
          name={item.name}
          discounted={item.discounted}
          price={item.price}
          promotion={item.promotion}
          columns
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header
        topline
        title="Flash Sale"
        iconRight02={Search}
        handleOnpressRight02={() => navigation.navigate(routes.SEARCH_PAGE)}
      />
      <FlatList
        keyboardDismissMode="on-drag"
        columnWrapperStyle={styles.columnWrapperStyle}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={PRODUCTS_DATA}
        renderItem={_renderFlashSaleProducts}
        keyExtractor={index => index}
      />
    </View>
  );
};

export default FlashSale;
