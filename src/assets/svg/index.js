import { COLORS } from '@/constants'
import React from 'react'
import Svg, {
  Circle,
  ClipPath,
  Defs,
  G,
  Line,
  Path,
  Rect,
} from 'react-native-svg'

export const Back = () => {
  return (
    <Svg
      width="12"
      height="22"
      viewBox="0 0 12 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M11 1L1 11L11 21"
        stroke="#303030"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export const Logo = () => {
  return (
    <Svg
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Rect width="72" height="72" rx="16" fill="white" />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M50.8284 33.1716C52.3905 34.7337 52.3905 37.2663 50.8284 38.8284L38.8284 50.8284C37.2663 52.3905 34.7337 52.3905 33.1716 50.8284L21.1716 38.8284C19.6095 37.2663 19.6095 34.7337 21.1716 33.1716L33.1716 21.1716C34.7337 19.6095 37.2663 19.6095 38.8284 21.1716L50.8284 33.1716ZM36 29.6569L29.6569 36L36 42.3431L42.3431 36L36 29.6569Z"
        fill={COLORS.primary}
      />
    </Svg>
  )
}

export const Like = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6 19.3594H8.36364V11.5594H6V19.3594ZM19 12.2094C19 11.4944 18.4682 10.9094 17.8182 10.9094H14.0895L14.6509 7.93887L14.6686 7.73087C14.6686 7.46437 14.5682 7.21737 14.4086 7.04187L13.7823 6.35938L9.89409 10.6429C9.67545 10.8769 9.54545 11.2019 9.54545 11.5594V18.0594C9.54545 18.7744 10.0773 19.3594 10.7273 19.3594H16.0455C16.5359 19.3594 16.9555 19.0344 17.1327 18.5664L18.9173 13.9839C18.9705 13.8344 19 13.6784 19 13.5094V12.2679L18.9941 12.2614L19 12.2094Z"
        fill="#9B9B9B"
      />
    </Svg>
  )
}

export const PlusAnts = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11 5V11H5V13H11V19H13V13H19V11H13V5H11Z"
        fill="white"
      />
    </Svg>
  )
}

export const LogoPrimary = () => {
  return (
    <Svg
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Rect width="72" height="72" rx="16" fill={COLORS.primary} />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M50.8284 33.1716C52.3905 34.7337 52.3905 37.2663 50.8284 38.8284L38.8284 50.8284C37.2663 52.3905 34.7337 52.3905 33.1716 50.8284L21.1716 38.8284C19.6095 37.2663 19.6095 34.7337 21.1716 33.1716L33.1716 21.1716C34.7337 19.6095 37.2663 19.6095 38.8284 21.1716L50.8284 33.1716ZM36 29.6569L29.6569 36L36 42.3431L42.3431 36L36 29.6569Z"
        fill="white"
      />
    </Svg>
  )
}

export const Plus = () => {
  return (
    <Svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M13 8H8V13C8 13.55 7.55 14 7 14C6.45 14 6 13.55 6 13V8H1C0.45 8 0 7.55 0 7C0 6.45 0.45 6 1 6H6V1C6 0.45 6.45 0 7 0C7.55 0 8 0.45 8 1V6H13C13.55 6 14 6.45 14 7C14 7.55 13.55 8 13 8Z"
        fill={COLORS.primary}
      />
    </Svg>
  )
}

export const AddShip = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M12 5V19"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5 12H19"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export const Editing = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.29263 17.6855C4.08263 17.4755 3.97763 17.1835 4.00363 16.8875L4.38263 12.7175C4.42463 12.2605 4.62663 11.8295 4.95263 11.5035L13.9486 2.50752C14.6506 1.80252 15.9236 1.83752 16.6646 2.57652L19.4026 5.31452L19.4036 5.31552C20.1686 6.08152 20.1996 7.29952 19.4716 8.02952L10.4746 17.0265C10.1496 17.3515 9.71863 17.5535 9.26063 17.5955L5.09063 17.9745C5.06063 17.9765 5.03063 17.9775 4.99963 17.9775C4.73663 17.9775 4.48163 17.8735 4.29263 17.6855ZM16.0186 8.65652L13.3236 5.96152L15.2716 4.01252L17.9656 6.70652L16.0186 8.65652ZM9.07963 15.6025L6.10263 15.8735L6.36663 12.9175L11.9836 7.30052L14.6796 9.99752L9.07963 15.6025ZM18.9996 21.9775C19.5496 21.9775 19.9996 21.5275 19.9996 20.9775C19.9996 20.4285 19.5496 19.9775 18.9996 19.9775H4.99963C4.45063 19.9775 3.99963 20.4285 3.99963 20.9775C3.99963 21.5275 4.45063 21.9775 4.99963 21.9775H18.9996Z"
        fill={COLORS.primary}
      />
    </Svg>
  )
}

export const Offer = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M8.0625 8.625C8.37316 8.625 8.625 8.37316 8.625 8.0625C8.625 7.75184 8.37316 7.5 8.0625 7.5C7.75184 7.5 7.5 7.75184 7.5 8.0625C7.5 8.37316 7.75184 8.625 8.0625 8.625Z"
        fill={COLORS.primary}
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M21 13.0001L13.0001 21L3 10.9999V3H10.9999L21 13.0001Z"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export const ActivityListNotifi = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M20.9994 16.4922V9.73047H14.3008"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M21.0001 9.73047L9.73047 21.0001"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M3 7.50781V14.2696H9.69753"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M3 14.2696L14.2696 3"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export const Feed = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M21 3H3V21H21V3Z"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M8.625 7.5H15.375"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M8.625 12H15.375"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M8.625 16.5H15.375"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export const Activity = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 4C8.66879 4 5.96876 6.70004 5.96876 10.0312V15.2816C5.96876 15.3971 5.94875 15.5117 5.90963 15.6204L5.54791 16.625H18.4521L18.0904 15.6204C18.0513 15.5117 18.0313 15.3971 18.0313 15.2816V10.0312C18.0313 6.70004 15.3312 4 12 4ZM3.96876 10.0312C3.96876 5.59547 7.56422 2 12 2C16.4358 2 20.0313 5.59547 20.0313 10.0312V15.1071L20.8159 17.2862C20.9262 17.5926 20.8804 17.9336 20.6932 18.2C20.5059 18.4664 20.2007 18.625 19.875 18.625H4.12501C3.79935 18.625 3.4941 18.4664 3.30685 18.2C3.1196 17.9336 3.07382 17.5926 3.18414 17.2862L3.96876 15.1071V10.0312Z"
        fill={COLORS.primary}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.625 16.625C9.17728 16.625 9.625 17.0727 9.625 17.625C9.625 18.9368 10.6882 20 12 20C13.3118 20 14.375 18.9368 14.375 17.625C14.375 17.0727 14.8227 16.625 15.375 16.625C15.9273 16.625 16.375 17.0727 16.375 17.625C16.375 20.0414 14.4164 22 12 22C9.58359 22 7.625 20.0414 7.625 17.625C7.625 17.0727 8.07272 16.625 8.625 16.625Z"
        fill={COLORS.primary}
      />
    </Svg>
  )
}

export const Trash = () => {
  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M1 4.375H19"
        stroke="#9098B1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M6.625 1H13.375"
        stroke="#9098B1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M16.75 4.375H3.25V19H16.75V4.375Z"
        stroke="#9098B1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export const More = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z"
        stroke="#9098B1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19Z"
        stroke="#9098B1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M11 5C11 5.55228 11.4477 6 12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5Z"
        stroke="#9098B1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export const Search = () => {
  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M8.875 16.75C13.2242 16.75 16.75 13.2242 16.75 8.875C16.75 4.52576 13.2242 1 8.875 1C4.52576 1 1 4.52576 1 8.875C1 13.2242 4.52576 16.75 8.875 16.75Z"
        stroke="#9098B1"
        stroke-width="2"
        stroke-miterlimit="10"
      />
      <Path
        d="M14.5 14.5L19 19"
        stroke="#9098B1"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
    </Svg>
  )
}

