import ForgotPasswordScreen from './auth/forgot-password/forgot-password.screen'
import OnboardScreen from './auth/onboard/onboard.screen'
import SignInScreen from './auth/sign-in/sign-in.screen'
import SignUpScreen from './auth/sign-up/sign-up.screen'
import AccountScreen from './core/account'
import AddCardScreen from './core/account/add-card/add-card.screen'
import AddressInputScreen from './core/account/address-input/address-input.screen'
import AddressScreen from './core/account/address/address.screen'
import ChangePasswordScreen from './core/account/change-password/change-password.screen'
import CheckCardScreen from './core/account/check-card/check-card.screen'
import CompletedCardScreen from './core/account/completed-card/completed-card.screen'
import ConfirmationScreen from './core/account/confirmation/confirmation.screen'
import CreditCardScreen from './core/account/credit-card/credit-card.screen'
import EditProfileScreen from './core/account/edit-profile/edit-profile.screen'
import OrderDetailScreen from './core/account/order-detail/order-detail.screen'
import OrderScreen from './core/account/order/order.screen'
import ProfileScreen from './core/account/profile/profile.screen'
import CartScreen from './core/cart'
import CardScreen from './core/cart/card/card-screen'
import PaymentMethodScreen from './core/cart/payment-method/payment-method.screen'
import PurchaseSuccessScreen from './core/cart/purchase-success/purchase-success.screen'
import ExploreScreen from './core/explore'
import CategoryScreen from './core/explore/category/category.screen'
import FilterSearchScreen from './core/explore/filter-search/filter-search.screen'
import SearchResultsScreen from './core/explore/search-results/search-results.screen'
import SearchScreen from './core/explore/search/search.screen'
import SoftByScreen from './core/explore/sort-by-search/sort-by-search.screen'
import HomeScreen from './core/home'
import AntsReviewScreen from './core/home/ants-review/ants-review.screen'
import NotificationScreen from './core/home/notification'
import ActivityNotificationScreen from './core/home/notification/activity-notification/activity-Notification.screen'
import FeedNotificationScreen from './core/home/notification/feed-notification/feed-notification.screen'
import OfferNotificationScreen from './core/home/notification/offer-notification/offer-notification.screen'
import ProductDetailScreen from './core/home/product-detail/product-detail.screen'
import ProductSeeMoreScreen from './core/home/product-see-more/product-see-more.screen'
import ReviewsScreen from './core/home/reviews/reviews.screen'
import WriteReviewScreen from './core/home/reviews/write-review/write-review.screen'
import OfferScreen from './core/offer'

const ACCOUNT_SCREEN = {
  Account: AccountScreen,
  Profile: ProfileScreen,
  EditProfile: EditProfileScreen,
  ChangePassword: ChangePasswordScreen,
  Order: OrderScreen,
  OrderDetail: OrderDetailScreen,
  CompletedCard: CompletedCardScreen,
}

const AUTH_SCREEN = {
  SignIn: SignInScreen,
  SignUp: SignUpScreen,
  ForgotPassword: ForgotPasswordScreen,
}

const COMMON_SCREEN = {
  Onboard: OnboardScreen,
  Address: AddressScreen,
  AddressInput: AddressInputScreen,
  ProductSeeMore: ProductSeeMoreScreen,
  Confirmation: ConfirmationScreen,
}

const NOTIFICATION_SCREEN = {
  Notification: NotificationScreen,
  OfferNotification: OfferNotificationScreen,
  FeedNotification: FeedNotificationScreen,
  ActivityNotification: ActivityNotificationScreen,
}

const PAYMENT_SCREEN = {
  PaymentMethod: PaymentMethodScreen,
  Card: CardScreen,
  PurchaseSuccess: PurchaseSuccessScreen,
  AddCard: AddCardScreen,
  CreditCard: CreditCardScreen,
  CheckCard: CheckCardScreen,
}

const PRODUCT_DETAIL_SCREEN = {
  ProductDetail: ProductDetailScreen,
  Reviews: ReviewsScreen,
  WriteReview: WriteReviewScreen,
  AntsReview: AntsReviewScreen,
}

const SEARCH_SCREEN = {
  Search: SearchScreen,
  SearchResults: SearchResultsScreen,
  Category: CategoryScreen,
  SoftBy: SoftByScreen,
  FilterSearch: FilterSearchScreen,
}

const TAB_SCREEN = {
  Home: HomeScreen,
  Explore: ExploreScreen,
  Cart: CartScreen,
  Offer: OfferScreen,
  Account: AccountScreen,
}

export {
  ACCOUNT_SCREEN,
  AUTH_SCREEN,
  COMMON_SCREEN,
  NOTIFICATION_SCREEN,
  PAYMENT_SCREEN,
  PRODUCT_DETAIL_SCREEN,
  SEARCH_SCREEN,
  TAB_SCREEN,
}
