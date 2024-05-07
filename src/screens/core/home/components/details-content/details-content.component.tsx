import React, { useState } from 'react'
import { FlatList, Pressable, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {
  DATA_COLORS,
  DATA_SIZES,
  Favorite,
  Favorited,
  PRODUCTS_DATA,
  REVIEWS,
} from '@/assets'
import {
  ProductItem,
  ProductReviewItem,
  StarRating,
  Text,
  Title,
} from '@/components'
import { RoutesMainStack, RoutesProductDetailStack } from '@/navigators/routes'
import { COLORS } from '@/theme'
import { getSize, width } from '@/utils'
import { styles } from './details-content.style'

type Props = {
  name: string
  price: string
}

type NavigationProps =
  ReactNavigation.RootStackScreenProps<RoutesMainStack.PRODUCT_DETAIL_STACK>

const DetailsContent = ({ name, price }: Props) => {
  const navigation = useNavigation<NavigationProps['navigation']>()
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
      <Text title={item.sizeNumbers} textStyle={[styles.textSizeNumber]} />
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
        <Text title="Shown:" textStyle={[{ color: COLORS.secondary }]} />
        <Text title="Laser" />
      </View>

      <Text title="Blue/Anthracite/" textStyle={[{ textAlign: 'right' }]} />
      <Text title="Watermelon/White" textStyle={[{ textAlign: 'right' }]} />

      <View style={[{ marginVertical: getSize.m(16) }, styles.wrapperText01]}>
        <Text title="Style:" textStyle={[{ color: COLORS.secondary }]} />
        <Text title="CD0113-400" />
      </View>

      <Text
        title="The Nike Air Max 270 React ENG combines a full-length React foam midsole with a 270 Max Air unit for unrivaled comfort and a striking visual experience."
        textStyle={[{ textAlign: 'justify' }]}
      />
    </View>
  )

  const renderReviewProducts = () => (
    <View style={[styles.wrapperReviewProducts]}>
      <Title
        title="Review Product"
        more="See More"
        onPress={() =>
          navigation.navigate(RoutesMainStack.PRODUCT_DETAIL_STACK, {
            screen: RoutesProductDetailStack.REVIEWS,
          })
        }
      />

      <View style={[styles.wrapperSubTitleStar]}>
        <StarRating startingValue={4.5} imageSize={16} />
        <Text
          title="4.5"
          textStyle={[styles.textCountReview]}
          style={[styles.wrapTextCountStar]}
        />
        <Text title="(4 Reviews)" textStyle={[{ fontSize: getSize.m(10) }]} />
      </View>

      <ProductReviewItem item={REVIEWS[0]} imageReviews={true} />
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
        <Text
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
        <Text
          title={price}
          textStyle={[styles.textPrice]}
          style={[{ marginBottom: getSize.m(24) }]}
        />

        <Title title="Select Size" />
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

      <Title
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

      <Title
        title="Specification"
        style={[{ paddingHorizontal: getSize.m(16) }]}
      />

      {renderSpecification()}
      {renderReviewProducts()}

      <Title title="You Might Also Like" style={[styles.titleYouMight]} />

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
