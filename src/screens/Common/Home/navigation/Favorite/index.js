import React from 'react';
import {View, FlatList, ScrollView} from 'react-native';
import styles from './styles';
import {ProductsHorizontal, Header} from '../../../../../components';
import {PRODUCTS_DATA_VERTICOLUMNS} from '../../../../../assets/data';
import {Forward} from '../../../../../assets/svg';

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
      <Header
        title="Favorite Product"
        iconBack={Forward}
        handleOnpressRight02={() => console.log('Search')}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="on-drag">
        <FlatList
          numColumns={2}
          showsVerticalScrollIndicator={false}
          data={PRODUCTS_DATA_VERTICOLUMNS}
          renderItem={_renderProductsVerticalColumns}
          keyExtractor={(item, index) => item.id.toString()}
        />
      </ScrollView>
    </View>
  );
};

export default Favorite;
