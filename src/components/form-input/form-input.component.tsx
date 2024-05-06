import { Pressable, TextInput, TouchableOpacity, View } from 'react-native'
import { icons } from '@/assets'
import { COLORS } from '@/theme'
import { AppStyles } from '@/styles'
import { getSize } from '@/utils'
import React, {
  Ref,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { SpeedImage } from '../speed-image/speed-image.component'
import Text from '../text/text.component'
import { styles } from './form-input.style'
import { InputProps, InputRef } from './form-input.type'

const FormInput = forwardRef((props: InputProps, ref: Ref<InputRef>) => {
  const {
    title,
    inputProps,
    placeHolder,
    containerStyle,
    style,
    titleStyle,
    inputStyle,
    defaultValue,
    isRequired,
    isPassword = false,
    isDisableInput,
    isUsingModal,
    leftIcon,
    rightIcon,
    hintError = '',
    hintErrorEmpty = 'Please input the required fields!',
    handleChangeText,
    onBlurInput,
    onSubmit,
    onPressInput,
    onPressRightInput,
    onPressLeftInput,
    renderCustom,
  } = props
  const inputRef = useRef<TextInput>(null)

  const [inputValue, setInputValue] = useState<string>(defaultValue || '')
  const [isError, setIsError] = useState<boolean>(false)
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false)

  const [inputFocus, setInputFocus] = useState<boolean>(false)

  const isDisabled = onPressInput && isDisableInput

  useImperativeHandle(
    ref,
    () => ({
      getErrorStatus,
      changeErrorStatus,
      changeValue,
      getValue,
      clearValue,
      getLengthCharacter,
      focus: onFocus,
    }),
    [inputValue],
  )

  useEffect(() => {
    if (isUsingModal) {
      onHandleModal()
    }
  }, [inputValue])

  const onHandleModal = () => {
    isError && setIsError(prev => !prev)
  }

  const onBlur = useCallback(() => {
    onBlurInput && onBlurInput()
    setInputFocus(false)
  }, [inputValue])

  const onChangeText = (text: string) => {
    setInputValue(text)

    isError && setIsError(prev => !prev)
    handleChangeText && handleChangeText(text)
  }

  const onActionPassword = () => setIsShowPassword(prev => !prev)
  const onFocus = () => inputRef.current?.focus()
  const changeErrorStatus = (status: boolean) => setIsError(status)
  const getErrorStatus = () => isError
  const changeValue = (val: string) => setInputValue(val)
  const getValue = () => inputValue
  const clearValue = () => setInputValue('')
  const getLengthCharacter = () => inputValue.length

  const renderError = () => {
    const isHintError = hintError && inputValue
    const isHintErrorEmpty = hintErrorEmpty && !inputValue

    if (isError && (isHintError || isHintErrorEmpty)) {
      return (
        <>
          <Text
            title={inputValue ? hintError : hintErrorEmpty}
            textStyle={[styles.textErrorWarning]}
          />
        </>
      )
    }
  }

  return (
    <View
      style={[
        styles.container,
        inputFocus && !title && styles.shadowFocus,
        containerStyle,
      ]}
    >
      {title && (
        <Text title={title} textStyle={[styles.titleStyle, titleStyle]} />
      )}

      <View
        style={[
          {
            borderColor: isError
              ? COLORS.red
              : inputFocus
                ? COLORS.primary
                : COLORS.border,
          },
          styles.enabledBorderWidth,
          style,
        ]}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={onPressInput}
          style={[
            AppStyles.rowCenterBetween,
            {
              minHeight: getSize.m(24),
              padding: getSize.m(16),
            },
          ]}
        >
          {leftIcon && (
            <Pressable
              style={[{ marginRight: getSize.m(8) }]}
              onPress={onPressLeftInput}
            >
              {leftIcon}
            </Pressable>
          )}

          {isDisabled ? (
            <Text title={inputValue} style={[styles.textInput]} />
          ) : (
            <TextInput
              ref={inputRef}
              autoCorrect={false}
              placeholder={placeHolder}
              placeholderTextColor={COLORS.grey}
              underlineColorAndroid="transparent"
              onChangeText={onChangeText}
              style={[styles.textInput, inputStyle]}
              onFocus={() => {
                setInputFocus(true)
              }}
              value={inputValue}
              onBlur={onBlur}
              onSubmitEditing={onSubmit}
              secureTextEntry={isPassword && !isShowPassword}
              returnKeyType="next"
              // blurOnSubmit={false}
              // textContentType={'oneTimeCode'}
              {...inputProps}
            />
          )}

          <View style={[AppStyles.rowVCenter]}>
            {/* {isError && <SpeedImage source={Images.errorWarning} />} */}

            {rightIcon && (
              <Pressable
                style={[styles.customStyle]}
                onPress={onPressRightInput || onPressInput}
              >
                {rightIcon}
              </Pressable>
            )}

            {isPassword && (
              <TouchableOpacity activeOpacity={0.2} onPress={onActionPassword}>
                <SpeedImage
                  source={isShowPassword ? icons.eyeOpen : icons.eyeClose}
                  customStyle={[styles.customStyle]}
                />
              </TouchableOpacity>
            )}
          </View>
        </TouchableOpacity>
      </View>

      {renderError()}
      {inputValue && renderCustom && renderCustom()}
    </View>
  )
})

export default FormInput
