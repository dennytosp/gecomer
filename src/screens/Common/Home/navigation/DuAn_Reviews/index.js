import React from 'react';
import {View, FlatList, ScrollView, Pressable, Image} from 'react-native';
import {Header, Titling, StarRating, Texting} from '../../../../../components';
import {DATA_DU_AN_REVIEWS} from '../../../../../assets/data';
import {Plus_Ants, Like} from '../../../../../assets/svg';
import styles from './styles';
import {getSize} from '../../../../../utils/reponsive';
import {COLORS} from '../../../../../constants';

const DuAn_Reviews = () => {
  const _renderTop = () => {
    return (
      <View style={styles.wrapperTop}>
        <Titling fontSize={getSize.m(24)} title="2 đánh giá" />
        <Pressable style={styles.wrapperEventAddReviews}>
          <Plus_Ants />
        </Pressable>
      </View>
    );
  };
  const _renderCardReviews = ({item}) => {
    return (
      <View style={styles.wrapperCardReviews}>
        {/* inforCard */}
        <View style={styles.wrapperInforInsideCard}>
          <View style={styles.wrapperRowLeftInfor}>
            <Pressable style={styles.wrapperAvatarInsideCard}>
              <Image source={item.avatar} style={styles.imageAvatar} />
            </Pressable>
            <View style={{marginHorizontal: getSize.m(24 / 2)}}>
              <Titling title={item.name} marginBottom={getSize.m(1 / 100000)} />
              <StarRating startingValue={item.star} imageSize={14} />
            </View>
          </View>
          <View style={styles.wrapperRowRightInfor}>
            <Texting title={item.time} />
          </View>
        </View>

        <Texting
          title={item.description}
          textAlign="justify"
          fontSize={getSize.m(12)}
          color={COLORS.secondary}
          marginVertical={getSize.m(10)}
        />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{flexDirection: 'row', flex: 1, marginBottom: getSize.m(6)}}>
          <Image
            source={item.image01}
            style={{
              width: getSize.s(104),
              height: getSize.v(104),
              borderRadius: getSize.s(4),
            }}
          />
          <Image
            source={item.image02}
            style={{
              marginHorizontal: getSize.m(16),
              width: getSize.s(104),
              height: getSize.v(104),
              borderRadius: getSize.s(4),
            }}
          />
          <Image
            source={item.image03}
            style={{
              width: getSize.s(104),
              height: getSize.v(104),
              borderRadius: getSize.s(4),
            }}
          />
        </ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <Texting title={item.like} marginTop={getSize.m(7)} />
          <Like />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header
        topline
        title="Đánh giá sản phẩm"
        handleOnpressRight02={() => console.log('Search')}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="on-drag">
        <_renderTop />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={DATA_DU_AN_REVIEWS}
          contentContainerStyle={{
            paddingHorizontal: getSize.m(24),
            paddingTop: getSize.m(32),
          }}
          renderItem={_renderCardReviews}
          keyExtractor={item => item.id.toString()}
        />
      </ScrollView>
    </View>
  );
};

export default DuAn_Reviews;
