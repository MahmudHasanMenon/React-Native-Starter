/* eslint-disable max-len */
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {DrawerNavigatorItems} from 'react-navigation-drawer';
import {Container, Content, Body, Thumbnail, Icon} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import colors from '../styles/colors';

import ProfileAvatar from '../components/avatar/ProfileAvatar';

const userImg = require('../img/user2.jpg');

const customDrawerContentComponent = props => {
  const state = customDrawerContentComponentHooks(props);
  // eslint-disable-next-line react/destructuring-assignment

  return (
    <Container>
      <View
        style={{
          height: 250,
          backgroundColor: colors.defaultButtonColor,
          marginBottom: 25,
        }}>
        <Body style={{flex: 0.7, justifyContent: 'center', marginTop: 25}}>
          <View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Settings')}>
              {state.defaultAvatarLogo()}
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 20, color: 'red'}}>
            <Text style={{color: 'white', fontSize: 20}}>Done John</Text>
          </View>
        </Body>
      </View>

      <Content>
        <DrawerNavigatorItems {...props} />
      </Content>

      <View style={{marginLeft: 30, marginBottom: 20, flexDirection: 'row'}}>
        <Icon
          name="ios-log-out"
          style={{fontSize: 26, color: '#d93900', fontWeight: 'bold'}}
        />
        <Text
          style={{color: '#d93900', fontSize: 20, paddingLeft: 30}}
          onPress={state.signOut}>
          Log Out
        </Text>
      </View>
    </Container>
  );
};

const customDrawerContentComponentHooks = props => {
  const signOut = () => {
    AsyncStorage.removeItem('phoneNumber');
    props.navigation.navigate('LoginScreen');
  };

  const defaultAvatarLogo = () => (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ProfileAvatar
        size={120}
        imgSrc={userImg}
        borderColor={colors.white}
        showEditButton={false}
      />
    </View>
  );
  return {
    signOut,
    defaultAvatarLogo,
  };
};

export default customDrawerContentComponent;
