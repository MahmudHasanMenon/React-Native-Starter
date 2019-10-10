import React, {useState, useRef} from 'react';
import {View, Text, TextInput, Platform, Image} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {Container, Form, Toast} from 'native-base';
import styles from './style';

import Button from '../../components/buttons/Button';
import Loader from '../../components/Loader';

const LogIn = props => {
  const state = logInScreenHooks(props);

  const {spinner} = state;

  return (
    <Container>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          marginHorizontal: 20,
        }}>
        <Text
          style={{
            size: 25,
            fontWeight: 'bold',
            color: 'green',
            marginBottom: 30,
          }}>
          Please Input some Number to Navigate Next Screen
        </Text>
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
              onChangeText={value => state.setPhoneNumber(value)}
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
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [spinner, setSpinner] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [phoneNumber, setPhoneNumber] = useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const textInput = useRef();

  const sendOtpScreen = async () => {
    if (phoneNumber === '') {
      Toast.show({
        text: 'Phone Number is required',
        buttonText: 'Okay',
        type: 'danger',
        duration: 2000,
      });
    } else {
      setSpinner(true);
      AsyncStorage.setItem('phoneNumber', JSON.stringify(phoneNumber));
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
