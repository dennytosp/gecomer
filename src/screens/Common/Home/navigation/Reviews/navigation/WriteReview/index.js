import { PlusAdding } from '@/assets'
import {
  ButtonPrimary,
  Header,
  StarRating,
  Texting,
  Titling,
} from '@/components'
import { COLORS, FONTS } from '@/constants'
import { getSize } from '@/utils'
import picker from '@/utils/picker'
import React, { useState } from 'react'
import { Image, Pressable, ScrollView, TextInput, View } from 'react-native'
import styles from './styles'

const WriteReview = ({ navigation }) => {
  const { openMultiPicker, pictures } = picker()
  const [rating, setRating] = useState(0)

  const _renderPhotosReviews = (item, index) => {
    return (
      <Image
        key={index}
        source={{ uri: item.path }}
        style={{
          ...styles.photoReviews,
          marginLeft: index === 0 ? getSize.m(0) : getSize.m(12),
        }}
      />
    )
  }

  const _renderCenter = () => {
    return (
      <View style={styles.wrapperCenter}>
        <Titling
          title="Please write Overall level of satisfaction with your shipping / Delivery Service"
          textAlign="justify"
          marginBottom={getSize.m(16)}
        />
        <View style={styles.wrapperStar}>
          <StarRating
            imageSize={getSize.m(32)}
            startingValue={rating}
            readonly
            onFinishRating={rating => setRating(rating)}
          />
          <Texting
            title={rating + '/5'}
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

          <ScrollView
            style={{ marginLeft: getSize.m(12) }}
            showsHorizontalScrollIndicator={false}
            horizontal
          >
            <View style={styles.wrapperPhotos}>
              {pictures?.map(_renderPhotosReviews)}
            </View>
          </ScrollView>
        </View>
        <ButtonPrimary
          title="Post"
          marginTop={getSize.m(24)}
          marginBottom={getSize.m(16)}
          onPress={() => navigation.goBack()}
        />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Header title="Write Reviews" topLine />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="on-drag"
      >
        <_renderCenter />
      </ScrollView>
    </View>
  )
}

export default WriteReview
