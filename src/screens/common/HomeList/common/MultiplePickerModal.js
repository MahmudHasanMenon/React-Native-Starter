import React, { useState } from 'react';
import {
  TouchableOpacity, View, Platform, Dimensions, ScrollView
} from 'react-native';
import { PropTypes } from 'prop-types';
import {
  ListItem, Right, Body, Badge, Text
} from 'native-base';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';

const PickerModal = (props) => {
  const {
    placeHolder, items, values, errorMsg
  } = props;
  const { open, setOpen, onSelectedValue } = pickerModalHooks(props);
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
        deviceWidth={deviceWidth}
        deviceHeight={deviceHeight}
        animationOutTiming={1000}
        backdropOpacity={0.5}
        style={{
          justifyContent: 'flex-end',
          margin: 0,
        }}
        onBackdropPress={() => setOpen(false)}
        onBackButtonPress={() => setOpen(false)}

      >
        <View>
          <View style={{
            backgroundColor: 'white',
            padding: 22,
            height: 350,
            color: 'black'
          }}
          >
            <View style={{
              flex: 0.5,
              flexDirection: 'row',
              paddingBottom: 40
            }}
            >
              <View style={{ width: '70%' }}>
                <Text style={{ fontSize: 18 }}>{placeHolder}</Text>
              </View>
              <View style={{ width: '30%' }}>
                <Text
                  style={{
                    color: '#1EA292',
                    textAlign: 'right',
                    fontSize: 18
                  }}
                  onPress={() => setOpen(false)}
                >
Done
                </Text>
              </View>
            </View>
            <ScrollView
              scrollEventThrottle={16}
            >
              { items.map(item => (
                <ListItem
                  style={{
                    paddingLeft: 10,
                    backgroundColor: values.includes(item.value)
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
                  values.includes(item.value) ? (
                    <FontAwesomeIcon
                      name="check-square-o"
                      size={18}
                    />
                  ) : (
                    <FontAwesomeIcon
                      name="square-o"
                      size={18}
                    />
                  )
                    }
                  </Right>

                </ListItem>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>

      <TouchableOpacity onPress={() => setOpen(true)}>
        <View style={{
          borderColor: errorMsg ? 'red' : '#b3b3b3',
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
            {values.map(val => (
              <Badge style={{
                backgroundColor: '#008388',
                width: 'auto',
                marginRight: 2
              }}
              >
                <Text style={{ color: 'white' }}>{val}</Text>
              </Badge>
            ))}
            {values.length === 0 ? (
              <Text style={{
                fontSize: 18,
                color: '#b3b3b3'
              }}
              >
                {placeHolder}
              </Text>
            )
              : undefined}
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

PickerModal.propTypes = {
  placeHolder: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string
  })).isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  setValues: PropTypes.func.isRequired,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const pickerModalHooks = (props) => {
  const [open, setOpen] = useState(false);

  const onSelectedValue = (value) => {
    const index = props.values.findIndex(val => val === value);
    props.setValues(index === -1 ? [value, ...props.values] : props.values.filter(val => val !== value));
  };

  return { open, setOpen, onSelectedValue };
};

export default PickerModal;
