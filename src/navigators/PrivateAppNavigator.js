/* eslint-disable */
import React, { Component } from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack'
import customDrawerContentComponent from './CustomDrawerComponent'
import { Icon } from 'native-base';
// import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import HomeScreen from '../screens/HomeScreen'
import SettingsScreen from '../screens/SettingsScreen'
import AboutScreen from '../screens/AboutScreen'

const AppStackNavigator = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: () => ({
      header: null
    })
  }
})

export const AppDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: AppStackNavigator,
    navigationOptions: () => ({
      drawerIcon: ({ tintColor }) => (
        <Icon name='ios-home' style={{ fontSize: 24, color: tintColor }} />
      ),
    })
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: () => ({
      drawerIcon: ({ tintColor }) => (
        <Icon name='ios-settings' style={{ fontSize: 24, color: tintColor }} />
      ),
    })
  },
  About: {
    screen: AboutScreen,
    navigationOptions: () => ({
      drawerIcon: ({ tintColor }) => (
        <Icon name='ios-help-circle' style={{ fontSize: 24, color: tintColor }} />
      ),
    })
  },
}, {
    drawerPosition: 'left',
    contentComponent: customDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoure: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    drawerWidth: 300,
    contentOptions: {
      activeTintColor: '#00bcd4',
      inactiveTintColor: '#919191',
      activeBackgroundColor: '#ebebeb',
      inactiveBackgroundColor: '#fff',
      itemsContainerStyle: {
        marginHorizontal: 10,
        marginBottom: 20
      },
      itemStyle: {
        height: 40,
        border: 60,
      },
      activeLabelStyle: {
        fontSize: 20,
        fontWeight: 'normal'
      },
      inactiveLabelStyle: {
        fontSize: 20,
        fontWeight: 'normal'
      }
    }
  })