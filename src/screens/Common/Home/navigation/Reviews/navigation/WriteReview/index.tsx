import { PlusAdding } from '@/assets'
import {
  ButtonPrimary,
  Header,
  StarRating,
  Texting,
  Titling,
} from '@/components'
import { COLORS } from '@/constants'
import { getSize } from '@/utils'
import picker from '@/utils/picker'
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native'
import React, { useState } from 'react'
import { Image, Pressable, ScrollView, TextInput, View } from 'react-native'
import { styles } from './styles'

const WriteReview = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>()
  const { openMultiPicker, pictures } = picker()
  const [rating, setRating] = useState(0)

  const renderPhotosReviews = (item: { path: string }, index: number) => (
    <Image
      key={`photo-reviews${index}`}
      source={{ uri: item.path }}
      style={[
        { marginLeft: index === 0 ? getSize.m(0) : getSize.m(12) },
        styles.photoReviews,
      ]}
    />
  )

  const renderCenter = () => (
    <View style={[styles.wrapperCenter]}>
      <Titling
        title="Please write Overall level of satisfaction with your shipping / Delivery Service"
        style={[{ marginBottom: getSize.m(16) }]}
        textStyle={[{ textAlign: 'justify' }]}
      />

      <View style={[styles.wrapperStar]}>
        <StarRating
          imageSize={getSize.m(32)}
          startingValue={rating}
          readonly
          onFinishRating={(rating: number) => setRating(rating)}
        />
        <Texting
          title={rating + '/5'}
          textStyle={[styles.textStarRating]}
          style={[{ marginHorizontal: getSize.m(16) }]}
        />
      </View>

      <Titling
        title="Write Your Review"
        style={[{ marginBottom: getSize.m(12) }]}
      />
      <View style={[styles.wrapperInputWrite]}>
        <TextInput
          style={[styles.inputWrite]}
          placeholder="Write your review here"
          placeholderTextColor={COLORS.grey}
          multiline
        />
      </View>

      <Titling title="Add Photos" style={[{ marginBottom: getSize.m(12) }]} />
      <View style={[styles.wrapperPhotoReviews]}>
        <Pressable onPress={openMultiPicker} style={[styles.wrapperPlus]}>
          <PlusAdding />
        </Pressable>

        <ScrollView
          style={{ marginLeft: getSize.m(12) }}
          showsHorizontalScrollIndicator={false}
          horizontal
        >
          <View style={[styles.wrapperPhotos]}>
            {pictures?.map(renderPhotosReviews)}
          </View>
        </ScrollView>
      </View>
      <ButtonPrimary
        title="Post"
        atBottom={true}
        onPress={() => navigation.goBack()}
        style={[{ marginTop: getSize.m(24) }]}
      />
    </View>
  )

  return (
    <View style={[styles.container]}>
      <Header title="Write Reviews" topLine />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="on-drag"
      >
        {renderCenter()}
      </ScrollView>
    </View>
  )
}

export default WriteReview
