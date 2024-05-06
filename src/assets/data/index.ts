import { photos } from '@/assets/img'
import {
  Activity,
  Address,
  Bank_Transfer,
  Bikini,
  Birthday,
  ChangePassword,
  Credit,
  Dress,
  EmailProfile,
  Feed,
  Gender,
  HighHeels,
  ManPant,
  ManShirt,
  ManShoes,
  ManTShirt,
  ManUnderwear,
  ManWorkEquipment,
  Offer,
  Order,
  Payment,
  Paypal,
  PhoneNumber,
  Profile,
  Skirt,
  WomanBag,
  WomanPants,
  WomanTShirt,
} from '@/assets/svg'
import { routes } from '@/navigators/routes'
import { COLORS } from '@/theme'
import { faker } from '@faker-js/faker'

const ONBOARD_DATA = [
  {
    id: '01',
    title: 'Welcome to Gecomer.',
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
]

const CATEGORIES_DATA = [
  {
    id: '01',
    image: ManShirt,
    title: 'Man Shirt',
    navigation: routes.ANTS_REVIEWS,
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
]

const PRODUCTS_DATA = [
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
    name: 'FS - Rolling On The Hook 01 Texas',
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
  {
    id: '05',
    image: photos.product05,
    name: 'Daniim Rinem Tinim Force 012 Desin',
    discounted: '$555,05',
    price: '$895,05',
    promotion: '45% Off',
  },
  {
    id: '06',
    image: photos.product06,
    name: 'Genz Donce Meet Tools 19 Ginp',
    discounted: '$444,05',
    price: '$666,05',
    promotion: '35% Off',
  },
  {
    id: '07',
    image: photos.product08,
    name: 'Teninx Force Run Pegasus 20 Dian',
    discounted: '$459,00',
    price: '$585,05',
    promotion: '32% Off',
  },
  {
    id: '08',
    image: photos.product09,
    name: 'Rolling Force Zoom Pegasus 21 Kenin',
    discounted: '$409,05',
    price: '$512,05',
    promotion: '30% Off',
  },
]

const DATA_MEGA_SALE = [
  {
    id: '01',
    image: photos.product05,
    name: 'FS - Airing Air 225 Chelsea',
    discounted: '$458,55',
    price: '$855,55',
    promotion: '34% Off',
  },
  {
    id: '02',
    image: photos.product09,
    name: 'F2 - Scroll Culition Cring',
    discounted: '$285,25',
    price: '$662,35',
    promotion: '35% Off',
  },
  {
    id: '03',
    image: photos.product06,
    name: 'JORDAN Air Crone Sun 22 Itan',
    discounted: '$399,55',
    price: '$782,05',
    promotion: '44% Off',
  },
  {
    id: '04',
    image: photos.product08,
    name: 'Summer Dance Jordan Ronaldo 07 Portugal',
    discounted: '$777,77',
    price: '$999,777',
    promotion: '20% Off',
  },
  {
    id: '05',
    image: photos.product01,
    name: 'Rolling Tino Vovin Seni 05 Coming',
    discounted: '$555,55',
    price: '$775,55',
    promotion: '30% Off',
  },
  {
    id: '06',
    image: photos.product03,
    name: 'Denim Catin To Sever 88 Port',
    discounted: '$655,55',
    price: '$888,55',
    promotion: '35% Off',
  },
]

const PRODUCTS_DATA_VERTICOLUMNS = [
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
]

const DATA_SIZES = [
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
]

const DATA_COLORS = [
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
]

faker.seed(50)

export const REVIEWS = [...Array(15).keys()].map((_, i) => {
  return {
    userId: faker.string.uuid(),
    name: faker.person.fullName(),
    avatar: faker.image.avatar(),
    time: faker.date.anytime().toDateString(),
    description: faker.lorem.paragraph(),
    star: 4,
  }
})

const DATA_STAR_REVIEWS = [
  {
    id: '01',
    number: '1',
  },
  {
    id: '02',
    number: '2',
  },
  {
    id: '03',
    number: '3',
  },
  {
    id: '04',
    number: '4',
  },
  {
    id: '05',
    number: '5',
  },
]

const DATA_LIST_NOTIFICATIONS = [
  {
    id: '01',
    name: 'Offer',
    image: Offer,
    number: 3,
    navigation: routes.OFFER_NOTIFICATION,
  },
  {
    id: '02',
    name: 'Feed',
    image: Feed,
    number: 3,
    navigation: routes.FEED_NOTIFICATION,
  },
  {
    id: '03',
    name: 'Activity',
    image: Activity,
    number: 3,
    navigation: routes.ACTIVITY_NOTIFICATION,
  },
]

const DATA_OFFER_NOTIFICATIONS = [
  {
    id: '01',
    title: 'The Best Title',
    content:
      'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor amet deserunt ex proident commodo',
    time: 'April 30, 2020 1:03 PM',
  },
  {
    id: '02',
    title: 'SUMMER OFFER 98% Cashback',
    content:
      'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor',
    time: 'April 29, 2020 1:02 PM',
  },
  {
    id: '03',
    title: 'Special Offer 25% OFF',
    content:
      'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor amet deserunt ex proident commodo',
    time: 'April 28, 2020 1:01 PM',
  },
]

const DATA_ACTIVITY_NOTIFICATIONS = [
  {
    id: '01',
    title: 'Transaction Nike Air Zoom Product',
    content:
      'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor amet deserunt ex proident commodo',
    time: 'April 30, 2020 1:03 PM',
  },
  {
    id: '02',
    title: 'Transaction Nike Air Zoom Pegasus 36 Miami',
    content:
      'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor',
    time: 'April 29, 2020 1:02 PM',
  },
  {
    id: '03',
    title: 'Transaction Nike Air Max',
    content:
      'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor amet deserunt ex proident commodo',
    time: 'April 28, 2020 1:01 PM',
  },
]

const DATA_FEED_NOTICATIONS = [
  {
    id: '01',
    image: photos.product01,
    title: 'New Product',
    content: 'Nike Air Zoom Pegasus 36 Miami - Special For your Activity',
    time: 'June 3, 2020 5:06 PM',
  },
  {
    id: '02',
    image: photos.product09,
    title: 'Best Product',
    content: 'Nike Air Zoom Pegasus 36 Miami - Special For your Activity',
    time: 'June 3, 2020 4:25 PM',
  },
  {
    id: '03',
    image: photos.product03,
    title: 'New Product',
    content: 'Nike Air Zoom Pegasus 36 Miami - Special For your Activity',
    time: 'June 3, 20120 4:05 PM',
  },
]

const DATA_DU_AN_REVIEWS = [
  {
    id: '01',
    name: 'Dinh Tien Phong',
    avatar: photos.avatar,
    star: '4',
    time: 'August 05, 2021',
    like: '24',
    image01: photos.product01,
    image02: photos.product02,
    image03: photos.product03,
    description:
      'I loved this dress so much as soon as I tried it on I knew I had to buy it in another color. I am 53 about 155lbs and I carry all my weight in my upper body. When I put it on I felt like it thinned me put and I got so many compliments.',
  },
  {
    id: '02',
    name: 'Nguyen Van Tam',
    avatar: photos.avatar,
    star: '5',
    time: 'August 06, 2021',
    like: '25',
    image01: photos.product01,
    image02: photos.product02,
    image03: photos.product03,
    description:
      'I loved this dress so much as soon as I tried it on I knew I had to buy it in another color. I am 53 about 155lbs and I carry all my weight in my upper body. When I put it on I felt like it thinned me put and I got so many compliments.',
  },
  {
    id: '03',
    name: 'Le Chi Vinh',
    avatar: photos.avatar,
    star: '5',
    time: 'August 07, 2021',
    like: '26',
    image01: photos.product01,
    image02: photos.product02,
    image03: photos.product03,
    description:
      'I loved this dress so much as soon as I tried it on I knew I had to buy it in another color. I am 53 about 155lbs and I carry all my weight in my upper body. When I put it on I felt like it thinned me put and I got so many compliments.',
  },
  {
    id: '04',
    name: 'Le Huynh Yen Nhi',
    avatar: photos.avatar,
    star: '4',
    time: 'August 08, 2021',
    like: '28',
    image01: photos.product01,
    image02: photos.product02,
    image03: photos.product03,
    description:
      'I loved this dress so much as soon as I tried it on I knew I had to buy it in another color. I am 53 about 155lbs and I carry all my weight in my upper body. When I put it on I felt like it thinned me put and I got so many compliments.',
  },
]

const DATA_IMAGES_REVIEWS = [
  {
    image: photos.product01,
  },
  {
    image: photos.product02,
  },
  {
    image: photos.product03,
  },
  {
    image: photos.product02,
  },
]

const MAN_FASHION_DATA = [
  {
    id: '01',
    image: ManShirt,
    title: 'Man Shirt',
  },
  {
    id: '02',
    image: ManWorkEquipment,
    title: 'Man Work Equipment',
  },
  {
    id: '03',
    image: ManTShirt,
    title: 'Man T-Shirt',
  },
  {
    id: '04',
    image: ManShoes,
    title: 'Man Shoes',
  },
  {
    id: '05',
    image: ManPant,
    title: 'Man Pants',
  },
  {
    id: '06',
    image: ManUnderwear,
    title: 'Man Underwear',
  },
]

const WOMAN_FASHION_DATA = [
  {
    id: '01',
    image: Dress,
    title: 'Dress',
  },
  {
    id: '02',
    image: WomanTShirt,
    title: 'Woman T-Shirt',
  },
  {
    id: '03',
    image: WomanPants,
    title: 'Woman Pants',
  },
  {
    id: '04',
    image: Skirt,
    title: 'Skirt',
  },
  {
    id: '05',
    image: WomanBag,
    title: 'Woman Bag',
  },
  {
    id: '06',
    image: HighHeels,
    title: 'High Heels',
  },
  {
    id: '07',
    image: Bikini,
    title: 'Bikini',
  },
]

const DATA_SEARCH = [
  {
    id: '01',
    name: 'Nike Air Max 270 React ENG',
    navigation: routes.SEARCH_RESULT,
  },
  {
    id: '02',
    name: 'Nike Air Vapormax 360',
    navigation: routes.SEARCH_RESULT,
  },
  {
    id: '03',
    name: 'Nike Air Max 335 Flut VIE',
    navigation: routes.SEARCH_RESULT,
  },
  {
    id: '04',
    name: 'Nike Air Max 320 Sonsine',
    navigation: routes.SEARCH_RESULT,
  },
  {
    id: '05',
    name: 'Nike Air VaporMax Flyknit 3',
    navigation: routes.SEARCH_RESULT,
  },
  {
    id: '06',
    name: 'Nike Air Max 97 Utility',
    navigation: routes.SEARCH_RESULT,
  },
]

const DATA_CATEGORY_SOFT = [
  {
    id: '01',
    image: ManShirt,
    title: 'Shirt',
  },
  {
    id: '02',
    image: ManShirt,
    title: 'Bikini',
    backgroundColor: COLORS.border,
  },
  {
    id: '03',
    image: ManShirt,
    title: 'Dress',
  },
  {
    id: '04',
    image: ManShirt,
    title: 'Work Equipment',
  },
  {
    id: '05',
    image: ManShirt,
    title: 'Man Pants',
  },
  {
    id: '06',
    image: ManShirt,
    title: 'Man Shoes',
  },
  {
    id: '07',
    image: ManShirt,
    title: 'Man Underwear',
  },
  {
    id: '08',
    image: ManShirt,
    title: 'Man T-Shirt',
  },
  {
    id: '09',
    image: ManShirt,
    title: 'Woman Bag',
  },
  {
    id: '10',
    image: ManShirt,
    title: 'Woman Pants',
  },
  {
    id: '11',
    image: ManShirt,
    title: 'High Heels',
  },
  {
    id: '12',
    image: ManShirt,
    title: 'Woman T-Shirt',
  },
  {
    id: '13',
    image: ManShirt,
    title: 'Skirt',
  },
]

const DATA_SOFT_BY = [
  {
    id: '01',
    title: 'Best Match',
    colors: COLORS.primary,
  },
  {
    id: '02',
    title: 'Time: ending soonest',
    backgroundColor: COLORS.border,
    colors: COLORS.secondary,
  },
  {
    id: '03',
    title: 'Time: newly listed',
    colors: COLORS.secondary,
  },
  {
    id: '04',
    title: 'Price + Shipping: lowest first',
    colors: COLORS.secondary,
  },
  {
    id: '05',
    title: 'Price + Shipping: highest first',
    colors: COLORS.secondary,
  },
  {
    id: '06',
    title: 'Distance: nearest first',
    colors: COLORS.secondary,
  },
]

const DATA_CART = [
  {
    id: '01',
    image: photos.product09,
    title: 'Nike Air Max 270 React VIE',
    price: '$299,00',
    quantity: 1,
    isFavorite: true,
  },
  {
    id: '02',
    image: photos.product03,
    title: 'Nike Provie Alan 200',
    price: '$359,00',
    quantity: 1,
    isFavorite: false,
  },
  {
    id: '03',
    image: photos.product01,
    title: 'Nike Sunies Rovin 205',
    price: '$445,00',
    quantity: 1,
    isFavorite: true,
  },
  {
    id: '04',
    image: photos.product05,
    title: 'Nike Sunshet Join 207',
    price: '$447,00',
    quantity: 1,
    isFavorite: true,
  },
]

const DATA_ADDRESS = [
  {
    id: '01',
    name: 'Priscekila',
    address:
      '3711 Spring Hill Rd undefined Tallahassee, Nevada 52874 United States',
    phoneNumber: '+99 1234567890',
  },
  {
    id: '02',
    name: 'Ahmad Khaidir',
    address:
      '3712 Spring Hill Rd undefined Tallahassee, Nevada 52874 United States',
    phoneNumber: '+84 1234567890',
  },
]

const DATA_PAYMENT = [
  {
    id: '01',
    icon: Credit,
    name: 'Credit Card Or Debit',
    backgroundColor: COLORS.border,
    navigation: routes.CREDIT_CARD,
  },
  {
    id: '02',
    icon: Paypal,
    name: 'Paypal',
    navigation: routes.CARD,
  },
  {
    id: '03',
    icon: Bank_Transfer,
    name: 'Bank Transfer',
    navigation: routes.CHECK_CARD,
  },
]

const DATA_ACCOUNT = [
  {
    id: '01',
    icon: Profile,
    name: 'Profile',
    navigation: routes.PROFILE,
  },
  {
    id: '02',
    icon: Order,
    name: 'Order',
    backgroundColor: COLORS.border,
    navigation: routes.ORDER,
  },
  {
    id: '03',
    icon: Address,
    name: 'Address',
    navigation: routes.ADDRESS,
  },
  {
    id: '04',
    icon: Payment,
    name: 'Payment',
    navigation: routes.PAYMENT_METHOD,
  },
]

const DATA_PROFILE = [
  {
    id: '01',
    icon: Gender,
    title: 'Gender',
    content: 'Male',
    navigation: routes.EDIT_PROFILE,
  },
  {
    id: '02',
    icon: Birthday,
    title: 'Birthday',
    content: '21/08/2001',
    navigation: routes.EDIT_PROFILE,
  },
  {
    id: '03',
    icon: EmailProfile,
    title: 'Email ',
    content: 'ginphone@gmail.com',
    navigation: routes.EDIT_PROFILE,
  },
  {
    id: '04',
    icon: PhoneNumber,
    title: 'Phone Number',
    content: '(307) 555-0133',
    navigation: routes.EDIT_PROFILE,
  },
  {
    id: '05',
    icon: ChangePassword,
    title: 'Change Password',
    content: '•••••••••••••••••',
    navigation: routes.CHANGE_PASSWORD,
  },
]

const DATA_ORDER = [
  {
    id: '01',
    code: 'LQNSU346JA',
    time: 'August 1, 2021',
    status: 'Shipping',
    quantity: '2 Items purchased',
    price: '$299,00',
  },
  {
    id: '02',
    code: 'LQNSU346JB',
    time: 'August 10, 2021',
    status: 'Delivered',
    quantity: '4 Items purchased',
    price: '$355,00',
  },
  {
    id: '03',
    code: 'LQNSU346JC',
    time: 'August 21, 2021',
    status: 'Cancel',
    quantity: '3 Items purchased',
    price: '$455,00',
  },
  {
    id: '04',
    code: 'LQNSU346JD',
    time: 'September 05, 2021',
    status: 'Shipping',
    quantity: '5 Items purchased',
    price: '$567,00',
  },
]

export {
  CATEGORIES_DATA,
  DATA_ACCOUNT,
  DATA_ACTIVITY_NOTIFICATIONS,
  DATA_ADDRESS,
  DATA_CART,
  DATA_CATEGORY_SOFT,
  DATA_COLORS,
  DATA_DU_AN_REVIEWS,
  DATA_FEED_NOTICATIONS,
  DATA_IMAGES_REVIEWS,
  DATA_LIST_NOTIFICATIONS,
  DATA_MEGA_SALE,
  DATA_OFFER_NOTIFICATIONS,
  DATA_ORDER,
  DATA_PAYMENT,
  DATA_PROFILE,
  DATA_SEARCH,
  DATA_SIZES,
  DATA_SOFT_BY,
  DATA_STAR_REVIEWS,
  MAN_FASHION_DATA,
  ONBOARD_DATA,
  PRODUCTS_DATA,
  PRODUCTS_DATA_VERTICOLUMNS,
  WOMAN_FASHION_DATA,
}
