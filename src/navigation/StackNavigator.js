import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  authen,
  home,
  explore,
  cart,
  offer,
  account,
  common,
} from './../screens';
import {StatusBar} from 'react-native';

import {StackStep} from './';
import {routes} from './routes';
const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  let routeName;

  useEffect(() => {
    let isCancelled = false;
    const runAsync = async () => {
      try {
        if (!isCancelled) {
          AsyncStorage.getItem('Onboardingfirst').then(value => {
            if (value == null) {
              AsyncStorage.setItem('Onboardingfirst', 'true');
              setIsFirstLaunch(true);
            } else {
              setIsFirstLaunch(false);
            }
          });
        }
      } catch (e) {
        if (!isCancelled) {
          throw e;
        }
      }
    };

    runAsync();

    return () => {
      isCancelled = true;
    };
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch == true) {
    routeName = routes.ONBOARD;
  } else {
    routeName = routes.SPLASH;
  }

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor="transparent"
      />
      <Stack.Navigator
        initialRouteName={routeName}
        screenOptions={{headerShown: false}}>
        <>
          <Stack.Screen name={routes.ONBOARD} component={authen.Onboard} />
          <Stack.Screen name={routes.SPLASH} component={authen.Splash} />
          <Stack.Screen name={routes.LOGIN} component={authen.Login} />
          <Stack.Screen name={routes.REGISTER} component={authen.Register} />

          <Stack.Screen
            name={routes.COMMON}
            component={StackStep.TabNavigation}
          />
          <Stack.Screen name={routes.HOME} component={common.Home} />
          <Stack.Screen name={routes.EXPLORE} component={common.Explore} />
          <Stack.Screen name={routes.CART} component={common.Cart} />
          <Stack.Screen name={routes.OFFER} component={common.Offer} />
          <Stack.Screen name={routes.ACCOUNT} component={common.Account} />
          <Stack.Screen name={routes.FLASH_SALE} component={home.FlashSale} />
          <Stack.Screen name={routes.FAVORITE} component={home.Favorite} />
          <Stack.Screen name={routes.DETAILS} component={home.Details} />
          <Stack.Screen name={routes.REVIEWS} component={home.Reviews} />
          <Stack.Screen
            name={routes.WRITE_REVIEW}
            component={home.WriteReview}
          />
          <Stack.Screen
            name={routes.NOTIFICATIONS}
            component={home.Notifications}
          />
          <Stack.Screen
            name={routes.OFFER_NOTIFICATION}
            component={home.OfferNotification}
          />
          <Stack.Screen
            name={routes.FEED_NOTIFICATION}
            component={home.FeedNotification}
          />
          <Stack.Screen
            name={routes.ACTIVITY_NOTIFICATION}
            component={home.ActivityNotification}
          />
          {/* Dự án từ Ants - Reviews */}
          <Stack.Screen
            name={routes.DUAN_REVIEWS}
            component={home.DuAn_Reviews}
          />

          <Stack.Screen
            name={routes.SEARCH_PAGE}
            component={explore.SearchPage}
          />
          <Stack.Screen
            name={routes.SEARCH_RESULT}
            component={explore.SearchResults}
          />
          <Stack.Screen name={routes.CATEGORY} component={explore.Category} />
          <Stack.Screen name={routes.SOFT_BY} component={explore.SoftBy} />
          <Stack.Screen
            name={routes.FILTER_SEARCH}
            component={explore.FilterSearch}
          />
          <Stack.Screen name={routes.SHIP_TO} component={cart.ShipTo} />
          <Stack.Screen
            name={routes.PAYMENT_METHOD}
            component={cart.PaymentMethod}
          />
          <Stack.Screen name={routes.CARD} component={cart.Card} />
          <Stack.Screen
            name={routes.PURCHASE_SUCCESS}
            component={cart.PurchaseSuccess}
          />
          {/* Dự án từ Ants - Reviews */}
          <Stack.Screen
            name={routes.ADD_ADDRESS}
            component={account.AddAddress}
          />
          <Stack.Screen name={routes.ADD_CARD} component={account.AddCard} />
          <Stack.Screen name={routes.ADDRESS} component={account.Address} />
          <Stack.Screen name={routes.CONFIRMATION} component={account.Confirmation} />
          <Stack.Screen
            name={routes.COMPLETED_CARD}
            component={account.CompletedCard}
          />
          <Stack.Screen
            name={routes.CREDIT_CARD}
            component={account.CreditCard}
          />
          <Stack.Screen
            name={routes.CHECK_CARD}
            component={account.CheckCard}
          />
          <Stack.Screen
            name={routes.EDIT_USER_INFORMATION}
            component={account.EditUserInformation}
          />
          <Stack.Screen
            name={routes.CHANGE_PASSWORD}
            component={account.ChangePassword}
          />
          <Stack.Screen name={routes.ORDER} component={account.Order} />
          <Stack.Screen
            name={routes.ORDER_DETAILS}
            component={account.OrderDetails}
          />
          <Stack.Screen name={routes.PROFILE} component={account.Profile} />
        </>
      </Stack.Navigator>
    </>
  );
};
export default MainStackNavigator;
