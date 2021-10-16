import React from 'react';
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
import {Favorite} from '../../../../../assets/svg';
import {COLORS, FONTS} from '../../../../../constants';
import {
  DATA_SIZES,
  DATA_COLORS,
  PRODUCTS_DATA,
} from './../../../../../assets/data';

const DetailsContent = () => {
  const _renderContent = () => {
    return (
      <View style={styles.wrapperContent}>
        <View style={styles.wrapperTitleTexting}>
          <Texting
            title="Nike Air Zoom Pegasus 36 Miamdi"
            fontFamily={FONTS.bold}
            fontSize={getSize.m(20)}
            width={width - 70}
            numberOfLines={2}
            color={COLORS.secondary}
          />
          <Pressable style={{marginTop: getSize.m(0)}}>
            <Favorite />
          </Pressable>
        </View>

        <StarRating startingValue={5} marginVertical={12} imageSize={16} />

        <Texting
          title="$299,43"
          fontFamily={FONTS.bold}
          fontSize={getSize.m(20)}
          color={COLORS.primary}
          marginBottom={getSize.m(24)}
        />

        <Texting
          title="Select Size"
          fontFamily={FONTS.bold}
          fontSize={getSize.m(14)}
          marginBottom={getSize.m(12)}
          color={COLORS.secondary}
        />

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={DATA_SIZES}
          renderItem={_renderSelectSizes}
          keyExtractor={item => item.id.toString()}
        />

        <Texting
          title="Select Color"
          fontFamily={FONTS.bold}
          fontSize={getSize.m(14)}
          marginBottom={getSize.m(12)}
          color={COLORS.secondary}
        />

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={DATA_COLORS}
          renderItem={_renderSelectColors}
          keyExtractor={item => item.id.toString()}
        />

        <Texting
          title="Specification"
          fontFamily={FONTS.bold}
          fontSize={getSize.m(14)}
          marginBottom={getSize.m(12)}
          color={COLORS.secondary}
        />

        <_renderSpecification />
        <_renderReviewProducts />
        <Texting
          title="You Might Also Like"
          fontFamily={FONTS.bold}
          fontSize={getSize.m(14)}
          marginTop={getSize.m(24)}
          color={COLORS.secondary}
        />

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={PRODUCTS_DATA}
          renderItem={_renderProducts}
          keyExtractor={item => item.id.toString()}
        />

        <ButtonPrimary title="Add To Cart" marginTop={getSize.m(20)} />
      </View>
    );
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

  const _renderReviewProducts = ({item, index}) => {
    return (
      <View style={styles.wrapperReviewProducts}>
        <Titling title="Review Product" more="See More" />

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

        <ReviewsProduct />
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
    <View>
      <_renderContent />
    </View>
  );
};

export default DetailsContent;
