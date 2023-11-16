import { COLORS } from '@/constants'
import { getSize } from '@/utils'
import React from 'react'
import { Pressable, View } from 'react-native'
import ButtonPrimary from '../ButtonPrimary'
import Texting from '../Texting'
import { styles } from './styles'

const Remind = ({
  icon,
  background,
  title,
  subtitle,
  onEvent,
  onCancel,
  justAlign,
  handleOnEvent,
  handleOnCancel,
  style,
}) => {
  return (
    <View
      style={[
        styles.wrapperEmpty,
        { marginTop: justAlign ? null : getSize.m(132) },
        style,
      ]}
    >
      <View style={styles.wrapperContentEmpty}>
        <Pressable
          style={{
            ...styles.wrapperImageTitle,
            backgroundColor: background ? background : COLORS.primary,
          }}
        >
          {icon}
        </Pressable>

        <Texting
          title={title}
          textStyle={[styles.textTitle]}
          style={[{ marginTop: getSize.m(16) }]}
        />
        <Texting title={subtitle} style={[{ marginBottom: getSize.m(16) }]} />
      </View>

      <ButtonPrimary
        title={onEvent}
        onPress={handleOnEvent}
        style={[{ marginBottom: getSize.m(16) }]}
      />

      {onCancel && (
        <Pressable onPress={handleOnCancel} style={styles.wrapperCancel}>
          <Texting title={onCancel} textStyle={[styles.textCancel]} />
        </Pressable>
      )}
    </View>
  )
}

export default Remind
