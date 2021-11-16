import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './styles';
import {ProductsHorizontal, Header} from '../../../../../components';
import {PRODUCTS_DATA_VERTICOLUMNS} from '../../../../../assets/data';
import {getSize} from '../../../../../utils/reponsive';

const Favorite = () => {
  const _renderFavoriteProducts = ({item, index}) => {
    return (
      <View style={styles.wrapperFavoriteProducts(index)}>
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
      <Header topline title="Favorite Product" />
      <FlatList
        columnWrapperStyle={styles.columnWrapperStyle}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={PRODUCTS_DATA_VERTICOLUMNS}
        renderItem={_renderFavoriteProducts}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default Favorite;
