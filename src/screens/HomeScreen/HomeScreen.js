import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {
  Container,
  Header,
  Content,
  Button,
  Icon,
  Left,
  Body,
  Title,
  Text,
} from 'native-base';
import Loader from '../../components/Loader';
import colors from '../../styles/colors/index';

const HomeScreen = props => {
  const state = HomeScreenHooks(props);

  return (
    <Container>
      <Header
        androidStatusBarColor={colors.defaultButtonColor}
        style={{backgroundColor: colors.defaultButtonColor}}>
        <Left>
          <View>
            <TouchableOpacity>
              <Button transparent>
                <Icon onPress={state.toggleDrawer} name="menu" />
              </Button>
            </TouchableOpacity>
          </View>
        </Left>

        <Body>
          <Title>Starter Screen</Title>
        </Body>
      </Header>

      <Content style={{marginBottom: 60}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 20,
            marginTop: 100,
          }}>
          <Icon name="home" style={{fontSize: 80}} />
          <View>
            <Text
              style={{fontSize: 25, fontWeight: 'bold', marginVertical: 10}}>
              Starter Screen
            </Text>
          </View>
          <View>
            <Text style={{textAlign: 'center'}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              voluptas modi saepe facilis molestiae reprehenderit?
            </Text>
          </View>
        </View>
      </Content>

      <Loader modalVisible={state.spinner} animationType="fade" />
    </Container>
  );
};

const HomeScreenHooks = props => {
  const [spinner, setSpinner] = useState(false);

  const toggleDrawer = () => {
    props.navigation.toggleDrawer();
  };

  const goBack = () => {
    props.navigation.goBack();
  };

  return {
    goBack,
    toggleDrawer,
    spinner,
    setSpinner,
  };
};

export default HomeScreen;
