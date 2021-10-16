import React from 'react';
import {View, FlatList, ScrollView} from 'react-native';
import styles from './styles';
import {ProductsHorizontal, Searching, Titling} from '../../../components';
import {Favorite, Notifications} from './../../../assets/svg';
import {getSize} from '../../../utils/reponsive';
import {Promotion, Categories, RecommendProduct} from './components';
import {PRODUCTS_DATA, PRODUCTS_DATA_VERTICOLUMNS} from '../../../assets/data';
import {routes} from './../../../navigation/routes';

const Home = ({navigation}) => {
  const _renderLines = () => {
    return <View style={styles.wrapperLines}></View>;
  };

  const _renderProducts = ({item, index}) => {
    return (
      <View style={styles.wrapperProducts}>
        <ProductsHorizontal
          handleOnpress={() => navigation.navigate(routes.DETAILS)}
          index={index === 0 ? getSize.m(0) : getSize.m(12)}
          image={item.image}
          name={item.name}
          discounted={item.discounted}
          price={item.price}
          promotion={item.promotion}
        />
      </View>
    );
  };

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
      <Searching
        iconRight={Favorite}
        handleOnpressRight={() => navigation.navigate(routes.FAVORITE)}
        iconRight01={Notifications}
        placeholder="Search Product"
      />

      <_renderLines />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="on-drag">
        <Promotion
          handleOnpress={() => navigation.navigate(routes.FLASH_SALE)}
        />
        <Categories />

        <Titling
          title="Flash Sale"
          more="See More"
          handleOnpress={() => console.log('See more Flash Sale')}
        />
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={PRODUCTS_DATA}
          renderItem={_renderProducts}
          keyExtractor={item => item.id.toString()}
        />

        <Titling title="Mega Sale" more="See More" marginTop={12} />
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={PRODUCTS_DATA}
          renderItem={_renderProducts}
          keyExtractor={item => item.id.toString()}
        />

        <RecommendProduct />

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

export default Home;
