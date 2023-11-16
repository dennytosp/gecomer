import { Delete } from '@/assets'
import Texting from '@/components/Texting'
import { getSize } from '@/utils'
import React from 'react'
import { Pressable, View } from 'react-native'
import { styles } from './styles'

const Addressing = ({
  style,
  name,
  address,
  phoneNumber,
  titleEvent,
  handleDelete,
  handleEventEdit,
}) => {
  return (
    <View style={[styles.wrapperCenter, style]}>
      <Texting title={name} textStyle={[styles.textName]} />

      <Texting title={address} style={[{ marginVertical: getSize.m(16) }]} />
      <Texting title={phoneNumber} style={[{ marginBottom: getSize.m(16) }]} />

      <View style={styles.wrapperOnEvent}>
        <Pressable style={styles.onEdit} onPress={handleEventEdit}>
          <Texting title={titleEvent} textStyle={[styles.textEdit]} />
        </Pressable>

        <Pressable onPress={handleDelete} style={styles.onRemove}>
          <Delete />
        </Pressable>
      </View>
    </View>
  )
}

export default Addressing
