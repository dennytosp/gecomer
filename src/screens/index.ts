import ForgotPassword from './auth/ForgotPassword'
import Login from './auth/Login'
import Onboard from './auth/Onboarding'
import Register from './auth/Register'
import Splash from './auth/Splash'
import Account from './common/Account'
import AddAddress from './common/Account/AddAddress'
import AddCard from './common/Account/AddCard'
import Address from './common/Account/Address'
import ChangePassword from './common/Account/ChangePassword'
import CheckCard from './common/Account/CheckCard'
import CompletedCard from './common/Account/CompletedCard'
import Confirmation from './common/Account/Confirmation'
import CreditCard from './common/Account/CreditCard'
import EditUserInformation from './common/Account/EditUserInformation'
import Order from './common/Account/Order'
import OrderDetails from './common/Account/OrderDetails'
import Profile from './common/Account/Profile'
import Cart from './common/Cart'
import Card from './common/Cart/Card'
import PaymentMethod from './common/Cart/PaymentMethod'
import PurchaseSuccess from './common/Cart/PurchaseSuccess'
import Explore from './common/Explore'
import Category from './common/Explore/Category'
import FilterSearch from './common/Explore/FilterSearch'
import SearchPage from './common/Explore/SearchPage'
import SearchResults from './common/Explore/SearchResults'
import SoftBy from './common/Explore/SoftBy'
import Home from './common/Home'
import AntsReview from './common/Home/AntsReview'
import Details from './common/Home/Details'
import Notifications from './common/Home/Notifications'
import ActivityNotification from './common/Home/Notifications/ActivityNotification'
import FeedNotification from './common/Home/Notifications/FeedNotification'
import OfferNotification from './common/Home/Notifications/OfferNotification'
import ProductSeeMore from './common/Home/ProductSeeMore'
import Reviews from './common/Home/Reviews'
import WriteReview from './common/Home/Reviews/WriteReview'
import Offer from './common/Offer'

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
  Splash,
  Login,
  Register,
  ForgotPassword,
}
