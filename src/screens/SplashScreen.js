import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Animated, Dimensions} from 'react-native';

const tenantImage = require('../img/react-native-logo.png');

const {height} = Dimensions.get('window');

const SplashScreen = props => {
  const state = splashScreenHooks(props);

  return (
    <React.Fragment>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Animated.Image
          source={tenantImage}
          style={{...styles.logo, opacity: state.logoOpacity}}
          resizeMode="contain"
        />
      </View>
    </React.Fragment>
  );
};

const splashScreenHooks = props => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [logoOpacity, setLogoOpacity] = useState(new Animated.Value(0));
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [titleMarginTop, setTitleMarginTop] = useState(
    new Animated.Value(height / 2),
  );

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    Animated.sequence([
      // animation by sequence
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 1500,
      }),
      // animate text
      Animated.timing(titleMarginTop, {
        toValue: 10,
        duration: 1000,
      }),
    ]).start(() => {
      props.navigation.navigate('LoginScreen');
    });
  }, [logoOpacity, props.navigation, titleMarginTop]);

  return {
    logoOpacity,
    setLogoOpacity,
    titleMarginTop,
    setTitleMarginTop,
  };
};

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    width: 300,
    height: 300,
  },
});

export default SplashScreen;
