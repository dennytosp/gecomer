import {
  DATA_COLORS,
  DATA_SIZES,
  Favorite,
  Favorited,
  PRODUCTS_DATA,
  REVIEWS,
  photos,
} from '@/assets'
import {
  ButtonPrimary,
  ProductItem,
  ReviewsProduct,
  StarRating,
  Texting,
  Titling,
} from '@/components'
import { COLORS } from '@/constants'
import { routes } from '@/navigation/routes'
import { getSize, width } from '@/utils'
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native'
import React, { useState } from 'react'
import { FlatList, Pressable, View } from 'react-native'
import { styles } from './styles'

type Props = {
  name: string
  price: string
}

const DetailsContent = ({ name, price }: Props) => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>()
  const [like, setLike] = useState(false)

  const Liked = () => {
    setLike(prev => !prev)
  }

  const renderSelectSizes = ({
    item,
    index,
  }: {
    item: (typeof DATA_SIZES)[0]
    index: number
  }) => (
    <View style={[styles.wrapperSelectSizes]}>
      <Texting title={item.sizeNumbers} textStyle={[styles.textSizeNumber]} />
    </View>
  )

  const renderSelectColors = ({
    item,
    index,
  }: {
    item: (typeof DATA_COLORS)[0]
    index: number
  }) => (
    <View
      style={[{ backgroundColor: item.colors }, styles.wrapperSelectColors]}
    />
  )

  const renderSpecification = () => (
    <View style={[styles.wrapperSpecification]}>
      <View style={[styles.wrapperText01]}>
        <Texting title="Shown:" textStyle={[{ color: COLORS.secondary }]} />
        <Texting title="Laser" />
      </View>

      <Texting title="Blue/Anthracite/" textStyle={[{ textAlign: 'right' }]} />
      <Texting title="Watermelon/White" textStyle={[{ textAlign: 'right' }]} />

      <View style={[{ marginVertical: getSize.m(16) }, styles.wrapperText01]}>
        <Texting title="Style:" textStyle={[{ color: COLORS.secondary }]} />
        <Texting title="CD0113-400" />
      </View>

      <Texting
        title="The Nike Air Max 270 React ENG combines a full-length React foam midsole with a 270 Max Air unit for unrivaled comfort and a striking visual experience."
        textStyle={[{ textAlign: 'justify' }]}
      />
    </View>
  )

  const renderReviewProducts = () => (
    <View style={[styles.wrapperReviewProducts]}>
      <Titling
        title="Review Product"
        more="See More"
        onPress={() => navigation.navigate(routes.REVIEWS)}
      />

      <View style={[styles.wrapperSubTitleStar]}>
        <StarRating startingValue={4.5} imageSize={16} />
        <Texting
          title="4.5"
          textStyle={[styles.textCountReview]}
          style={[styles.wrapTextCountStar]}
        />
        <Texting
          title="(4 Reviews)"
          textStyle={[{ fontSize: getSize.m(10) }]}
        />
      </View>

      <ReviewsProduct item={REVIEWS[0]} imageReviews={true} />
    </View>
  )

  const renderProducts = ({ item }: { item: (typeof PRODUCTS_DATA)[0] }) => (
    <View style={[styles.wrapperProducts]}>
      <ProductItem item={item} onPress={() => {}} />
    </View>
  )

  return (
    <View style={[styles.wrapperContent]}>
      <View style={[styles.wrapperTitleTexting]}>
        <Texting
          title={name}
          textStyle={[styles.textNameProduct]}
          style={[{ width: width - getSize.m(70) }]}
          inputProps={{ numberOfLines: 2 }}
        />
        <Pressable onPress={() => Liked()} style={{ marginTop: getSize.m(5) }}>
          {like ? Favorited : Favorite}
        </Pressable>
      </View>

      <View style={[{ paddingHorizontal: getSize.m(16) }]}>
        <StarRating startingValue={5} marginVertical={12} imageSize={16} />
        <Texting
          title={price}
          textStyle={[styles.textPrice]}
          style={[{ marginBottom: getSize.m(24) }]}
        />

        <Titling title="Select Size" />
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={DATA_SIZES}
        renderItem={renderSelectSizes}
        ItemSeparatorComponent={() => (
          <View style={[{ marginLeft: getSize.m(16) }]} />
        )}
        contentContainerStyle={[{ paddingHorizontal: getSize.m(16) }]}
        keyExtractor={(item, index) => `detail-select-size-${index}`}
      />

      <Titling
        title="Select Color"
        style={[{ paddingHorizontal: getSize.m(16) }]}
      />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={DATA_COLORS}
        renderItem={renderSelectColors}
        ItemSeparatorComponent={() => (
          <View style={[{ marginLeft: getSize.m(16) }]} />
        )}
        contentContainerStyle={[{ paddingHorizontal: getSize.m(16) }]}
        keyExtractor={(item, index) => `detail-select-color--${index}`}
      />

      <Titling
        title="Specification"
        style={[{ paddingHorizontal: getSize.m(16) }]}
      />

      {renderSpecification()}
      {renderReviewProducts()}

      <Titling title="You Might Also Like" style={[styles.titleYouMight]} />

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={PRODUCTS_DATA}
        renderItem={renderProducts}
        ItemSeparatorComponent={() => (
          <View style={[{ marginLeft: getSize.m(12) }]} />
        )}
        contentContainerStyle={[{ paddingHorizontal: getSize.m(16) }]}
        keyExtractor={(item, index) => `detail-product--${index}`}
      />
    </View>
  )
}

export default DetailsContent
