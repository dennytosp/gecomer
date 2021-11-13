import React from 'react';
import {View, FlatList, ScrollView} from 'react-native';
import styles from './styles';
import {
  ProductsHorizontal,
  Searching,
  Titling,
  Categories,
  Promotion,
  RecommendProduct,
} from '../../../components';
import {Favorite, Notifications} from './../../../assets/svg';
import {getSize} from '../../../utils/reponsive';
import {
  PRODUCTS_DATA,
  PRODUCTS_DATA_VERTICOLUMNS,
  CATEGORIES_DATA,
} from '../../../assets/data';
import {routes} from './../../../navigation/routes';
import {photos} from '../../../assets';
import {useNavigation} from '@react-navigation/core';

const Home = () => {
  const navigation = useNavigation();
  const _renderCategories = ({item, index}) => {
    return (
      <Categories
        handleOnpress={() => navigation.navigate(item.navigation)}
        image={item.image}
        title={item.title}
        index={index === 0 ? getSize.m(0) : getSize.m(12)}
      />
    );
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

  const _renderProductsVerticalColumns = ({item, index}) => {
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
        handleOnpressRight01={() => navigation.navigate(routes.NOTIFICATIONS)}
        placeholder="Search Product"
        handleOnpressInput={() => navigation.navigate(routes.SEARCH_PAGE)}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="on-drag">
        <Promotion
          handleOnpress={() => navigation.navigate(routes.FLASH_SALE)}
          style={styles.onScroll}
          title={'Super Flash Sale\n50% Off'}
          hours="08"
          minutes="34"
          seconds="52"
          image={photos.promotion01}
        />
        <Titling title="Category" more="More Category" />
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={CATEGORIES_DATA}
          renderItem={_renderCategories}
          keyExtractor={item => item.id.toString()}
        />

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

        <RecommendProduct
          title={'Recommend\nProduct'}
          subtitle="We recommend the best for you"
          image={photos.promotion02}
        />

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
