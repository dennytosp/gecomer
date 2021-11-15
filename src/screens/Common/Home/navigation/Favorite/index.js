import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './styles';
import {ProductsHorizontal, Header} from '../../../../../components';
import {PRODUCTS_DATA_VERTICOLUMNS} from '../../../../../assets/data';

const Favorite = () => {
  const _renderProductsVerticalColumns = ({item}) => {
    return (
      <View style={styles.wrapperProducts}>
        <ProductsHorizontal
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
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={PRODUCTS_DATA_VERTICOLUMNS}
        renderItem={_renderProductsVerticalColumns}
        keyExtractor={(item, index) => item.id.toString()}
      />
    </View>
  );
};

export default Favorite;
