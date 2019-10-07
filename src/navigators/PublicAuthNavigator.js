/* eslint-disable */

import { createStackNavigator } from 'react-navigation-stack'

import SplashScreen from '../screens/SplashScreen'
import LoginScreen from '../screens/LoginScreen'
import OtpScreen from '../screens/OtpScreen'
import SuccessfullScreen from '../screens/SuccessfullScreen'

export const AuthStackNavigator = createStackNavigator({
  SplashScreen: {
    screen: SplashScreen,
    navigationOptions: () => ({
      header: null
    })
  },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: () => ({
      header: null
    })
  },
  OtpScreen: {
    screen: OtpScreen,
    navigationOptions: () => ({
      header: null
    })
  },
  SuccessfullScreen: {
    screen: SuccessfullScreen,
    navigationOptions: () => ({
      header: null
    })
  }
})

