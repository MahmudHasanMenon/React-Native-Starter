
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon, Item, Picker } from 'native-base';


const styles = StyleSheet.create({
  defaultPicker: {
    marginHorizontal: 0,
    marginVertical: 10,

  },
  error: {
    marginLeft: 20,
    marginRight: 20,
    marginVertical: 10,
    borderColor: 'red',
    borderWidth: 0.5
  }
});
const SelecLocationField = (props) => {
  const {
    errorMsg, selectedValue, onValueChange, placeholder, disableItem, items, enabled
  } = props;

  return (
    <View style={[errorMsg ? styles.error : styles.defaultPicker]}>
      <Item regular>
        <Picker
          enabled={enabled}
          mode="dropdown"
          iosIcon={<Icon name="arrow-down" />}
          style={{ }}
          placeholder={placeholder}
          placeholderTextColor="#ACB6B1"
          placeholderStyle={{ color: '#ACB6B1' }}
          placeholderIconColor="#007aff"
          selectedValue={selectedValue}
          onValueChange={onValueChange}
        >
          {disableItem ? (
            <Picker.Item
              color="#ACB6B1"
              label={disableItem.label}
              value={disableItem.value}
            />
          ) : undefined}
          {items.map(item => (
            <Picker.Item
              key={item.label}
              label={item.label}
              value={item.value}
            />
          ))}
        </Picker>
      </Item>
    </View>
  );
};

export default SelecLocationField;
