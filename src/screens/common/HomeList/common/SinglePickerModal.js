import React, { useState, useEffect } from 'react';
import {
  TouchableOpacity, View, Platform, Dimensions, ScrollView, Alert
} from 'react-native';
import { PropTypes } from 'prop-types';
import {
  ListItem, Right, Body, Text, Input, Item
} from 'native-base';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';
import _ from 'lodash';

const SingelPickerModal = (props) => {
  const {
    placeHolder, onModalHide, items, value, title, search, errorMsg, updatePropertyID
  } = props;
  const {
    onSelectedValue, open, setOpen, searchText, setSearchText
  } = SingelPickerModalHooks(props);
  const deviceWidth = Dimensions.get('window').width;
  const deviceHeight = Platform.OS === 'ios'
    ? Dimensions.get('window').height
    // eslint-disable-next-line global-require
    : require('react-native-extra-dimensions-android').get('REAL_WINDOW_HEIGHT');

  return (
    <View style={{
      marginHorizontal: 20
    }}
    >

      <Modal
        animationIn="slideInUp"
        isVisible={open}
        animationOutTiming={500}
        deviceWidth={deviceWidth}
        backdropOpacity={0.5}
        deviceHeight={deviceHeight}
        style={{
          justifyContent: 'flex-end',
          margin: 0,
        }}
        swipeDirection={['down']}
        onSwipeComplete={() => setOpen(false)}
        onModalHide={() => {
          setSearchText('');
          if (typeof onModalHide === 'function') {
            onModalHide();
          }
        }}
        onBackdropPress={() => setOpen(false)}
        onBackButtonPress={() => setOpen(false)}
      >
        <View style={{
          backgroundColor: 'white',
          padding: 22,
          height: 350,
          color: 'black'
        }}
        >
          <View style={{
            width: '100%',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
          >
            <View style={{ paddingVertical: 5 }}>
              <Text style={{ fontSize: 18 }}>
                {title}
              </Text>
            </View>
            {
                search ? (
                  <View style={{ width: '100%', paddingVertical: 5 }}>
                    <Item rounded style={{ height: 35 }}>
                      <FontAwesomeIcon style={{ marginHorizontal: 15 }} name="search" />
                      <Input
                        style={{
                          fontSize: 14,
                        }}
                        onChangeText={setSearchText}
                        placeholder="Search.."
                      />
                    </Item>
                  </View>
                ) : undefined
            }

          </View>
          {
            items.length ? (
              <ScrollView
                scrollEventThrottle={16}
              >
                {items.filter(item => (searchText !== ''
                  ? item.label.search(new RegExp(searchText, 'i')) === 0 : true)).map(item => (
                    <ListItem
                      style={{
                        paddingLeft: 10,
                        backgroundColor: value === item.value
                          ? '#ebebeb' : undefined
                      }}
                      icon
                      onPress={() => onSelectedValue(item.value)}
                      key={item.label}
                    >
                      <Body>
                        <Text style={{
                          color: '#484848',
                          fontSize: 16
                        }}
                        >
                          {item.label}
                        </Text>
                      </Body>
                      <Right>
                        {
                    value === item.value ? (
                      <FontAwesomeIcon
                        name="dot-circle-o"
                        size={18}
                      />
                    ) : (
                      <FontAwesomeIcon
                        name="circle-o"
                        size={18}
                      />
                    )
                      }
                      </Right>

                    </ListItem>
                ))}
              </ScrollView>
            ) : undefined
          }
        </View>
      </Modal>

      <TouchableOpacity
        onPress={() => (updatePropertyID
          ? Alert.alert(
            'Warning Alert...!!',
            'You can`t Update Your Locations',
            [
              {
                text: 'cancel',
                onPress: () => console.log('')
              },

              {
                text: 'OK',
                onPress: () => console.log('OK Pressed')
              },
            ],
            { cancelable: false },
          )
          : setOpen(true))}
      >
        <View style={{
          borderColor: errorMsg ? 'red'
            : '#b3b3b3',
          flexDirection: 'row',
          borderWidth: 0.5,
          paddingVertical: 10,
          paddingHorizontal: 10,
          marginVertical: 10
        }}
        >
          <View style={{
            width: '80%',
            flexDirection: 'row',
            flexWrap: 'wrap'
          }}
          >
            <Text style={{
              fontSize: 18,
              color: updatePropertyID || _.isEmpty(value) ? '#b3b3b3' : 'black'
            }}
            >
              {_.isEmpty(value) ? placeHolder : value}
            </Text>
          </View>
          <View style={{ width: '20%', alignItems: 'flex-end' }}>
            <FontAwesomeIcon
              name="caret-down"
              color="#b3b3b3"
              size={20}
            />
          </View>

        </View>

      </TouchableOpacity>
    </View>
  );
};

SingelPickerModal.propTypes = {
  placeHolder: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string
  })).isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  setValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  search: PropTypes.bool,
  // eslint-disable-next-line react/no-unused-prop-types
  openProp: PropTypes.bool,
  // eslint-disable-next-line react/no-unused-prop-types
  setOpenProp: PropTypes.func,
  onModalHide: PropTypes.func

};

SingelPickerModal.defaultProps = {
  openProp: null,
  onModalHide: null,
  search: null,
  setOpenProp: null
};


const SingelPickerModalHooks = (props) => {
  const [open, setOpen] = useState(false);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    setOpen(false);
  }, [props.value]);

  if (typeof props.openProp === 'boolean') {
    useEffect(() => {
      if (props.setOpenProp && props.openProp !== open) {
        props.setOpenProp(open);
      }
    }, [open]);
    useEffect(() => {
      if (props.openProp !== open) {
        setOpen(props.openProp);
      }
    }, [props.openProp]);
  }


  const onSelectedValue = (value) => {
    props.setValue(value);
  };


  return {
    open, setOpen, onSelectedValue, searchText, setSearchText
  };
};

export default SingelPickerModal;
