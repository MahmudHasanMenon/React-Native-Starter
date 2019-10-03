import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {observer, inject} from 'mobx-react';

const AuthLoadingScreen = props => {
  const loadApp = async () => {
    try {
      const {activeUser, loadActiveUser} = props.store.userStore;
      await loadActiveUser();
      const screen = activeUser.token !== '' ? 'App' : 'Auth';
      props.navigation.navigate(screen);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error.message);
    }
  };

  useEffect(() => {
    loadApp();
  }, [loadApp]);

  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',,
  },
});

export default inject('store')(observer(AuthLoadingScreen));
