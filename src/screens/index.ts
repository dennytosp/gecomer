import ForgotPassword from './auth/forgot-password/forgot-password.screen'
import Onboard from './auth/onboard/onboard.screen'
import SignIn from './auth/sign-in/sign-in.screen'
import SignUp from './auth/sign-up/sign-up.screen'
import Account from './core/account'
import AddCard from './core/account/add-card/add-card.screen'
import AddressInput from './core/account/address-input/address-input.screen'
import Address from './core/account/address/address.screen'
import ChangePassword from './core/account/change-password/change-password.screen'
import CheckCard from './core/account/check-card/check-card.screen'
import CompletedCard from './core/account/completed-card/completed-card.screen'
import Confirmation from './core/account/confirmation/confirmation.screen'
import CreditCard from './core/account/credit-card/credit-card.screen'
import EditProfile from './core/account/edit-profile/edit-profile.screen'
import OrderDetails from './core/account/order-details/order-details.screen'
import Order from './core/account/order/order.screen'
import Profile from './core/account/profile/profile.screen'
import Cart from './core/cart'
import Card from './core/cart/card/card-screen'
import PaymentMethod from './core/cart/payment-method/payment-method.screen'
import PurchaseSuccess from './core/cart/purchase-success/purchase-success.screen'
import Explore from './core/explore'
import Category from './core/explore/category/category.screen'
import FilterSearch from './core/explore/filter-search/filter-search.screen'
import SearchResults from './core/explore/search-results/search-results.screen'
import SearchPage from './core/explore/search/search.screen'
import SoftBy from './core/explore/sort-by-search/sort-by-search.screen'
import Home from './core/home'
import AntsReview from './core/home/ants-review/ants-review.screen'
import Notifications from './core/home/notification'
import ActivityNotification from './core/home/notification/activity-notification/activity-Notification.screen'
import FeedNotification from './core/home/notification/feed-notification/feed-notification.screen'
import OfferNotification from './core/home/notification/offer-notification/offer-notification.screen'
import Details from './core/home/product-details/product-details.screen'
import ProductSeeMore from './core/home/product-see-more/product-see-more.screen'
import Reviews from './core/home/reviews/reviews.screen'
import WriteReview from './core/home/reviews/write-review/write-review.screen'
import Offer from './core/offer'

export const common = {
  Home,
  Explore,
  Cart,
  Offer,
  Account,
}

export const home = {
  ProductSeeMore,
  Details,
  Reviews,
  WriteReview,
  Notifications,
  OfferNotification,
  FeedNotification,
  ActivityNotification,
  AntsReview,
}

export const explore = {
  SearchPage,
  SearchResults,
  Category,
  SoftBy,
  FilterSearch,
}

export const cart = {
  PaymentMethod,
  Card,
  PurchaseSuccess,
}

export const offer = {
  Offer,
}

export const account = {
  AddressInput,
  AddCard,
  Address,
  CompletedCard,
  CreditCard,
  EditProfile,
  ChangePassword,
  Order,
  OrderDetails,
  Profile,
  Confirmation,
  CheckCard,
}
export const authentication = {
  Onboard,
  SignIn,
  SignUp,
  ForgotPassword,
}
