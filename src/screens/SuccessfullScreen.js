import React, { useState, useEffect } from 'react';
import {
  View, Text, StyleSheet, Animated, Dimensions
} from 'react-native';

const successImage = require('../img/success.png');

const { height } = Dimensions.get('window');

const SuccessfullScreen = (props) => {
  const state = successfullScreenHooks(props);

  return (
    <React.Fragment>
      <View style={{
        flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 0
      }}
      >
        <Animated.Image source={successImage} style={{ ...styles.logo, opacity: state.logoOpacity }}></Animated.Image>
        <Text style={{
          fontSize: 30, fontWeight: 'bold', marginTop: 20, marginBottom: 20
        }}
        >
          Successfull
        </Text>
        {/* <Text style={{ textAlign: 'center', marginHorizontal: 25 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Text> */}
      </View>

    </React.Fragment>
  );
};

const successfullScreenHooks = (props) => {
  const [logoOpacity, setLogoOpacity] = useState(new Animated.Value(0));
  const [titleMarginTop, setTitleMarginTop] = useState(new Animated.Value(height / 2));

  useEffect(() => {
    // animations here
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
      props.navigation.navigate('App');
    });
  }, []);

  return {
    logoOpacity,
    setLogoOpacity,
    titleMarginTop,
    setTitleMarginTop
  };
};


const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150
  },
});

export default SuccessfullScreen;
