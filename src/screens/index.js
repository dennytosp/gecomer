import Account from './Common/Account'
import AddAddress from './Common/Account/navigation/AddAddress'
import AddCard from './Common/Account/navigation/AddCard'
import Address from './Common/Account/navigation/Address'
import ChangePassword from './Common/Account/navigation/ChangePassword'
import CheckCard from './Common/Account/navigation/CheckCard'
import CompletedCard from './Common/Account/navigation/CompletedCard'
import Confirmation from './Common/Account/navigation/Confirmation'
import CreditCard from './Common/Account/navigation/CreditCard'
import EditUserInformation from './Common/Account/navigation/EditUserInformation'
import Order from './Common/Account/navigation/Order'
import OrderDetails from './Common/Account/navigation/OrderDetails'
import Profile from './Common/Account/navigation/Profile'
import Cart from './Common/Cart'
import Card from './Common/Cart/navigation/Card'
import PaymentMethod from './Common/Cart/navigation/PaymentMethod'
import PurchaseSuccess from './Common/Cart/navigation/PurchaseSuccess'
import ShipTo from './Common/Cart/navigation/ShipTo'
import Explore from './Common/Explore'
import Category from './Common/Explore/navigation/Category'
import FilterSearch from './Common/Explore/navigation/FilterSearch'
import SearchPage from './Common/Explore/navigation/SearchPage'
import SearchResults from './Common/Explore/navigation/SearchResults'
import SoftBy from './Common/Explore/navigation/SoftBy'
import Home from './Common/Home'
import Details from './Common/Home/navigation/Details'
import DuAn_Reviews from './Common/Home/navigation/DuAn_Reviews'
import Favorite from './Common/Home/navigation/Favorite'
import FlashSale from './Common/Home/navigation/FlashSale'
import MegaSale from './Common/Home/navigation/MegaSale'
import Notifications from './Common/Home/navigation/Notifications'
import ActivityNotification from './Common/Home/navigation/Notifications/navigation/ActivityNotification'
import FeedNotification from './Common/Home/navigation/Notifications/navigation/FeedNotification'
import OfferNotification from './Common/Home/navigation/Notifications/navigation/OfferNotification'
import Reviews from './Common/Home/navigation/Reviews'
import WriteReview from './Common/Home/navigation/Reviews/navigation/WriteReview'
import SuperFlashSale from './Common/Home/navigation/SuperFlashSale'
import Offer from './Common/Offer'
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
  DuAn_Reviews,
}

export const explore = {
  SearchPage,
  SearchResults,
  Category,
  SoftBy,
  FilterSearch,
}

export const cart = {
  ShipTo,
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
