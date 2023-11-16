import Texting from '@/components/Texting'
import { getSize, width } from '@/utils'
import React from 'react'
import { Pressable, View } from 'react-native'
import { styles } from './styles'

const Categories = ({
  index,
  image,
  title,
  onPress,
  marginBottom,
  verticalColumns,
  heightColumns,
  style,
}) => {
  const paddingHorizonReponsive = 16 * 2 + 6
  const widthResponsive = (width - paddingHorizonReponsive) / 4
  return (
    <View
      style={{
        marginBottom: marginBottom,
        marginLeft: index,
        width: verticalColumns && widthResponsive,
        height: heightColumns,
        marginRight: verticalColumns && getSize.m(11 / 2),
        ...styles.wrapperCategories,
        ...style,
      }}
    >
      <View style={{ width: width / 5.4 }}>
        <Pressable style={styles.wrapperEventCategories}>
          <Pressable style={styles.wrapperImageEvent} onPress={onPress}>
            {image}
          </Pressable>

          <Texting
            title={title}
            textStyle={[styles.textTitle]}
            style={[{ marginLeft: getSize.m(-12 / 2) }]}
          />
        </Pressable>
      </View>
    </View>
  )
}

export default Categories
