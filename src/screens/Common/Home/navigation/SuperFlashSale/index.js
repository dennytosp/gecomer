import React from 'react';
import {View, FlatList, ScrollView} from 'react-native';
import styles from './styles';
import {ProductsHorizontal, Header, Promotion} from '../../../../../components';
import {PRODUCTS_DATA_VERTICOLUMNS} from '../../../../../assets/data';
import {Search} from '../../../../../assets/svg';
import {photos} from '../../../../../assets';
import {useNavigation} from '@react-navigation/core';
import {routes} from '../../../../../navigation/routes';
import {getSize} from '../../../../../utils/reponsive';

const SuperFlashSale = () => {
  const navigation = useNavigation();
  const _renderProductsVerticalColumns = ({item}) => {
    return (
      <View style={styles.wrapperProducts}>
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
        title="Super Flash Sale"
        iconRight02={Search}
        handleOnpressRight02={() => navigation.navigate(routes.SEARCH_PAGE)}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="on-drag">
        <Promotion
          style={{marginTop: getSize.m(16)}}
          marginBottom={16}
          title={'Super Flash Sale\n50% Off'}
          hours="08"
          minutes="34"
          seconds="52"
          image={photos.promotion01}
        />
        <FlatList
          keyboardDismissMode="on-drag"
          columnWrapperStyle={styles.columnWrapperStyle}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          data={PRODUCTS_DATA_VERTICOLUMNS}
          renderItem={_renderProductsVerticalColumns}
          keyExtractor={item => item.id.toString()}
        />
      </ScrollView>
    </View>
  );
};

export default SuperFlashSale;
