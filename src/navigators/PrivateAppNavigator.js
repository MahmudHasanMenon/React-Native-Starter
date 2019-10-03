/* eslint-disable */
import React, { Component } from 'react';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation'
import customDrawerContentComponent from './CustomDrawerComponent'
import { Icon } from 'native-base';
import AntDesignIcon from 'react-native-vector-icons/AntDesign'

import MapScreen from '../screens/MapScreen'
import LastSearchScreen from '../screens/LastSearchScreen'
import FavoritePropertyScreen from '../screens/FavoritePropertyScreen'
import SettingsScreen from '../screens/SettingsScreen'
import HouseDetailsScreen from '../screens/HouseDetailsScreen'
import PropertyFormScreen from '../screens/PropertyFormScreen'
import FilterSearchScreen from '../screens/FilterSearchScreen'
import MyHouseListScreen from '../screens/MyHouseListScreen'
import MyHouseDetailsScreen from '../screens/MyHouseDetailsScreen'
import SubscriptionAreaScreen from '../screens/SubscriptionAreaScreen'

const HomeStackNavigator = createStackNavigator({
  LastSearch: {
    screen: LastSearchScreen,
    navigationOptions: () => ({
      header: null
    })
  },
  Map: {
    screen: MapScreen,
    navigationOptions: () => ({
      header: null
    })
  },
  HouseDetails: {
    screen: HouseDetailsScreen,
    navigationOptions: () => ({
      header: null
    })
  },
  FilterSearchScreen: {
    screen: FilterSearchScreen,
    navigationOptions: () => ({
      header: null
    })
  }
});

const FavouriteStackNavigator = createStackNavigator({
  FavoriteProperty: {
    screen: FavoritePropertyScreen,
    navigationOptions: () => ({
      header: null
    })
  },
  FavouriteHouseDetails: {
    screen: HouseDetailsScreen,
    navigationOptions: () => ({
      header: null
    })
  }
});

const MyPropertyStackNavigator = createStackNavigator({
  MyHouseListScreen: {
    screen: MyHouseListScreen,
    navigationOptions: () => ({
      header: null
    })
  },
  MyHouseDetailsScreen: {
    screen: MyHouseDetailsScreen,
    navigationOptions: () => ({
      header: null
    })
  },
  PropertyFormScreen: {
    screen: PropertyFormScreen,
    navigationOptions: () => ({
      header: null
    })
  }
});

export const AppDrawerNavigator = createDrawerNavigator({
  HomeStackNavigator: {
    screen: HomeStackNavigator,
    navigationOptions: ({ navigation }) => ({
        drawerLockMode: navigation.state.index > 0 ? 'locked-closed' : 'unlocked',
        title: `Property`,
        drawerIcon: ({ tintColor }) => (
          <Icon name='ios-home' style={{ fontSize: 24, color: tintColor }} />
        ),
      })
  },
  FavouriteStackNavigator: {
    screen: FavouriteStackNavigator,
    navigationOptions: ({ navigation }) => ({
      drawerLockMode: navigation.state.index > 0 ? 'locked-closed' : 'unlocked',
      title: `Favorite Property`,
      drawerIcon: ({ tintColor }) => (
        <Icon name='ios-bookmark' style={{ fontSize: 24, color: tintColor }} />
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
  Subscription: {
    screen: SubscriptionAreaScreen,
    navigationOptions: () => ({
      drawerIcon: ({ tintColor }) => (
        <AntDesignIcon name='book' style={{ fontSize: 24, color: tintColor }} />
      ),
    })
  },
  MyPropertyStackNavigator: {
    screen: MyPropertyStackNavigator,
    navigationOptions: ({ navigation }) => ({
      drawerLockMode: navigation.state.index > 0 ? 'locked-closed' : 'unlocked',
      title: `My Properties`,
      drawerIcon: ({ tintColor }) => (
        <Icon name='ios-list' style={{ fontSize: 24, color: tintColor }} />
      ),
    })
  },
}, {
    drawerPosition: 'left',
    contentComponent: customDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    drawerWidth: 300,
    contentOptions: {
      activeTintColor: '#16a085',
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