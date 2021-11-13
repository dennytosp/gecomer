import React from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  Pressable,
  FlatList,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import Texting from '../../../components/Texting';
import styles from './styles';
import {ButtonPrimary, Cart, Header, Iteming} from '../../../components';
import {photos} from '../../../assets';
import {COLORS, FONTS} from '../../../constants';
import {getSize, width} from '../../../utils/reponsive';
import {DATA_CART} from './../../../assets/data';
import {routes} from '../../../navigation/routes';

const Offer = () => {
  const navigation = useNavigation();
  const marginBottom = getSize.m(12);

  const _renderHeader = ({item, index}) => {
    return (
      <Cart
        image={item.image}
        title={item.title}
        price={item.price}
        favorited={item.favorite}
      />
    );
  };

  const _renderCenter = () => {
    return (
      <View style={styles.wrapperCenter}>
        <TextInput
          style={styles.input}
          placeholder="Enter Cupon Code"
          placeholderTextColor={COLORS.grey}
        />
        <Pressable style={styles.wrapperButtonApply}>
          <Texting title="Apply" fontFamily={FONTS.bold} color={COLORS.white} />
        </Pressable>
      </View>
    );
  };

  const _renderFooter = () => {
    return (
      <View style={styles.wrapperFooter}>
        <View style={{...styles.rowFooter, marginBottom: marginBottom}}>
          <Texting title="Items (3)" />
          <Texting title="$598.86" color={COLORS.secondary} />
        </View>
        <View style={{...styles.rowFooter, marginBottom: marginBottom}}>
          <Texting title="Shipping" />
          <Texting title="$40.00" color={COLORS.secondary} />
        </View>
        <View style={{...styles.rowFooter, marginBottom: marginBottom}}>
          <Texting title="Import charges" />
          <Texting title="$128.00" color={COLORS.secondary} />
        </View>
        <View style={{...styles.rowFooter}}>
          <Texting
            title="Total Price"
            fontFamily={FONTS.bold}
            color={COLORS.secondary}
          />
          <Texting
            title="$766.86"
            fontFamily={FONTS.bold}
            color={COLORS.primary}
            width={width / 2}
            textAlign="right"
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header title="Your Cart" disableIconLeft topline />
      <ScrollView
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={DATA_CART}
          renderItem={_renderHeader}
          keyExtractor={item => item.id.toString()}
        />
        <_renderCenter />
        <_renderFooter />
        <ButtonPrimary
          title="Check Out"
          marginVertical={getSize.m(16)}
          handleOnpress={() => navigation.navigate(routes.SHIP_TO)}
        />
      </ScrollView>
    </View>
  );
};

export default Offer;