export const Forward = () => {
  return (
    <Svg
      width="8"
      height="14"
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M7 13L1 7L7 1"
        stroke="#9098B1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export const Favorite = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M4.54444 12.7754L11.9996 20.0631L19.4548 12.7754L19.4951 12.736C21.5558 10.7215 21.5558 7.46185 19.4951 5.44831C17.4343 3.43478 14.0997 3.43384 12.0399 5.44831L11.9996 5.48767L11.9584 5.44738C9.89765 3.43291 6.56304 3.43291 4.50322 5.44738C2.44341 7.46185 2.44246 10.7215 4.50322 12.7351L4.54444 12.7754Z"
        stroke="#9098B1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export const Notifications = () => {
  return (
    <Svg
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.00001 2C5.66879 2 2.96876 4.70003 2.96876 8.03125V13.2816C2.96876 13.3971 2.94875 13.5117 2.90963 13.6204L2.54791 14.625H15.4521L15.0904 13.6204C15.0513 13.5117 15.0313 13.3971 15.0313 13.2816V8.03125C15.0313 4.70003 12.3312 2 9.00001 2ZM0.968756 8.03125C0.968756 3.59547 4.56422 0 9.00001 0C13.4358 0 17.0313 3.59547 17.0313 8.03125V13.1071L17.8159 15.2862C17.9262 15.5926 17.8804 15.9336 17.6932 16.2C17.5059 16.4664 17.2007 16.625 16.875 16.625H1.12501C0.799353 16.625 0.494096 16.4664 0.306848 16.2C0.119599 15.9336 0.0738154 15.5926 0.184136 15.2862L0.968756 13.1071V8.03125Z"
        fill="#9098B1"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.625 14.625C6.17728 14.625 6.625 15.0727 6.625 15.625C6.625 16.9368 7.68816 18 9 18C10.3118 18 11.375 16.9368 11.375 15.625C11.375 15.0727 11.8227 14.625 12.375 14.625C12.9273 14.625 13.375 15.0727 13.375 15.625C13.375 18.0414 11.4164 20 9 20C6.58359 20 4.625 18.0414 4.625 15.625C4.625 15.0727 5.07272 14.625 5.625 14.625Z"
        fill="#9098B1"
      />
    </Svg>
  )
}

export const Star = () => {
  return (
    <Svg
      width="16"
      height="16"
      viewBox="0 0 12 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M6 0L7.996 3.25274L11.7063 4.1459L9.22959 7.04936L9.52671 10.8541L6 9.3958L2.47329 10.8541L2.77041 7.04936L0.293661 4.1459L4.004 3.25274L6 0Z"
        fill="#FFC833"
      />
    </Svg>
  )
}
export const SearchPrimary = () => {
  return (
    <Svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.25 2C3.90279 2 2 3.90279 2 6.25C2 8.59721 3.90279 10.5 6.25 10.5C8.59721 10.5 10.5 8.59721 10.5 6.25C10.5 3.90279 8.59721 2 6.25 2ZM0 6.25C0 2.79822 2.79822 0 6.25 0C9.70178 0 12.5 2.79822 12.5 6.25C12.5 9.70178 9.70178 12.5 6.25 12.5C2.79822 12.5 0 9.70178 0 6.25Z"
        fill={COLORS.primary}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.29289 9.29289C9.68342 8.90237 10.3166 8.90237 10.7071 9.29289L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L9.29289 10.7071C8.90237 10.3166 8.90237 9.68342 9.29289 9.29289Z"
        fill={COLORS.primary}
      />
    </Svg>
  )
}

export const Email = () => {
  return (
    <Svg
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 1.25C0 0.697715 0.447715 0.25 1 0.25H19C19.5523 0.25 20 0.697715 20 1.25V14.75C20 15.3023 19.5523 15.75 19 15.75H1C0.447715 15.75 0 15.3023 0 14.75V1.25ZM2 2.25V13.75H18V2.25H2Z"
        fill="#9098B1"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.240755 0.599204C0.600173 0.179875 1.23147 0.131306 1.6508 0.490724L10 7.64705L18.3492 0.490724C18.7686 0.131306 19.3999 0.179875 19.7593 0.599204C20.1187 1.01853 20.0701 1.64983 19.6508 2.00925L10.6508 9.72338C10.2763 10.0444 9.72372 10.0444 9.34923 9.72338L0.349235 2.00925C-0.0700949 1.64983 -0.118663 1.01853 0.240755 0.599204Z"
        fill="#9098B1"
      />
    </Svg>
  )
}

export const Password = () => {
  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 7.75C0 7.19772 0.447715 6.75 1 6.75H19C19.5523 6.75 20 7.19772 20 7.75V19C20 19.5523 19.5523 20 19 20H1C0.447715 20 0 19.5523 0 19V7.75ZM2 8.75V18H18V8.75H2Z"
        fill="#9098B1"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10 2C7.48134 2 5.375 4.13206 5.375 6.841C5.375 7.39328 4.92728 7.841 4.375 7.841C3.82272 7.841 3.375 7.39328 3.375 6.841C3.375 3.09919 6.30641 0 10 0C13.6936 0 16.625 3.09919 16.625 6.841C16.625 7.39328 16.1773 7.841 15.625 7.841C15.0727 7.841 14.625 7.39328 14.625 6.841C14.625 4.13206 12.5187 2 10 2Z"
        fill="#9098B1"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10 11.7257C10.5523 11.7257 11 12.1734 11 12.7257V13.8507C11 14.403 10.5523 14.8507 10 14.8507C9.44772 14.8507 9 14.403 9 13.8507V12.7257C9 12.1734 9.44772 11.7257 10 11.7257Z"
        fill="#9098B1"
      />
    </Svg>
  )
}
export const ManShirt = () => {
  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M6.625 1H13.375L10 6.625L6.625 1Z"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M13.375 1L15.625 3.25L13.375 10L10 6.625"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M4.375 3.25L1 4.375V19H19V4.375L15.625 3.25"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10 19V6.625L6.625 10L4.375 3.25L6.625 1"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export const Dress = () => {
  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M12.25 4.375L13.375 7.75L12.25 11.125L19 17.875C19 17.875 16.75 19 10 19C3.25 19 1 17.875 1 17.875L7.75 11.125L6.625 7.75L7.75 4.375H12.25Z"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M11.125 4.375H14.5L15.625 1H12.25L11.125 4.375Z"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M4.375 1H7.75L8.875 4.375H5.5L4.375 1Z"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M7.75 11.125H12.25"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export const ManWorkEquipment = () => {
  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M19 5.5H1V19H19V5.5Z"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M1 10.9844L10 13.375L19 11.125"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M6.29492 4.46838V1H14.4984V4.375"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9.99609 9.625H10.0073"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export const WomanBag = () => {
  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M19 19H1L2.8322 8.0068C3.07329 6.56024 4.32486 5.5 5.79138 5.5H14.2086C15.6751 5.5 16.9267 6.56024 17.1678 8.0068L19 19Z"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M3.25 9.85938L16.75 10"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M6 4.46838V4.375C6 2.51088 7.51088 1 9.375 1H10.8285C12.5 1 14 2.63588 14 4.5"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export const ManTShirt = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M8.66667 3C8.66667 3 9.77778 5.25 12 5.25C14.2222 5.25 15.3333 3 15.3333 3L22 8.625L19.7778 12L17.5556 10.875V21H6.44444V10.875L4.22222 12L2 8.625L8.66667 3Z"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export const ManPant = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M5.875 2H17.125L19 22H15.25L11.5 9.5L7.75 22H4L5.875 2Z"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M6 6L17 6"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export const ManUnderwear = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M19.875 5.25H4.125V8.44387L3 18.75H8.625L12 13.125L15.375 18.75H21L19.875 8.625V5.25Z"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M4.125 8.625H19.875"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export const WomanTShirt = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M8.625 3C8.625 3 9.75 5.25 12 5.25C14.25 5.25 15.375 3 15.375 3L21 4.125L19.875 8.625H17.625C17.625 8.625 18.75 10.875 18.75 12C18.75 12.9889 17.8331 14.7315 17.625 16.5C17.2976 19.2844 17.625 21 17.625 21H6.375C6.375 21 6.69788 19.2349 6.375 16.5C6.15563 14.6438 5.25 12.9101 5.25 12C5.25 10.875 6.375 8.625 6.375 8.625H4.125L3 4.125L8.625 3Z"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export const WomanPants = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M6.90903 2H17.091C17.091 2 18.7877 5.105 18.7877 7.21C18.7877 8.5925 17.6566 10.42 17.6566 13.5787C17.6566 16.7375 19 22 19 22H15.0839L13.5423 14.73L12.0007 7.46L8.91613 22H5C5 22 6.34344 16.7362 6.34344 13.5787C6.34344 10.4212 5.21226 8.56625 5.21226 7.21C5.21226 5.105 6.90903 2 6.90903 2Z"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export const Skirt = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M19.7775 3.99951H4.2225V7.27242L2 17.837C2 17.837 4.5 19.9995 12 19.9995C19.5 19.9995 22 17.837 22 17.837L19.7775 7.45922V3.99951Z"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M4 6.99951H20"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M16 13.9995L15 7.99951"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M8 13.9995L9 7.99951"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export const Bikini = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M5 16H19V18.8C16.2 18.8 13.4 20.2 13.4 23H10.6C10.6 20.2 7.8 18.8 5 18.8V16Z"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5 1V6.33143C5 8.91 7.0482 11 9.5752 11H14.4234C16.9518 11 19 8.91 19 6.33143V1"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5 5C10.6 5 12 11 12 11C12 11 12 5 19 5"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export const ManShoes = () => {
  return (
    <Svg
      width="24"
      height="12"
      viewBox="0 0 24 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M2.6995 11H23V1C23 1 21.625 2.42857 18.875 2.42857C16.125 2.42857 14.75 1 14.75 1L1.93912 7.65429C1.36437 7.95429 1 8.56571 1 9.23429C1 10.21 1.76038 11 2.6995 11Z"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12 3L14 6"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M8 5L9.19594 6.77289"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export const HighHeels = () => {
  return (
    <Svg
      width="24"
      height="18"
      viewBox="0 0 24 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M18.0005 1.0796C18.0005 0.900498 22.0004 1.0796 22.0004 1.0796L23 6.69818L21.3748 17H20.25L18.875 7.7131L12.9996 17H2.92913C1.8635 17.0013 1 16.1668 1 15.14C1 14.5443 1.29562 13.9844 1.79475 13.6342L6.60312 10.263C12.2062 10.263 18.0005 5.01459 18.0005 1.0796Z"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export const Fullname = () => {
  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10 2.00055C8.3971 2.00055 7.09766 3.29999 7.09766 4.90293C7.09766 6.50587 8.3971 7.80531 10 7.80531C11.603 7.80531 12.9024 6.50587 12.9024 4.90293C12.9024 3.29999 11.603 2.00055 10 2.00055ZM5.09766 4.90293C5.09766 2.19542 7.29253 0.000549316 10 0.000549316C12.7075 0.000549316 14.9024 2.19542 14.9024 4.90293C14.9024 7.61044 12.7075 9.80531 10 9.80531C7.29253 9.80531 5.09766 7.61044 5.09766 4.90293Z"
        fill="#9098B1"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.51784 13.3904C4.47035 13.3904 2 15.8608 2 18.9083V18.9994C2 19.5517 1.55228 19.9994 1 19.9994C0.447715 19.9994 0 19.5517 0 18.9994V18.9083C0 14.7562 3.36578 11.3904 7.51784 11.3904H12.4822C16.6342 11.3904 20 14.7562 20 18.9083V18.9994C20 19.5517 19.5523 19.9994 19 19.9994C18.4477 19.9994 18 19.5517 18 18.9994V18.9083C18 15.8608 15.5296 13.3904 12.4822 13.3904H7.51784Z"
        fill="#9098B1"
      />
    </Svg>
  )
}

export const Google = () => {
  return (
    <Svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M15.8445 6.93323H15.2001V6.90003H8.00003V10.1H12.5213C11.8617 11.9628 10.0892 13.3001 8.00003 13.3001C5.34922 13.3001 3.20001 11.1508 3.20001 8.50003C3.20001 5.84922 5.34922 3.70001 8.00003 3.70001C9.22364 3.70001 10.3368 4.16162 11.1844 4.91562L13.4473 2.65281C12.0185 1.3212 10.1072 0.5 8.00003 0.5C3.58202 0.5 0 4.08202 0 8.50003C0 12.9181 3.58202 16.5001 8.00003 16.5001C12.4181 16.5001 16.0001 12.9181 16.0001 8.50003C16.0001 7.96363 15.9449 7.44003 15.8445 6.93323Z"
        fill="#FFC107"
      />
      <Path
        d="M0.921875 4.77642L3.55029 6.70403C4.26149 4.94322 5.9839 3.70001 7.99951 3.70001C9.22311 3.70001 10.3363 4.16162 11.1839 4.91562L13.4467 2.65281C12.0179 1.3212 10.1067 0.5 7.99951 0.5C4.92669 0.5 2.26188 2.23481 0.921875 4.77642Z"
        fill="#FF3D00"
      />
      <Path
        d="M7.99996 16.5003C10.0664 16.5003 11.944 15.7095 13.3636 14.4235L10.8876 12.3283C10.0844 12.9367 9.08596 13.3003 7.99996 13.3003C5.91915 13.3003 4.15234 11.9735 3.48674 10.1219L0.87793 12.1319C2.20194 14.7227 4.89075 16.5003 7.99996 16.5003Z"
        fill="#4CAF50"
      />
      <Path
        d="M15.8444 6.93322H15.2V6.90002H8V10.1H12.5212C12.2044 10.9948 11.6288 11.7664 10.8864 12.3284C10.8868 12.328 10.8872 12.328 10.8876 12.3276L13.3636 14.4229C13.1884 14.5821 16 12.5 16 8.50003C16 7.96363 15.9448 7.44003 15.8444 6.93322Z"
        fill="#1976D2"
      />
    </Svg>
  )
}
export const Facebook = () => {
  return (
    <Svg
      width="11"
      height="21"
      viewBox="0 0 11 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M11 0.5H8C6.67392 0.5 5.40215 1.02678 4.46447 1.96447C3.52678 2.90215 3 4.17392 3 5.5V8.5H0V12.5H3V20.5H7V12.5H10L11 8.5H7V5.5C7 5.23478 7.10536 4.98043 7.29289 4.79289C7.48043 4.60536 7.73478 4.5 8 4.5H11V0.5Z"
        fill="#4092FF"
      />
    </Svg>
  )
}

export const Less = () => {
  return (
    <Svg
      width="14"
      height="2"
      viewBox="0 0 14 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Rect width="14" height="2" rx="1" fill="#909090" />
    </Svg>
  )
}

export const Remove = () => {
  return (
    <Svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.75 2.68934L6.21967 0.21967C6.51256 -0.0732233 6.98744 -0.0732233 7.28033 0.21967C7.57322 0.512563 7.57322 0.987437 7.28033 1.28033L4.81066 3.75L7.28033 6.21967C7.57322 6.51256 7.57322 6.98744 7.28033 7.28033C6.98744 7.57322 6.51256 7.57322 6.21967 7.28033L3.75 4.81066L1.28033 7.28033C0.987437 7.57322 0.512563 7.57322 0.21967 7.28033C-0.0732233 6.98744 -0.0732233 6.51256 0.21967 6.21967L2.68934 3.75L0.21967 1.28033C-0.0732232 0.987437 -0.0732232 0.512563 0.21967 0.21967C0.512563 -0.0732233 0.987437 -0.0732233 1.28033 0.21967L3.75 2.68934Z"
        fill="#BDBDBD"
      />
    </Svg>
  )
}

export const Edit = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.29263 17.6855C4.08263 17.4755 3.97763 17.1835 4.00363 16.8875L4.38263 12.7175C4.42463 12.2605 4.62663 11.8295 4.95263 11.5035L13.9486 2.50752C14.6506 1.80252 15.9236 1.83752 16.6646 2.57652L19.4026 5.31452L19.4036 5.31552C20.1686 6.08152 20.1996 7.29952 19.4716 8.02952L10.4746 17.0265C10.1496 17.3515 9.71863 17.5535 9.26063 17.5955L5.09063 17.9745C5.06063 17.9765 5.03063 17.9775 4.99963 17.9775C4.73663 17.9775 4.48163 17.8735 4.29263 17.6855ZM16.0186 8.65652L13.3236 5.96152L15.2716 4.01252L17.9656 6.70652L16.0186 8.65652ZM9.07963 15.6025L6.10263 15.8735L6.36663 12.9175L11.9836 7.30052L14.6796 9.99752L9.07963 15.6025ZM18.9996 21.9775C19.5496 21.9775 19.9996 21.5275 19.9996 20.9775C19.9996 20.4285 19.5496 19.9775 18.9996 19.9775H4.99963C4.45063 19.9775 3.99963 20.4285 3.99963 20.9775C3.99963 21.5275 4.45063 21.9775 4.99963 21.9775H18.9996Z"
        fill="#808080"
      />
    </Svg>
  )
}

export const Method01 = () => {
  return (
    <Svg
      width="32"
      height="25"
      viewBox="0 0 32 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <G clip-path="url(#clip0)">
        <Path
          d="M5.64779 24.1506V22.5441C5.64779 21.9283 5.27482 21.5267 4.63544 21.5267C4.31576 21.5267 3.96943 21.6338 3.72966 21.9818C3.54318 21.6873 3.27677 21.5267 2.87717 21.5267C2.61076 21.5267 2.34435 21.607 2.13123 21.9015V21.5802H1.57178V24.1506H2.13123V22.7315C2.13123 22.2764 2.37099 22.0622 2.74396 22.0622C3.11693 22.0622 3.30341 22.3031 3.30341 22.7315V24.1506H3.86287V22.7315C3.86287 22.2764 4.12927 22.0622 4.4756 22.0622C4.84857 22.0622 5.03505 22.3031 5.03505 22.7315V24.1506H5.64779ZM13.933 21.5802H13.0272V20.8038H12.4678V21.5802H11.9616V22.0889H12.4678V23.267C12.4678 23.856 12.7075 24.2041 13.3469 24.2041C13.5867 24.2041 13.8531 24.1238 14.0396 24.0167L13.8797 23.5348C13.7199 23.6419 13.5334 23.6686 13.4002 23.6686C13.1338 23.6686 13.0272 23.508 13.0272 23.2402V22.0889H13.933V21.5802ZM18.675 21.5267C18.3553 21.5267 18.1422 21.6873 18.009 21.9015V21.5802H17.4496V24.1506H18.009V22.7047C18.009 22.2764 18.1955 22.0354 18.5418 22.0354C18.6484 22.0354 18.7816 22.0622 18.8882 22.0889L19.048 21.5534C18.9414 21.5267 18.7816 21.5267 18.675 21.5267ZM11.5087 21.7944C11.2423 21.607 10.8693 21.5267 10.4697 21.5267C9.83036 21.5267 9.40411 21.848 9.40411 22.3567C9.40411 22.7851 9.72379 23.026 10.2832 23.1064L10.5497 23.1331C10.8427 23.1867 11.0025 23.267 11.0025 23.4009C11.0025 23.5883 10.7894 23.7222 10.4164 23.7222C10.0435 23.7222 9.75043 23.5883 9.56395 23.4544L9.29754 23.8828C9.59059 24.097 9.9902 24.2041 10.3898 24.2041C11.1357 24.2041 11.562 23.856 11.562 23.3741C11.562 22.9189 11.2157 22.678 10.6829 22.5976L10.4164 22.5709C10.1767 22.5441 9.9902 22.4905 9.9902 22.3299C9.9902 22.1425 10.1767 22.0354 10.4697 22.0354C10.7894 22.0354 11.1091 22.1693 11.2689 22.2496L11.5087 21.7944ZM26.3742 21.5267C26.0545 21.5267 25.8413 21.6873 25.7081 21.9015V21.5802H25.1487V24.1506H25.7081V22.7047C25.7081 22.2764 25.8946 22.0354 26.241 22.0354C26.3475 22.0354 26.4807 22.0622 26.5873 22.0889L26.7471 21.5534C26.6406 21.5267 26.4807 21.5267 26.3742 21.5267ZM19.2345 22.8654C19.2345 23.6419 19.7673 24.2041 20.5931 24.2041C20.9661 24.2041 21.2325 24.1238 21.4989 23.9096L21.2325 23.4544C21.0194 23.6151 20.8063 23.6954 20.5665 23.6954C20.1136 23.6954 19.7939 23.3741 19.7939 22.8654C19.7939 22.3835 20.1136 22.0622 20.5665 22.0354C20.8063 22.0354 21.0194 22.1157 21.2325 22.2764L21.4989 21.8212C21.2325 21.607 20.9661 21.5267 20.5931 21.5267C19.7673 21.5267 19.2345 22.0889 19.2345 22.8654ZM24.4028 22.8654V21.5802H23.8433V21.9015C23.6568 21.6605 23.3904 21.5267 23.0441 21.5267C22.3248 21.5267 21.7653 22.0889 21.7653 22.8654C21.7653 23.6419 22.3248 24.2041 23.0441 24.2041C23.417 24.2041 23.6835 24.0702 23.8433 23.8293V24.1506H24.4028V22.8654ZM22.3514 22.8654C22.3514 22.4102 22.6445 22.0354 23.124 22.0354C23.5769 22.0354 23.8966 22.3835 23.8966 22.8654C23.8966 23.3206 23.5769 23.6954 23.124 23.6954C22.6445 23.6686 22.3514 23.3206 22.3514 22.8654ZM15.6646 21.5267C14.9187 21.5267 14.3859 22.0622 14.3859 22.8654C14.3859 23.6686 14.9187 24.2041 15.6913 24.2041C16.0642 24.2041 16.4372 24.097 16.7303 23.856L16.4639 23.4544C16.2507 23.6151 15.9843 23.7222 15.7179 23.7222C15.3716 23.7222 15.0253 23.5615 14.9453 23.1064H16.8368V22.8922C16.8635 22.0622 16.3839 21.5267 15.6646 21.5267ZM15.6646 22.0086C16.011 22.0086 16.2507 22.2228 16.304 22.6244H14.972C15.0253 22.2764 15.265 22.0086 15.6646 22.0086ZM29.5444 22.8654V20.5628H28.9849V21.9015C28.7984 21.6605 28.532 21.5267 28.1857 21.5267C27.4664 21.5267 26.907 22.0889 26.907 22.8654C26.907 23.6419 27.4664 24.2041 28.1857 24.2041C28.5587 24.2041 28.8251 24.0702 28.9849 23.8293V24.1506H29.5444V22.8654ZM27.4931 22.8654C27.4931 22.4102 27.7861 22.0354 28.2656 22.0354C28.7185 22.0354 29.0382 22.3835 29.0382 22.8654C29.0382 23.3206 28.7185 23.6954 28.2656 23.6954C27.7861 23.6686 27.4931 23.3206 27.4931 22.8654ZM8.79137 22.8654V21.5802H8.23192V21.9015C8.04544 21.6605 7.77903 21.5267 7.4327 21.5267C6.71341 21.5267 6.15396 22.0889 6.15396 22.8654C6.15396 23.6419 6.71341 24.2041 7.4327 24.2041C7.80567 24.2041 8.07208 24.0702 8.23192 23.8293V24.1506H8.79137V22.8654ZM6.71341 22.8654C6.71341 22.4102 7.00645 22.0354 7.48599 22.0354C7.93888 22.0354 8.25856 22.3835 8.25856 22.8654C8.25856 23.3206 7.93888 23.6954 7.48599 23.6954C7.00645 23.6686 6.71341 23.3206 6.71341 22.8654Z"
          fill="white"
        />
        <Path
          d="M19.714 2.06174H11.3222V17.2161H19.714V2.06174Z"
          fill="#FF5F00"
        />
        <Path
          d="M11.8551 9.63879C11.8551 6.55973 13.2936 3.82873 15.5048 2.06162C13.8797 0.776444 11.8284 -1.52588e-05 9.59061 -1.52588e-05C4.28913 -1.52588e-05 0 4.31067 0 9.63879C0 14.9669 4.28913 19.2776 9.59061 19.2776C11.8284 19.2776 13.8797 18.5011 15.5048 17.216C13.2936 15.4756 11.8551 12.7178 11.8551 9.63879Z"
          fill="#EB001B"
        />
        <Path
          d="M31.0363 9.63877C31.0363 14.9669 26.7472 19.2776 21.4457 19.2776C19.2079 19.2776 17.1566 18.5011 15.5315 17.2159C17.7693 15.4488 19.1813 12.7178 19.1813 9.63877C19.1813 6.55971 17.7427 3.82872 15.5315 2.0616C17.1566 0.776429 19.2079 -3.05176e-05 21.4457 -3.05176e-05C26.7472 -3.05176e-05 31.0363 4.33743 31.0363 9.63877Z"
          fill="#F79E1B"
        />
      </G>
      <Defs>
        <ClipPath id="clip0">
          <Rect width="31.0671" height="24.2711" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export const Method02 = () => {
  return (
    <Svg
      width="50"
      height="16"
      viewBox="0 0 50 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M18.9835 0.283011L12.4375 15.758H8.16697L4.94555 3.40788C4.74988 2.64754 4.58035 2.36845 3.98572 2.04872C3.01458 1.52593 1.41081 1.03606 0 0.731784L0.095162 0.283011H6.97032C7.4198 0.282269 7.85472 0.440912 8.19642 0.730252C8.53812 1.01959 8.76406 1.42053 8.83338 1.86057L10.5348 10.8157L14.7398 0.283011H18.9835ZM35.7175 10.7052C35.7356 6.62142 30.018 6.39587 30.0573 4.57114C30.07 4.01634 30.6033 3.42635 31.7711 3.27515C33.1374 3.14654 34.5135 3.38566 35.7542 3.96728L36.4642 0.686186C35.2554 0.236507 33.9753 0.00413705 32.6841 0C28.691 0 25.8799 2.1037 25.8574 5.11522C25.8308 7.34401 27.8634 8.58601 29.395 9.32709C30.9683 10.0854 31.4962 10.5719 31.4903 11.25C31.4785 12.2889 30.2348 12.7467 29.0719 12.7647C27.0408 12.796 25.8617 12.2207 24.9225 11.7869L24.1909 15.1781C25.134 15.6072 26.8767 15.9817 28.6838 16C32.9285 16 35.7044 13.9233 35.7175 10.7052ZM46.2633 15.758H50L46.7382 0.283011H43.2897C42.9213 0.279681 42.5604 0.3861 42.2537 0.588472C41.947 0.790843 41.7088 1.07983 41.5699 1.41797L35.5075 15.758H39.749L40.592 13.4461H45.775L46.2633 15.758ZM41.7548 10.2749L43.8818 4.46442L45.1061 10.2749H41.7548ZM24.7566 0.283011L21.4158 15.758H17.375L20.7172 0.283011H24.7566Z"
        fill="white"
      />
    </Svg>
  )
}

export const PlusAdding = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M12 5V19"
        stroke="#9098B1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5 12H19"
        stroke="#9098B1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export const Eye = () => {
  return (
    <Svg
      width="20"
      height="15"
      viewBox="0 0 20 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <G clip-path="url(#clip0)">
        <Path
          d="M0.833374 7.50001C0.833374 7.50001 4.16671 0.833344 10 0.833344C15.8334 0.833344 19.1667 7.50001 19.1667 7.50001C19.1667 7.50001 15.8334 14.1667 10 14.1667C4.16671 14.1667 0.833374 7.50001 0.833374 7.50001Z"
          stroke="#303030"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M10 10C11.3807 10 12.5 8.88071 12.5 7.5C12.5 6.11929 11.3807 5 10 5C8.61929 5 7.5 6.11929 7.5 7.5C7.5 8.88071 8.61929 10 10 10Z"
          stroke="#303030"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0">
          <Rect width="20" height="15" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export const MasterCard = () => {
  return (
    <Svg
      width="32"
      height="25"
      viewBox="0 0 32 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M5.81743 24.8758V23.2211C5.81743 22.5868 5.43326 22.1731 4.77469 22.1731C4.4454 22.1731 4.08867 22.2834 3.84171 22.642C3.64962 22.3386 3.37522 22.1731 2.96361 22.1731C2.6892 22.1731 2.4148 22.2559 2.19527 22.5592V22.2283H1.61902V24.8758H2.19527V23.4142C2.19527 22.9453 2.44224 22.7247 2.8264 22.7247C3.21057 22.7247 3.40266 22.9729 3.40266 23.4142V24.8758H3.97891V23.4142C3.97891 22.9453 4.25332 22.7247 4.61004 22.7247C4.99421 22.7247 5.1863 22.9729 5.1863 23.4142V24.8758H5.81743ZM14.3515 22.2283H13.4185V21.4285H12.8422V22.2283H12.3208V22.7523H12.8422V23.9657C12.8422 24.5725 13.0892 24.931 13.7478 24.931C13.9947 24.931 14.2691 24.8482 14.4612 24.7379L14.2966 24.2415C14.1319 24.3518 13.9398 24.3794 13.8026 24.3794C13.5282 24.3794 13.4185 24.2139 13.4185 23.9381V22.7523H14.3515V22.2283ZM19.2359 22.1731C18.9066 22.1731 18.6871 22.3386 18.5499 22.5592V22.2283H17.9736V24.8758H18.5499V23.3866C18.5499 22.9453 18.7419 22.6971 19.0987 22.6971C19.2084 22.6971 19.3456 22.7247 19.4554 22.7523L19.62 22.2007C19.5103 22.1731 19.3456 22.1731 19.2359 22.1731ZM11.8544 22.4489C11.58 22.2559 11.1958 22.1731 10.7842 22.1731C10.1256 22.1731 9.68655 22.5041 9.68655 23.0281C9.68655 23.4693 10.0158 23.7175 10.5921 23.8003L10.8665 23.8278C11.1683 23.883 11.333 23.9657 11.333 24.1036C11.333 24.2967 11.1135 24.4346 10.7293 24.4346C10.3451 24.4346 10.0433 24.2967 9.8512 24.1588L9.57679 24.6C9.87864 24.8207 10.2902 24.931 10.7019 24.931C11.4702 24.931 11.9092 24.5725 11.9092 24.076C11.9092 23.6072 11.5525 23.359 11.0037 23.2763L10.7293 23.2487C10.4823 23.2211 10.2902 23.1659 10.2902 23.0005C10.2902 22.8074 10.4823 22.6971 10.7842 22.6971C11.1135 22.6971 11.4427 22.835 11.6074 22.9177L11.8544 22.4489ZM27.1662 22.1731C26.8369 22.1731 26.6174 22.3386 26.4802 22.5592V22.2283H25.9039V24.8758H26.4802V23.3866C26.4802 22.9453 26.6723 22.6971 27.029 22.6971C27.1388 22.6971 27.276 22.7247 27.3857 22.7523L27.5504 22.2007C27.4406 22.1731 27.276 22.1731 27.1662 22.1731ZM19.8121 23.552C19.8121 24.3518 20.3609 24.931 21.2116 24.931C21.5958 24.931 21.8702 24.8482 22.1446 24.6276L21.8702 24.1588C21.6507 24.3242 21.4311 24.407 21.1842 24.407C20.7177 24.407 20.3884 24.076 20.3884 23.552C20.3884 23.0556 20.7177 22.7247 21.1842 22.6971C21.4311 22.6971 21.6507 22.7798 21.8702 22.9453L22.1446 22.4765C21.8702 22.2559 21.5958 22.1731 21.2116 22.1731C20.3609 22.1731 19.8121 22.7523 19.8121 23.552ZM25.1356 23.552V22.2283H24.5594V22.5592C24.3673 22.311 24.0929 22.1731 23.7361 22.1731C22.9952 22.1731 22.419 22.7523 22.419 23.552C22.419 24.3518 22.9952 24.931 23.7361 24.931C24.1203 24.931 24.3947 24.7931 24.5594 24.5449V24.8758H25.1356V23.552ZM23.0227 23.552C23.0227 23.0832 23.3245 22.6971 23.8185 22.6971C24.2849 22.6971 24.6142 23.0556 24.6142 23.552C24.6142 24.0209 24.2849 24.407 23.8185 24.407C23.3245 24.3794 23.0227 24.0209 23.0227 23.552ZM16.1351 22.1731C15.3668 22.1731 14.8179 22.7247 14.8179 23.552C14.8179 24.3794 15.3668 24.931 16.1625 24.931C16.5467 24.931 16.9309 24.8207 17.2327 24.5725L16.9583 24.1588C16.7388 24.3242 16.4644 24.4346 16.19 24.4346C15.8332 24.4346 15.4765 24.2691 15.3942 23.8003H17.3425V23.5796C17.3699 22.7247 16.876 22.1731 16.1351 22.1731ZM16.1351 22.6695C16.4918 22.6695 16.7388 22.8902 16.7937 23.3038H15.4216C15.4765 22.9453 15.7235 22.6695 16.1351 22.6695ZM30.4316 23.552V21.1803H29.8554V22.5592C29.6633 22.311 29.3889 22.1731 29.0322 22.1731C28.2913 22.1731 27.715 22.7523 27.715 23.552C27.715 24.3518 28.2913 24.931 29.0322 24.931C29.4163 24.931 29.6907 24.7931 29.8554 24.5449V24.8758H30.4316V23.552ZM28.3187 23.552C28.3187 23.0832 28.6206 22.6971 29.1145 22.6971C29.581 22.6971 29.9103 23.0556 29.9103 23.552C29.9103 24.0209 29.581 24.407 29.1145 24.407C28.6206 24.3794 28.3187 24.0209 28.3187 23.552ZM9.05542 23.552V22.2283H8.47917V22.5592C8.28708 22.311 8.01268 22.1731 7.65595 22.1731C6.91505 22.1731 6.3388 22.7523 6.3388 23.552C6.3388 24.3518 6.91505 24.931 7.65595 24.931C8.04012 24.931 8.31452 24.7931 8.47917 24.5449V24.8758H9.05542V23.552ZM6.91505 23.552C6.91505 23.0832 7.2169 22.6971 7.71083 22.6971C8.17732 22.6971 8.50661 23.0556 8.50661 23.552C8.50661 24.0209 8.17732 24.407 7.71083 24.407C7.2169 24.3794 6.91505 24.0209 6.91505 23.552Z"
        fill="black"
      />
      <Path
        d="M20.306 2.12366H11.6622V17.7331H20.306V2.12366Z"
        fill="#828282"
      />
      <Path
        d="M12.2111 9.92826C12.2111 6.75673 13.6929 3.94372 15.9704 2.12354C14.2965 0.799776 12.1836 0 9.87861 0C4.41794 0 0 4.44014 0 9.92826C0 15.4164 4.41794 19.8565 9.87861 19.8565C12.1836 19.8565 14.2965 19.0567 15.9704 17.733C13.6929 15.9404 12.2111 13.0998 12.2111 9.92826Z"
        fill="#303030"
      />
      <Path
        d="M31.9684 9.92826C31.9684 15.4164 27.5504 19.8565 22.0897 19.8565C19.7847 19.8565 17.6718 19.0567 15.9979 17.733C18.3029 15.9128 19.7573 13.0998 19.7573 9.92826C19.7573 6.75673 18.2755 3.94372 15.9979 2.12354C17.6718 0.799776 19.7847 0 22.0897 0C27.5504 0 31.9684 4.46772 31.9684 9.92826Z"
        fill="#BDBDBD"
      />
    </Svg>
  )
}

export const DeliveryDHL = () => {
  return (
    <Svg
      width="89"
      height="20"
      viewBox="0 0 89 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <G clip-path="url(#clip0)">
        <Path d="M88.8747 0V20H0.125V0H88.8747Z" fill="#FFCC00" />
        <Path
          d="M15.7322 3.59164L12.8967 7.52543H28.3504C29.1316 7.52543 29.1213 7.82851 28.7396 8.35663C28.3519 8.89292 27.7029 9.82527 27.308 10.3697C27.1075 10.6462 26.7452 11.1496 27.946 11.1496H34.2656C34.2656 11.1496 35.2843 9.73417 36.1381 8.5509C37.2998 6.94129 36.2387 3.59164 32.086 3.59164H15.7322Z"
          fill="#BF190E"
        />
        <Path
          d="M11.7495 16.4073L17.4448 8.50519C17.4448 8.50519 23.7584 8.50525 24.5124 8.50525C25.2935 8.50525 25.2832 8.80833 24.9015 9.33652C24.5138 9.87282 23.8541 10.7953 23.4592 11.3399C23.2587 11.6162 22.8964 12.1206 24.0971 12.1206H33.5652C32.7779 13.2221 30.2237 16.4073 25.6374 16.4073H11.7495Z"
          fill="#BF190E"
        />
        <Path
          d="M44.3665 12.1196L41.2781 16.4072H33.1311C33.1311 16.4072 36.2178 12.1205 36.2206 12.1205L44.3665 12.1196Z"
          fill="#BF190E"
        />
        <Path
          d="M56.8476 11.1496H36.9205L42.3697 3.59161H50.5143L47.391 7.92554H51.0266L54.1511 3.59161H62.2949L56.8476 11.1496Z"
          fill="#BF190E"
        />
        <Path
          d="M56.1479 12.1206L53.0579 16.4073H44.9139C44.9139 16.4073 48.0008 12.1206 48.0036 12.1206H56.1479Z"
          fill="#BF190E"
        />
        <Path
          d="M0.125 13.811H12.1267L11.4709 14.7218H0.125V13.811Z"
          fill="#BF190E"
        />
        <Path
          d="M0.125 12.1205H13.346L12.6891 13.03H0.125V12.1205Z"
          fill="#BF190E"
        />
        <Path
          d="M0.125 15.5023H10.908L10.2555 16.4073H0.125V15.5023Z"
          fill="#BF190E"
        />
        <Path
          d="M88.8751 14.7218H76.9193L77.5754 13.811H88.8751V14.7218Z"
          fill="#BF190E"
        />
        <Path
          d="M88.875 16.4073L75.7037 16.4084L76.3562 15.5023H88.875V16.4073Z"
          fill="#BF190E"
        />
        <Path
          d="M78.7931 12.1205H88.875V13.0305L78.1379 13.0312L78.7931 12.1205Z"
          fill="#BF190E"
        />
        <Path
          d="M73.5744 3.59164L68.126 11.1496H59.4961C59.4961 11.1496 64.9455 3.59164 64.9483 3.59164H73.5744Z"
          fill="#BF190E"
        />
        <Path
          d="M58.7974 12.1206C58.7974 12.1206 58.2021 12.9514 57.9129 13.3507C56.8899 14.7624 57.7943 16.4073 61.1328 16.4073H74.2125L77.3022 12.1206H58.7974Z"
          fill="#BF190E"
        />
      </G>
      <Defs>
        <ClipPath id="clip0">
          <Rect
            width="88.75"
            height="20"
            fill="white"
            transform="translate(0.125)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export const PurchaseSuccess = () => {
  return (
    <Svg
      width="269"
      height="255"
      viewBox="0 0 269 255"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M124.085 0.0181746C75.9921 -0.715348 39.8297 20.9541 32.4822 28.9006C30.1444 32.1098 22.8894 40.8204 27.0473 55.4908C31.7884 72.2192 37.378 72.912 23 88.9578C6.87134 106.957 -15.1098 141.68 14.9483 185.233C45.0064 228.786 118.849 232.096 157.8 229.244C195.373 226.493 241.632 208.521 259.496 186.15C278.533 162.31 264.987 124.687 253.409 106.837C241.813 88.9578 268.013 52.7401 244.468 33.0267C220.922 13.3133 184.201 0.935078 124.085 0.0181746Z"
        fill="#F9F9F9"
      />
      <Path
        d="M131.299 141.715C132.613 141.574 133.77 141.454 134.913 141.32C138.123 140.939 141.333 140.917 144.551 141.141C149.083 141.462 153.562 142.171 157.989 143.179C158.116 143.209 158.251 143.231 158.377 143.261C158.699 143.35 158.848 143.223 158.937 142.902C159.176 142.066 159.46 141.245 159.729 140.416C161.976 133.533 166.538 128.792 173.078 125.813C177.318 123.88 181.738 123.245 186.344 123.559C187.21 123.618 188.061 123.738 188.957 123.917C189.062 122.834 189.189 121.789 189.256 120.744C189.547 116.257 190.801 112.039 192.728 108C193.19 107.022 193.623 106.036 193.997 105.014C195.236 101.587 195.154 98.1749 193.818 94.8153C193.011 92.7921 191.6 91.1795 190.04 89.7013C187.494 87.2973 184.358 86.0207 181.088 85.0128C178.378 84.1766 175.586 83.7809 172.786 83.445C170.144 83.1314 167.501 82.8029 164.85 82.5565C162.775 82.3624 160.692 82.2355 158.616 82.1758C153.868 82.0339 149.12 82.0339 144.372 82.1832C141.124 82.2803 137.884 82.5117 134.748 83.43C132.359 84.1318 130.045 85.0352 128.171 86.7523C124.804 89.8207 123.139 93.6357 123.236 98.2123C123.311 101.736 124.214 105.088 125.289 108.411C125.998 110.62 126.849 112.778 127.342 115.055C127.686 116.653 127.999 118.258 128.081 119.893C128.096 120.154 128.096 120.423 128.074 120.684C128.044 121.043 127.85 121.274 127.477 121.311C127.111 121.349 126.835 121.147 126.767 120.729C126.67 120.102 126.648 119.467 126.551 118.84C126.133 116.093 125.401 113.428 124.475 110.815C123.4 107.776 122.475 104.7 121.967 101.512C121.243 96.9804 121.795 92.6801 124.386 88.7681C126.013 86.3044 128.156 84.4752 130.844 83.2359C133.86 81.8473 137.033 81.1604 140.318 80.8991C146.664 80.3915 153.025 80.4885 159.378 80.6826C165.291 80.8618 171.151 81.6233 176.997 82.4893C180.379 82.9895 183.619 84.0348 186.688 85.5354C189.793 87.0584 192.287 89.3056 194.168 92.1874C195.99 94.9796 196.602 98.1003 196.363 101.408C196.214 103.573 195.527 105.581 194.646 107.544C194.139 108.672 193.653 109.814 193.153 110.949C191.682 114.249 191.07 117.735 190.764 121.304C190.689 122.17 190.652 123.043 190.57 123.909C190.533 124.313 190.667 124.529 191.055 124.678C191.891 124.999 192.66 125.47 193.414 125.955C196.027 127.635 198.245 131.719 196.528 136.026C195.9 137.609 194.99 139.028 193.84 140.289C193.586 140.573 193.437 140.879 193.317 141.238C192.295 144.313 191.242 147.382 190.212 150.45C188.718 154.9 187.136 159.32 185.941 163.859C185.254 166.487 184.664 169.137 184.149 171.802C183.619 174.565 183.746 177.297 184.314 180.045C184.903 182.912 185.366 185.801 185.523 188.735C185.56 189.496 185.56 190.265 185.366 191.019C185.15 191.848 184.799 192.587 183.881 192.789C182.955 192.998 182.246 192.535 181.663 191.863C181.23 191.355 180.954 190.758 180.737 190.131C180.058 188.205 179.73 186.204 179.356 184.211C179.222 183.486 179.095 182.755 178.834 182.06C178.528 181.232 178.162 181.045 177.311 181.269C176.721 181.426 176.176 181.702 175.653 182.008C172.704 183.71 169.643 185.181 166.493 186.473C166.276 186.562 166.06 186.674 165.813 186.667C165.522 186.659 165.313 186.532 165.194 186.264C165.074 185.987 165.149 185.734 165.358 185.547C165.515 185.413 165.701 185.308 165.896 185.226C169.128 183.8 172.256 182.158 175.347 180.44C175.9 180.134 176.482 179.888 177.102 179.739C178.498 179.41 179.543 179.918 180.14 181.217C180.581 182.187 180.737 183.233 180.924 184.27C181.23 185.928 181.521 187.593 182.037 189.205C182.193 189.705 182.372 190.206 182.664 190.654C182.813 190.878 182.97 191.087 183.216 191.206C183.44 191.318 183.627 191.281 183.739 191.042C183.888 190.728 183.94 190.392 183.963 190.041C184.052 188.638 183.888 187.249 183.709 185.861C183.41 183.531 183.007 181.217 182.552 178.917C182.089 176.581 182.186 174.251 182.582 171.922C183.679 165.539 185.523 159.357 187.643 153.243C188.703 150.182 189.734 147.106 190.779 144.037C190.861 143.798 190.936 143.559 191.018 143.321C190.831 143.261 190.757 143.335 190.674 143.403C187.658 145.635 184.291 147.188 180.82 148.547C179.565 149.039 178.289 149.465 176.982 149.771C176.46 149.89 176.206 150.144 176.064 150.674C174.153 157.722 171.973 164.695 169.837 171.676C169.375 173.191 168.837 174.677 168.217 176.133C167.06 178.865 165.351 181.157 162.887 182.859C162.319 183.248 161.767 183.658 161.282 184.143C160.834 184.599 160.453 185.099 160.229 185.711C160.065 186.167 160.124 186.256 160.61 186.316C161.267 186.398 161.909 186.54 162.521 186.794C164.014 187.413 164.813 188.518 164.82 190.153C164.828 191.258 164.828 192.371 164.82 193.476C164.791 196.432 164.589 199.381 164.163 202.308C164.074 202.935 163.939 203.554 163.671 204.129C163.081 205.369 161.834 205.458 161.058 204.323C160.752 203.883 160.61 203.375 160.498 202.853C160.124 201.143 160.02 199.403 159.908 197.671C159.706 194.566 159.415 191.467 159.064 188.377C159.005 187.817 158.997 187.802 158.43 187.854C156.802 188.011 155.197 188.332 153.584 188.6C150.113 189.175 146.619 189.369 143.102 189.235C141.624 189.175 140.154 189.108 138.675 189.063C136.062 188.974 133.479 188.608 130.896 188.197C127.305 187.63 123.706 187.063 120.175 186.196C116.465 185.293 112.776 184.278 109.193 182.941C108.476 182.673 108.573 182.576 108.193 183.322C107.088 185.51 106.02 187.72 104.93 189.914C104.236 191.311 103.482 192.669 102.675 193.998C102.25 194.7 101.802 195.387 101.197 195.947C100.66 196.447 100.047 196.835 99.2709 196.499C98.4721 196.148 98.3003 195.447 98.3227 194.663C98.3451 193.729 98.5691 192.834 98.8677 191.96C99.8383 189.116 101.018 186.346 102.138 183.561C102.608 182.389 103.086 181.217 103.504 180.022C104.31 177.708 104.333 175.379 103.773 173.012C103.168 170.496 102.302 168.062 101.555 165.591C100.607 162.433 99.8084 159.238 99.353 155.968C99.1589 154.557 99.032 153.138 98.9872 151.712C98.92 149.651 98.4944 147.703 97.5836 145.836C96.7773 144.179 95.9785 142.514 95.5529 140.7C95.1572 138.99 95.0527 137.273 95.2767 135.519C95.7769 131.502 98.9275 129.262 102.205 128.926C102.698 128.874 103.108 128.732 103.504 128.449C107.603 125.567 112.127 123.715 117.084 122.946C119.227 122.61 121.385 122.476 123.55 122.722C127.424 123.17 130.112 125.253 131.747 128.747C132.904 131.204 133.166 133.802 132.912 136.474C132.71 138.251 132.255 139.968 131.299 141.715ZM176.788 148.166C177.057 148.203 177.229 148.136 177.408 148.091C178.737 147.748 180.013 147.255 181.282 146.732C185.202 145.12 188.965 143.246 191.973 140.133C193.25 138.804 194.318 137.348 195.034 135.653C196.363 132.495 195.273 128.986 192.407 127.105C191.003 126.179 189.48 125.5 187.823 125.246C185.202 124.85 182.567 124.917 179.939 125.291C177.079 125.694 174.436 126.717 171.913 128.075C167.448 130.472 164.059 133.891 162.043 138.602C160.856 141.379 160.035 144.261 159.393 147.203C158.4 151.764 157.422 156.326 156.085 160.798C155.526 162.672 154.846 164.501 153.958 166.24C151.949 170.16 148.829 172.668 144.491 173.587C142.834 173.938 141.146 174.057 139.459 174.08C134.405 174.139 129.403 173.676 124.446 172.691C121.9 172.183 119.436 171.414 117.151 170.175C114.188 168.562 111.97 166.285 111.015 162.97C110.432 160.97 110.074 158.909 109.977 156.819C109.82 153.369 109.604 149.92 109.641 146.456C109.641 146.284 109.708 146.09 109.521 145.911C109.305 145.911 109.171 146.09 108.999 146.195C108.439 146.546 107.834 146.807 107.17 146.912C105.482 147.165 103.967 146.695 102.63 145.71C97.8673 142.216 97.4343 135.437 100.271 131.398C100.368 131.263 100.548 131.159 100.473 130.868C98.7632 131.607 97.5388 132.749 97.0237 134.541C96.5011 136.355 96.5757 138.192 96.9565 140.021C97.3223 141.797 98.0913 143.418 98.8901 145.023C99.9577 147.173 100.443 149.435 100.503 151.809C100.54 153.257 100.689 154.706 100.906 156.139C101.384 159.297 102.168 162.388 103.101 165.442C103.87 167.965 104.781 170.444 105.318 173.027C105.617 174.453 105.781 175.886 105.624 177.35C105.438 179.104 104.87 180.739 104.236 182.359C103.086 185.278 101.914 188.182 100.757 191.102C100.413 191.96 100.122 192.834 99.9503 193.744C99.8831 194.11 99.786 194.484 99.9279 194.879C100.286 194.737 100.428 194.469 100.607 194.245C101.197 193.498 101.66 192.662 102.13 191.841C103.556 189.34 104.751 186.727 106.02 184.143C106.401 183.36 106.804 182.591 107.222 181.829C107.647 181.06 108.006 180.956 108.857 181.269C109.402 181.471 109.947 181.672 110.492 181.851C113.426 182.814 116.382 183.681 119.384 184.382C126.76 186.099 134.203 187.436 141.811 187.637C144.849 187.72 147.881 187.772 150.897 187.384C153.383 187.063 155.847 186.644 158.325 186.286C158.616 186.241 158.721 186.107 158.773 185.838C158.997 184.591 159.699 183.621 160.595 182.762C161.155 182.232 161.767 181.777 162.387 181.329C164.238 179.97 165.589 178.208 166.553 176.14C167.292 174.557 167.874 172.922 168.382 171.257C170.226 165.21 172.122 159.17 173.824 153.078C174.071 152.19 174.324 151.309 174.578 150.406C174.16 150.271 173.802 150.383 173.443 150.428C171.995 150.615 170.539 150.704 169.113 150.338C165.589 149.428 163.693 147.427 163.282 144.254C162.939 141.574 163.238 138.916 164.432 136.452C165.724 133.772 167.792 132.107 170.883 131.92C175.116 131.666 177.214 134.227 177.863 137.012C178.042 137.781 178.11 138.572 178.124 139.364C178.177 141.947 177.639 144.448 177.042 146.934C176.93 147.352 176.766 147.718 176.788 148.166ZM158.407 144.709C158.094 144.634 157.84 144.575 157.586 144.523C154.973 144.015 152.345 143.604 149.717 143.201C143.595 142.26 137.481 142.305 131.366 143.261C131 143.321 130.747 143.455 130.523 143.761C128.791 146.075 126.76 148.099 124.416 149.801C122.504 151.182 120.496 152.377 118.249 153.123C117.592 153.34 116.92 153.452 116.226 153.407C114.807 153.31 114.053 152.235 114.456 150.868C114.591 150.406 114.83 149.995 115.121 149.614C115.718 148.83 116.435 148.181 117.226 147.598C120.63 145.105 124.446 143.477 128.499 142.395C129.246 142.193 129.664 141.82 130.008 141.178C131.202 138.968 131.463 136.579 131.419 134.123C131.389 132.443 131.023 130.83 130.299 129.307C129 126.582 126.954 124.805 123.915 124.313C122.37 124.059 120.817 124.081 119.264 124.223C114.367 124.656 109.842 126.172 105.691 128.815C105.55 128.904 105.37 128.956 105.318 129.143C105.37 129.188 105.385 129.218 105.408 129.225C105.579 129.292 105.751 129.352 105.923 129.419C107.782 130.128 109.29 131.301 110.343 132.973C112.254 136.004 112.747 139.259 111.515 142.656C111.149 143.664 111.089 144.642 111.104 145.672C111.134 148.838 111.283 151.996 111.395 155.161C111.47 157.274 111.746 159.357 112.157 161.433C112.791 164.65 114.628 166.972 117.398 168.607C118.951 169.518 120.608 170.197 122.348 170.66C125.543 171.504 128.798 172.004 132.083 172.295C135.555 172.609 139.034 172.743 142.505 172.392C147.246 171.914 150.695 169.578 152.786 165.27C153.51 163.769 154.115 162.224 154.592 160.634C156.145 155.423 157.213 150.092 158.407 144.709ZM176.624 139.856C176.654 139.117 176.564 138.378 176.43 137.654C176.116 135.914 175.265 134.518 173.593 133.832C171.868 133.122 168.837 133.167 167.045 135.243C166.403 135.989 165.851 136.78 165.507 137.706C164.813 139.535 164.574 141.447 164.671 143.373C164.82 146.352 166.418 148.323 169.875 148.995C171.487 149.308 173.07 149.002 174.66 148.778C174.981 148.733 175.086 148.517 175.153 148.24C175.31 147.628 175.474 147.016 175.616 146.404C176.139 144.246 176.564 142.081 176.624 139.856ZM110.634 139.199C110.626 137.423 110.208 135.862 109.409 134.399C108.245 132.286 106.498 130.98 104.116 130.509C103.564 130.397 103.175 130.532 102.765 130.912C100.286 133.219 99.6442 136.094 100.256 139.296C100.66 141.409 101.742 143.164 103.489 144.478C104.251 145.045 105.117 145.381 106.042 145.456C107.647 145.59 108.752 144.754 109.514 143.418C110.261 142.074 110.574 140.61 110.634 139.199ZM128.231 144.112C128.134 144.037 128.029 144.06 127.932 144.089C124.319 145.172 120.922 146.703 117.883 148.965C117.331 149.375 116.838 149.846 116.405 150.383C116.203 150.63 116.032 150.898 115.92 151.197C115.763 151.645 115.882 151.846 116.353 151.906C116.562 151.929 116.771 151.906 116.98 151.876C117.667 151.787 118.309 151.533 118.936 151.257C122.489 149.674 125.491 147.359 128.051 144.44C128.126 144.343 128.223 144.254 128.231 144.112ZM162.297 203.248C162.581 202.681 162.611 202.106 162.693 201.539C163.066 198.978 163.171 196.402 163.275 193.819C163.327 192.58 163.335 191.34 163.342 190.109C163.342 189.69 163.335 189.257 162.976 188.944C162.439 188.466 161.834 188.1 161.117 187.958C160.58 187.854 160.528 187.891 160.595 188.451C160.968 191.803 161.252 195.163 161.483 198.522C161.565 199.754 161.662 200.994 161.909 202.211C161.976 202.554 161.998 202.935 162.297 203.248Z"
        fill="#303030"
      />
      <Path
        d="M66.1677 135.937C66.0034 135.25 65.5405 134.802 64.9657 134.459C64.4655 134.153 63.8981 134.026 63.3232 133.914C62.0018 133.66 60.6579 133.578 59.3141 133.473C56.3726 133.242 53.4236 133.048 50.4821 132.809C49.2726 132.712 48.0706 132.547 46.906 132.182C46.0101 131.905 45.1963 131.487 44.4945 130.868C43.3448 129.86 42.9864 128.635 43.4568 127.157C44.0018 125.425 45.144 124.201 46.6447 123.275C48.8695 121.894 51.3108 121.102 53.8715 120.602C57.7015 119.856 61.5688 119.736 65.451 119.751C71.3639 119.773 77.1797 120.505 82.891 122.036C84.2946 122.409 85.6758 122.842 86.9599 123.544C87.5646 123.872 88.1469 124.238 88.6621 124.693C90.7749 126.545 91.081 129.501 89.3564 131.734C88.5352 132.794 87.475 133.57 86.3178 134.227C84.6007 135.198 82.7193 135.728 80.8081 136.116C76.9035 136.915 72.9466 137.348 68.9599 137.527C68.8778 137.527 68.8031 137.535 68.721 137.535C68.3925 137.512 68.2432 137.617 68.3029 137.99C68.3701 138.43 68.3701 138.886 68.4149 139.326C68.6314 141.462 68.4447 143.597 68.3104 145.724C68.161 147.987 67.9893 150.249 67.8699 152.511C67.6011 157.7 67.631 162.896 67.5862 168.092C67.5862 168.331 67.5936 168.57 67.5563 168.801C67.4817 169.212 67.1457 169.481 66.7799 169.451C66.429 169.428 66.1826 169.182 66.1154 168.779C66.093 168.652 66.093 168.518 66.093 168.383C66.1527 163.269 66.0706 158.148 66.3319 153.034C66.4738 150.294 66.7052 147.561 66.8695 144.821C66.9964 142.581 67.0785 140.342 66.8023 138.102C66.7575 137.766 66.7276 137.505 66.2722 137.49C63.9802 137.445 61.6882 137.415 59.4111 137.841C57.052 138.289 55.1706 139.52 53.6401 141.327C51.908 143.38 50.6463 145.725 49.4817 148.121C47.4958 152.197 45.8831 156.445 44.0018 160.566C43.1432 162.463 42.3294 164.381 41.4933 166.285C41.2992 166.733 41.0005 166.897 40.6422 166.778C40.3062 166.666 40.1196 166.293 40.2241 165.86C40.2987 165.554 40.4331 165.262 40.5451 164.971C42.1353 160.895 44.0092 156.938 45.689 152.892C46.794 150.234 47.9885 147.621 49.3473 145.09C50.161 143.574 51.0793 142.133 52.1395 140.782C54.3941 137.885 57.3581 136.355 61.0088 136.079C62.5094 135.967 64.0101 135.892 65.5107 135.952C65.7197 136.012 65.9288 136.049 66.1677 135.937ZM64.9657 121.267C59.9636 121.259 57.3133 121.476 53.6028 122.207C51.4153 122.64 49.3398 123.387 47.4286 124.559C46.3535 125.223 45.4651 126.067 45.0022 127.284C44.5169 128.546 44.7558 129.3 45.8831 130.061C46.7566 130.651 47.7496 130.912 48.7649 131.077C51.0345 131.442 53.3265 131.51 55.6185 131.704C58.0598 131.905 60.5161 132.002 62.9499 132.323C65.1523 132.615 66.9665 133.421 67.7653 135.698C67.8624 135.967 68.0565 136.049 68.3178 136.034C68.5791 136.019 68.8479 136.019 69.1092 136.012C71.7222 135.944 74.3128 135.623 76.9035 135.28C79.076 134.989 81.2262 134.593 83.3091 133.906C85.0113 133.346 86.5642 132.532 87.8184 131.226C88.8935 130.099 89.2519 128.785 88.7218 127.291C88.3858 126.351 87.6691 125.731 86.8479 125.223C85.6534 124.477 84.3394 124.007 82.9881 123.633C76.9781 121.976 70.8487 121.222 64.9657 121.267Z"
        fill="#303030"
      />
      <Path
        d="M90.2747 165.673C90.2897 166.128 90.0956 166.427 89.7671 166.524C89.4236 166.621 89.1026 166.487 88.9085 166.128C88.8264 165.972 88.7741 165.785 88.7293 165.606C87.0047 158.999 85.0263 152.466 83.3764 145.836C82.809 143.559 82.264 141.275 81.719 138.998C81.6966 138.893 81.6667 138.789 81.6592 138.684C81.6294 138.259 81.8085 137.96 82.1445 137.893C82.5103 137.818 82.7642 137.997 82.906 138.311C83.0031 138.527 83.0553 138.759 83.1151 138.99C84.6082 144.455 85.9446 149.965 87.5049 155.415C88.4158 158.61 89.2594 161.821 90.1329 165.023C90.1851 165.262 90.2299 165.494 90.2747 165.673Z"
        fill="#303030"
      />
      <Path
        d="M162.387 37.1497C162.379 37.2393 162.364 37.3214 162.379 37.3886C162.775 39.255 162.835 41.1513 162.939 43.0476C163.073 45.5188 162.82 47.9452 162.424 50.3641C162.103 52.3201 161.334 54.1045 159.938 55.5677C159.811 55.7021 159.699 55.8589 159.55 55.9634C158.28 56.8519 156.944 57.5163 155.354 57.6358C152.905 57.8149 150.598 57.3446 148.336 56.4188C145.566 55.2766 143.005 53.776 140.572 52.0439C139.758 51.469 139.049 50.7523 138.272 50.0804C137.817 50.2969 137.436 50.6254 137.055 50.9539C136.017 51.8498 134.883 52.6188 133.785 53.4325C132.516 54.3732 131.269 55.3363 129.933 56.2023C128.962 56.8295 127.969 57.4342 127.051 58.1434C126.842 58.3077 126.611 58.4271 126.327 58.4271C125.752 58.4271 125.468 57.9792 125.707 57.4566C125.827 57.1953 126.043 57.0609 126.275 56.9265C127.805 55.9933 129.246 54.9257 130.642 53.8133C131.381 53.2235 132.195 52.7308 132.956 52.1634C134.241 51.1928 135.45 50.1327 136.794 49.2442C136.898 49.1696 136.995 49.0725 137.085 48.9829C137.212 48.856 137.242 48.744 137.1 48.5798C136.503 47.8631 136.152 47.012 135.816 46.1459C135.286 44.7872 135.368 43.4508 135.876 42.1368C136.286 41.0692 136.921 40.136 137.727 39.3147C138.989 38.0157 140.482 37.0302 142.065 36.1866C143.364 35.4923 144.723 34.9174 146.066 34.3127C147.395 33.7154 148.791 33.3421 150.158 32.8792C150.897 32.6254 151.703 32.5507 152.502 32.7449C153.614 33.0211 154.092 33.8423 153.779 34.9473C153.472 36.0223 152.741 36.8361 152.069 37.6723C151.584 38.2919 151.009 38.8444 150.449 39.3894C148.933 40.8602 147.418 42.316 145.82 43.6972C144.028 45.2426 142.222 46.7805 140.415 48.3185C140.139 48.5574 139.825 48.759 139.511 48.9979C140.646 50.267 141.983 51.2376 143.401 52.0887C144.394 52.686 145.38 53.2907 146.417 53.8282C148.067 54.6719 149.769 55.3662 151.561 55.844C153.196 56.277 154.839 56.3293 156.481 55.8738C158.154 55.411 159.244 54.2986 159.998 52.7979C160.669 51.4616 160.983 50.0132 161.147 48.5424C161.446 45.8921 161.565 43.2417 161.229 40.5765C161.102 39.5835 161.08 38.5756 160.864 37.5976C160.767 37.1347 160.64 36.6793 160.543 36.2164C160.498 35.9775 160.341 35.8581 160.154 35.7461C158.997 35.0593 157.915 34.2679 156.825 33.4765C156.011 32.8792 155.272 32.1924 154.645 31.4234C153.286 29.7361 153.413 27.8174 155.085 26.2795C156.645 24.8386 158.467 24.2488 160.55 24.8909C162.222 25.406 163.417 26.4512 163.798 28.2281C163.984 29.1165 163.857 30.0049 163.604 30.8859C163.275 32.0431 162.685 33.0659 162.103 34.0962C161.707 34.7979 161.7 34.7979 162.409 35.2384C164.313 36.418 166.321 37.4259 168.292 38.4786C170.061 39.4193 171.853 40.3152 173.6 41.2932C176.915 43.1372 180.207 45.0335 183.515 46.885C186.688 48.6619 189.883 50.394 193.056 52.1783C194.639 53.0742 196.192 54.0223 197.737 54.9705C201.709 57.4193 205.755 59.7486 209.921 61.8539C212.885 63.3546 215.939 64.6685 219.127 65.6242C220.62 66.0721 220.582 66.2065 220.672 64.5118C220.754 62.9514 221.165 61.4508 222.173 60.2563C223.546 58.6213 225.838 58.4271 227.302 60.4205C229.504 63.4143 227.264 66.6619 224.89 67.3562C224.091 67.5877 223.307 67.7444 222.486 67.737C222.105 67.7295 221.971 67.8714 221.986 68.2446C222.038 69.6407 222.068 71.0368 222.105 72.4329C222.113 72.6196 222.143 72.7988 222.143 72.9854C222.165 75.9344 222.165 78.8908 222.217 81.8398C222.285 85.5055 222.292 89.1712 222.337 92.8295C222.352 94.121 222.344 95.4126 222.374 96.6967C222.419 98.8021 222.382 100.915 222.509 103.02C222.606 104.708 222.538 106.395 222.658 108.075C222.785 109.762 222.703 111.449 222.815 113.129C222.919 114.637 222.822 116.13 222.815 117.631C222.807 119.766 222.68 121.901 222.673 124.029C222.673 125.925 222.509 127.822 222.523 129.71C222.546 131.637 222.367 133.555 222.367 135.474C222.367 136.9 222.21 138.311 222.18 139.729C222.105 142.552 221.814 145.359 221.59 148.166C221.426 150.264 221.045 152.347 220.605 154.415C220.351 155.609 220.09 155.452 221.426 155.818C223.673 156.43 225.838 157.252 227.809 158.513C228.653 159.051 229.459 159.648 230.251 160.26C231.46 161.201 232.64 162.172 233.722 163.254C234.581 164.105 235.394 165.024 235.85 166.173C236.186 167.024 235.969 167.368 235.081 167.599C233.73 167.95 232.348 168.137 230.967 168.338C227.279 168.868 223.569 169.033 219.866 169.301C219.291 169.346 218.708 169.354 218.126 169.369C215.834 169.436 213.542 169.54 211.25 169.593C209.481 169.63 207.726 169.488 205.964 169.451C203.127 169.391 200.365 168.809 197.573 168.45C197.155 168.398 196.744 168.286 196.363 168.092C196.02 167.92 195.886 167.599 195.975 167.233C196.065 166.883 196.304 166.696 196.662 166.688C196.871 166.688 197.088 166.711 197.289 166.756C200.611 167.54 204.001 167.853 207.398 168.002C211.086 168.159 214.774 168.01 218.462 167.778C218.992 167.749 219.515 167.719 220.045 167.711C222.18 167.696 224.308 167.48 226.428 167.278C228.683 167.062 230.952 166.965 233.185 166.532C233.483 166.472 233.789 166.405 234.155 166.323C233.819 165.71 233.461 165.195 233.02 164.747C230.698 162.336 228.093 160.305 225.099 158.79C223.636 158.051 222.09 157.528 220.508 157.11C220.037 156.99 219.925 157.17 219.784 157.535C219.239 158.939 218.604 160.29 217.693 161.507C216.648 162.888 215.409 164.038 213.968 164.994C212.691 165.837 211.258 166.173 209.809 166.36C208.324 166.554 206.883 166.143 205.681 165.285C204.509 164.441 203.881 163.239 204.232 161.709C204.419 160.902 204.718 160.148 205.225 159.491C206.024 158.461 206.95 157.61 208.107 156.953C210.757 155.437 213.617 154.922 216.618 154.997C217.171 155.012 217.723 155.102 218.268 155.154C218.88 155.214 218.888 155.214 219.044 154.586C219.373 153.28 219.574 151.958 219.724 150.615C219.91 148.86 220.231 147.113 220.314 145.351C220.433 142.828 220.739 140.312 220.747 137.781C220.747 136.467 220.948 135.145 220.926 133.832C220.896 131.622 221.15 129.412 221.06 127.202C221.038 126.545 221.127 125.888 221.15 125.223C221.217 122.693 221.299 120.162 221.329 117.631C221.359 115.705 221.404 113.778 221.292 111.86C221.202 110.172 221.277 108.485 221.142 106.805C221.015 105.17 221.083 103.535 221 101.908C220.821 98.4288 220.881 94.9497 220.821 91.4782C220.791 89.7386 220.874 87.9991 220.806 86.2596C220.672 82.7805 220.747 79.3015 220.65 75.8224C220.575 73.2392 220.657 70.6561 220.56 68.0804C220.545 67.61 220.396 67.4458 219.963 67.3562C216.611 66.647 213.512 65.2583 210.429 63.81C207.323 62.3467 204.344 60.6594 201.388 58.9273C198.521 57.2475 195.699 55.5006 192.825 53.8357C190.406 52.4396 187.942 51.1181 185.501 49.7594C183.522 48.6544 181.544 47.5495 179.573 46.4296C175.795 44.2795 172.017 42.1219 168.15 40.1285C166.366 39.2102 164.611 38.2471 162.842 37.3214C162.693 37.2393 162.573 37.1273 162.387 37.1497ZM138.496 47.8257C138.645 47.7212 138.742 47.6764 138.817 47.6092C140.146 46.452 141.52 45.3471 142.871 44.2048C144.379 42.9282 145.828 41.5769 147.306 40.2778C148.478 39.2476 149.583 38.1576 150.606 36.9929C151.18 36.3434 151.733 35.664 152.129 34.8875C152.39 34.3799 152.285 34.2007 151.725 34.2305C151.039 34.2679 150.359 34.3873 149.71 34.6038C147.686 35.2832 145.73 36.1045 143.797 37.0228C141.818 37.956 140.042 39.158 138.526 40.7258C137.72 41.5694 137.13 42.5474 137.063 43.7942C136.995 45.3172 137.473 46.6237 138.496 47.8257ZM218.365 156.789C216.267 156.423 214.304 156.416 212.318 156.923C210.825 157.304 209.376 157.782 208.144 158.715C207.092 159.514 206.144 160.432 205.793 161.798C205.516 162.881 205.949 163.799 206.965 164.247C209.705 165.471 212.064 164.538 214.244 162.896C215.252 162.134 216.051 161.134 216.76 160.074C217.439 159.058 217.895 157.953 218.365 156.789ZM162.394 29.3703C162.312 28.019 161.745 26.8992 160.438 26.3989C159.341 25.9809 158.325 26.175 157.295 26.5632C156.414 26.8992 155.832 27.5487 155.428 28.3923C155.182 28.9149 155.197 29.4226 155.503 29.9004C155.802 30.3633 156.108 30.8187 156.511 31.2069C157.579 32.2297 158.788 33.0659 160.05 33.8349C160.386 34.0364 160.58 33.9767 160.744 33.6632C161.237 32.7374 161.812 31.849 162.095 30.8187C162.237 30.3409 162.372 29.8556 162.394 29.3703ZM222.904 66.1094C223.083 66.087 223.375 66.0572 223.658 66.0273C224.898 65.9004 225.749 65.2061 226.324 64.1534C227.055 62.8245 226.488 61.1895 225.151 60.6146C224.808 60.4653 224.502 60.4728 224.158 60.6071C223.487 60.8759 223.158 61.4433 222.882 62.048C222.397 63.1157 222.195 64.2579 222.113 65.4226C222.068 66.0945 222.105 66.1244 222.904 66.1094Z"
        fill="#303030"
      />
      <Path
        d="M138.063 66.7664C138.041 66.3558 138.16 66.1468 138.257 65.9377C139.706 62.8991 141.184 59.8755 142.819 56.934C142.893 56.7996 142.961 56.6503 143.05 56.5234C143.259 56.2247 143.543 56.1277 143.879 56.277C144.185 56.4114 144.394 56.8145 144.275 57.1281C144.073 57.6432 143.834 58.1434 143.58 58.6287C142.296 61.0775 141.154 63.586 139.959 66.0796C139.788 66.4305 139.653 66.8187 139.355 67.0874C139.116 67.3114 138.832 67.4383 138.489 67.304C138.16 67.177 138.078 66.9083 138.063 66.7664Z"
        fill="#303030"
      />
      <Path
        d="M150.426 68.9315C150.65 65.8855 150.874 62.9664 151.479 60.0995C151.509 59.9726 151.516 59.8382 151.561 59.7113C151.711 59.2708 152.017 59.0618 152.375 59.1364C152.741 59.2186 152.92 59.5247 152.86 59.995C152.778 60.5923 152.629 61.1895 152.592 61.7943C152.442 64.1609 152.069 66.5052 151.964 68.8793C151.957 69.0361 151.964 69.2003 151.92 69.3496C151.808 69.7378 151.509 69.8872 151.136 69.8946C150.785 69.9021 150.494 69.6408 150.426 69.2675C150.404 69.1182 150.426 68.9614 150.426 68.9315Z"
        fill="#303030"
      />
      <Path
        d="M102.063 106.813C101.205 105.648 100.219 104.625 99.047 103.797C95.7845 101.49 92.2606 99.7652 88.2888 99.0261C85.3772 98.4885 82.4804 98.3019 79.5912 99.1231C79.412 99.1754 79.2328 99.2276 79.0536 99.2351C78.7401 99.2426 78.4788 99.1007 78.3668 98.8021C78.2548 98.5034 78.3295 98.2272 78.5609 98.0032C78.7401 97.8315 78.9566 97.7494 79.188 97.6897C81.1665 97.1596 83.1673 96.9282 85.2204 97.0924C90.5659 97.5105 95.3738 99.3471 99.7339 102.438C101.302 103.55 102.563 104.954 103.728 106.469C103.81 106.574 103.885 106.686 103.945 106.805C104.31 107.53 104.042 108.134 103.25 108.291C102.556 108.425 101.847 108.515 101.137 108.597C98.1362 108.941 95.1349 108.903 92.1337 108.627C89.3564 108.373 86.6613 107.761 84.108 106.649C80.7484 105.185 77.9114 103.065 75.8583 99.9742C75.6866 99.7129 75.5223 99.5487 75.1714 99.5711C73.7156 99.6607 72.3046 99.9667 70.9085 100.385C70.5725 100.489 70.5725 100.736 70.5501 100.997C70.4157 102.333 70.2739 103.67 70.1171 105.006C70.0499 105.611 69.9529 106.208 69.8409 106.805C69.7737 107.171 69.8633 107.321 70.2664 107.35C71.8716 107.462 73.4543 107.739 75.0221 108.119C75.6642 108.276 76.2913 108.47 76.896 108.739C79.0312 109.702 80.1884 111.3 80.1436 113.689C80.1213 115.145 79.8823 116.578 79.6136 118.004C79.1656 120.386 78.7401 122.775 78.0234 125.097C77.7695 125.903 77.4858 126.694 77.0453 127.426C76.2913 128.658 75.2088 129.434 73.7529 129.457C70.3261 129.509 66.8919 129.546 63.4875 129.009C62.8604 128.912 62.2556 128.74 61.6658 128.486C60.4862 127.986 59.7621 127.112 59.4933 125.858C59.2395 124.641 59.12 123.409 58.9483 122.185C58.5078 119.027 58.0972 115.861 57.9031 112.674C57.8807 112.308 57.8583 111.934 57.8807 111.569C57.9106 111.091 58.1569 110.822 58.5302 110.829C58.896 110.829 59.1499 111.083 59.1872 111.569C59.2992 113.069 59.4634 114.562 59.6575 116.056C60.0607 119.116 60.434 122.177 60.8894 125.223C61.0536 126.328 61.6509 126.978 62.6887 127.277C63.5547 127.53 64.4356 127.68 65.3315 127.754C67.855 127.978 70.3933 127.934 72.9242 127.986C73.0288 127.986 73.1333 127.978 73.2378 127.986C74.5891 128.016 75.4775 127.359 76.0151 126.157C76.6422 124.753 77.008 123.267 77.329 121.767C77.8143 119.497 78.2996 117.228 78.5534 114.921C78.5982 114.525 78.6356 114.129 78.6356 113.741C78.6505 111.964 77.889 110.807 76.254 110.098C75.2536 109.665 74.1934 109.471 73.1333 109.247C72.0955 109.03 71.0429 108.956 69.9977 108.814C69.5721 108.754 69.4527 108.933 69.3705 109.299C69.266 109.814 69.1242 110.322 68.9674 110.829C68.7583 111.486 68.4224 112.084 67.9595 112.606C67.31 113.353 66.5111 113.816 65.5033 113.898C64.57 113.98 63.6517 113.905 62.7708 113.622C61.9495 113.353 61.2552 112.883 60.8446 112.084C60.2772 110.986 60.5086 109.807 61.4568 109.015C62.0317 108.537 62.6961 108.216 63.3979 107.985C64.8089 107.522 66.2424 107.194 67.7355 107.201C68.0715 107.201 68.2731 107.134 68.3328 106.753C68.6016 104.984 68.8479 103.207 68.9823 101.415C68.9898 101.311 68.9748 101.206 68.9599 101.079C68.6165 101.012 68.3402 101.191 68.0491 101.281C65.9587 101.938 63.8459 102.475 61.6434 102.647C59.5978 102.804 57.5895 102.587 55.5812 102.259C52.6248 101.766 49.7878 100.915 47.0926 99.5785C44.7708 98.4288 42.77 96.861 40.9707 95.0095C39.1117 93.0982 37.417 91.0377 35.894 88.8502C35.6103 88.4396 35.3266 88.0215 35.1698 87.5362C34.8861 86.6702 35.2743 86.0431 36.1851 85.9833C40.0076 85.7519 43.8301 85.6399 47.6451 86.058C50.4373 86.3641 53.1549 86.9016 55.7679 87.9916C59.9114 89.7237 63.2561 92.374 65.6302 96.204C65.6974 96.316 65.7795 96.4205 65.8392 96.54C66.0333 96.9282 66.3021 97.0476 66.7426 96.9356C67.3548 96.7863 67.9819 96.6743 68.609 96.5922C69.042 96.54 69.1764 96.3384 69.1615 95.9128C69.0943 94.3375 68.7583 92.8369 68.0043 91.4334C67.2055 89.9626 66.1528 88.6785 65.0926 87.4018C62.8006 84.632 60.755 81.698 58.896 78.6221C56.7907 75.1281 55.529 71.3803 55.0437 67.3338C54.7227 64.6835 54.4539 62.0406 54.439 59.3678C54.439 59.1065 54.4166 58.8378 54.5062 58.5839C54.7077 58.0165 55.2453 57.8 55.7753 58.0837C55.9097 58.1584 56.0366 58.2629 56.1561 58.3599C59.9412 61.5478 62.7857 65.4151 64.6223 70.0215C65.6974 72.7092 66.3469 75.4939 66.7724 78.3458C66.8172 78.6594 66.8322 78.973 67.0188 79.3388C67.2577 78.301 67.4668 77.3305 67.7057 76.3674C69.0122 71.1563 71.2071 66.3782 74.6862 62.2347C76.351 60.2563 78.3071 58.6287 80.5617 57.3595C80.6961 57.2849 80.838 57.2028 80.9798 57.1356C81.7189 56.8071 82.2863 57.0236 82.5551 57.7851C82.8089 58.4869 82.8761 59.226 82.9881 59.9502C83.6974 64.6984 83.0329 69.2525 81.0022 73.6051C80.0018 75.7552 78.6505 77.659 77.0006 79.3612C75.8658 80.5408 74.6488 81.6308 73.4394 82.7357C72.3344 83.7511 71.2146 84.7589 70.2814 85.9535C70.0872 86.1998 69.923 86.4761 69.7289 86.7299C69.5497 86.9763 69.5646 87.1853 69.7289 87.4466C70.4605 88.6038 71.1698 89.776 71.894 90.9481C71.9462 91.0302 71.9835 91.1422 72.1403 91.1646C72.3568 91.0825 72.424 90.8361 72.5435 90.642C74.6787 87.1629 77.4112 84.2214 80.5767 81.6606C83.8691 78.9954 87.6692 77.4425 91.7903 76.6287C94.351 76.121 96.9491 75.8523 99.5397 75.5387C101.324 75.3222 103.086 75.0161 104.848 74.6876C105.027 74.6503 105.214 74.598 105.393 74.598C106.162 74.598 106.535 75.2251 106.162 75.8971C106.02 76.1509 105.833 76.3749 105.662 76.6063C104.945 77.5843 104.303 78.6221 103.698 79.6673C99.9504 86.155 94.4555 90.5225 87.4676 93.1057C82.906 94.793 78.1951 95.9352 73.4767 97.0551C72.7077 97.2343 71.9313 97.3985 71.1623 97.5777C70.7218 97.6822 70.4456 98.272 70.6397 98.6752C70.7293 98.8693 70.9085 98.8021 71.0578 98.7722C71.5431 98.6528 72.0283 98.5184 72.5136 98.4139C73.4916 98.1974 74.4921 98.1152 75.4925 98.048C76.0748 98.0032 76.5003 98.2048 76.8064 98.7274C78.0756 100.93 79.9197 102.565 82.04 103.909C84.7874 105.656 87.8259 106.574 91.0138 107C94.5078 107.462 98.0093 107.5 101.503 107.029C101.697 106.992 101.869 107.022 102.063 106.813ZM103.818 76.4943C103.609 76.3898 103.4 76.4645 103.205 76.5018C101.802 76.7631 100.391 76.9199 98.9798 77.1065C96.5012 77.435 94.0001 77.6739 91.5514 78.204C87.9753 78.9804 84.6604 80.3541 81.7712 82.6387C78.5758 85.1621 75.8508 88.1111 73.738 91.6051C73.5215 91.9634 73.3125 92.3367 73.0736 92.6801C72.4838 93.5387 71.767 93.5312 71.2146 92.6577C71.0877 92.4562 70.9757 92.2471 70.8488 92.0456C70.02 90.7017 69.2137 89.3355 68.3402 88.014C67.8998 87.3496 67.8998 86.812 68.3253 86.1401C69.1764 84.8112 70.2291 83.6839 71.3639 82.6163C72.7077 81.3471 74.0964 80.1302 75.4029 78.8311C80.4124 73.8365 82.3311 67.7668 81.5845 60.7938C81.5099 60.1219 81.4875 59.435 81.2411 58.7855C80.935 58.7855 80.7334 58.9796 80.5169 59.114C78.8446 60.1517 77.3664 61.4135 76.0748 62.8991C72.7227 66.7664 70.6173 71.2608 69.2959 76.1658C68.6463 78.5623 68.2955 81.0186 67.8848 83.4599C67.84 83.7511 67.7803 84.0348 67.6459 84.2961C67.4891 84.6022 67.2353 84.7739 66.877 84.744C66.5559 84.7216 66.3394 84.535 66.2349 84.2363C66.1826 84.087 66.1453 83.9302 66.1154 83.7809C65.9587 82.8477 65.787 81.9145 65.6451 80.9738C65.2942 78.6519 64.9956 76.3226 64.3759 74.053C62.9649 68.9091 60.5236 64.3699 56.5219 60.7565C56.3801 60.6295 56.283 60.3832 55.9918 60.4802C55.9918 60.8461 55.9769 61.2119 55.9918 61.5777C56.1113 64.1086 56.4174 66.6246 56.8429 69.1181C57.2536 71.5296 58.0001 73.8216 59.1648 75.9792C60.3668 78.2115 61.6882 80.3691 63.1515 82.4371C64.6372 84.5275 66.317 86.4537 67.8699 88.4844C69.169 90.1791 70.1768 92.0157 70.4904 94.1658C70.5576 94.6063 70.58 95.0543 70.6322 95.5022C70.7069 96.1219 70.7144 96.1293 71.2967 96.0024C71.8865 95.8755 72.4763 95.7336 73.0661 95.5918C77.7845 94.4719 82.5028 93.3371 87.057 91.6424C92.3129 89.6789 96.7923 86.6403 100.242 82.1683C101.578 80.4288 102.623 78.4952 103.788 76.6436C103.833 76.6138 103.81 76.5541 103.818 76.4943ZM36.9093 87.4018C36.9541 87.7751 37.1258 87.9468 37.2602 88.1335C38.6563 90.1194 40.2092 91.9858 41.8741 93.7477C44.2706 96.2861 47.1001 98.1451 50.385 99.3322C52.6546 100.153 54.984 100.669 57.3656 100.975C59.5456 101.258 61.7256 101.251 63.8981 100.81C65.451 100.497 66.9591 100.034 68.4597 99.5487C69.1391 99.3322 69.1391 99.3322 69.154 98.6229C69.154 98.4288 69.2361 98.2048 69.0346 98.0331C68.4149 98.1376 67.7952 98.2422 67.1756 98.3616C65.6152 98.6453 65.3913 98.5482 64.5178 97.1969C64.4207 97.0402 64.3237 96.8834 64.2191 96.7341C63.3456 95.4425 62.405 94.2106 61.2478 93.1505C58.6497 90.754 55.5738 89.2459 52.1992 88.3425C49.2577 87.5586 46.2266 87.3496 43.1955 87.2525C41.1125 87.1779 39.0371 87.357 36.9093 87.4018ZM64.8463 112.39C66.093 112.539 66.862 111.837 67.3846 110.755C67.6011 110.299 67.7355 109.814 67.84 109.329C67.967 108.747 67.9147 108.679 67.3174 108.702C65.8541 108.761 64.458 109.105 63.1217 109.702C62.9052 109.799 62.7036 109.926 62.5169 110.068C61.9197 110.531 61.8823 111.158 62.4124 111.695C62.6812 111.964 63.0097 112.121 63.368 112.226C63.8384 112.352 64.3087 112.412 64.8463 112.39Z"
        fill="#303030"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M115.167 230.001C115.167 218.495 124.495 209.168 136.001 209.168C147.507 209.168 156.834 218.495 156.834 230.001C156.834 241.505 147.507 250.834 136.001 250.834C124.495 250.834 115.167 241.505 115.167 230.001ZM135.333 238.111L146.499 224.612C147.318 223.624 147.11 222.214 146.037 221.46C144.959 220.706 143.427 220.9 142.61 221.887L133.361 233.067L129.369 228.374C128.538 227.393 126.998 227.222 125.937 227.989C124.874 228.754 124.688 230.169 125.519 231.146L131.464 238.136C131.928 238.68 132.637 239 133.388 239H133.405C134.163 238.995 134.874 238.667 135.333 238.111Z"
        fill="#27AE60"
      />
    </Svg>
  )
}
export const Mic = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M11.998 12.2959C10.4286 12.2959 9.15625 11.0235 9.15625 9.45412V5.84175C9.15625 4.27238 10.4286 3 11.998 3C13.5674 3 14.8398 4.27238 14.8398 5.84175V9.45412C14.8398 11.0235 13.5674 12.2959 11.998 12.2959Z"
        stroke="#9098B1"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12 17.625V21"
        stroke="#9098B1"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5.25 9.75C5.25 13.4782 8.27175 16.5 12 16.5C15.7282 16.5 18.75 13.4782 18.75 9.75"
        stroke="#9098B1"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}
export const Filterist = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M14.25 17.625V12L21 3H3L9.75 12V21"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}
export const Soft = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M3 12H8.625"
        stroke="#9098B1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M17.625 3V21L21 17.625"
        stroke="#9098B1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M3 5H13.125"
        stroke="#9098B1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M3 19H6.375"
        stroke="#9098B1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M17.625 21L14.25 17.625"
        stroke="#9098B1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}
export const DownPress = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M16 10L12 14L8 10"
        stroke="#9098B1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}
export const RemoveEmpty = () => {
  return (
    <Svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M3 19L19 3"
        stroke="white"
        stroke-width="6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M3 3L19 19"
        stroke="white"
        stroke-width="6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}
export const Tick = () => {
  return (
    <Svg
      width="29"
      height="21"
      viewBox="0 0 29 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M3 10.5L10.6667 18L26 3"
        stroke="white"
        stroke-width="6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}
export const Delete = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M3 6.375H21"
        stroke="#9098B1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M8.625 3H15.375"
        stroke="#9098B1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M18.75 6.375H5.25V21H18.75V6.375Z"
        stroke="#9098B1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}
export const Favorited = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M4.54444 12.7754L11.9996 20.0631L19.4548 12.7754L19.4951 12.736C21.5558 10.7215 21.5558 7.46185 19.4951 5.44831C17.4343 3.43478 14.0997 3.43384 12.0399 5.44831L11.9996 5.48767L11.9584 5.44738C9.89765 3.43291 6.56304 3.43291 4.50322 5.44738C2.44341 7.46185 2.44246 10.7215 4.50322 12.7351L4.54444 12.7754Z"
        fill="#FB7181"
        stroke="#FB7181"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}
export const CancelFavorite = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M4.54444 12.7754L11.9996 20.0631L19.4548 12.7754L19.4951 12.736C21.5558 10.7215 21.5558 7.46185 19.4951 5.44831C17.4343 3.43478 14.0997 3.43384 12.0399 5.44831L11.9996 5.48767L11.9584 5.44738C9.89765 3.43291 6.56304 3.43291 4.50322 5.44738C2.44341 7.46185 2.44246 10.7215 4.50322 12.7351L4.54444 12.7754Z"
        stroke="#9098B1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}
export const Plus_Cart = () => {
  return (
    <Svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M8 3.3335V12.6668"
        stroke="#9098B1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M3.33301 8H12.6663"
        stroke="#9098B1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}
export const Less_Cart = () => {
  return (
    <Svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M3.33301 8H12.6663"
        stroke="#9098B1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}
export const Credit = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M21 5.25H3V18.75H21V5.25Z"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M3 9.75H21"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}
export const Paypal = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M9.35045 6.8835L9.35295 6.8845C9.40495 6.663 9.59395 6.5 9.83045 6.5H16.5665C16.575 6.5 16.5835 6.4965 16.592 6.497C16.4485 4.1075 14.444 3 12.6755 3H5.93945C5.70245 3 5.51345 3.1675 5.46195 3.3885L5.45945 3.3875L2.51495 16.9065L2.52145 16.907C2.51445 16.939 2.50195 16.9695 2.50195 17.004C2.50195 17.2805 2.72545 17.4995 3.00195 17.4995H7.03745L9.35045 6.8835Z"
        fill="#1565C0"
      />
      <Path
        d="M16.5911 6.49707C16.6176 6.93507 16.5886 7.41157 16.4766 7.93807C15.8361 10.9356 13.5206 12.4956 10.6591 12.4956C10.6591 12.4956 8.92408 12.4956 8.50258 12.4956C8.24208 12.4956 8.11908 12.6486 8.06258 12.7656L7.19258 16.7901L7.04008 17.5046H7.03708L6.40558 20.4026L6.41208 20.4031C6.40508 20.4351 6.39258 20.4656 6.39258 20.5001C6.39258 20.7766 6.61608 21.0001 6.89258 21.0001H10.5591L10.5656 20.9951C10.8016 20.9916 10.9891 20.8231 11.0381 20.6011L11.0471 20.5936L11.9531 16.3856C11.9531 16.3856 12.0161 15.9841 12.4381 15.9841C12.8601 15.9841 14.5271 15.9841 14.5271 15.9841C17.3886 15.9841 19.7276 14.4311 20.3686 11.4331C21.0896 8.05307 18.6786 6.50957 16.5911 6.49707Z"
        fill="#039BE5"
      />
      <Path
        d="M9.83 6.49975C9.593 6.49975 9.404 6.66275 9.3525 6.88425L9.35 6.88325L8.0625 12.7658C8.119 12.6488 8.242 12.4958 8.5025 12.4958C8.9245 12.4958 10.62 12.4958 10.62 12.4958C13.4815 12.4958 15.836 10.9358 16.4765 7.93825C16.589 7.41175 16.6175 6.93525 16.591 6.49725C16.583 6.49625 16.574 6.49975 16.566 6.49975H9.83Z"
        fill="#283593"
      />
    </Svg>
  )
}
export const Bank_Transfer = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M3 6.375L12 3L21 6.375"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M3 21H21"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12 16.5V9.75"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M18.75 16.5V9.75"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5.25 16.5V9.75"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}
export const Method = () => {
  return (
    <Svg
      width="36"
      height="22"
      viewBox="0 0 36 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <G style="mix-blend-mode:multiply">
        <Circle cx="11" cy="11" r="11" fill="#C4C4C4" />
      </G>
      <G style="mix-blend-mode:multiply">
        <Circle cx="25" cy="11" r="11" fill="#C4C4C4" />
      </G>
    </Svg>
  )
}
export const Profile = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 4.00098C10.3971 4.00098 9.09766 5.30042 9.09766 6.90336C9.09766 8.5063 10.3971 9.80574 12 9.80574C13.603 9.80574 14.9024 8.5063 14.9024 6.90336C14.9024 5.30042 13.603 4.00098 12 4.00098ZM7.09766 6.90336C7.09766 4.19585 9.29253 2.00098 12 2.00098C14.7075 2.00098 16.9024 4.19585 16.9024 6.90336C16.9024 9.61087 14.7075 11.8057 12 11.8057C9.29253 11.8057 7.09766 9.61087 7.09766 6.90336Z"
        fill={COLORS.primary}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.51784 15.3906C6.47035 15.3906 4 17.861 4 20.9085V20.9996C4 21.5519 3.55228 21.9996 3 21.9996C2.44772 21.9996 2 21.5519 2 20.9996V20.9085C2 16.7564 5.36578 13.3906 9.51784 13.3906H14.4822C18.6342 13.3906 22 16.7564 22 20.9085V20.9996C22 21.5519 21.5523 21.9996 21 21.9996C20.4477 21.9996 20 21.5519 20 20.9996V20.9085C20 17.861 17.5296 15.3906 14.4822 15.3906H9.51784Z"
        fill={COLORS.primary}
      />
    </Svg>
  )
}
export const Order = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M21 6.17676H3V20.9998H21V6.17676Z"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M21 6.177H3L5.11725 3H18.8828L21 6.177Z"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M14.3824 10.6768C14.3824 11.9919 13.3159 13.0584 12.0008 13.0584C10.6856 13.0584 9.61914 11.9919 9.61914 10.6768"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}
export const Address = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M19 9.7775C19 14.0738 11.5 22 11.5 22C11.5 22 4 14.0738 4 9.7775C4 5.48125 7.3575 2 11.5 2C15.6425 2 19 5.4825 19 9.7775Z"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M13.5 9.5C13.5 10.6046 12.6046 11.5 11.5 11.5C10.3954 11.5 9.5 10.6046 9.5 9.5C9.5 8.39543 10.3954 7.5 11.5 7.5C12.6046 7.5 13.5 8.39543 13.5 9.5Z"
        fill={COLORS.primary}
        stroke={COLORS.primary}
      />
    </Svg>
  )
}
export const Payment = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M21 5.25H3V18.75H21V5.25Z"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M3 9.75H21"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}
export const Gender = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M12 14C15.3137 14 18 11.3137 18 8C18 4.68629 15.3137 2 12 2C8.68629 2 6 4.68629 6 8C6 11.3137 8.68629 14 12 14Z"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12 14V22"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9 18H15"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}
export const Birthday = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M3 10.875H21M16.5 7.5V3M7.5 7.5V3M3 5.25H21V21H3V5.25Z"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}
export const EmailProfile = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 4.00098C10.3971 4.00098 9.09766 5.30042 9.09766 6.90336C9.09766 8.5063 10.3971 9.80574 12 9.80574C13.603 9.80574 14.9024 8.5063 14.9024 6.90336C14.9024 5.30042 13.603 4.00098 12 4.00098ZM7.09766 6.90336C7.09766 4.19585 9.29253 2.00098 12 2.00098C14.7075 2.00098 16.9024 4.19585 16.9024 6.90336C16.9024 9.61087 14.7075 11.8057 12 11.8057C9.29253 11.8057 7.09766 9.61087 7.09766 6.90336Z"
        fill={COLORS.primary}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.51784 15.3906C6.47035 15.3906 4 17.861 4 20.9085V20.9996C4 21.5519 3.55228 21.9996 3 21.9996C2.44772 21.9996 2 21.5519 2 20.9996V20.9085C2 16.7564 5.36578 13.3906 9.51784 13.3906H14.4822C18.6342 13.3906 22 16.7564 22 20.9085V20.9996C22 21.5519 21.5523 21.9996 21 21.9996C20.4477 21.9996 20 21.5519 20 20.9996V20.9085C20 17.861 17.5296 15.3906 14.4822 15.3906H9.51784Z"
        fill={COLORS.primary}
      />
    </Svg>
  )
}
export const PhoneNumber = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M17.625 3H6.375V21H17.625V3Z"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M11.9941 17.625H12.0054"
        stroke={COLORS.primary}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}
export const ChangePasswording = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 9.75C2 9.19772 2.44772 8.75 3 8.75H21C21.5523 8.75 22 9.19772 22 9.75V21C22 21.5523 21.5523 22 21 22H3C2.44772 22 2 21.5523 2 21V9.75ZM4 10.75V20H20V10.75H4Z"
        fill={COLORS.primary}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 4C9.48134 4 7.375 6.13206 7.375 8.841C7.375 9.39328 6.92728 9.841 6.375 9.841C5.82272 9.841 5.375 9.39328 5.375 8.841C5.375 5.09919 8.30641 2 12 2C15.6936 2 18.625 5.09919 18.625 8.841C18.625 9.39328 18.1773 9.841 17.625 9.841C17.0727 9.841 16.625 9.39328 16.625 8.841C16.625 6.13206 14.5187 4 12 4Z"
        fill={COLORS.primary}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 13.7256C12.5523 13.7256 13 14.1733 13 14.7256V15.8506C13 16.4029 12.5523 16.8506 12 16.8506C11.4477 16.8506 11 16.4029 11 15.8506V14.7256C11 14.1733 11.4477 13.7256 12 13.7256Z"
        fill={COLORS.primary}
      />
    </Svg>
  )
}
export const ForwardNext = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M9 6L15 12L9 18"
        stroke="#9098B1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}
export const Confirmationion = () => {
  return (
    <Svg
      width="6"
      height="33"
      viewBox="0 0 6 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M3 3V20"
        stroke="white"
        stroke-width="6"
        stroke-linecap="round"
      />
      <Path
        d="M3 29V30"
        stroke="white"
        stroke-width="6"
        stroke-linecap="round"
      />
    </Svg>
  )
}
export const Lineborder = () => {
  return (
    <Svg
      width="312"
      height="1"
      viewBox="0 0 312 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Line
        y1="0.5"
        x2="312"
        y2="0.5"
        stroke="#EBF0FF"
        stroke-dasharray="5 5"
      />
    </Svg>
  )
}
