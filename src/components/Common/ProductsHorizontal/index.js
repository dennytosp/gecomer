import StarRating from '@/components/StarRating'
import Texting from '@/components/Texting'
import { getSize } from '@/utils'
import React from 'react'
import { Image, Pressable, View } from 'react-native'
import { styles } from './styles'

const ProductsHorizontal = ({
  image,
  name,
  discounted,
  price,
  index,
  columns,
  promotion,
  marginBottom,
  onPress,
  style,
}) => {
  return (
    <View
      style={[
        styles.wrapperProducsing(marginBottom, columns),
        {
          marginLeft: index,
          zIndex: getSize.m(1),
        },
        style,
      ]}
    >
      <Pressable
        onPress={onPress}
        style={{ alignItems: !columns ? 'center' : null }}
      >
        <Image source={image} style={styles.imageProducts(columns)} />
      </Pressable>

      <Texting
        title={name}
        textStyle={[styles.textName]}
        inputProps={{ numberOfLines: 2 }}
      />

      {columns && <StarRating startingValue={4} imageSize={12} />}

      <Texting
        title={discounted}
        textStyle={[styles.textBase]}
        style={[
          {
            marginTop: columns ? getSize.m(12) : getSize.m(8),
            marginBottom: columns ? getSize.m(4) : getSize.m(8),
          },
        ]}
      />

      <View style={styles.wrapperRowPrice}>
        <Texting title={price} textStyle={[styles.textPrice]} />
        <Texting
          title={promotion}
          textStyle={[styles.textPromotion]}
          style={[{ marginHorizontal: getSize.m(8) }]}
        />
      </View>
    </View>
  )
}

export default ProductsHorizontal
