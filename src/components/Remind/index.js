import { COLORS, FONTS } from '@/constants'
import { getSize } from '@/utils'
import React from 'react'
import { Pressable, View } from 'react-native'
import ButtonPrimary from '../ButtonPrimary'
import Texting from '../Texting'
import styles from './styles'

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
      style={{
        ...style,
        ...styles.wrapperEmpty,
        marginTop: justAlign ? null : getSize.m(132),
      }}
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
          fontSize={getSize.m(24)}
          color={COLORS.secondary}
          marginTop={getSize.m(16)}
          fontFamily={FONTS.bold}
        />
        <Texting title={subtitle} marginBottom={getSize.m(16)} />
      </View>
      <ButtonPrimary
        title={onEvent}
        marginBottom={getSize.m(16)}
        onPress={handleOnEvent}
      />
      {onCancel && (
        <Pressable onPress={handleOnCancel} style={styles.wrapperCancel}>
          <Texting
            title={onCancel}
            fontFamily={FONTS.bold}
            fontSize={getSize.m(14)}
          />
        </Pressable>
      )}
    </View>
  )
}

export default Remind
