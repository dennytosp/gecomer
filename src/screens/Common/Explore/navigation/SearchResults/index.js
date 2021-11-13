import React, {useState} from 'react';
import {View, FlatList, Pressable} from 'react-native';
import styles from './styles';
import {
  ProductsHorizontal,
  Remind,
  Searching,
  Texting,
} from '../../../../../components';
import {PRODUCTS_DATA_VERTICOLUMNS} from '../../../../../assets/data';
import {DownPress, Filterist, Soft} from '../../../../../assets/svg';
import {COLORS, FONTS} from '../../../../../constants';
import {getSize} from '../../../../../utils/reponsive';
import {RemoveEmpty} from './../../../../../assets/svg';
import {useNavigation} from '@react-navigation/core';
import {routes} from '../../../../../navigation/routes';

const SearchResults = () => {
  const navigation = useNavigation();
  const numColumns = 2;
  const emptyLength = [].length + ' Result';
  const countLength = PRODUCTS_DATA_VERTICOLUMNS.length + ' Result';
  const [show, setShow] = useState(true);
  const [value, setValue] = useState('Nike Air Max');

  const _renderCenter = () => {
    return (
      <View style={styles.wrapperCenter}>
        <Pressable onPress={() => setShow(!show)}>
          <Texting
            title={show ? countLength : emptyLength}
            fontFamily={FONTS.bold}
          />
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate(routes.CATEGORY)}
          style={styles.wrapperRightRows}>
          <Texting
            title="Man Shoes"
            fontFamily={FONTS.bold}
            color={COLORS.secondary}
            marginRight={getSize.m(4)}
          />
          <Pressable onPress={() => navigation.navigate(routes.CATEGORY)}>
            <DownPress />
          </Pressable>
        </Pressable>
      </View>
    );
  };

  const _renderProducts = ({item, index}) => {
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

  const _renderEmpty = () => {
    return (
      <Remind
        icon={RemoveEmpty}
        title="Product Not Found"
        subtitle="Thank you for shopping using Sherwin"
        onEvent="Back to Home"
        handleOnEvent={() => navigation.navigate(routes.COMMON)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Searching
        iconRight={Soft}
        iconRight01={Filterist}
        handleOnpressRight={() => navigation.navigate(routes.SOFT_BY)}
        handleOnpressRight01={() => navigation.navigate(routes.FILTER_SEARCH)}
        editable
        onChangeText={text => setValue(text)}
        value={value}
      />
      <_renderCenter />
      {show ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={numColumns}
          data={PRODUCTS_DATA_VERTICOLUMNS}
          renderItem={_renderProducts}
          keyExtractor={item => item.id.toString()}
        />
      ) : (
        _renderEmpty()
      )}
    </View>
  );
};

export default SearchResults;
