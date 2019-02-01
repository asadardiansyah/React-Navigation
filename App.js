/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './app/components/Home';
import Dashboard from './app/components/Dashboard';
import Profile from './app/components/Profile';
import RootApp from './app/components/TabControl';

const RootStack = createStackNavigator({
  home: {
    screen: Home
  },
  dashboard: {
    screen: Dashboard
  },
  profile: {
    screen: Profile
  },
  rootApp: {
    screen: RootApp
  }
})

const App = createAppContainer(RootStack)

export default App