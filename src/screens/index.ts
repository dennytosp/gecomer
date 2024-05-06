import ForgotPassword from './auth/forgot-password/forgot-password.screen'
import Onboard from './auth/onboard/onboard.screen'
import Login from './auth/sign-in/sign-in.screen'
import Register from './auth/sign-up/sign-up.screen'
import Account from './core/account-tab'
import AddAddress from './core/account-tab/add-address/add-address.screen'
import AddCard from './core/account-tab/add-card/add-card.screen'
import ChangePassword from './core/account-tab/change-password/change-password.screen'
import CheckCard from './core/account-tab/check-card/check-card.screen'
import CompletedCard from './core/account-tab/completed-card/completed-card.screen'
import Confirmation from './core/account-tab/remind-confirmation/remind-confirmation.screen'
import CreditCard from './core/account-tab/credit-card/credit-card.screen'
import EditUserInformation from './core/account-tab/edit-profile/edit-profile.screen'
import Address from './core/account-tab/my-address/my-address.screen'
import Order from './core/account-tab/my-order/my-order.screen'
import Profile from './core/account-tab/my-profile/my-profile.screen'
import OrderDetails from './core/account-tab/order-details/order-details.screen'
import Card from './core/cart-tab/my-card/my-card-screen'
import PaymentMethod from './core/cart-tab/payment-method/payment-method.screen'
import PurchaseSuccess from './core/cart-tab/purchase-success/purchase-success.screen'
import Cart from './core/cart-tab'
import FilterSearch from './core/explore-tab/filter-search/filter-search.screen'
import Category from './core/explore-tab/my-category/my-category.screen'
import SearchResults from './core/explore-tab/search-results/search-results.screen'
import SearchPage from './core/explore-tab/search/search.screen'
import SoftBy from './core/explore-tab/sort-by-search/sort-by-search.screen'
import Explore from './core/explore-tab'
import Home from './core/home-tab'
import AntsReview from './core/home-tab/ants-review/ants-review.screen'
import Reviews from './core/home-tab/my-reviews/my-review.screen'
import WriteReview from './core/home-tab/my-reviews/write-review/write-review.screen'
import Notifications from './core/home-tab/notification'
import ActivityNotification from './core/home-tab/notification/activity-notification/activity-Notification.screen'
import FeedNotification from './core/home-tab/notification/feed-notification/feed-notification.screen'
import OfferNotification from './core/home-tab/notification/offer-notification/offer-notification.screen'
import Details from './core/home-tab/product-details/product-details.screen'
import ProductSeeMore from './core/home-tab/product-see-more/product-see-more.screen'
import Offer from './core/offer-tab'

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
  AddAddress,
  AddCard,
  Address,
  CompletedCard,
  CreditCard,
  EditUserInformation,
  ChangePassword,
  Order,
  OrderDetails,
  Profile,
  Confirmation,
  CheckCard,
}
export const authentication = {
  Onboard,
  Login,
  Register,
  ForgotPassword,
}
