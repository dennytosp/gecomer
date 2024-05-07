import { PRODUCTS_DATA_VERTICOLUMNS } from '@/assets'

export type AddressParams = {
  type?: 'address-on-cart'
  headerTitle: 'Ship To'
}

export type AddressInputParams = {
  addressTitle: string
}

export type ProductSeeMore = {
  title: string
  data: typeof PRODUCTS_DATA_VERTICOLUMNS
  isFlashSale?: boolean
}
