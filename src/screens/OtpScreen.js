import React, {useState} from 'react';
import {View, Text, Platform, TouchableOpacity} from 'react-native';
import {Container, Form, Toast} from 'native-base';
import OtpInputs from 'react-native-otp-inputs';
import {isEmpty} from 'lodash';

import styles from './styles/OtpScreen';
import colors from '../styles/colors';

import Loader from '../components/Loader';

import Button from '../components/buttons/Button';

const Otp = props => {
  const state = otpScreenHooks(props);

  return (
    <Container>
      <View style={{marginVertical: 40}}>
        <Text style={styles.otpText}>OTP</Text>
        {/* <Text style={styles.otpInfo}>Lorem ipsum dolor sit amet consectetur adipisicing elit</Text> */}
      </View>

      <Form style={styles.form}>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 10,
            marginVertical: 20,
          }}>
          <OtpInputs
            inputContainerStyles={{backgroundColor: '#fff'}}
            keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
            selectTextOnFocus={false}
            autoCapitalize={false}
            focusedBorderColor={colors.defaultButtonColor}
            inputStyles={{
              borderWidth: 1,
              borderColor: '#abb8c3',
              borderRadius: 5,
              color: '#59cbbd',
            }}
            style={styles.otpInputs}
            handleChange={code => state.setOtpNumber(code)}
            numberOfInputs={4}
          />
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 40,
          }}>
          <TouchableOpacity onPress={state.resendOtp}>
            <Text style={{color: '#59cbbd', fontSize: 20}}>Resend OTP</Text>
          </TouchableOpacity>
        </View>

        <Loader modalVisible={state.spinner} animationType="fade" />
        <Button onPress={state.onOtpPressSuccess} name="Confirm" />
      </Form>
    </Container>
  );
};

const otpScreenHooks = props => {
  const [spinner, setSpinner] = useState(false);
  const [otp, setOtp] = useState('');

  const resendOtp = async () => {
    console.log('heloooooo resend Otp');

    setSpinner(true);
    setTimeout(() => {
      setSpinner(false);
    }, 2000);
  };

  const onOtpPressSuccess = async () => {
    if (!isEmpty(otp)) {
      Toast.show({
        text: 'Otp is required',
        buttonText: 'okay',
        type: 'danger',
        duration: 1000,
      });
    } else {
      try {
        props.navigation.navigate('SuccessfullScreen');
      } catch (error) {
        // eslint-disable-next-line no-console
        Toast.show({
          text: 'You Entered Wrong OTP or Check Your Internet Connection',
          buttonText: 'okay',
          type: 'danger',
          duration: 2000,
        });
      }
    }
  };

  return {
    spinner,
    setSpinner,
    setOtp,
    onOtpPressSuccess,
    resendOtp,
  };
};

export default Otp;
