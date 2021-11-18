import React, { useState } from 'react';
import {View, Pressable, FlatList} from 'react-native';
import styles from './styles';
import {
  ButtonPrimary,
  ProductsHorizontal,
  ReviewsProduct,
  StarRating,
  Texting,
  Titling,
} from '../../../../../components';
import {getSize, width} from '../../../../../utils/reponsive';
import {Favorite, Favorited} from '../../../../../assets/svg';
import {COLORS, FONTS} from '../../../../../constants';
import {
  DATA_SIZES,
  DATA_COLORS,
  PRODUCTS_DATA,
} from './../../../../../assets/data';
import {photos} from '../../../../../assets';
import {useNavigation} from '@react-navigation/core';
import {routes} from './../../../../../navigation/routes';

const DetailsContent = ({name, price}) => {
  const navigation = useNavigation();
  const [like, setLike] = useState(false);

  const Liked = () => {
    setLike(!like);
  };

  const _renderSelectSizes = ({item, index}) => {
    return (
      <Pressable
        style={{
          marginLeft: index === 0 ? getSize.m(0) : getSize.m(16),
          ...styles.wrapperSelectSizes,
        }}>
        <Texting
          title={item.sizeNumbers}
          fontFamily={FONTS.bold}
          fontSize={getSize.m(14)}
          color={COLORS.secondary}
        />
      </Pressable>
    );
  };

  const _renderSelectColors = ({item, index}) => {
    return (
      <Pressable
        style={{
          marginLeft: index === 0 ? getSize.m(0) : getSize.m(16),
          backgroundColor: item.colors,
          ...styles.wrapperSelectColors,
        }}></Pressable>
    );
  };

  const _renderSpecification = () => {
    return (
      <View style={styles.wrapperSpecification}>
        <View style={styles.wrapperText01}>
          <Texting title="Shown:" color={COLORS.secondary} />
          <Texting title="Laser" />
        </View>

        <Texting title="Blue/Anthracite/" textAlign="right" />
        <Texting title="Watermelon/White" textAlign="right" />

        <View style={{marginVertical: getSize.m(16), ...styles.wrapperText01}}>
          <Texting title="Style:" color={COLORS.secondary} />
          <Texting title="CD0113-400" />
        </View>

        <Texting
          title="The Nike Air Max 270 React ENG combines a full-length React foam midsole with a 270 Max Air unit for unrivaled comfort and a striking visual experience."
          textAlign="justify"
        />
      </View>
    );
  };

  const _renderReviewProducts = () => {
    return (
      <View style={styles.wrapperReviewProducts}>
        <Titling
          title="Review Product"
          more="See More"
          handleOnpress={() => navigation.navigate(routes.REVIEWS)}
        />

        <View style={styles.wrapperSubTitleStar}>
          <StarRating startingValue={4.5} imageSize={16} />
          <Texting
            title="4.5"
            fontFamily={FONTS.bold}
            marginLeft={getSize.m(8)}
            marginRight={getSize.m(4)}
            fontSize={getSize.m(10)}
          />
          <Texting title="(5 Reviews)" fontSize={getSize.m(10)} />
        </View>

        <ReviewsProduct
          name="Nguyen Tuyet Trinh"
          star={4}
          description="Air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites."
          avatar={photos.user8}
          time="December 10, 2016"
          imageReviews
        />
      </View>
    );
  };

  const _renderProducts = ({item, index}) => {
    return (
      <View style={styles.wrapperProducts}>
        <ProductsHorizontal
          index={index === 0 ? getSize.m(0) : getSize.m(12)}
          image={item.image}
          name={item.name}
          discounted={item.discounted}
          price={item.price}
          promotion={item.promotion}
          marginBottom={1}
        />
      </View>
    );
  };
  return (
    <View style={styles.wrapperContent}>
      <View style={styles.wrapperTitleTexting}>
        <Texting
          title={name}
          fontFamily={FONTS.bold}
          fontSize={getSize.m(20)}
          width={width - 70}
          numberOfLines={2}
          color={COLORS.secondary}
        />
        <Pressable onPress={() => Liked()} style={{marginTop: getSize.m(5)}}>
       {like ? Favorited : Favorite}   
        </Pressable>
      </View>

      <StarRating startingValue={5} marginVertical={12} imageSize={16} />

      <Texting
        title={price}
        fontFamily={FONTS.bold}
        fontSize={getSize.m(20)}
        color={COLORS.primary}
        marginBottom={getSize.m(24)}
      />

      <Titling title="Select Size" />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={DATA_SIZES}
        renderItem={_renderSelectSizes}
        keyExtractor={item => item.id.toString()}
      />

      <Titling title="Select Color" />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={DATA_COLORS}
        renderItem={_renderSelectColors}
        keyExtractor={item => item.id.toString()}
      />

      <Titling title="Specification" />

      <_renderSpecification />
      <_renderReviewProducts />

      <Titling
        title="You Might Also Like"
        marginTop={getSize.m(24)}
        marginBottom={getSize.m(1 / 10000)}
      />

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={PRODUCTS_DATA}
        renderItem={_renderProducts}
        keyExtractor={item => item.id.toString()}
      />

      <ButtonPrimary
        title="Add To Cart"
        marginTop={getSize.m(24)}
        handleOnpress={() => navigation.navigate(routes.CART)}
      />
    </View>
  );
};

export default DetailsContent;
