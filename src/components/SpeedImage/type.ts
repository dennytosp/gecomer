import { ImageRequireSource, StyleProp } from 'react-native'
import {
  FastImageProps,
  ImageStyle,
  Source as SourceFastImage,
} from 'react-native-fast-image'

type Source = SourceFastImage | ImageRequireSource

type ImageSize =
  | 'tiny'
  | 'small'
  | 'mediumSmall'
  | 'regular'
  | 'large'
  | 'big'
  | 'huge'

interface SpeedImageProps extends FastImageProps {
  imageType?: ImageSize
  customStyle?: StyleProp<ImageStyle>
}

export type { ImageSize, Source, SpeedImageProps }
