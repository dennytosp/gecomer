import React, {useState} from 'react';
import {View, ScrollView, Pressable, TextInput, Image} from 'react-native';
import styles from './styles';
import {ButtonPrimary, Header, Texting} from '../../../../../../../components';
import {PlusAdding} from '../../../../../../../assets/svg';
import {COLORS, FONTS} from '../../../../../../../constants';
import {getSize} from '../../../../../../../utils/reponsive';
import {Titling} from './../../../../../../../components';
import {Rating} from 'react-native-elements';
import picker from './../../../../../../../utils/picker';

const WriteReview = () => {
  const {openMultiPicker, pictures} = picker();
  const [rating, setRating] = useState();

  const _renderPhotosReviews = (item, index) => {
    return (
      <Image
        key={index}
        source={{uri: item.path}}
        style={styles.photoReviews}
      />
    );
  };

  const _renderCenter = () => {
    return (
      <View style={styles.wrapperCenter}>
        <Titling
          title="Please write Overall level of satisfaction with your shipping / Delivery Service"
          textAlign="justify"
          marginBottom={getSize.m(16)}
        />
        <View style={styles.wrapperStar}>
          <Rating
            imageSize={getSize.m(32)}
            type="custom"
            ratingColor={COLORS.yellow}
            ratingBackgroundColor={COLORS.border}
            startingValue="5"
            onFinishRating={rating}
            style={{alignItems: 'flex-start'}}
          />
          <Texting
            title="5/5"
            fontSize={getSize.m(14)}
            marginHorizontal={getSize.m(16)}
            fontFamily={FONTS.bold}
          />
        </View>

        <Titling title="Write Your Review" marginBottom={getSize.m(12)} />
        <View style={styles.wrapperInputWrite}>
          <TextInput
            style={styles.inputWrite}
            placeholder="Write your review here"
            placeholderTextColor={COLORS.grey}
            multiline
          />
        </View>

        <Titling title="Add Photos" marginBottom={getSize.m(12)} />
        <View style={styles.wrapperPhotoReviews}>
          <Pressable onPress={openMultiPicker} style={styles.wrapperPlus}>
            <PlusAdding />
          </Pressable>

          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            <View style={styles.wrapperPhotos}>
              {pictures?.map(_renderPhotosReviews)}
            </View>
          </ScrollView>
        </View>
        <ButtonPrimary title="Post" marginTop={getSize.m(24)} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header title="Write Reviews" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="on-drag">
        <_renderCenter />
      </ScrollView>
    </View>
  );
};

export default WriteReview;
