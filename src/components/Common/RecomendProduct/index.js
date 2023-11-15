import Texting from '@/components/Texting'
import { COLORS, FONTS } from '@/constants'
import { getSize } from '@/utils'
import React from 'react'
import { Image, Pressable, View } from 'react-native'
import styles from './styles'

const RecommendProduct = ({ image, title, subtitle, onPress, style }) => {
  return (
    <Pressable
      onPress={onPress}
      style={{ ...styles.wrapperRecommendProduct, ...style }}
    >
      <Image source={image} style={styles.imageRecommend} />
      <View style={styles.wrapperTitle}>
        <Texting
          title={title}
          fontSize={getSize.m(24)}
          color={COLORS.white}
          lineHeight={36}
          fontFamily={FONTS.bold}
        />
      </View>
      <View style={styles.wrapperSubTitle}>
        <Texting title={subtitle} color={COLORS.white} />
      </View>
    </Pressable>
  )
}

export default RecommendProduct
