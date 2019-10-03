/* eslint-disable max-len */
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { observer, inject } from 'mobx-react';
import { DrawerItems } from 'react-navigation';
import {
  Container, Content, Body, Thumbnail, Icon
} from 'native-base';
import colors from '../styles/colors';

import ProfileAvatar from '../components/avatar/ProfileAvatar';

const userImg = require('../img/user.png');

const customDrawerContentComponent = (props) => {
  const state = customDrawerContentComponentHooks(props);
  // eslint-disable-next-line react/destructuring-assignment
  const { activeUser } = props.store.userStore;

  return (
    <Container>
      <View style={{ height: 250, backgroundColor: colors.defaultButtonColor, marginBottom: 25 }}>
        <Body style={{ flex: 0.7, justifyContent: 'center', marginTop: 25 }}>

          <View>
            <TouchableOpacity onPress={() => props.navigation.navigate('Settings')}>
              {
                activeUser.photo ? state.avatar(activeUser.photo) : state.defaultAvatarLogo()
              }
            </TouchableOpacity>

          </View>
          <View style={{ marginTop: 20, color: 'red' }}>
            <Text style={{ color: 'white', fontSize: 20 }}>
              {' '}
              {activeUser.fullName}
            </Text>
          </View>

        </Body>
      </View>

      <Content>
        <DrawerItems {...props} />
      </Content>

      <View style={{ marginLeft: 30, marginBottom: 20, flexDirection: 'row' }}>
        <Icon name="ios-log-out" style={{ fontSize: 26, color: '#d93900', fontWeight: 'bold' }} />
        <Text style={{ color: '#d93900', fontSize: 20, paddingLeft: 30 }} onPress={state.signOut}>Log Out</Text>
      </View>
    </Container>
  );
};

const customDrawerContentComponentHooks = (props) => {
  const { logout } = props.store.userStore;

  const signOut = () => {
    logout();
    props.navigation.navigate('LoginScreen');
  };

  const defaultAvatarLogo = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ProfileAvatar
        size={120}
        imgSrc={userImg}
        borderColor={colors.white}
        showEditButton={false}
      />
    </View>
  );

  const avatar = value => (
    <View>
      <Thumbnail style={{ height: 95, width: 95, borderRadius: 100 }} source={{ uri: value }} />
    </View>
  );

  return {
    signOut,
    defaultAvatarLogo,
    avatar
  };
};

export default inject('store')(observer(customDrawerContentComponent));
