import {COLORS} from '../../constants';
import {photos} from '../../assets';
import {
  Dress,
  HighHeels,
  ManShirt,
  ManShoes,
  ManWorkEquipment,
  WomanBag,
} from '../../assets/svg';

export const ONBOARD_DATA = [
  {
    id: '01',
    title: 'Welcome to Sherwin.',
    text: 'I provide essential stuff for your ui designs every tuesday!.',
    image: photos.onboard01,
  },
  {
    id: '02',
    title: 'Every Tuesday!',
    text: 'Make sure to take a look my uplab profile every tuesday',
    image: photos.onboard02,
  },
  {
    id: '03',
    title: 'Start now!',
    text: 'You can follow me if you wantand comment on any to get some freebies',
    image: photos.onboard03,
  },
];

export const CATEGORIES_DATA = [
  {
    id: '01',
    image: ManShirt,
    title: 'Man Shirt',
  },
  {
    id: '02',
    image: Dress,
    title: 'Dress',
  },
  {
    id: '03',
    image: ManWorkEquipment,
    title: 'Man Work Equipment',
  },
  {
    id: '04',
    image: WomanBag,
    title: 'Woman Bag',
  },
  {
    id: '05',
    image: ManShoes,
    title: 'Man Shoes',
  },
  {
    id: '06',
    image: HighHeels,
    title: 'High Heels',
  },
];
export const PRODUCTS_DATA = [
  {
    id: '01',
    image: photos.product01,
    name: 'FS - Nike Air Max 270 React Javascript',
    discounted: '$299,43',
    price: '$534,33',
    promotion: '24% Off',
  },
  {
    id: '02',
    image: photos.product02,
    name: 'FS - QUILTED MAXI CROS...',
    discounted: '$185,25',
    price: '$464,35',
    promotion: '35% Off',
  },
  {
    id: '03',
    image: photos.product03,
    name: 'Nike Air Zoom Pegasus 36 Miami',
    discounted: '$399,43',
    price: '$782,05',
    promotion: '44% Off',
  },
  {
    id: '04',
    image: photos.product04,
    name: 'Jordan Force Zoom Pegasus 22 Miami',
    discounted: '$359,43',
    price: '$712,05',
    promotion: '40% Off',
  },
];
export const PRODUCTS_DATA_VERTICOLUMNS = [
  {
    id: '01',
    image: photos.product09,
    name: 'Nike Air Max 270 React ENG',
    discounted: '$195,43',
    price: '$432,33',
    promotion: '27% Off',
  },
  {
    id: '02',
    image: photos.product04,
    name: 'Bag Air Max 225 Ebon ENG',
    discounted: '$557,25',
    price: '$780,35',
    promotion: '17% Off',
  },
  {
    id: '03',
    image: photos.product08,
    name: 'Bag Air Mini 04 Premiere ENG',
    discounted: '$725,43',
    price: '$912,05',
    promotion: '24% Off',
  },
  {
    id: '04',
    image: photos.product03,
    name: 'Nike Force Zoom Pegasus 22 Ladan',
    discounted: '$649,20',
    price: '$827,85',
    promotion: '30% Off',
  },
];

export const DATA_SIZES = [
  {
    id: '01',
    sizeNumbers: '6',
  },
  {
    id: '02',
    sizeNumbers: '6.5',
  },
  {
    id: '03',
    sizeNumbers: '7',
  },
  {
    id: '04',
    sizeNumbers: '7.5',
  },
  {
    id: '05',
    sizeNumbers: '8',
  },
  {
    id: '06',
    sizeNumbers: '8.5',
  },
  {
    id: '07',
    sizeNumbers: '9',
  },
  {
    id: '08',
    sizeNumbers: '9.5',
  },
  {
    id: '09',
    sizeNumbers: '10',
  },
  {
    id: '10',
    sizeNumbers: '11.5',
  },
  {
    id: '11',
    sizeNumbers: '12',
  },
];

export const DATA_COLORS = [
  {
    id: '01',
    colors: COLORS.yellow,
  },
  {
    id: '02',
    colors: COLORS.primary,
  },
  {
    id: '03',
    colors: COLORS.pale_red,
  },
  {
    id: '04',
    colors: COLORS.green,
  },
  {
    id: '05',
    colors: COLORS.purple,
  },
  {
    id: '06',
    colors: COLORS.secondary,
  },
  {
    id: '07',
    colors: COLORS.grey,
  },
];

export const DATA_REVIEWS = [
  {
    id: '01',
    name: 'Dinh Tien Phong',
    image: photos.avatar && photos.avatar && photos.avatar,
    star: '4',
    description:
      'Air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.',
  },
  {
    id: '02',
    name: 'Dinh Tien Phong',
    image: photos.avatar && photos.avatar && photos.avatar,
    star: '4',
    description:
      'Air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.',
  },
  {
    id: '03',
    name: 'Dinh Tien Phong',
    image: photos.avatar && photos.avatar && photos.avatar,
    star: '4',
    description:
      'Air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.',
  },
  {
    id: '04',
    name: 'Dinh Tien Phong',
    image: photos.avatar && photos.avatar && photos.avatar,
    star: '4',
    description:
      'Air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.',
  },
];

const sources = {
  ONBOARD_DATA,
  CATEGORIES_DATA,
  PRODUCTS_DATA,
  PRODUCTS_DATA_VERTICOLUMNS,
  DATA_SIZES,
  DATA_COLORS,
};
export default sources;
