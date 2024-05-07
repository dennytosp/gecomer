import { ImageRequireSource } from 'react-native'
import { Source } from 'react-native-fast-image'

export type ProductDetailParams = {
  item: {
    image: Source | ImageRequireSource
    name: string
    discounted: string
    price: string
    promotion?: string
  }
}
