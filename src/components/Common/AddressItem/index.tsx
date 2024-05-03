import { Delete } from '@/assets'
import Texting from '@/components/Texting'
import { getSize } from '@/utils'
import React from 'react'
import {
  Pressable,
  StyleProp,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'
import { styles } from './styles'
import ButtonPrimary from '@/components/ButtonPrimary'

type Props = {
  item: { name: string; address: string; phoneNumber: string }
  buttonTitle: string
  handleButton: () => void
  handleDelete: () => void
  style?: StyleProp<ViewStyle>
}

const AddressItem = ({
  item,
  buttonTitle,
  handleButton,
  handleDelete,
  style,
}: Props) => {
  const { name, address, phoneNumber } = item

  return (
    <View style={[styles.wrapperCenter, style]}>
      <Texting title={name} textStyle={[styles.textName]} />
      <Texting title={address} style={[{ marginVertical: getSize.m(16) }]} />
      <Texting title={phoneNumber} style={[{ marginBottom: getSize.m(16) }]} />

      <View style={[styles.wrapperOnEvent]}>
        <ButtonPrimary
          title={buttonTitle}
          onPress={handleButton}
          atBottom={false}
          style={[styles.editButton]}
        />
        <TouchableOpacity onPress={handleDelete} style={[styles.onRemove]}>
          <Delete />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AddressItem
