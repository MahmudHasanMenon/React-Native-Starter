import React, {useState, useEffect} from 'react';
import {View, Alert, TextInput, Text} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Left,
  Right,
  Body,
  Button,
  Form,
  Icon,
} from 'native-base';
// import ImagePicker from 'react-native-image-crop-picker';
// import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import styles from './styles/SettingsScreen';
import colors from '../styles/colors';

import ProfileAvatar from '../components/avatar/ProfileAvatar';
import UpdateButton from '../components/buttons/Button';

const userImg = require('../img/user2.jpg');

const SettingsScreen = props => {
  const state = settingsScreenHooks(props);
  // eslint-disable-next-line react/destructuring-assignment
  return (
    <>
      <Container>
        <Header style={styles.headerStyle}>
          <React.Fragment>
            <Left>
              <Button transparent onPress={state.toggleDrawer}>
                <Icon onPress={state.toggleDrawer} name="menu" />
                {/* <FontAwesomeIcon
                  name="navicon"
                  size={25}
                  color={colors.white}
                /> */}
              </Button>
            </Left>
            <Body>
              <Title>Profile Settings</Title>
            </Body>
          </React.Fragment>

          <Right />
        </Header>

        <Content>
          <View style={styles.avatarSection}>
            <ProfileAvatar
              size={120}
              // eslint-disable-next-line global-require
              imgSrc={userImg}
              onPress={state.onAvatarPress}
              borderColor={colors.defaultButtonColor}
              customPadding={3}
              showEditButton
            />
          </View>

          <Form style={styles.contentSection}>
            <View style={{marginTop: 25}}>
              <Text> Full Name</Text>
              <TextInput
                ref={state.textInput}
                name="Full Name"
                maxLength={20}
                type="TextInput"
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Enter Your Name"
                placeholderTextColor="#919191"
                selectionColor="#49C3B6"
                selectTextOnFocus
                style={[styles.textInput]}
                returnKeyType="go"
                onChangeText={value => state.setUserName(value)}
                value={state.userName}
              />
            </View>

            <View style={{marginTop: 25}}>
              <Text>Email Address</Text>
              <TextInput
                ref={state.textInput}
                name="EMAIL ADDRESS"
                maxLength={20}
                type="TextInput"
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Enter Your Email"
                placeholderTextColor="#919191"
                selectionColor="#49C3B6"
                selectTextOnFocus
                style={[styles.textInput]}
                returnKeyType="go"
                onChangeText={value => state.setEmailAddress(value)}
                value={state.emailAddress}
              />
            </View>
            <View style={{marginTop: 25}}>
              <Text>Home Address</Text>
              <TextInput
                ref={state.textInput}
                name="Home Address"
                maxLength={20}
                type="TextInput"
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Enter Your Address"
                placeholderTextColor="#919191"
                selectionColor="#49C3B6"
                selectTextOnFocus
                style={[styles.textInput]}
                returnKeyType="go"
                onChangeText={value => state.setHomeAddress(value)}
                value={state.homeAddress}
              />
            </View>

            <UpdateButton name="Update" onPress={state.saveProfile} />
          </Form>
        </Content>
      </Container>
    </>
  );
};

const settingsScreenHooks = props => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [userName, setUserName] = useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [emailAddress, setEmailAddress] = useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [homeAddress, setHomeAddress] = useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  //const [photo, setPhoto] = useState('');

  const toggleDrawer = () => {
    props.navigation.toggleDrawer();
  };

  const onAvatarPress = () => {
    Alert.alert(
      'Success!!!',
      'Profile Update Is Successfully Done',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            props.navigation.navigate('HomeScreen');
          },
        },
      ],
      {cancelable: false},
    );
    // try {
    //   ImagePicker.openPicker({
    //     width: 300,
    //     height: 400,
    //     cropping: true,,
    //   }).then(res => {
    //     user.setPhoto(res.path);
    //   });
    // } catch (error) {
    //   // eslint-disable-next-line no-console
    //   console.log(error);
    // }
  };

  const saveProfile = async () => {
    // eslint-disable-next-line no-console
    Alert.alert(
      'Success!!!',
      'Profile Update Is Successfully Done',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            props.navigation.navigate('HomeScreen');
          },
        },
      ],
      {cancelable: false},
    );
  };

  return {
    userName,
    setUserName,
    emailAddress,
    setEmailAddress,
    homeAddress,
    setHomeAddress,
    onAvatarPress,
    saveProfile,
    toggleDrawer,
  };
};

export default SettingsScreen;
