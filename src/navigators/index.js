/* eslint-disable */

import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { AuthStackNavigator } from './PublicAuthNavigator'
import { AppDrawerNavigator } from './PrivateAppNavigator'

import AuthLoadingScreen from '../screens/AuthLoadingScreen'

const AppSwitchNavigator = createSwitchNavigator({
  AuthLoadingScreen: AuthLoadingScreen,
  Auth: AuthStackNavigator,
  App: {
    screen: AppDrawerNavigator
  }
})

export const ReactNativeStarterApp = createAppContainer(AppSwitchNavigator)
