import React, {useState, useRef} from 'react';
import {View, Text, TextInput, Platform, Image} from 'react-native';
import {Container, Form, Toast} from 'native-base';
import _ from 'lodash';
import styles from './styles/LoginScreen';

import Button from '../components/buttons/Button';
import Loader from '../components/Loader';

const rentuImage = require('../img/rentu/splash-screen-logo.png');

const LogIn = props => {
  const state = logInScreenHooks(props);

  const {spinner} = state;

  return (
    <Container>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 20,
        }}>
        <Image
          source={rentuImage}
          resizeMode="contain"
          style={{
            height: 180,
            width: 300,
          }}
        />
      </View>

      <View style={{marginHorizontal: 20}}>
        <Form>
          <View style={{flexDirection: 'row', marginHorizontal: 10}}>
            <Text style={styles.countryCode}>+880</Text>
            <TextInput
              ref={state.textInput}
              name="contactNumber"
              maxLength={11}
              type="TextInput"
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Enter Your Mobile Number"
              placeholderTextColor="#919191"
              selectionColor="#49C3B6"
              selectTextOnFocus
              keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
              style={[styles.textInput]}
              returnKeyType="go"
              onChangeText={state.setPhoneNumber}
              value={state.phoneNumber}
            />
          </View>

          <Loader modalVisible={spinner} animationType="fade" />

          <Button name="Next" onPress={state.sendOtpScreen} />
        </Form>
      </View>
    </Container>
  );
};

const logInScreenHooks = props => {
  const [spinner, setSpinner] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const textInput = useRef();

  const sendOtpScreen = async () => {
    if (!_.isEmpty(PhoneNumber)) {
      Toast.show({
        text: 'Phone Number is required',
        buttonText: 'Okay',
        type: 'danger',
        duration: 2000,
      });
    } else {
      setSpinner(true);

      setTimeout(() => {
        setSpinner(false);
        props.navigation.navigate('OtpScreen');
      }, 2000);
    }
  };

  return {
    spinner,
    setSpinner,
    sendOtpScreen,
    textInput,
    phoneNumber,
    setPhoneNumber,
  };
};

export default LogIn;
