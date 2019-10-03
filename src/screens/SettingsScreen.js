import React, { useState, useEffect } from 'react';
import { View, Alert } from 'react-native';
import {
  Container, Header, Title, Content, Left, Right, Body, Button, Form
} from 'native-base';
import { getSnapshot, applySnapshot } from 'mobx-state-tree';
import ImagePicker from 'react-native-image-crop-picker';
import _ from 'lodash';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import { observer, inject } from 'mobx-react';
import styles from './styles/SettingsScreen';
import colors from '../styles/colors';
// import Alert from '../components/Alert';

import { User } from '../store/User';

import ProfileAvatar from '../components/avatar/ProfileAvatar';
import InputField from '../components/form/InputField';
import UpdateButton from '../components/buttons/Button';
import ErrorNotification from '../components/ErrorNotification';

const SettingsScreen = (props) => {
  const state = settingsScreenHooks(props);
  // eslint-disable-next-line react/destructuring-assignment
  const showIcon = props.navigation.getParam('emptyData');
  const { errNotification, setErrNotification } = state;
  const showNotification = errNotification;
  const notificationMarginTop = showNotification ? 10 : 0;

  const { user } = state;
  return (
    <>
      <Container>
        <Header style={styles.headerStyle}>
          {
          showIcon ? (
            <React.Fragment>
              <Left />
              <Body>
                <Title>Profile</Title>
              </Body>
            </React.Fragment>
          )
            : (
              <React.Fragment>
                <Left>
                  <Button transparent onPress={state.toggleDrawer}>
                    <FontAwesomeIcon
                      name="navicon"
                      size={25}
                      color={colors.white}
                    />
                  </Button>
                </Left>
                <Body>
                  <Title>Profile Settings</Title>
                </Body>
              </React.Fragment>
            )
        }
          <Right />
        </Header>

        <Content>
          <View style={styles.avatarSection}>
            <ProfileAvatar
              size={120}
            // eslint-disable-next-line global-require
              imgSrc={{ uri: user.photo }}
              onPress={state.onAvatarPress}
              borderColor={colors.defaultButtonColor}
              customPadding={3}
              showEditButton
            />
          </View>

          <Form style={styles.contentSection}>
            <InputField
              labelText="Full Name"
              labelTextSize={14}
              labelColor={colors.gray08}
              textColor={colors.defaultButtonColor}
              borderBottomColor={colors.defaultButtonColor}
              inputType="text"
              customStyle={{ marginBottom: 20 }}
              onChangeText={user.setFullName}
              inputValue={user.fullName}
              // showCheckmark={_.isEmpty(user.profileValidation.fullName)}
            />
            <InputField
              labelText="EMAIL ADDRESS"
              labelTextSize={14}
              labelColor={colors.gray08}
              textColor={colors.defaultButtonColor}
              borderBottomColor={colors.defaultButtonColor}
              inputType="email"
              customStyle={{ marginBottom: 20 }}
              onChangeText={user.setEmailAddress}
              inputValue={user.emailAddress}
              // showCheckmark={_.isEmpty(user.profileValidation.emailAddress)}
            />
            <InputField
              labelText="NID NUMBER"
              labelTextSize={14}
              labelColor={colors.gray08}
              textColor={colors.defaultButtonColor}
              borderBottomColor={colors.defaultButtonColor}
              inputType="text"
              customStyle={{ marginBottom: 20 }}
              onChangeText={user.setNidNumber}
              inputValue={user.nidNumber}
              // showCheckmark={_.isEmpty(user.profileValidation.nidNumber)}
            />
            <InputField
              labelText="Home Address"
              labelTextSize={14}
              labelColor={colors.gray08}
              textColor={colors.defaultButtonColor}
              borderBottomColor={colors.defaultButtonColor}
              inputType="text"
              customStyle={{ marginBottom: 20 }}
              onChangeText={user.setHomeAddress}
              inputValue={user.homeAddress}
              // showCheckmark={_.isEmpty(user.profileValidation.homeAddress)}
            />
            <UpdateButton
              name="Update"
              onPress={state.saveProfile}
            />
          </Form>
        </Content>

        {/* <Alert
          showAlert={state.showAlert}
          hideAlert={state.hideAlert}
          message="Profile is updated done..."
          title="Success!"
          onConfirmPressed={state.onConfirmPressed}
        /> */}

        <View style={[styles.notificationWrapper, { marginTop: notificationMarginTop }]}>
          <ErrorNotification
            showNotification={showNotification}
            handleCloseNotification={() => setErrNotification(false)}
            type="Error!"
            firstLine={
              user.profileValidation.fullName || user.profileValidation.emailAddress || user.profileValidation.nidNumber
              || user.profileValidation.homeAddress
            }
            secondLine="Please try again."
          />
        </View>
      </Container>
    </>
  );
};


const settingsScreenHooks = (props) => {
  const { activeUser } = props.store.userStore;
  const [errorObject, setErrorObject] = useState({});
  const [user] = useState(User.create({}));
  const [showAlert, setShowAlert] = useState(false);
  const [errNotification, setErrNotification] = useState(false);

  const toggleDrawer = () => {
    props.navigation.toggleDrawer();
  };

  const onAvatarPress = () => {
    try {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true
      })
        .then((res) => {
          user.setPhoto(res.path);
        });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  useEffect(() => {
    applySnapshot(user, getSnapshot(activeUser));
  }, [activeUser]);

  useEffect(() => {
    setTimeout(() => {
      setErrNotification(false);
    }, 4000);
  }, [errNotification]);

  const saveProfile = async () => {
    // eslint-disable-next-line no-console
    if (!_.isEmpty(user.profileValidation)) {
      setErrNotification(true);
    } else {
      setErrNotification(false);

      const res = await user.save();

      if (res) {
        applySnapshot(activeUser, getSnapshot(user));
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
                props.navigation.navigate('LastSearch');
              }
            },
          ],
          { cancelable: false },
        );
      }
    }
  };

  const hideAlert = () => {
    setShowAlert(false);
  };

  const onConfirmPressed = () => {
    props.navigation.navigate('LastSearch');
  };

  return {
    errorObject,
    setErrorObject,
    showAlert,
    setShowAlert,
    hideAlert,
    onAvatarPress,
    saveProfile,
    user,
    onConfirmPressed,
    errNotification,
    setErrNotification,
    toggleDrawer,
  };
};

export default inject('store')(observer(SettingsScreen));
