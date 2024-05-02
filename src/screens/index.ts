import ForgotPassword from './auth/ForgotPassword'
import Login from './auth/Login'
import Onboard from './auth/Onboarding'
import Register from './auth/Register'
import Splash from './auth/Splash'
import Account from './core/Account'
import AddAddress from './core/Account/AddAddress'
import AddCard from './core/Account/AddCard'
import Address from './core/Account/Address'
import ChangePassword from './core/Account/ChangePassword'
import CheckCard from './core/Account/CheckCard'
import CompletedCard from './core/Account/CompletedCard'
import Confirmation from './core/Account/Confirmation'
import CreditCard from './core/Account/CreditCard'
import EditUserInformation from './core/Account/EditUserInformation'
import Order from './core/Account/Order'
import OrderDetails from './core/Account/OrderDetails'
import Profile from './core/Account/Profile'
import Cart from './core/Cart'
import Card from './core/Cart/Card'
import PaymentMethod from './core/Cart/PaymentMethod'
import PurchaseSuccess from './core/Cart/PurchaseSuccess'
import Explore from './core/Explore'
import Category from './core/Explore/Category'
import FilterSearch from './core/Explore/FilterSearch'
import SearchPage from './core/Explore/SearchPage'
import SearchResults from './core/Explore/SearchResults'
import SoftBy from './core/Explore/SoftBy'
import Home from './core/Home'
import AntsReview from './core/Home/AntsReview'
import Details from './core/Home/Details'
import Notifications from './core/Home/Notifications'
import ActivityNotification from './core/Home/Notifications/ActivityNotification'
import FeedNotification from './core/Home/Notifications/FeedNotification'
import OfferNotification from './core/Home/Notifications/OfferNotification'
import ProductSeeMore from './core/Home/ProductSeeMore'
import Reviews from './core/Home/Reviews'
import WriteReview from './core/Home/Reviews/WriteReview'
import Offer from './core/Offer'

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
