import React, {useEffect} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import colors from '../styles/colors';

const AuthLoadingScreen = props => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const loadApp = async () => {
    try {
      const value = await AsyncStorage.getItem('phoneNumber');
      console.log('phoneNumber...', value);
      const screen = value !== null ? 'App' : 'Auth';
      props.navigation.navigate(screen);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error.message);
    }
  };

  useEffect(() => {
    loadApp();
  }, [loadApp]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.defaultButtonColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AuthLoadingScreen;
