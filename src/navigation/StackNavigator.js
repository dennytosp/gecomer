import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {common, authen} from './../screens';
import {StatusBar} from 'react-native';

import {StackStep} from './';
import { routes } from './routes';
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

          <Stack.Screen name={routes.COMMON} component={StackStep.TabNavigation} />
          <Stack.Screen name={routes.HOME} component={common.Home} />
          <Stack.Screen name={routes.EXPLORE} component={common.Explore} />
          <Stack.Screen name={routes.CART} component={common.Cart} />
          <Stack.Screen name={routes.OFFER} component={common.Offer} />
          <Stack.Screen name={routes.ACCOUNT} component={common.Account} />
          
        </>
      </Stack.Navigator>
    </>
  );
};
export default MainStackNavigator;
