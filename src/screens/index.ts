import Account from './common/Account'
import AddAddress from './common/Account/navigation/AddAddress'
import AddCard from './common/Account/navigation/AddCard'
import Address from './common/Account/navigation/Address'
import ChangePassword from './common/Account/navigation/ChangePassword'
import CheckCard from './common/Account/navigation/CheckCard'
import CompletedCard from './common/Account/navigation/CompletedCard'
import Confirmation from './common/Account/navigation/Confirmation'
import CreditCard from './common/Account/navigation/CreditCard'
import EditUserInformation from './common/Account/navigation/EditUserInformation'
import Order from './common/Account/navigation/Order'
import OrderDetails from './common/Account/navigation/OrderDetails'
import Profile from './common/Account/navigation/Profile'
import Cart from './common/Cart'
import Card from './common/Cart/navigation/Card'
import PaymentMethod from './common/Cart/navigation/PaymentMethod'
import PurchaseSuccess from './common/Cart/navigation/PurchaseSuccess'
import Explore from './common/Explore'
import Category from './common/Explore/navigation/Category'
import FilterSearch from './common/Explore/navigation/FilterSearch'
import SearchPage from './common/Explore/navigation/SearchPage'
import SearchResults from './common/Explore/navigation/SearchResults'
import SoftBy from './common/Explore/navigation/SoftBy'
import Home from './common/Home'
import Details from './common/Home/navigation/Details'
import AntsReview from './common/Home/navigation/AntsReview'
import Favorite from './common/Home/navigation/Favorite'
import FlashSale from './common/Home/navigation/FlashSale'
import MegaSale from './common/Home/navigation/MegaSale'
import Notifications from './common/Home/navigation/Notifications'
import ActivityNotification from './common/Home/navigation/Notifications/navigation/ActivityNotification'
import FeedNotification from './common/Home/navigation/Notifications/navigation/FeedNotification'
import OfferNotification from './common/Home/navigation/Notifications/navigation/OfferNotification'
import Reviews from './common/Home/navigation/Reviews'
import WriteReview from './common/Home/navigation/Reviews/navigation/WriteReview'
import SuperFlashSale from './common/Home/navigation/SuperFlashSale'
import Offer from './common/Offer'
import ForgotPassword from './auth/ForgotPassword'
import Login from './auth/Login'
import Onboard from './auth/Onboarding'
import Register from './auth/Register'
import Splash from './auth/Splash'

export const common = {
  Home,
  Explore,
  Cart,
  Offer,
  Account,
}

export const home = {
  SuperFlashSale,
  FlashSale,
  MegaSale,
  Favorite,
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
  Splash,
  Login,
  Register,
  ForgotPassword,
}
