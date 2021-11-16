import React from 'react';
import {View, FlatList, ScrollView, Pressable} from 'react-native';
import styles from './styles';
import {
  ButtonPrimary,
  Header,
  ReviewsProduct,
  Texting,
} from '../../../../../components';
import {DATA_STAR_REVIEWS, DATA_REVIEWS} from '../../../../../assets/data';
import {Star} from '../../../../../assets/svg';
import {routes} from './../../../../../navigation/routes';
import {COLORS, FONTS} from '../../../../../constants';
import {getSize} from '../../../../../utils/reponsive';
import {useNavigation} from '@react-navigation/core';

const Reviews = () => {
  const navigation = useNavigation();

  const _renderReviews = ({item}) => {
    return (
      <View style={styles.wrapperReviews}>
        <ReviewsProduct
          name={item.name}
          star={item.star}
          description={item.description}
          avatar={item.avatar}
          time={item.time}
          marginBottom={getSize.m(24)}
          imageReviews
        />
      </View>
    );
  };

  const _renderFirstClose = () => {
    return (
      <View style={styles.wrapperFirstClose}>
        <Pressable style={styles.wrapperAllReview}>
          <Texting
            title="All Reviews"
            paddingVertical={getSize.m(16)}
            fontFamily={FONTS.bold}
            color={COLORS.primary}
          />
        </Pressable>
      </View>
    );
  };

  const _renderTabReviews = ({item, index}) => {
    return (
      <View
        style={{
          marginLeft: index === 0 ? getSize.m(0) : getSize.m(12),
          ...styles.wrapperTabReviews,
        }}>
        <Star />
        <Texting
          title={item.number}
          paddingTop={getSize.m(4)}
          marginLeft={getSize.m(10)}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header title={DATA_REVIEWS.length + ' Reviews'} topline />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="on-drag">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.wrapperCardTop}>
            <_renderFirstClose />
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={DATA_STAR_REVIEWS}
              renderItem={_renderTabReviews}
              keyExtractor={item => item.id.toString()}
            />
          </View>
        </ScrollView>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={DATA_REVIEWS}
          renderItem={_renderReviews}
          keyExtractor={item => item.id.toString()}
        />
        <ButtonPrimary
          title="Write Review"
          marginBottom={getSize.m(12)}
          handleOnpress={() => navigation.navigate(routes.WRITE_REVIEW)}
        />
      </ScrollView>
    </View>
  );
};

export default Reviews;
