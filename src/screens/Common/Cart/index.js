import React from 'react';
import {ScrollView, View, Pressable, FlatList, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import Texting from '../../../components/Texting';
import styles from './styles';
import {ButtonPrimary, Cart, Header, Iteming} from '../../../components';
import {COLORS, FONTS} from '../../../constants';
import {getSize} from '../../../utils/reponsive';
import {DATA_CART} from './../../../assets/data';
import {routes} from '../../../navigation/routes';

const Offer = () => {
  const navigation = useNavigation();

  const _renderHeader = ({item}) => {
    return (
      <Cart
        style={{marginTop: getSize.m(16)}}
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
      <Iteming
        left01="Items (3)"
        left02="Shipping"
        left03="Import charges"
        left04="Total Price"
        right01="$598.86"
        right02="$40.00"
        right03="$128.00"
        right04="$766.86"
        colorLeft04={COLORS.secondary}
        fontLef04={FONTS.bold}
        colorRight04={COLORS.primary}
        fontRight04={FONTS.bold}
      />
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
